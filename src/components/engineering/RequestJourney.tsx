'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { requestJourney } from '@/domain/engineering/api-model'

const STEP_MS = 1500
const ACCENT = '#176b4d'
const MUTED = '#69716c'

export function RequestJourney() {
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
      setActiveIndex((current) => (current + 1) % requestJourney.length)
    }, STEP_MS)

    return () => window.clearInterval(timer)
  }, [prefersReducedMotion])

  return (
    <div
      aria-label="A request travels from the Website through the Platform API to the Booking Service, updates a Booking, triggers the Scheduling Service, and returns a response"
      className="mx-auto flex max-w-xs flex-col items-center"
      role="img"
    >
      {requestJourney.map((step, index) => {
        const isActive = prefersReducedMotion ? index === 0 : index === activeIndex

        return (
          <div className="flex flex-col items-center" key={step}>
            <motion.p
              animate={{ color: isActive ? ACCENT : MUTED, opacity: isActive ? 1 : 0.45 }}
              className="text-center font-mono text-xs font-medium tracking-[0.14em] uppercase"
              initial={{ color: MUTED, opacity: 0.45 }}
              transition={{ duration: 0.9, ease: 'easeInOut' }}
            >
              {step}
            </motion.p>
            {index < requestJourney.length - 1 ? (
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
