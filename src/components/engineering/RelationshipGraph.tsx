'use client'

import { motion } from 'framer-motion'
import { type BusinessDomainId, businessDomainModel } from '@/domain/engineering/domain-model'
import { type BusinessEntityId, businessEntityModel } from '@/domain/engineering/entity-model'

const ACCENT = '#176b4d'
const IDLE = '#bdc7c0'
const CONNECTED_FILL = '#e4f1eb'
const CONNECTED_BORDER = 'rgba(23, 107, 77, 0.55)'

const CLUSTER_CENTERS: Record<BusinessDomainId, { x: number; y: number }> = {
  customer: { x: 50, y: 14 },
  finance: { x: 28, y: 80 },
  operations: { x: 14, y: 38 },
  reporting: { x: 86, y: 38 },
  workforce: { x: 72, y: 80 },
}

const LOCAL_RADIUS = 10

type Point = { x: number; y: number }

const ENTITY_POSITIONS: Record<BusinessEntityId, Point> = (() => {
  const positions = {} as Record<BusinessEntityId, Point>

  for (const domain of businessDomainModel) {
    const entities = businessEntityModel.filter((entity) => entity.domainId === domain.id)
    const center = CLUSTER_CENTERS[domain.id]

    entities.forEach((entity, index) => {
      const angle = (index / entities.length) * 2 * Math.PI - Math.PI / 2
      positions[entity.id] = {
        x: center.x + LOCAL_RADIUS * Math.cos(angle),
        y: center.y + LOCAL_RADIUS * Math.sin(angle),
      }
    })
  }

  return positions
})()

type Edge = { a: BusinessEntityId; b: BusinessEntityId }

const ENTITY_EDGES: readonly Edge[] = (() => {
  const seen = new Set<string>()
  const edges: Edge[] = []

  for (const entity of businessEntityModel) {
    for (const relatedId of entity.relatedEntities) {
      const key = [entity.id, relatedId].sort().join('|')
      if (seen.has(key)) continue
      seen.add(key)
      edges.push({ a: entity.id, b: relatedId })
    }
  }

  return edges
})()

function curvedPath(p1: Point, p2: Point) {
  const midX = (p1.x + p2.x) / 2
  const midY = (p1.y + p2.y) / 2
  const dx = p2.x - p1.x
  const dy = p2.y - p1.y
  const length = Math.sqrt(dx * dx + dy * dy) || 1
  const offset = length * 0.12
  const controlX = midX + (-dy / length) * offset
  const controlY = midY + (dx / length) * offset
  return `M ${p1.x} ${p1.y} Q ${controlX} ${controlY} ${p2.x} ${p2.y}`
}

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

        {businessDomainModel.map((domain) => {
          const center = CLUSTER_CENTERS[domain.id]
          return (
            <span
              aria-hidden="true"
              className="absolute font-mono text-[0.55rem] font-medium tracking-[0.1em] text-muted uppercase"
              key={domain.id}
              style={{
                left: `${center.x}%`,
                top: `${center.y - LOCAL_RADIUS - 7}%`,
                transform: 'translate(-50%, 0)',
              }}
            >
              {domain.name}
            </span>
          )
        })}

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

      {/* Mobile: grouped entity pills */}
      <div className="flex flex-col gap-5 sm:hidden">
        {businessDomainModel.map((domain) => (
          <div key={domain.id}>
            <p className="font-mono text-[0.65rem] font-medium tracking-[0.12em] text-muted uppercase">
              {domain.name}
            </p>
            <div
              aria-label={`Select an entity within ${domain.name}`}
              className="mt-2 flex flex-wrap gap-1.5"
              role="group"
            >
              {businessEntityModel
                .filter((entity) => entity.domainId === domain.id)
                .map((entity) => {
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
        ))}
      </div>
    </div>
  )
}
