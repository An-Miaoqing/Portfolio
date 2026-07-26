'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { detailReveal } from '@/components/motion/presets'

type PrincipleCardProps = {
  explanation: string
  title: string
}

export function PrincipleCard({ explanation, title }: PrincipleCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      className={`rounded-panel border bg-surface p-5 shadow-card transition-colors duration-500 sm:p-6 ${
        isExpanded ? 'border-accent/50' : 'border-line'
      }`}
    >
      <button
        aria-expanded={isExpanded}
        className="focus-ring flex w-full items-center justify-between gap-3 text-left"
        onClick={() => setIsExpanded((current) => !current)}
        type="button"
      >
        <span className="text-base leading-snug font-medium tracking-[-0.01em] text-ink sm:text-lg">
          {title}
        </span>
        <motion.span
          animate={{ rotate: isExpanded ? 45 : 0 }}
          aria-hidden="true"
          className={`grid size-6 shrink-0 place-items-center rounded-full border text-sm ${
            isExpanded ? 'border-accent/50 text-accent' : 'border-line text-muted'
          }`}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isExpanded ? (
          <motion.div
            animate="visible"
            className="overflow-hidden"
            exit="exit"
            initial="hidden"
            variants={detailReveal}
          >
            <p className="mt-3 text-sm leading-relaxed text-pretty text-muted sm:text-base">{explanation}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}
