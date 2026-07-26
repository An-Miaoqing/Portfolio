'use client'

import { AnimatePresence, motion } from 'framer-motion'
import type { KeyboardEvent } from 'react'
import { useState } from 'react'
import { detailReveal } from '@/components/motion/presets'
import { evolutionFeatures } from '@/domain/evolution/careos-evolution'

export function FeatureEvolution() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeFeature = evolutionFeatures[activeIndex]

  const navigate = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return
    event.preventDefault()
    const nextIndex = (index + (event.key === 'ArrowRight' ? 1 : -1) + evolutionFeatures.length) % evolutionFeatures.length
    setActiveIndex(nextIndex)
    event.currentTarget.parentElement
      ?.querySelector<HTMLButtonElement>(`[data-feature-index="${nextIndex}"]`)
      ?.focus()
  }

  return (
    <div>
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <p className="font-mono text-sm font-medium tracking-[0.16em] text-accent uppercase">Feature evolution</p>
          <h2 className="mt-5 text-section font-medium text-balance tracking-[-0.048em] text-ink">New capability. Existing foundation.</h2>
        </div>
        <p className="max-w-2xl text-body-lg text-pretty text-muted lg:justify-self-end">
          Future capabilities connect to the workflow, domains, services and data already established.
        </p>
      </div>

      <div role="tablist" aria-label="Future capability examples" className="mt-10 flex gap-2">
        {evolutionFeatures.map((feature, index) => (
          <button
            key={feature.id}
            id={`feature-tab-${feature.id}`}
            type="button"
            role="tab"
            data-feature-index={index}
            aria-selected={index === activeIndex}
            aria-controls="feature-evolution-panel"
            tabIndex={index === activeIndex ? 0 : -1}
            onClick={() => setActiveIndex(index)}
            onKeyDown={(event) => navigate(event, index)}
            className={`focus-ring rounded-control px-4 py-2.5 text-sm font-medium transition-colors ${index === activeIndex ? 'bg-accent text-white' : 'border border-line bg-surface text-ink hover:border-line-strong'}`}
          >
            {feature.name}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.article
          id="feature-evolution-panel"
          key={activeFeature.id}
          role="tabpanel"
          aria-labelledby={`feature-tab-${activeFeature.id}`}
          variants={detailReveal}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="mt-4 rounded-panel border border-line bg-surface p-6 shadow-card sm:p-8"
        >
          <h3 className="text-3xl leading-[1.15] font-medium tracking-[-0.04em] text-ink">{activeFeature.name}</h3>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">{activeFeature.description}</p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {activeFeature.connections.map((connection) => (
              <div key={connection.label} className="rounded-card border border-line bg-surface-subtle p-4">
                <p className="font-mono text-xs font-medium tracking-[0.1em] text-accent uppercase">{connection.label}</p>
                <ul className="mt-4 space-y-2">
                  {connection.values.map((value) => <li key={value} className="text-sm font-medium text-ink">{value}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-6 border-t border-line pt-5 text-base leading-relaxed text-ink">{activeFeature.outcome}</p>
        </motion.article>
      </AnimatePresence>
    </div>
  )
}
