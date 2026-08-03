'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { detailReveal } from '@/components/motion/presets'
import { requestJourney } from '@/domain/engineering/careos-engineering'
import { EngineeringFlow } from './EngineeringFlow'

export function RequestJourney() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeStep = requestJourney[activeIndex]

  return (
    <div>
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <p className="font-mono text-sm font-medium tracking-[0.16em] text-accent uppercase">Request journey</p>
          <h2 className="mt-5 text-section font-medium text-balance tracking-[-0.048em] text-ink">
            One action. Multiple coordinated systems.
          </h2>
        </div>
        <p className="max-w-2xl text-body-lg text-pretty text-muted lg:justify-self-end">
          A simple Check In request crosses interface, validation, business logic, persistence and communication boundaries without duplicating responsibility.
        </p>
      </div>

      <div className="mt-10 rounded-panel border border-line bg-canvas p-5 shadow-control sm:p-6">
        <EngineeringFlow
          activeIndex={activeIndex}
          ariaLabel="Employee check-in request journey"
          interactive
          onSelect={setActiveIndex}
          steps={requestJourney}
        />
        <div className="mt-6 min-h-20 border-t border-line pt-5">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={activeStep.id} variants={detailReveal} initial="hidden" animate="visible" exit="exit" aria-live="polite">
              <p className="font-mono text-[0.58rem] tracking-[0.1em] text-muted uppercase">{activeStep.name}</p>
              <p className="mt-2 text-base leading-relaxed text-ink">{activeStep.description}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-8 flex items-start gap-4 border-t border-line pt-6">
        <span aria-hidden="true" className="mt-2 size-2 shrink-0 rounded-full bg-accent" />
        <p className="max-w-2xl text-base leading-relaxed text-muted">
          Website, management and employee interfaces use the same backend services. Business rules remain authoritative regardless of where an action originates.
        </p>
      </div>
    </div>
  )
}
