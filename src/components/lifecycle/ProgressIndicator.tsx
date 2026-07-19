'use client'

import { motion } from 'framer-motion'
import { motionDurations, motionEase } from '@/components/motion/presets'
import type { LifecycleStage } from '@/domain/lifecycle/lifecycle.types'

type ProgressIndicatorProps = {
  activeIndex: number
  journeyVersion: number
  reducedMotion: boolean
  stages: readonly LifecycleStage[]
}

export function ProgressIndicator({ activeIndex, journeyVersion, reducedMotion, stages }: ProgressIndicatorProps) {
  const current = activeIndex < 0 ? 0 : activeIndex + 1
  const progress = current / stages.length

  return (
    <div className="mb-7 flex items-center gap-4" aria-label={current ? `Lifecycle stage ${current} of ${stages.length}` : 'No lifecycle stage selected'}>
      <div className="relative h-2 flex-1 overflow-hidden rounded-full bg-line" aria-hidden="true">
        <motion.span
          className="absolute inset-0 origin-left rounded-full bg-accent"
          animate={{ scaleX: progress }}
          transition={{ duration: reducedMotion ? 0 : motionDurations.slow, ease: motionEase }}
        />
        {journeyVersion > 0 && current > 0 && !reducedMotion && (
          <motion.span
            key={journeyVersion}
            className="absolute inset-0 origin-left"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: progress, opacity: [0, 1, 1, 0] }}
            transition={{ duration: motionDurations.slow * 1.6, ease: motionEase }}
          >
            <span className="absolute top-1/2 right-0 size-2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_0_4px_rgb(255_255_255/0.24)]" />
          </motion.span>
        )}
        <span className="absolute inset-0 flex" aria-hidden="true">
          {stages.map((stage, index) => (
            <span key={stage.id} className="flex flex-1 items-center justify-end">
              <span className={`size-1.5 translate-x-1/2 rounded-full ${index <= activeIndex ? 'bg-white' : 'bg-line-strong'}`} />
            </span>
          ))}
        </span>
      </div>
      <span className="w-14 text-right font-mono text-xs text-muted">{String(current).padStart(2, '0')} / {String(stages.length).padStart(2, '0')}</span>
    </div>
  )
}
