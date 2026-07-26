'use client'

import { AnimatePresence, motion } from 'framer-motion'

type ConnectedEntity = {
  id: string
  name: string
}

type RelationshipPanelProps = {
  connectedEntities: readonly ConnectedEntity[]
  id: string
  name: string
  onSelectConnected: (id: string) => void
  purpose: string
  relationshipSummary: string
}

export function RelationshipPanel({
  connectedEntities,
  id,
  name,
  onSelectConnected,
  purpose,
  relationshipSummary,
}: RelationshipPanelProps) {
  return (
    <div className="rounded-panel border border-line bg-surface p-6 shadow-control sm:p-8 lg:sticky lg:top-28">
      <p className="font-mono text-xs font-medium tracking-[0.14em] text-accent uppercase">Selected entity</p>
      <div aria-live="polite" className="mt-4 min-h-[18rem]">
        <AnimatePresence mode="wait">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            initial={{ opacity: 0, y: 6 }}
            key={id}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <h3 className="text-xl leading-tight font-medium tracking-[-0.03em] text-ink sm:text-2xl">{name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-pretty text-muted sm:text-base">{purpose}</p>

            <div className="mt-6 border-t border-line pt-5">
              <p className="font-mono text-[0.65rem] font-medium tracking-[0.12em] text-muted uppercase">
                Connected to
              </p>
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {connectedEntities.map((connected) => (
                  <li key={connected.id}>
                    <button
                      className="focus-ring rounded-full border border-line bg-surface-subtle px-3 py-1 text-xs font-medium text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
                      onClick={() => onSelectConnected(connected.id)}
                      type="button"
                    >
                      {connected.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 border-t border-line pt-5">
              <p className="font-mono text-[0.65rem] font-medium tracking-[0.12em] text-muted uppercase">
                Relationship summary
              </p>
              <p className="mt-2 text-sm leading-relaxed text-pretty text-ink">{relationshipSummary}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
