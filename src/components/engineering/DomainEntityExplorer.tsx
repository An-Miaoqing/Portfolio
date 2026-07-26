'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { revealGroup, revealItem } from '@/components/motion/presets'
import { type BusinessDomainId, businessDomainModel } from '@/domain/engineering/domain-model'
import { type BusinessEntityId, businessEntityModel } from '@/domain/engineering/entity-model'
import { DomainNode } from './DomainNode'
import { EntityCard } from './EntityCard'
import { EntityDetail } from './EntityDetail'

function firstEntityForDomain(domainId: BusinessDomainId): BusinessEntityId {
  return businessEntityModel.find((entity) => entity.domainId === domainId)!.id
}

export function DomainEntityExplorer() {
  const [selectedDomain, setSelectedDomain] = useState<BusinessDomainId>('operations')
  const [selectedEntity, setSelectedEntity] = useState<BusinessEntityId>('bookings')

  const handleSelectDomain = (id: BusinessDomainId) => {
    setSelectedDomain(id)
    setSelectedEntity(firstEntityForDomain(id))
  }

  const handleSelectRelated = (id: string) => {
    const related = businessEntityModel.find((entity) => entity.id === id)
    if (!related) return
    setSelectedDomain(related.domainId)
    setSelectedEntity(related.id)
  }

  const domainEntities = businessEntityModel.filter((entity) => entity.domainId === selectedDomain)
  const activeEntity = businessEntityModel.find((entity) => entity.id === selectedEntity)!
  const domainName =
    businessDomainModel.find((domain) => domain.id === activeEntity.domainId)?.name ?? ''
  const relatedEntities = activeEntity.relatedEntities.map((relatedId) => {
    const related = businessEntityModel.find((entity) => entity.id === relatedId)
    return { id: relatedId, name: related?.name ?? relatedId }
  })

  return (
    <div className="grid gap-8 lg:grid-cols-[1.35fr_1fr] lg:items-start">
      <div className="rounded-panel border border-line bg-surface p-5 shadow-card sm:p-8">
        <h3 className="sr-only">Business domains and their entities</h3>

        <div className="grid gap-6 sm:grid-cols-[8.5rem_1fr]">
          <div
            aria-label="Choose a business domain"
            className="-mx-1 flex snap-x gap-2 overflow-x-auto px-1 pb-1 sm:mx-0 sm:flex-col sm:overflow-visible sm:px-0 sm:pb-0"
            role="group"
          >
            {businessDomainModel.map((domain) => (
              <DomainNode
                className="w-24 shrink-0 snap-start sm:w-full"
                id={domain.id}
                isActive={domain.id === selectedDomain}
                key={domain.id}
                label={domain.name}
                onSelect={() => handleSelectDomain(domain.id)}
              />
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              animate="visible"
              aria-live="polite"
              className="grid grid-cols-2 gap-3 xl:grid-cols-3"
              initial="hidden"
              key={selectedDomain}
              variants={revealGroup}
            >
              {domainEntities.map((entity) => (
                <motion.div key={entity.id} variants={revealItem}>
                  <EntityCard
                    isActive={entity.id === selectedEntity}
                    name={entity.name}
                    onSelect={() => setSelectedEntity(entity.id)}
                    purpose={entity.purpose}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <EntityDetail
        domainName={domainName}
        id={activeEntity.id}
        lifecycle={activeEntity.lifecycle}
        name={activeEntity.name}
        onSelectRelated={handleSelectRelated}
        purpose={activeEntity.purpose}
        relatedEntities={relatedEntities}
      />
    </div>
  )
}
