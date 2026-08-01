'use client'

import { motion } from 'framer-motion'
import { type BusinessEntityId, businessEntityModel } from '@/domain/engineering/entity-model'
import { curvedPath, ENTITY_EDGES, ENTITY_POSITIONS } from '@/domain/engineering/entity-graph-layout'

const ACCENT = '#176b4d'
const IDLE = '#bdc7c0'
const CONNECTED_FILL = '#e4f1eb'
const CONNECTED_BORDER = 'rgba(23, 107, 77, 0.55)'

type RelationshipGraphProps = {
  onSelect: (id: BusinessEntityId) => void
  selectedId: BusinessEntityId
}

export function RelationshipGraph({ onSelect, selectedId }: RelationshipGraphProps) {
  const connectedIds = new Set<BusinessEntityId>()
  const selectedEntity = businessEntityModel.find((entity) => entity.id === selectedId)
  selectedEntity?.relatedEntities.forEach((id) => connectedIds.add(id))
  businessEntityModel.forEach((entity) => {
    if (entity.relatedEntities.includes(selectedId)) connectedIds.add(entity.id)
  })

  return (
    <div>
      {/* Desktop / tablet: clustered relationship graph */}
      <div className="relative mx-auto hidden aspect-square w-full max-w-[34rem] sm:block">
        <svg aria-hidden="true" className="absolute inset-0 h-full w-full" viewBox="0 0 100 100">
          {ENTITY_EDGES.map((edge) => {
            const isActive = edge.a === selectedId || edge.b === selectedId
            return (
              <motion.path
                animate={{
                  opacity: isActive ? 0.9 : 0.16,
                  stroke: isActive ? ACCENT : IDLE,
                }}
                d={curvedPath(ENTITY_POSITIONS[edge.a], ENTITY_POSITIONS[edge.b])}
                fill="none"
                initial={false}
                key={`${edge.a}-${edge.b}`}
                strokeLinecap="round"
                strokeWidth={isActive ? 0.6 : 0.4}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              />
            )
          })}
        </svg>

        <div aria-label="Select a business entity to see how it connects" role="group">
          {businessEntityModel.map((entity) => {
            const isSelected = entity.id === selectedId
            const isConnected = connectedIds.has(entity.id)
            const position = ENTITY_POSITIONS[entity.id]

            return (
              <motion.button
                aria-pressed={isSelected}
                className="focus-ring absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1 p-1"
                key={entity.id}
                onClick={() => onSelect(entity.id)}
                style={{ left: `${position.x}%`, top: `${position.y}%` }}
                type="button"
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 1 }}
              >
                <motion.span
                  animate={{
                    backgroundColor: isSelected ? ACCENT : isConnected ? CONNECTED_FILL : '#ffffff',
                    borderColor: isSelected || isConnected ? CONNECTED_BORDER : IDLE,
                    boxShadow: isSelected
                      ? `0 0 0 4px rgba(23, 107, 77, 0.15), 0 6px 16px rgba(23, 107, 77, 0.35)`
                      : '0 0 0 0 rgba(0,0,0,0)',
                    scale: isSelected ? 1.35 : 1,
                  }}
                  className="block size-2.5 rounded-full border"
                  initial={false}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                />
                <span
                  className={`max-w-[4.5rem] text-center text-[0.6rem] leading-tight font-medium text-balance transition-[color,opacity] duration-300 ${
                    isSelected ? 'text-accent' : isConnected ? 'text-ink' : 'text-muted'
                  }`}
                  style={{ opacity: isSelected || isConnected ? 1 : 0.55 }}
                >
                  {entity.name}
                </span>
              </motion.button>
            )
          })}
        </div>
      </div>

      {/* Mobile: entity pills */}
      <div className="sm:hidden">
        <div aria-label="Select a business entity" className="flex flex-wrap gap-1.5" role="group">
          {businessEntityModel.map((entity) => {
            const isSelected = entity.id === selectedId
            const isConnected = connectedIds.has(entity.id)

            return (
              <button
                aria-pressed={isSelected}
                className={`focus-ring rounded-full border px-3 py-1 text-xs font-medium transition-colors duration-300 ${
                  isSelected
                    ? 'border-accent bg-accent text-white'
                    : isConnected
                      ? 'border-accent/50 bg-[#e4f1eb] text-accent'
                      : 'border-line bg-surface-subtle text-ink'
                }`}
                key={entity.id}
                onClick={() => onSelect(entity.id)}
                type="button"
              >
                {entity.name}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
