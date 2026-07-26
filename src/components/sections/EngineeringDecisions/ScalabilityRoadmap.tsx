'use client'

import { motion } from 'framer-motion'
import { motionTransitions, revealGroup, revealItem } from '@/components/motion/presets'
import { scalabilityCapabilities } from '@/domain/engineering/careos-engineering'

export function ScalabilityRoadmap() {
  return (
    <div>
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <p className="font-mono text-sm font-medium tracking-[0.16em] text-accent uppercase">Future scalability</p>
          <h2 className="mt-5 text-section font-medium text-balance tracking-[-0.048em] text-ink">
            Evolution without replacing the core.
          </h2>
        </div>
        <p className="max-w-2xl text-body-lg text-pretty text-muted lg:justify-self-end">
          The architecture can support new organisations, interfaces and platform capabilities without redesigning the core domain model.
        </p>
      </div>

      <motion.div variants={revealGroup} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {scalabilityCapabilities.map((capability, index) => (
          <motion.article
            key={capability.id}
            variants={revealItem}
            whileHover={{ y: -3 }}
            transition={motionTransitions.medium}
            className="rounded-card border border-line bg-surface p-5 shadow-control"
          >
            <span className="font-mono text-[0.58rem] tracking-[0.1em] text-muted uppercase">Capability {String(index + 1).padStart(2, '0')}</span>
            <h3 className="mt-4 text-lg leading-[1.2] font-medium tracking-[-0.025em] text-ink">{capability.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{capability.explanation}</p>
          </motion.article>
        ))}
      </motion.div>

      <div className="mt-8 rounded-panel border border-accent/40 bg-accent-soft p-6 text-center shadow-control sm:p-8">
        <p className="font-mono text-xs font-medium tracking-[0.14em] text-accent uppercase">Engineering conclusion</p>
        <p className="mx-auto mt-4 max-w-3xl text-2xl leading-[1.3] font-medium tracking-[-0.035em] text-ink">
          Technology serves business architecture—not the opposite.
        </p>
      </div>
    </div>
  )
}
