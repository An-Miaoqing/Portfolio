'use client'

import { motion } from 'framer-motion'
import { memo } from 'react'
import { motionDurations, motionEase } from '@/components/motion/presets'

type LifecycleEdgeProps = {
  active: boolean
  completed: boolean
  delayIndex: number
  emphasis: number
  journeyVersion: number
  reducedMotion: boolean
  vertical?: boolean
}

export const LifecycleEdge = memo(function LifecycleEdge({ active, completed, delayIndex, emphasis, journeyVersion, reducedMotion, vertical = false }: LifecycleEdgeProps) {
  const highlighted = active || completed

  return (
    <motion.div
      aria-hidden="true"
      animate={{ opacity: emphasis }}
      transition={{ duration: reducedMotion ? 0 : motionDurations.medium, ease: motionEase }}
      className={`relative shrink-0 overflow-hidden ${vertical ? 'ml-[1.95rem] h-9 w-px' : 'h-px min-w-3 flex-1'}`}
    >
      <motion.span
        initial={{ scaleX: vertical ? 1 : 0, scaleY: vertical ? 0 : 1 }}
        whileInView={{ scaleX: 1, scaleY: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{
          delay: reducedMotion ? 0 : delayIndex * motionDurations.fast,
          duration: reducedMotion ? 0 : motionDurations.slow,
          ease: motionEase,
        }}
        className={`absolute inset-0 origin-top-left ${highlighted ? 'bg-accent' : 'bg-line-strong'}`}
      />
      {completed && journeyVersion > 0 && !reducedMotion && (
        <motion.span
          key={`${journeyVersion}-${delayIndex}`}
          className="absolute size-1.5 rounded-full bg-accent shadow-[0_0_0_4px_var(--color-accent-soft)]"
          initial={vertical ? { top: '-20%', opacity: 0 } : { left: '-20%', opacity: 0 }}
          animate={vertical ? { top: ['-20%', '110%'], opacity: [0, 1, 1, 0] } : { left: ['-20%', '110%'], opacity: [0, 1, 1, 0] }}
          transition={{ delay: delayIndex * motionDurations.fast, duration: motionDurations.slow, ease: 'linear' }}
        />
      )}
    </motion.div>
  )
})
