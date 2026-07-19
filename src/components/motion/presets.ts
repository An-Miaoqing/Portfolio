import type { Transition, Variants } from 'framer-motion'

export const motionDurations = {
  fast: 0.18,
  medium: 0.42,
  slow: 0.9,
} as const

export const motionEase: [number, number, number, number] = [0.22, 1, 0.36, 1]

export const motionTransitions = {
  fast: { duration: motionDurations.fast, ease: motionEase },
  medium: { duration: motionDurations.medium, ease: motionEase },
  slow: { duration: motionDurations.slow, ease: motionEase },
} satisfies Record<'fast' | 'medium' | 'slow', Transition>

export const revealGroup: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: motionDurations.fast,
      staggerChildren: motionDurations.fast,
    },
  },
}

export const revealItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: motionTransitions.slow,
  },
}

export const detailReveal: Variants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: motionTransitions.medium,
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: motionTransitions.fast,
  },
}
