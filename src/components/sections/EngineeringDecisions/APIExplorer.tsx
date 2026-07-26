'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { detailReveal, motionTransitions } from '@/components/motion/presets'
import { platformApis } from '@/domain/engineering/careos-engineering'

export function APIExplorer() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeApi = platformApis[activeIndex]

  return (
    <div>
      <p className="font-mono text-sm font-medium tracking-[0.16em] text-accent uppercase">API philosophy</p>
      <h2 className="mt-5 text-3xl leading-[1.2] font-medium tracking-[-0.04em] text-ink sm:text-4xl">
        Every interface consumes the same APIs.
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
        Applications never bypass the platform. Shared endpoints protect business rules and operational state.
      </p>

      <div className="mt-7 grid gap-3 sm:grid-cols-2" role="group" aria-label="Platform APIs">
        {platformApis.map((api, index) => {
          const active = index === activeIndex
          return (
            <motion.button
              key={api.id}
              type="button"
              aria-pressed={active}
              onClick={() => setActiveIndex(index)}
              animate={{ opacity: active ? 1 : 0.45, y: active ? -2 : 0 }}
              transition={motionTransitions.medium}
              className={`focus-ring rounded-card border p-4 text-left transition-colors duration-(--duration-medium) ${active ? 'border-accent bg-accent-soft shadow-control' : 'border-line bg-surface hover:border-line-strong'}`}
            >
              <span className="text-base font-medium text-ink">{api.name}</span>
              <span className="mt-2 block text-sm leading-relaxed text-muted">{api.purpose}</span>
            </motion.button>
          )
        })}
      </div>

      <div className="mt-4 min-h-24 rounded-card border border-line bg-surface p-5 shadow-control">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={activeApi.id} variants={detailReveal} initial="hidden" animate="visible" exit="exit" aria-live="polite">
            <p className="font-mono text-[0.58rem] tracking-[0.1em] text-muted uppercase">Shared platform rule</p>
            <p className="mt-3 text-base leading-relaxed font-medium text-ink">{activeApi.sharedRule}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
