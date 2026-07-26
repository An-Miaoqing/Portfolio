'use client'

import { motion } from 'framer-motion'
import { revealItem } from '@/components/motion/presets'

type SectionBridgeProps = {
  fromLabel: string
  sentence: string
  toLabel: string
}

export function SectionBridge({ fromLabel, sentence, toLabel }: SectionBridgeProps) {
  return (
    <div className="border-b border-line bg-surface-subtle/60">
      <motion.div
        animate="visible"
        className="mx-auto flex max-w-[720px] flex-col items-center px-5 py-10 text-center sm:px-8 sm:py-12 lg:px-12"
        initial="hidden"
        variants={revealItem}
        viewport={{ once: true, amount: 0.6 }}
        whileInView="visible"
      >
        <div className="flex items-center gap-2 font-mono text-[0.65rem] font-medium tracking-[0.14em] text-muted uppercase">
          <span>{fromLabel}</span>
          <span aria-hidden="true" className="text-line-strong">
            ↓
          </span>
          <span className="text-accent">{toLabel}</span>
        </div>
        <p className="mt-4 max-w-md text-base leading-relaxed text-pretty text-ink italic sm:text-lg">
          {sentence}
        </p>
      </motion.div>
    </div>
  )
}
