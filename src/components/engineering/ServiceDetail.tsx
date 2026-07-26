'use client'

import { AnimatePresence, motion } from 'framer-motion'

type NamedRef = {
  id: string
  name: string
}

type ServiceDetailProps = {
  collaboratesWith: readonly NamedRef[]
  exampleProcess: readonly string[]
  id: string
  name: string
  onSelectCollaborator: (id: string) => void
  purpose: string
  reads: readonly NamedRef[]
  updates: readonly NamedRef[]
}

function ChipList({ items, tone }: { items: readonly NamedRef[]; tone: 'neutral' | 'write' }) {
  return (
    <ul className="mt-2 flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li
          className={`rounded-full border px-3 py-1 text-xs font-medium ${
            tone === 'write'
              ? 'border-accent/50 bg-[#e4f1eb] text-accent'
              : 'border-line bg-surface-subtle text-ink'
          }`}
          key={item.id}
        >
          {item.name}
        </li>
      ))}
    </ul>
  )
}

export function ServiceDetail({
  collaboratesWith,
  exampleProcess,
  id,
  name,
  onSelectCollaborator,
  purpose,
  reads,
  updates,
}: ServiceDetailProps) {
  return (
    <div className="rounded-panel border border-line bg-surface p-6 shadow-control sm:p-8 lg:sticky lg:top-28">
      <p className="font-mono text-xs font-medium tracking-[0.14em] text-accent uppercase">Selected service</p>
      <div aria-live="polite" className="mt-4 min-h-[26rem]">
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
              <p className="font-mono text-[0.65rem] font-medium tracking-[0.12em] text-muted uppercase">Reads</p>
              <ChipList items={reads} tone="neutral" />
            </div>

            <div className="mt-5 border-t border-line pt-5">
              <p className="font-mono text-[0.65rem] font-medium tracking-[0.12em] text-muted uppercase">
                Updates
              </p>
              <ChipList items={updates} tone="write" />
            </div>

            <div className="mt-5 border-t border-line pt-5">
              <p className="font-mono text-[0.65rem] font-medium tracking-[0.12em] text-muted uppercase">
                Collaborates with
              </p>
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {collaboratesWith.map((service) => (
                  <li key={service.id}>
                    <button
                      className="focus-ring rounded-full border border-line bg-surface-subtle px-3 py-1 text-xs font-medium text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
                      onClick={() => onSelectCollaborator(service.id)}
                      type="button"
                    >
                      {service.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 border-t border-line pt-5">
              <p className="font-mono text-[0.65rem] font-medium tracking-[0.12em] text-muted uppercase">
                Example process
              </p>
              <ol className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1.5">
                {exampleProcess.map((step, index) => (
                  <li className="flex items-center gap-2" key={step}>
                    <span className="text-sm text-pretty text-ink">{step}</span>
                    {index < exampleProcess.length - 1 ? (
                      <span aria-hidden="true" className="text-line-strong">
                        →
                      </span>
                    ) : null}
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
