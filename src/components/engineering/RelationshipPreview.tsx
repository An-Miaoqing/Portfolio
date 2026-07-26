'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { businessEntityModel, entityRelationshipChain } from '@/domain/engineering/entity-model'

const STEP_MS = 1600
const ACCENT = '#176b4d'

export function RelationshipPreview() {
  const [activeEdge, setActiveEdge] = useState(0)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const edgeCount = entityRelationshipChain.length - 1

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
      setActiveEdge((current) => (current + 1) % edgeCount)
    }, STEP_MS)

    return () => window.clearInterval(timer)
  }, [edgeCount, prefersReducedMotion])

  return (
    <div
      aria-label="How business entities relate: a company's household leads to a client, whose booking becomes a visit, an invoice, and finally a payment"
      className="mx-auto max-w-md"
      role="img"
    >
      <ol className="flex flex-col items-stretch">
        {entityRelationshipChain.map((step, index) => {
          const entity = businessEntityModel.find((candidate) => candidate.id === step.entityId)
          const isNodeActive = index === activeEdge || index === activeEdge + 1
          const isConnectorActive = index === activeEdge

          return (
            <li className="flex flex-col items-center" key={step.entityId}>
              <motion.div
                animate={{
                  backgroundColor: isNodeActive ? '#e4f1eb' : '#ffffff',
                  borderColor: isNodeActive ? 'rgba(23, 107, 77, 0.5)' : undefined,
                }}
                className={`w-full rounded-card border px-5 py-3 transition-colors duration-700 ${
                  isNodeActive ? 'border-accent/50' : 'border-line'
                }`}
                initial={false}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              >
                <span
                  className={`text-sm font-medium transition-colors duration-700 ${
                    isNodeActive ? 'text-accent' : 'text-ink'
                  }`}
                >
                  {entity?.name}
                </span>
              </motion.div>
              {index < entityRelationshipChain.length - 1 ? (
                <motion.span
                  animate={{
                    color: isConnectorActive ? ACCENT : '#bdc7c0',
                    opacity: isConnectorActive ? 1 : 0.6,
                  }}
                  aria-hidden="true"
                  className="my-1.5 text-sm"
                  initial={false}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                  ↓
                </motion.span>
              ) : null}
            </li>
          )
        })}
      </ol>
    </div>
  )
}
