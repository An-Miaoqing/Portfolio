'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { motionTransitions, revealGroup, revealItem } from '@/components/motion/presets'
import { expansionLayers } from '@/domain/evolution/careos-evolution'

export function ExpansionMap() {
  const reducedMotion = useReducedMotion() ?? false

  return (
    <div>
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <p className="font-mono text-sm font-medium tracking-[0.16em] text-accent uppercase">Expansion map</p>
          <h2 className="mt-5 text-section font-medium text-balance tracking-[-0.048em] text-ink">One core. More ways to participate.</h2>
        </div>
        <p className="max-w-2xl text-body-lg text-pretty text-muted lg:justify-self-end">
          Existing and future applications remain connected to the same platform core.
        </p>
      </div>

      <motion.div variants={revealGroup} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} className="mt-12 grid gap-4 lg:grid-cols-[minmax(0,1fr)_1rem_minmax(0,1fr)_1rem_minmax(0,1fr)] lg:items-stretch lg:gap-0">
        {expansionLayers.map((layer, index) => (
          <div key={layer.id} className="contents">
            <motion.article variants={revealItem} className={`rounded-panel border p-6 shadow-control ${index === 0 ? 'border-accent bg-accent text-white' : 'border-line bg-surface text-ink'}`}>
              <p className={`font-mono text-xs font-medium tracking-[0.12em] uppercase ${index === 0 ? 'text-accent-soft' : 'text-accent'}`}>{layer.name}</p>
              <ul className="mt-6 grid gap-2">
                {layer.items.map((item) => (
                  <li key={item} className={`rounded-control border px-4 py-3 text-sm font-medium ${index === 0 ? 'border-white/15 bg-white/8' : 'border-line bg-surface-subtle'}`}>{item}</li>
                ))}
              </ul>
            </motion.article>
            {index < expansionLayers.length - 1 && (
              <motion.div
                aria-hidden="true"
                initial={{ opacity: reducedMotion ? 1 : 0, scaleX: reducedMotion ? 1 : 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={motionTransitions.slow}
                className="mx-auto h-4 w-px origin-top bg-accent lg:my-auto lg:h-px lg:w-4 lg:origin-left"
              />
            )}
          </div>
        ))}
      </motion.div>
    </div>
  )
}
