import { type ServiceId, serviceModel } from './service-model'

export type ServiceGraphPoint = { x: number; y: number }

export const SERVICE_GRAPH_RADIUS = 42

export const SERVICE_POSITIONS: Record<ServiceId, ServiceGraphPoint> = (() => {
  const positions = {} as Record<ServiceId, ServiceGraphPoint>

  serviceModel.forEach((service, index) => {
    const angle = (index / serviceModel.length) * 2 * Math.PI - Math.PI / 2
    positions[service.id] = {
      x: 50 + SERVICE_GRAPH_RADIUS * Math.cos(angle),
      y: 50 + SERVICE_GRAPH_RADIUS * Math.sin(angle),
    }
  })

  return positions
})()

export type ServiceGraphEdge = { a: ServiceId; b: ServiceId }

export const SERVICE_EDGES: readonly ServiceGraphEdge[] = (() => {
  const seen = new Set<string>()
  const edges: ServiceGraphEdge[] = []

  for (const service of serviceModel) {
    for (const collaboratorId of service.collaboratesWith) {
      const key = [service.id, collaboratorId].sort().join('|')
      if (seen.has(key)) continue
      seen.add(key)
      edges.push({ a: service.id, b: collaboratorId })
    }
  }

  return edges
})()

export function curvedServicePath(p1: ServiceGraphPoint, p2: ServiceGraphPoint) {
  const midX = (p1.x + p2.x) / 2
  const midY = (p1.y + p2.y) / 2
  const dx = p2.x - p1.x
  const dy = p2.y - p1.y
  const length = Math.sqrt(dx * dx + dy * dy) || 1
  const offset = length * 0.15
  const controlX = midX + (-dy / length) * offset
  const controlY = midY + (dx / length) * offset
  return `M ${p1.x} ${p1.y} Q ${controlX} ${controlY} ${p2.x} ${p2.y}`
}
