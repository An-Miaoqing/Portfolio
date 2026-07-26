'use client'

import { AnimatePresence, motion } from 'framer-motion'

type DomainExplanationProps = {
  dependsOn: readonly string[]
  exampleQuestions: readonly string[]
  name: string
  owns: readonly string[]
  purpose: string
  responsibilities: readonly string[]
}

function FieldList({ items, emptyLabel }: { emptyLabel: string; items: readonly string[] }) {
  if (items.length === 0) {
    return <p className="mt-2 text-sm text-pretty text-muted italic">{emptyLabel}</p>
  }

  return (
    <ul className="mt-2 flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li
          className="rounded-full border border-line bg-surface-subtle px-3 py-1 text-xs font-medium text-ink"
          key={item}
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

export function DomainExplanation({
  dependsOn,
  exampleQuestions,
  name,
  owns,
  purpose,
  responsibilities,
}: DomainExplanationProps) {
  return (
    <div className="rounded-panel border border-line bg-surface p-6 shadow-control sm:p-8 lg:sticky lg:top-28">
      <p className="font-mono text-xs font-medium tracking-[0.14em] text-accent uppercase">
        Selected domain
      </p>
      <div aria-live="polite" className="mt-4 min-h-[30rem]">
        <AnimatePresence mode="wait">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            initial={{ opacity: 0, y: 6 }}
            key={name}
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
                Responsible for
              </p>
              <ul className="mt-2 space-y-1.5">
                {responsibilities.map((responsibility) => (
                  <li
                    className="flex items-start gap-2 text-sm leading-relaxed text-pretty text-ink"
                    key={responsibility}
                  >
                    <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 border-t border-line pt-5">
              <p className="font-mono text-[0.65rem] font-medium tracking-[0.12em] text-muted uppercase">
                Owns
              </p>
              <FieldList emptyLabel="No owned data — reads from every other domain." items={owns} />
            </div>

            <div className="mt-5 border-t border-line pt-5">
              <p className="font-mono text-[0.65rem] font-medium tracking-[0.12em] text-muted uppercase">
                Depends on
              </p>
              <FieldList emptyLabel="Nothing — this domain is the origin of the flow." items={dependsOn} />
            </div>

            <div className="mt-5 border-t border-line pt-5">
              <p className="font-mono text-[0.65rem] font-medium tracking-[0.12em] text-muted uppercase">
                Example business questions
              </p>
              <ul className="mt-2 space-y-1.5">
                {exampleQuestions.map((question) => (
                  <li className="text-sm leading-relaxed text-pretty text-ink" key={question}>
                    &ldquo;{question}&rdquo;
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
