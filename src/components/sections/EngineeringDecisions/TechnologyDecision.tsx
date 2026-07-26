'use client'

import { AnimatePresence, motion } from 'framer-motion'
import type { KeyboardEvent } from 'react'
import { useState } from 'react'
import { detailReveal } from '@/components/motion/presets'
import { technologyDecisions } from '@/domain/engineering/careos-engineering'

export function TechnologyDecision() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeDecision = technologyDecisions[activeIndex]

  const navigate = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const direction = event.key === 'ArrowDown' || event.key === 'ArrowRight'
      ? 1
      : event.key === 'ArrowUp' || event.key === 'ArrowLeft'
        ? -1
        : 0
    if (!direction) return
    event.preventDefault()
    const nextIndex = (index + direction + technologyDecisions.length) % technologyDecisions.length
    setActiveIndex(nextIndex)
    event.currentTarget.parentElement
      ?.querySelector<HTMLButtonElement>(`[data-technology-index="${nextIndex}"]`)
      ?.focus()
  }

  return (
    <div>
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <p className="font-mono text-sm font-medium tracking-[0.16em] text-accent uppercase">Technology decisions</p>
          <h2 className="mt-5 text-section font-medium text-balance tracking-[-0.048em] text-ink">
            Technology follows responsibility.
          </h2>
        </div>
        <p className="max-w-2xl text-body-lg text-pretty text-muted lg:justify-self-end">
          Each technology is selected for a specific architectural responsibility—not to create a list of tools.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[15rem_minmax(0,1fr)]">
        <nav aria-label="Technology decisions" className="rounded-panel border border-line bg-surface p-3 shadow-control">
          <div role="tablist" className="grid grid-cols-2 gap-1 sm:grid-cols-3 lg:grid-cols-1">
            {technologyDecisions.map((decision, index) => {
              const active = index === activeIndex
              return (
                <button
                  key={decision.id}
                  id={`technology-tab-${decision.id}`}
                  type="button"
                  role="tab"
                  data-technology-index={index}
                  aria-controls="technology-decision-panel"
                  aria-selected={active}
                  tabIndex={active ? 0 : -1}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={(event) => navigate(event, index)}
                  className={`focus-ring flex min-h-12 items-center justify-between rounded-control px-3 py-2 text-left text-sm font-medium transition-colors duration-(--duration-medium) ${active ? 'bg-accent text-white' : 'text-ink hover:bg-surface-subtle'}`}
                >
                  <span>{decision.category}</span>
                  <span className={`font-mono text-[0.55rem] ${active ? 'text-accent-soft' : 'text-muted'}`}>{decision.technology}</span>
                </button>
              )
            })}
          </div>
        </nav>

        <div className="min-h-80">
          <AnimatePresence mode="wait" initial={false}>
            <motion.article
              id="technology-decision-panel"
              key={activeDecision.id}
              role="tabpanel"
              aria-labelledby={`technology-tab-${activeDecision.id}`}
              variants={detailReveal}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="h-full overflow-hidden rounded-panel border border-line bg-surface p-6 shadow-card sm:p-8"
            >
              <p className="font-mono text-xs font-medium tracking-[0.14em] text-accent uppercase">{activeDecision.category}</p>
              <h3 className="mt-4 text-3xl leading-[1.15] font-medium tracking-[-0.04em] text-ink">{activeDecision.technology}</h3>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{activeDecision.reason}</p>
              <div className="mt-7 border-t border-line pt-6">
                <p className="font-mono text-xs font-medium tracking-[0.14em] text-muted uppercase">Why it supports the platform</p>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {activeDecision.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3 rounded-control border border-line bg-surface-subtle px-4 py-3 text-sm font-medium text-ink">
                      <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
