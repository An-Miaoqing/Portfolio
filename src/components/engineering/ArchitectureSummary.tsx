'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Connector } from './Connector'

type Layer = {
  annotation: string
  id: string
  name: string
}

const LAYERS: readonly Layer[] = [
  {
    id: 'applications',
    name: 'Applications',
    annotation: 'Every application shares the same platform instead of reinventing its own logic.',
  },
  {
    id: 'platform-interface',
    name: 'Platform Interface',
    annotation: 'A single interface keeps every application consistent as the platform evolves.',
  },
  {
    id: 'business-services',
    name: 'Business Services',
    annotation: 'Business rules live once, centrally, rather than duplicated across applications.',
  },
  {
    id: 'business-entities',
    name: 'Business Entities',
    annotation: 'Entities give business concepts one consistent, shared shape.',
  },
  {
    id: 'shared-data',
    name: 'Shared Data',
    annotation: 'One authoritative source of truth underlies every workflow and decision.',
  },
]

export function ArchitectureSummary() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const selectedIndex = LAYERS.findIndex((layer) => layer.id === selectedId)

  return (
    <div className="mx-auto max-w-2xl">
      <ol className="flex flex-col items-stretch">
        {LAYERS.map((layer, index) => {
          const isSelected = layer.id === selectedId
          const isDimmed = selectedId !== null && !isSelected
          const isConnectorActive = selectedIndex === index || selectedIndex === index + 1

          return (
            <li key={layer.id}>
              <button
                aria-pressed={isSelected}
                className="focus-ring block w-full text-left"
                onClick={() => setSelectedId((current) => (current === layer.id ? null : layer.id))}
                type="button"
              >
                <motion.div
                  animate={{
                    backgroundColor: isSelected ? '#e4f1eb' : '#ffffff',
                    borderColor: isSelected ? 'rgba(23, 107, 77, 0.5)' : undefined,
                    opacity: isDimmed ? 0.55 : 1,
                  }}
                  className={`flex flex-col gap-1 rounded-card border px-5 py-3.5 transition-colors duration-500 sm:flex-row sm:items-center sm:justify-between sm:gap-4 ${
                    isSelected ? 'border-accent/50' : 'border-line'
                  }`}
                  initial={false}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  <span className={`font-medium ${isSelected ? 'text-accent' : 'text-ink'}`}>{layer.name}</span>
                  <span className="text-sm text-pretty text-muted sm:max-w-[60%] sm:text-right">
                    {layer.annotation}
                  </span>
                </motion.div>
              </button>
              {index < LAYERS.length - 1 ? (
                <Connector active={isConnectorActive || selectedId === null} height={22} isPulsing={false} />
              ) : null}
            </li>
          )
        })}
      </ol>
    </div>
  )
}
