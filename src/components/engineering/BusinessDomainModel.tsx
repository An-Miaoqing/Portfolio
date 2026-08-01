'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { revealItem } from '@/components/motion/presets'
import { Headline } from '@/components/shared/Headline'
import { SectionWrapper } from '@/components/shared/SectionWrapper'
import {
  type BusinessDomainId,
  businessDomainModel,
} from '@/domain/engineering/domain-model'
import { DomainExplanation } from './DomainExplanation'
import { DomainRelationshipFlow } from './DomainRelationshipFlow'

export function BusinessDomainModel() {
  const [selected, setSelected] = useState<BusinessDomainId>('operations')

  const activeDomain = businessDomainModel.find((domain) => domain.id === selected)!

  return (
    <SectionWrapper
      as="section"
      className="border-b border-line bg-canvas py-[var(--space-section)]"
      id="business-domain-model"
    >
      <motion.div
        animate="visible"
        initial="hidden"
        variants={revealItem}
        viewport={{ once: true, amount: 0.3 }}
        whileInView="visible"
      >
        <Headline as="h2" eyebrow="Business Domain Model">
          Business concepts become software architecture.
        </Headline>

        <div className="mt-8 max-w-[720px] space-y-5 text-base leading-relaxed text-pretty text-ink sm:text-lg">
          <p>Every organisation is built around a set of core business concepts.</p>
          <p>
            Instead of designing the backend around technical layers or database tables, CareOS is
            organised around business domains. Each domain represents a responsibility within the
            organisation and owns the data, rules, and workflows related to that responsibility.
          </p>
          <p>
            This creates a backend that reflects how the business actually operates rather than how
            the software happens to be implemented.
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
          <h3 className="sr-only">How the business domains connect</h3>
          <p className="text-center font-mono text-xs font-medium tracking-[0.14em] text-accent uppercase">
            How the domains connect
          </p>
          <div className="mt-8">
            <DomainRelationshipFlow onSelect={setSelected} selectedId={selected} />
          </div>
        </div>

        <DomainExplanation
          exampleQuestions={activeDomain.exampleQuestions}
          name={activeDomain.name}
          purpose={activeDomain.purpose}
          responsibilities={activeDomain.responsibilities}
        />
      </motion.div>

      <motion.div
        animate="visible"
        className="mt-8"
        initial="hidden"
        variants={revealItem}
        viewport={{ once: true, amount: 0.3 }}
        whileInView="visible"
      >
        <p className="mx-auto max-w-[720px] text-center text-sm text-pretty text-muted italic">
          These domains are a conceptual organisation of the business model, used to guide system
          design. The implementation is feature-oriented rather than domain-folder-based.
        </p>
      </motion.div>
    </SectionWrapper>
  )
}
