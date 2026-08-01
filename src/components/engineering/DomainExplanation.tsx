'use client'

import { AnimatePresence, motion } from 'framer-motion'

type DomainExplanationProps = {
  exampleQuestions: readonly string[]
  name: string
  purpose: string
  responsibilities: readonly string[]
}

export function DomainExplanation({
  exampleQuestions,
  name,
  purpose,
  responsibilities,
}: DomainExplanationProps) {
  return (
    <div className="rounded-panel border border-line bg-surface p-6 shadow-control sm:p-8 lg:sticky lg:top-28">
      <div aria-live="polite" className="min-h-[18rem]">
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
