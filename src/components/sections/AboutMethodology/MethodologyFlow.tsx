'use client'

import { AnimatePresence, motion } from 'framer-motion'
import type { KeyboardEvent } from 'react'
import { useState } from 'react'
import { detailReveal } from '@/components/motion/presets'
import { methodologySteps } from '@/domain/methodology/careos-methodology'

export function MethodologyFlow() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeStep = methodologySteps[activeIndex]

  const navigate = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const direction = event.key === 'ArrowDown' || event.key === 'ArrowRight'
      ? 1
      : event.key === 'ArrowUp' || event.key === 'ArrowLeft'
        ? -1
        : 0
    if (!direction) return
    event.preventDefault()
    const nextIndex = (index + direction + methodologySteps.length) % methodologySteps.length
    setActiveIndex(nextIndex)
    event.currentTarget
      .closest<HTMLElement>('[data-methodology-flow]')
      ?.querySelector<HTMLButtonElement>(`[data-methodology-index="${nextIndex}"]`)
      ?.focus()
  }

  return (
    <div data-methodology-flow className="mt-10 grid gap-6 lg:grid-cols-[17rem_minmax(0,1fr)]">
      <nav aria-label="Methodology steps" className="overflow-x-auto rounded-panel border border-line bg-surface p-3 shadow-control">
        <div role="tablist" aria-orientation="vertical" className="flex min-w-max gap-1 lg:grid lg:min-w-0">
          {methodologySteps.map((step, index) => {
            const active = index === activeIndex
            return (
              <button
                key={step.id}
                id={`methodology-tab-${step.id}`}
                type="button"
                role="tab"
                data-methodology-index={index}
                aria-controls="methodology-step-panel"
                aria-selected={active}
                tabIndex={active ? 0 : -1}
                onClick={() => setActiveIndex(index)}
                onKeyDown={(event) => navigate(event, index)}
                className={`focus-ring flex min-w-40 items-center gap-3 rounded-control px-4 py-3 text-left transition-colors lg:min-w-0 ${active ? 'bg-accent text-white' : 'text-ink hover:bg-surface-subtle'}`}
              >
                <span className={`font-mono text-[0.58rem] ${active ? 'text-accent-soft' : 'text-muted'}`}>{String(index + 1).padStart(2, '0')}</span>
                <span className="text-sm font-medium">{step.name}</span>
              </button>
            )
          })}
        </div>
      </nav>

      <div className="min-h-[25rem]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.article
            id="methodology-step-panel"
            key={activeStep.id}
            role="tabpanel"
            aria-labelledby={`methodology-tab-${activeStep.id}`}
            variants={detailReveal}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="h-full rounded-panel border border-line bg-surface p-6 shadow-card sm:p-8"
          >
            <p className="font-mono text-xs font-medium tracking-[0.14em] text-accent uppercase">Step {activeIndex + 1}</p>
            <h3 className="mt-4 text-3xl leading-[1.15] font-medium tracking-[-0.04em] text-ink">{activeStep.name}</h3>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">{activeStep.purpose}</p>
            <div className="mt-8 grid gap-6 border-t border-line pt-6 sm:grid-cols-2">
              <div>
                <p className="font-mono text-xs font-medium tracking-[0.12em] text-muted uppercase">Deliverables</p>
                <ul className="mt-4 space-y-2">
                  {activeStep.deliverables.map((item) => <li key={item} className="text-sm font-medium text-ink">{item}</li>)}
                </ul>
              </div>
              <div>
                <p className="font-mono text-xs font-medium tracking-[0.12em] text-muted uppercase">Typical questions</p>
                <ul className="mt-4 space-y-2">
                  {activeStep.questions.map((question) => <li key={question} className="text-sm leading-relaxed text-ink">{question}</li>)}
                </ul>
              </div>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </div>
  )
}
