'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { detailReveal } from '@/components/motion/presets'
import type { LifecycleStage } from '@/domain/lifecycle/lifecycle.types'
import { LifecycleBranch } from './LifecycleBranch'

export function LifecycleDetail({ detailId, stage }: { detailId: string; stage: LifecycleStage | null }) {
  return (
    <div className="min-h-0 lg:h-[clamp(11rem,24vh,15rem)]">
      <AnimatePresence mode="wait" initial={false}>
        {stage ? (
          <motion.article
            id={detailId}
            key={stage.id}
            variants={detailReveal}
            initial="hidden"
            animate="visible"
            exit="exit"
            aria-live="polite"
            className="h-full overflow-y-auto rounded-panel border border-line bg-surface shadow-card"
          >
            <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-6 lg:p-6">
              <div>
                <p className="font-mono text-xs font-medium tracking-[0.14em] text-accent uppercase">Active responsibility</p>
                <h3 className="mt-3 text-3xl leading-[1.15] font-medium tracking-[-0.04em] text-ink">{stage.title}</h3>
                <p className="mt-3 max-w-md text-base leading-relaxed text-muted">{stage.description}</p>
              </div>
              <div>
                <p className="font-mono text-xs font-medium tracking-[0.14em] text-muted uppercase">Inside this stage</p>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {stage.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3 rounded-control border border-line bg-surface-subtle px-3 py-2 text-sm text-ink">
                      <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                      {detail}
                    </li>
                  ))}
                </ul>
                {stage.branch && <LifecycleBranch branch={stage.branch} />}
              </div>
            </div>
          </motion.article>
        ) : (
          <motion.div
            id={detailId}
            key="lifecycle-instruction"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid h-full min-h-40 place-items-center rounded-panel border border-dashed border-line-strong px-6 text-center"
          >
            <p className="max-w-md text-base leading-relaxed text-muted">Select a stage to follow its responsibilities through the operational workflow.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
