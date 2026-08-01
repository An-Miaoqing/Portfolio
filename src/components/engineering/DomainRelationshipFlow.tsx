'use client'

import { motion } from 'framer-motion'
import type { BusinessDomainId } from '@/domain/engineering/domain-model'
import { businessDomainModel, domainRelationshipFlow } from '@/domain/engineering/domain-model'

type DomainRelationshipFlowProps = {
  onSelect: (id: BusinessDomainId) => void
  selectedId: BusinessDomainId
}

export function DomainRelationshipFlow({ onSelect, selectedId }: DomainRelationshipFlowProps) {
  return (
    <div
      aria-label="How the business domains connect: choose a domain to see its explanation"
      className="mx-auto max-w-md"
    >
      <ol className="flex flex-col items-stretch">
        {domainRelationshipFlow.map((step, index) => {
          const domain = businessDomainModel.find((entry) => entry.id === step.domainId)
          const isActive = step.domainId === selectedId

          return (
            <li className="flex flex-col items-center" key={step.domainId}>
              <motion.button
                animate={{
                  backgroundColor: isActive ? '#e4f1eb' : '#ffffff',
                }}
                aria-pressed={isActive}
                className={`focus-ring flex w-full items-center justify-between gap-4 rounded-card border px-5 py-3.5 text-left transition-colors duration-300 ${
                  isActive ? 'border-accent/50' : 'border-line hover:border-line-strong'
                }`}
                initial={false}
                onClick={() => onSelect(step.domainId)}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                type="button"
              >
                <span className={`font-medium transition-colors duration-300 ${isActive ? 'text-accent' : 'text-ink'}`}>
                  {domain?.name}
                </span>
                <span className="text-right text-xs text-pretty text-muted italic">{step.action}</span>
              </motion.button>
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
