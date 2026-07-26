'use client'

import { AnimatePresence, motion } from 'framer-motion'

type ArchitectureExplanationProps = {
  description: string
  eyebrow: string
  title: string
}

export function ArchitectureExplanation({
  description,
  eyebrow,
  title,
}: ArchitectureExplanationProps) {
  return (
    <div className="rounded-panel border border-line bg-surface p-6 shadow-control sm:p-8 lg:sticky lg:top-28">
      <p className="font-mono text-xs font-medium tracking-[0.14em] text-accent uppercase">
        {eyebrow}
      </p>
      <div aria-live="polite" className="mt-4 min-h-32">
        <AnimatePresence mode="wait">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            initial={{ opacity: 0, y: 6 }}
            key={title}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <h3 className="text-xl leading-tight font-medium tracking-[-0.03em] text-ink sm:text-2xl">
              {title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-pretty text-muted sm:text-base">
              {description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
