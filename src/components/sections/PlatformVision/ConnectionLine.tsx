'use client'

import { motion } from 'framer-motion'
import { motionDurations, motionEase } from '@/components/motion/presets'
import type { PlatformDomainId } from './platform-data'

type ConnectionLineProps = {
  activeDomain: PlatformDomainId | null
  connected: boolean
  delayIndex: number
  domainId: PlatformDomainId
  path: string
  reduceMotion: boolean
}

export function ConnectionLine({
  activeDomain,
  connected,
  delayIndex,
  domainId,
  path,
  reduceMotion,
}: ConnectionLineProps) {
  const isSubdued = activeDomain !== null && activeDomain !== domainId

  return (
    <motion.path
      d={path}
      fill="none"
      vectorEffect="non-scaling-stroke"
      className={activeDomain === domainId ? 'stroke-accent' : 'stroke-line-strong'}
      strokeWidth="1.25"
      strokeLinecap="round"
      initial={{ pathLength: reduceMotion ? 1 : 0, opacity: 0 }}
      animate={{
        pathLength: connected ? 1 : 0,
        opacity: connected ? (isSubdued ? 0.22 : 1) : 0,
      }}
      transition={{
        pathLength: {
          delay: reduceMotion ? 0 : motionDurations.slow + delayIndex * motionDurations.fast,
          duration: reduceMotion ? 0 : motionDurations.slow,
          ease: motionEase,
        },
        opacity: { duration: motionDurations.fast },
      }}
    />
  )
}
