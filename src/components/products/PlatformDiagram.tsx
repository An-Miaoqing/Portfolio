'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { platformFlow } from '@/domain/products/platform'

const STEP_MS = 1500
const ACCENT = '#176b4d'
const MUTED = '#69716c'

export function PlatformDiagram() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(query.matches)
    const handleChange = () => setPrefersReducedMotion(query.matches)
    query.addEventListener('change', handleChange)
    return () => query.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion) return undefined

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % platformFlow.length)
    }, STEP_MS)

    return () => window.clearInterval(timer)
  }, [prefersReducedMotion])

  return (
    <div
      aria-label="Website, Management Workspace, and Employee Workspace all connect through the CareOS Platform, with a Client Portal planned next"
      className="mx-auto flex max-w-xs flex-col items-center"
      role="img"
    >
      {platformFlow.map((step, index) => {
        const isActive = prefersReducedMotion ? index === 0 : index === activeIndex

        return (
          <div className="flex flex-col items-center" key={step.id}>
            <motion.p
              animate={{ color: isActive ? ACCENT : MUTED, opacity: isActive ? 1 : 0.45 }}
              className="flex items-center gap-2 text-center font-mono text-xs font-medium tracking-[0.14em] uppercase"
              initial={{ color: MUTED, opacity: 0.45 }}
              transition={{ duration: 0.9, ease: 'easeInOut' }}
            >
              {step.label}
              {step.isPlanned ? (
                <span className="rounded-full border border-line bg-surface-subtle px-2 py-0.5 text-[0.6rem] normal-case">
                  Planned
                </span>
              ) : null}
            </motion.p>
            {index < platformFlow.length - 1 ? (
              <span aria-hidden="true" className="my-2 text-sm text-line-strong">
                ↓
              </span>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}
