'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { motionDurations, revealGroup, revealItem } from '@/components/motion/presets'
import { systemDesignStages } from '@/domain/methodology/careos-methodology'

export function SystemDesign() {
  const reducedMotion = useReducedMotion() ?? false

  return (
    <article>
      <p className="font-mono text-sm font-medium tracking-[0.16em] text-accent uppercase">System design</p>
      <h2 className="mt-5 text-section font-medium text-balance tracking-[-0.048em] text-ink">Architecture emerges from analysis.</h2>
      <p className="mt-5 max-w-2xl text-body-lg text-pretty text-muted">
        Technology is selected only after the business process, domain model and platform responsibilities are understood.
      </p>
      <motion.ol variants={revealGroup} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="mt-8">
        {systemDesignStages.map((stage, index) => (
          <motion.li key={stage.id} variants={revealItem}>
            <div className="grid grid-cols-[2rem_1fr] gap-4 rounded-card border border-line bg-surface p-4 shadow-control">
              <span className="font-mono text-xs text-accent">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <strong className="block text-base font-medium text-ink">{stage.name}</strong>
                <span className="mt-1 block text-sm leading-relaxed text-muted">{stage.explanation}</span>
              </div>
            </div>
            {index < systemDesignStages.length - 1 && (
              <motion.span
                aria-hidden="true"
                initial={{ scaleY: reducedMotion ? 1 : 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ delay: reducedMotion ? 0 : index * motionDurations.fast }}
                className="mx-auto block h-3 w-px origin-top bg-accent"
              />
            )}
          </motion.li>
        ))}
      </motion.ol>
    </article>
  )
}
