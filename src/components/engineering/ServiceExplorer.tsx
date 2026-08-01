'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { businessEntityModel } from '@/domain/engineering/entity-model'
import { curvedServicePath, SERVICE_EDGES, SERVICE_POSITIONS } from '@/domain/engineering/service-graph-layout'
import { type ServiceId, serviceModel } from '@/domain/engineering/service-model'
import { ServiceCard } from './ServiceCard'
import { ServiceDetail } from './ServiceDetail'

const ACCENT = '#176b4d'
const IDLE = '#bdc7c0'

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
    <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:items-start">
      <div className="rounded-panel border border-line bg-surface p-5 shadow-card sm:p-6">
        <h3 className="sr-only">Interactive business service explorer</h3>

        {/* Desktop / tablet: collaboration ring */}
        <div className="relative mx-auto hidden aspect-square w-full max-w-[28rem] sm:block">
          <svg aria-hidden="true" className="absolute inset-0 h-full w-full" viewBox="0 0 100 100">
            {SERVICE_EDGES.map((edge) => {
              const isActive = edge.a === selectedId || edge.b === selectedId
              return (
                <motion.path
                  animate={{
                    opacity: isActive ? 0.85 : 0.22,
                    stroke: isActive ? ACCENT : IDLE,
                  }}
                  d={curvedServicePath(SERVICE_POSITIONS[edge.a], SERVICE_POSITIONS[edge.b])}
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
                  className="absolute w-24 -translate-x-1/2 -translate-y-1/2 sm:w-28"
                  isActive={service.id === selectedId}
                  isConnected={connectedIds.has(service.id)}
                  key={service.id}
                  name={service.name}
                  onSelect={() => setSelectedId(service.id)}
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
              className="w-28 shrink-0 snap-start"
              isActive={service.id === selectedId}
              isConnected={connectedIds.has(service.id)}
              key={service.id}
              name={service.name}
              onSelect={() => setSelectedId(service.id)}
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
