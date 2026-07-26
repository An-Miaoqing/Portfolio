'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { businessEntityModel } from '@/domain/engineering/entity-model'
import { type ServiceId, serviceModel } from '@/domain/engineering/service-model'
import { ServiceCard } from './ServiceCard'
import { ServiceDetail } from './ServiceDetail'

const ACCENT = '#176b4d'
const IDLE = '#bdc7c0'
const RADIUS = 36

type Point = { x: number; y: number }

const SERVICE_POSITIONS: Record<ServiceId, Point> = (() => {
  const positions = {} as Record<ServiceId, Point>

  serviceModel.forEach((service, index) => {
    const angle = (index / serviceModel.length) * 2 * Math.PI - Math.PI / 2
    positions[service.id] = {
      x: 50 + RADIUS * Math.cos(angle),
      y: 50 + RADIUS * Math.sin(angle),
    }
  })

  return positions
})()

type Edge = { a: ServiceId; b: ServiceId }

const SERVICE_EDGES: readonly Edge[] = (() => {
  const seen = new Set<string>()
  const edges: Edge[] = []

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

function curvedPath(p1: Point, p2: Point) {
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

function resolveEntities(ids: readonly string[]) {
  return ids.map((id) => {
    const entity = businessEntityModel.find((candidate) => candidate.id === id)
    return { id, name: entity?.name ?? id }
  })
}

function resolveServices(ids: readonly ServiceId[]) {
  return ids.map((id) => {
    const service = serviceModel.find((candidate) => candidate.id === id)
    return { id, name: service?.name ?? id }
  })
}

export function ServiceExplorer() {
  const [selectedId, setSelectedId] = useState<ServiceId>('booking')

  const connectedIds = new Set<ServiceId>()
  const selectedService = serviceModel.find((service) => service.id === selectedId)!
  selectedService.collaboratesWith.forEach((id) => connectedIds.add(id))
  serviceModel.forEach((service) => {
    if (service.collaboratesWith.includes(selectedId)) connectedIds.add(service.id)
  })

  const handleSelectCollaborator = (id: string) => {
    const collaborator = serviceModel.find((service) => service.id === id)
    if (collaborator) setSelectedId(collaborator.id)
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.35fr_1fr] lg:items-start">
      <div className="rounded-panel border border-line bg-surface p-5 shadow-card sm:p-8">
        <h3 className="sr-only">Interactive business service explorer</h3>

        {/* Desktop / tablet: collaboration ring */}
        <div className="relative mx-auto hidden aspect-square w-full max-w-[36rem] sm:block">
          <svg aria-hidden="true" className="absolute inset-0 h-full w-full" viewBox="0 0 100 100">
            {SERVICE_EDGES.map((edge) => {
              const isActive = edge.a === selectedId || edge.b === selectedId
              return (
                <motion.path
                  animate={{
                    opacity: isActive ? 0.85 : 0.22,
                    stroke: isActive ? ACCENT : IDLE,
                  }}
                  d={curvedPath(SERVICE_POSITIONS[edge.a], SERVICE_POSITIONS[edge.b])}
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

          <div aria-label="Select a business service" role="group">
            {serviceModel.map((service) => {
              const position = SERVICE_POSITIONS[service.id]
              return (
                <ServiceCard
                  className="absolute w-36 -translate-x-1/2 -translate-y-1/2 sm:w-40"
                  isActive={service.id === selectedId}
                  isConnected={connectedIds.has(service.id)}
                  key={service.id}
                  name={service.name}
                  onSelect={() => setSelectedId(service.id)}
                  purpose={service.purpose}
                  style={{ left: `${position.x}%`, top: `${position.y}%` }}
                />
              )
            })}
          </div>
        </div>

        {/* Mobile: horizontal service selector */}
        <div
          aria-label="Choose a business service"
          className="-mx-1 flex snap-x gap-2.5 overflow-x-auto px-1 pb-1 sm:hidden"
          role="group"
        >
          {serviceModel.map((service) => (
            <ServiceCard
              className="w-40 shrink-0 snap-start"
              isActive={service.id === selectedId}
              isConnected={connectedIds.has(service.id)}
              key={service.id}
              name={service.name}
              onSelect={() => setSelectedId(service.id)}
              purpose={service.purpose}
            />
          ))}
        </div>
      </div>

      <ServiceDetail
        collaboratesWith={resolveServices(selectedService.collaboratesWith)}
        exampleProcess={selectedService.exampleProcess}
        id={selectedService.id}
        name={selectedService.name}
        onSelectCollaborator={handleSelectCollaborator}
        purpose={selectedService.purpose}
        reads={resolveEntities(selectedService.reads)}
        updates={resolveEntities(selectedService.updates)}
      />
    </div>
  )
}
