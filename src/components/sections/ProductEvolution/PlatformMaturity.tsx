'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { motionDurations, revealGroup, revealItem } from '@/components/motion/presets'
import { maturityLevels } from '@/domain/evolution/careos-evolution'

export function PlatformMaturity() {
  const reducedMotion = useReducedMotion() ?? false

  return (
    <div>
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <p className="font-mono text-sm font-medium tracking-[0.16em] text-accent uppercase">Platform maturity</p>
          <h2 className="mt-5 text-section font-medium text-balance tracking-[-0.048em] text-ink">Each level preserves the last.</h2>
        </div>
        <p className="max-w-2xl text-body-lg text-pretty text-muted lg:justify-self-end">
          Growth adds capability to a stable operational base. No maturity level replaces the foundation beneath it.
        </p>
      </div>

      <motion.ol variants={revealGroup} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="mt-12 grid gap-3 lg:grid-cols-5">
        {maturityLevels.map((level, index) => (
          <motion.li key={level.id} variants={revealItem} className="relative">
            <article className="h-full rounded-card border border-line bg-surface p-5 shadow-control">
              <span className="font-mono text-xs text-accent">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="mt-5 text-xl font-medium tracking-[-0.03em] text-ink">{level.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{level.explanation}</p>
            </article>
            {index < maturityLevels.length - 1 && (
              <motion.span
                aria-hidden="true"
                initial={{ scaleX: reducedMotion ? 1 : 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: reducedMotion ? 0 : index * motionDurations.fast }}
                className="mx-auto block h-3 w-px origin-top bg-accent lg:absolute lg:top-1/2 lg:-right-3 lg:mx-0 lg:h-px lg:w-3 lg:origin-left"
              />
            )}
          </motion.li>
        ))}
      </motion.ol>
    </div>
  )
}
