'use client'

import { MotionConfig } from 'framer-motion'
import type { ReactNode } from 'react'
import { motionTransitions } from './presets'

type MotionProviderProps = {
  children: ReactNode
}

export function MotionProvider({ children }: MotionProviderProps) {
  return (
    <MotionConfig reducedMotion="user" transition={motionTransitions.medium}>
      {children}
    </MotionConfig>
  )
}
