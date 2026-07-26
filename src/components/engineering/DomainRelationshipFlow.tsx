'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { businessDomainModel, domainRelationshipFlow } from '@/domain/engineering/domain-model'

const STEP_MS = 1600

export function DomainRelationshipFlow() {
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
      setActiveIndex((current) => (current + 1) % domainRelationshipFlow.length)
    }, STEP_MS)

    return () => window.clearInterval(timer)
  }, [prefersReducedMotion])

  return (
    <div
      aria-label="How the business domains connect: customer demand flows through operations and workforce to finance and reporting"
      className="mx-auto max-w-md"
      role="img"
    >
      <ol className="flex flex-col items-stretch">
        {domainRelationshipFlow.map((step, index) => {
          const domain = businessDomainModel.find((entry) => entry.id === step.domainId)
          const isActive = index === activeIndex

          return (
            <li className="flex flex-col items-center" key={step.domainId}>
              <motion.div
                animate={{
                  backgroundColor: isActive ? '#e4f1eb' : '#ffffff',
                  borderColor: isActive ? 'rgba(23, 107, 77, 0.5)' : undefined,
                }}
                className={`flex w-full items-center justify-between gap-4 rounded-card border px-5 py-3.5 transition-colors duration-700 ${
                  isActive ? 'border-accent/50' : 'border-line'
                }`}
                initial={false}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              >
                <span
                  className={`font-medium transition-colors duration-700 ${
                    isActive ? 'text-accent' : 'text-ink'
                  }`}
                >
                  {domain?.name}
                </span>
                <span className="text-right text-xs text-pretty text-muted italic">{step.action}</span>
              </motion.div>
              {index < domainRelationshipFlow.length - 1 ? (
                <span aria-hidden="true" className="my-1.5 text-line-strong">
                  ↓
                </span>
              ) : null}
            </li>
          )
        })}
      </ol>
    </div>
  )
}
