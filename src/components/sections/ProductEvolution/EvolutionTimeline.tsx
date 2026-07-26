'use client'

import { AnimatePresence, motion } from 'framer-motion'
import type { KeyboardEvent } from 'react'
import { useState } from 'react'
import { detailReveal, motionTransitions } from '@/components/motion/presets'
import { evolutionPhases } from '@/domain/evolution/careos-evolution'

export function EvolutionTimeline() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activePhase = evolutionPhases[activeIndex]

  const navigate = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const direction = event.key === 'ArrowDown' || event.key === 'ArrowRight'
      ? 1
      : event.key === 'ArrowUp' || event.key === 'ArrowLeft'
        ? -1
        : 0
    if (!direction) return
    event.preventDefault()
    const nextIndex = (index + direction + evolutionPhases.length) % evolutionPhases.length
    setActiveIndex(nextIndex)
    event.currentTarget
      .closest<HTMLElement>('[data-evolution-timeline]')
      ?.querySelector<HTMLButtonElement>(`[data-phase-index="${nextIndex}"]`)
      ?.focus()
  }

  return (
    <div data-evolution-timeline className="mt-10 grid gap-6 lg:grid-cols-[18rem_minmax(0,1fr)]">
      <nav aria-label="Product evolution phases" className="overflow-x-auto rounded-panel border border-line bg-surface p-3 shadow-control">
        <div role="tablist" aria-orientation="vertical" className="flex min-w-max gap-1 lg:grid lg:min-w-0">
          {evolutionPhases.map((phase, index) => {
            const active = index === activeIndex
            return (
              <button
                key={phase.id}
                id={`evolution-tab-${phase.id}`}
                type="button"
                role="tab"
                data-phase-index={index}
                aria-controls="evolution-phase-panel"
                aria-selected={active}
                tabIndex={active ? 0 : -1}
                onClick={() => setActiveIndex(index)}
                onKeyDown={(event) => navigate(event, index)}
                className={`focus-ring min-w-48 rounded-control px-4 py-3 text-left transition-colors duration-(--duration-medium) lg:min-w-0 ${active ? 'bg-accent text-white' : 'text-ink hover:bg-surface-subtle'}`}
              >
                <span className={`font-mono text-[0.58rem] tracking-[0.1em] uppercase ${active ? 'text-accent-soft' : 'text-muted'}`}>Phase {index + 1}</span>
                <span className="mt-1 block text-sm font-medium">{phase.name}</span>
              </button>
            )
          })}
        </div>
      </nav>

      <div className="min-h-[23rem]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.article
            id="evolution-phase-panel"
            key={activePhase.id}
            role="tabpanel"
            aria-labelledby={`evolution-tab-${activePhase.id}`}
            variants={detailReveal}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="h-full rounded-panel border border-line bg-surface p-6 shadow-card sm:p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="font-mono text-xs font-medium tracking-[0.14em] text-accent uppercase">Phase {activeIndex + 1}</p>
                <h3 className="mt-3 text-3xl leading-[1.15] font-medium tracking-[-0.04em] text-ink">{activePhase.name}</h3>
              </div>
              <span className="rounded-full border border-accent/30 bg-accent-soft px-3 py-1.5 font-mono text-xs font-medium text-accent-strong">
                {activePhase.status}
              </span>
            </div>
            <p className="mt-7 font-mono text-xs font-medium tracking-[0.12em] text-muted uppercase">{activePhase.scopeLabel}</p>
            <ul className="mt-3 grid gap-3 sm:grid-cols-2">
              {activePhase.capabilities.map((capability) => (
                <motion.li
                  key={capability}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={motionTransitions.medium}
                  className="rounded-control border border-line bg-surface-subtle px-4 py-3 text-sm font-medium text-ink"
                >
                  {capability}
                </motion.li>
              ))}
            </ul>
            <p className="mt-7 border-t border-line pt-5 text-base leading-relaxed text-muted">{activePhase.foundation}</p>
          </motion.article>
        </AnimatePresence>
      </div>
    </div>
  )
}
