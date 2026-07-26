'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { revealItem } from '@/components/motion/presets'
import { Headline } from '@/components/shared/Headline'
import { SectionWrapper } from '@/components/shared/SectionWrapper'
import { type BusinessEntityId, businessEntityModel } from '@/domain/engineering/entity-model'
import { EditorialInsight } from './EditorialInsight'
import { RelationshipGraph } from './RelationshipGraph'
import { RelationshipPanel } from './RelationshipPanel'

export function EntityRelationshipDiagram() {
  const [selectedId, setSelectedId] = useState<BusinessEntityId>('bookings')

  const activeEntity = businessEntityModel.find((entity) => entity.id === selectedId)!
  const connectedEntities = activeEntity.relatedEntities.map((relatedId) => {
    const related = businessEntityModel.find((entity) => entity.id === relatedId)
    return { id: relatedId, name: related?.name ?? relatedId }
  })

  const handleSelectConnected = (id: string) => {
    const related = businessEntityModel.find((entity) => entity.id === id)
    if (related) setSelectedId(related.id)
  }

  return (
    <SectionWrapper
      as="section"
      className="border-b border-line bg-canvas py-[var(--space-section)]"
      id="entity-relationships"
    >
      <motion.div
        animate="visible"
        initial="hidden"
        variants={revealItem}
        viewport={{ once: true, amount: 0.3 }}
        whileInView="visible"
      >
        <Headline as="h2" eyebrow="Entity Relationships">
          Relationships define the system.
        </Headline>

        <div className="mt-8 max-w-[720px] space-y-5 text-base leading-relaxed text-pretty text-ink sm:text-lg">
          <p>
            Individual entities are useful, but the real strength of a business platform comes from the
            relationships between them.
          </p>
          <p>
            These relationships ensure that information flows consistently across the organisation, allowing
            every workflow, report, and business rule to reference the same source of truth.
          </p>
        </div>
      </motion.div>

      <motion.div
        animate="visible"
        className="mt-14 grid gap-8 lg:grid-cols-[1.35fr_1fr] lg:items-start sm:mt-16"
        initial="hidden"
        variants={revealItem}
        viewport={{ once: true, amount: 0.2 }}
        whileInView="visible"
      >
        <div className="rounded-panel border border-line bg-surface p-5 shadow-card sm:p-8">
          <h3 className="sr-only">Interactive entity relationship diagram</h3>
          <RelationshipGraph onSelect={setSelectedId} selectedId={selectedId} />
        </div>

        <RelationshipPanel
          connectedEntities={connectedEntities}
          id={activeEntity.id}
          name={activeEntity.name}
          onSelectConnected={handleSelectConnected}
          purpose={activeEntity.purpose}
          relationshipSummary={activeEntity.relationshipSummary}
        />
      </motion.div>

      <motion.div
        animate="visible"
        className="mt-16 sm:mt-20"
        initial="hidden"
        variants={revealItem}
        viewport={{ once: true, amount: 0.3 }}
        whileInView="visible"
      >
        <EditorialInsight
          body="Business software depends on connected information. Every relationship represents how the organisation operates in reality. The database succeeds because it models these relationships consistently across the platform."
          headline="A database is a network, not a spreadsheet."
        />
      </motion.div>
    </SectionWrapper>
  )
}
