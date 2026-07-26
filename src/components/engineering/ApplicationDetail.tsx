'use client'

import { AnimatePresence, motion } from 'framer-motion'

type NamedRef = {
  id: string
  name: string
}

type ApplicationDetailProps = {
  businessServices: readonly NamedRef[]
  exampleInteraction: readonly string[]
  id: string
  isPlanned?: boolean
  name: string
  responsibilities: string
  usesApis: readonly NamedRef[]
}

function ChipList({ items }: { items: readonly NamedRef[] }) {
  return (
    <ul className="mt-2 flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li
          className="rounded-full border border-line bg-surface-subtle px-3 py-1 text-xs font-medium text-ink"
          key={item.id}
        >
          {item.name}
        </li>
      ))}
    </ul>
  )
}

export function ApplicationDetail({
  businessServices,
  exampleInteraction,
  id,
  isPlanned,
  name,
  responsibilities,
  usesApis,
}: ApplicationDetailProps) {
  return (
    <div className="rounded-panel border border-line bg-surface p-6 shadow-control sm:p-8 lg:sticky lg:top-28">
      <p className="font-mono text-xs font-medium tracking-[0.14em] text-accent uppercase">
        Selected application
      </p>
      <div aria-live="polite" className="mt-4 min-h-[24rem]">
        <AnimatePresence mode="wait">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            initial={{ opacity: 0, y: 6 }}
            key={id}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <div className="flex items-center gap-2">
              <h3 className="text-xl leading-tight font-medium tracking-[-0.03em] text-ink sm:text-2xl">
                {name}
              </h3>
              {isPlanned ? (
                <span className="rounded-full border border-line bg-surface-subtle px-2 py-0.5 font-mono text-[0.6rem] font-medium tracking-[0.1em] text-muted uppercase">
                  Planned
                </span>
              ) : null}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-pretty text-muted sm:text-base">
              {responsibilities}
            </p>

            <div className="mt-6 border-t border-line pt-5">
              <p className="font-mono text-[0.65rem] font-medium tracking-[0.12em] text-muted uppercase">Uses</p>
              <ChipList items={usesApis} />
            </div>

            <div className="mt-5 border-t border-line pt-5">
              <p className="font-mono text-[0.65rem] font-medium tracking-[0.12em] text-muted uppercase">
                Business services
              </p>
              <ChipList items={businessServices} />
            </div>

            <div className="mt-5 border-t border-line pt-5">
              <p className="font-mono text-[0.65rem] font-medium tracking-[0.12em] text-muted uppercase">
                Example interaction
              </p>
              <ol className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1.5">
                {exampleInteraction.map((step, index) => (
                  <li className="flex items-center gap-2" key={step}>
                    <span className="text-sm text-pretty text-ink">{step}</span>
                    {index < exampleInteraction.length - 1 ? (
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
