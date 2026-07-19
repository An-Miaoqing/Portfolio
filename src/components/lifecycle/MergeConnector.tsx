'use client'

import { motion } from 'framer-motion'
import { motionTransitions } from '@/components/motion/presets'

export function MergeConnector({ label, reducedMotion }: { label: string; reducedMotion: boolean }) {
  const transition = reducedMotion ? { duration: 0 } : motionTransitions.slow

  return (
    <div className="flex flex-col items-center" aria-label={`Branches merge into ${label}`}>
      <div aria-hidden="true" className="relative h-7 w-1/2">
        <motion.span className="absolute top-0 left-0 h-1/2 w-px origin-top bg-accent" initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={transition} />
        <motion.span className="absolute top-0 right-0 h-1/2 w-px origin-top bg-accent" initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={transition} />
        <motion.span className="absolute top-1/2 left-0 h-px w-full origin-center bg-accent" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={transition} />
        <motion.span className="absolute bottom-0 left-1/2 h-1/2 w-px origin-top bg-accent" initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={transition} />
      </div>
      <span className="rounded-full border border-accent bg-accent-soft px-4 py-2 text-sm font-medium text-accent-strong">
        {label}
      </span>
    </div>
  )
}
