'use client'

import { motion } from 'framer-motion'
import { motionDurations } from '@/components/motion/presets'

type ScrollIndicatorProps = {
  className?: string
  href?: string
  label?: string
}

export function ScrollIndicator({
  className = '',
  href = '#platform-vision',
  label = 'Platform vision',
}: ScrollIndicatorProps) {
  return (
    <a
      href={href}
      className={`focus-ring inline-flex w-fit items-center gap-3 rounded-control py-2 font-mono text-xs tracking-[0.12em] text-muted uppercase ${className}`}
    >
      <span>{label}</span>
      <motion.span
        aria-hidden="true"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: motionDurations.slow * 2, repeat: Infinity }}
      >
        ↓
      </motion.span>
    </a>
  )
}
