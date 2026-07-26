'use client'

import { AnimatePresence, motion } from 'framer-motion'

type RelatedEntity = {
  id: string
  name: string
}

type EntityDetailProps = {
  domainName: string
  id: string
  lifecycle?: readonly string[]
  name: string
  onSelectRelated: (id: string) => void
  purpose: string
  relatedEntities: readonly RelatedEntity[]
}

export function EntityDetail({
  domainName,
  id,
  lifecycle,
  name,
  onSelectRelated,
  purpose,
  relatedEntities,
}: EntityDetailProps) {
  return (
    <div className="rounded-panel border border-line bg-surface p-6 shadow-control sm:p-8 lg:sticky lg:top-28">
      <p className="font-mono text-xs font-medium tracking-[0.14em] text-accent uppercase">
        Selected entity
      </p>
      <div aria-live="polite" className="mt-4 min-h-[22rem]">
        <AnimatePresence mode="wait">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            initial={{ opacity: 0, y: 6 }}
            key={id}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <h3 className="text-xl leading-tight font-medium tracking-[-0.03em] text-ink sm:text-2xl">
              {name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-pretty text-muted sm:text-base">
              {purpose}
            </p>

            <div className="mt-6 border-t border-line pt-5">
              <p className="font-mono text-[0.65rem] font-medium tracking-[0.12em] text-muted uppercase">
                Belongs to
              </p>
              <p className="mt-2 text-sm font-medium text-ink">{domainName}</p>
            </div>

            <div className="mt-5 border-t border-line pt-5">
              <p className="font-mono text-[0.65rem] font-medium tracking-[0.12em] text-muted uppercase">
                Related entities
              </p>
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {relatedEntities.map((related) => (
                  <li key={related.id}>
                    <button
                      className="focus-ring rounded-full border border-line bg-surface-subtle px-3 py-1 text-xs font-medium text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
                      onClick={() => onSelectRelated(related.id)}
                      type="button"
                    >
                      {related.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 border-t border-line pt-5">
              <p className="font-mono text-[0.65rem] font-medium tracking-[0.12em] text-muted uppercase">
                Example lifecycle
              </p>
              {lifecycle && lifecycle.length > 0 ? (
                <ol className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1.5">
                  {lifecycle.map((stage, index) => (
                    <li className="flex items-center gap-2" key={stage}>
                      <span className="text-sm text-pretty text-ink">{stage}</span>
                      {index < lifecycle.length - 1 ? (
                        <span aria-hidden="true" className="text-line-strong">
                          →
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ol>
              ) : (
                <p className="mt-2 text-sm text-pretty text-muted italic">
                  Reference data — no lifecycle of its own.
                </p>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
