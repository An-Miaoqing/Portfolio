'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { detailReveal, motionTransitions, revealGroup, revealItem } from '@/components/motion/presets'
import { careOSApplications } from '@/domain/applications/careos-applications'
import type { ArchitectureLayer, ArchitectureLayerId } from '@/domain/architecture/architecture.types'

export function ArchitectureLayers({
  activeLayer,
  activeLayerId,
  layers,
}: {
  activeLayer: ArchitectureLayer
  activeLayerId: ArchitectureLayerId
  layers: readonly ArchitectureLayer[]
}) {
  return (
    <div className="grid min-w-0 gap-6 rounded-panel border border-line bg-canvas p-4 sm:p-6 lg:grid-cols-[0.85fr_1.15fr] lg:p-5">
      <motion.ol
        variants={revealGroup}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        className="grid gap-1"
        aria-label="CareOS architecture layers"
      >
        {layers.map((layer, index) => {
          const active = layer.id === activeLayerId
          return (
            <motion.li key={layer.id} variants={revealItem} className="flex flex-col items-center">
              <motion.div
                animate={{ opacity: active ? 1 : 0.3, scale: active ? 1.015 : 1 }}
                transition={motionTransitions.medium}
                className={`w-full rounded-control border px-4 py-2.5 text-center ${active ? 'border-accent bg-accent-soft shadow-control' : 'border-line bg-surface'}`}
              >
                <span className="text-sm font-medium text-ink">{layer.name}</span>
                {layer.id === 'applications' && (
                  <span className="mt-2 flex flex-wrap justify-center gap-1" aria-label="Platform applications">
                    {careOSApplications.map((application) => (
                      <span key={application.id} className="rounded-full border border-line px-2 py-0.5 font-mono text-[0.5rem] tracking-[0.06em] text-muted uppercase">
                        {application.navigatorLabel}{application.planned ? ' · Planned' : ''}
                      </span>
                    ))}
                  </span>
                )}
              </motion.div>
              {index < layers.length - 1 && (
                <motion.span
                  aria-hidden="true"
                  animate={{ opacity: active || layers[index + 1].id === activeLayerId ? 1 : 0.25 }}
                  transition={motionTransitions.medium}
                  className="text-sm leading-4 text-accent"
                >
                  ↓
                </motion.span>
              )}
            </motion.li>
          )
        })}
      </motion.ol>

      <div className="min-h-64">
        <AnimatePresence mode="wait" initial={false}>
          <motion.article
            id="architecture-layer-panel"
            key={activeLayer.id}
            role="tabpanel"
            aria-labelledby={`architecture-tab-${activeLayer.id}`}
            variants={detailReveal}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="h-full overflow-hidden rounded-card border border-line bg-surface p-5 shadow-control"
          >
            <p className="font-mono text-xs font-medium tracking-[0.14em] text-accent uppercase">Purpose</p>
            <h3 className="mt-3 text-2xl leading-[1.2] font-medium tracking-[-0.035em] text-ink">
              {activeLayer.name}
            </h3>
            <p className="mt-3 text-base leading-relaxed font-medium text-ink">{activeLayer.purpose}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{activeLayer.description}</p>

            <div className="mt-6 grid grid-cols-3 gap-2 border-t border-line pt-5 text-center">
              <div>
                <strong className="block text-lg font-medium text-ink">{activeLayer.relatedApplications.length}</strong>
                <span className="font-mono text-[0.54rem] tracking-[0.08em] text-muted uppercase">Applications</span>
              </div>
              <div>
                <strong className="block text-lg font-medium text-ink">{activeLayer.relatedDomains.length}</strong>
                <span className="font-mono text-[0.54rem] tracking-[0.08em] text-muted uppercase">Domains</span>
              </div>
              <div>
                <strong className="block text-lg font-medium text-ink">{activeLayer.relatedWorkflowStages.length}</strong>
                <span className="font-mono text-[0.54rem] tracking-[0.08em] text-muted uppercase">Stages</span>
              </div>
            </div>

            <p className="mt-5 font-mono text-[0.58rem] tracking-[0.1em] text-muted uppercase">
              {activeLayer.dependencies.length
                ? `Connects to ${activeLayer.dependencies.map((dependencyId) => layers.find((layer) => layer.id === dependencyId)?.name).join(', ')}`
                : 'Authoritative platform record'}
            </p>
          </motion.article>
        </AnimatePresence>
      </div>
    </div>
  )
}
