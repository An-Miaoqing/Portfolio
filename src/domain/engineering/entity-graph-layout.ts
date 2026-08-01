import { type BusinessDomainId, businessDomainModel } from './domain-model'
import { type BusinessEntityId, businessEntityModel } from './entity-model'

export type GraphPoint = { x: number; y: number }

export const CLUSTER_CENTERS: Record<BusinessDomainId, GraphPoint> = {
  customer: { x: 50, y: 14 },
  finance: { x: 55, y: 74 },
  identity: { x: 15, y: 58 },
  operations: { x: 22, y: 28 },
  'platform-services': { x: 78, y: 28 },
  workforce: { x: 85, y: 45 },
}

export const ENTITY_GRAPH_LOCAL_RADIUS = 10

const CLUSTER_RADIUS: Record<BusinessDomainId, number> = {
  customer: 10,
  finance: 22,
  identity: 10,
  operations: 10,
  'platform-services': 10,
  workforce: 11,
}

// Fine-tuning nudges applied on top of the computed cluster position for individual entities.
const ENTITY_POSITION_NUDGES: Partial<Record<BusinessEntityId, GraphPoint>> = {
  notifications: { x: 0, y: -8 },
  assignments: { x: 4, y: 0 },
}

export const ENTITY_POSITIONS: Record<BusinessEntityId, GraphPoint> = (() => {
  const positions = {} as Record<BusinessEntityId, GraphPoint>

  for (const domain of businessDomainModel) {
    const entities = businessEntityModel.filter((entity) => entity.domainId === domain.id)
    const center = CLUSTER_CENTERS[domain.id]
    const radius = CLUSTER_RADIUS[domain.id]

    entities.forEach((entity, index) => {
      const angle = (index / entities.length) * 2 * Math.PI - Math.PI / 2
      const nudge = ENTITY_POSITION_NUDGES[entity.id]
      positions[entity.id] = {
        x: center.x + radius * Math.cos(angle) + (nudge?.x ?? 0),
        y: center.y + radius * Math.sin(angle) + (nudge?.y ?? 0),
      }
    })
  }

  return positions
})()

export type GraphEdge = { a: BusinessEntityId; b: BusinessEntityId }

export const ENTITY_EDGES: readonly GraphEdge[] = (() => {
  const seen = new Set<string>()
  const edges: GraphEdge[] = []

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

export function curvedPath(p1: GraphPoint, p2: GraphPoint) {
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
