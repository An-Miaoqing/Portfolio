'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { LifecycleGroupedCanvas, useWorkflowEngine } from '@/components/lifecycle'
import { revealItem } from '@/components/motion/presets'
import { Headline } from '@/components/shared/Headline'
import { ScrollIndicator } from '@/components/shared/ScrollIndicator'
import { SectionWrapper } from '@/components/shared/SectionWrapper'
import { careOSDomains, careOSDomainWorkflowGroups } from '@/domain/business-domains/careos-domains'
import type { BusinessDomainId } from '@/domain/business-domains/domain.types'
import { careOSLifecycle } from '@/domain/lifecycle/careos-lifecycle'
import { DomainNavigator } from './DomainNavigator'
import { DomainPanel } from './DomainPanel'

const initialDomain = careOSDomains[0]

export function BusinessDomains() {
  const [activeDomainId, setActiveDomainId] = useState<BusinessDomainId>(initialDomain.id)
  const engine = useWorkflowEngine(careOSLifecycle, {
    initialHighlightedStageIds: initialDomain.stageIds,
    initialReferencedStageIds: initialDomain.referenceStageIds,
    initialContext: { domain: initialDomain.id },
  })
  const activeDomain = careOSDomains.find((domain) => domain.id === activeDomainId) ?? initialDomain

  const selectDomain = (domainId: BusinessDomainId) => {
    const domain = careOSDomains.find((candidate) => candidate.id === domainId)
    if (!domain) return
    setActiveDomainId(domain.id)
    engine.setDomainFocus(domain.id, domain.stageIds, domain.referenceStageIds)
  }

  return (
    <>
      <SectionWrapper id="business-domains" className="border-b border-line bg-surface py-[var(--space-section)]">
        <motion.div variants={revealItem} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} className="mb-14 lg:mb-20">
          <Headline eyebrow="04 / Business Domains">Five business domains.<br />One shared operational model.</Headline>
          <p className="mt-7 max-w-[var(--container-copy)] text-body-lg text-pretty text-muted">
            Every responsibility inside CareOS is organised into a business domain. Each domain owns specific parts of the operational lifecycle while sharing one connected platform.
          </p>
        </motion.div>

        <div className="grid items-start gap-8 xl:grid-cols-[17rem_minmax(0,1fr)]">
          <DomainNavigator activeDomainId={activeDomainId} domains={careOSDomains} onSelect={selectDomain} />
          <div className="min-w-0 rounded-panel border border-line bg-canvas p-4 sm:p-6 lg:p-8">
            <p className="mb-6 font-mono text-xs font-medium tracking-[0.14em] text-muted uppercase">Workflow ownership / {activeDomain.name}</p>
            <LifecycleGroupedCanvas engine={engine} groups={careOSDomainWorkflowGroups} />
          </div>
        </div>

        <div className="mt-8 lg:mt-12">
          <DomainPanel domain={activeDomain} />
        </div>

        <motion.div variants={revealItem} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.8 }} className="mt-12 lg:mt-16">
          <ScrollIndicator href="#applications" label="Applications" />
        </motion.div>
      </SectionWrapper>

      <SectionWrapper id="applications" className="bg-canvas py-24 sm:py-32">
        <motion.div variants={revealItem} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-sm font-medium tracking-[0.16em] text-accent uppercase">05 / Applications</p>
          <p className="mt-5 text-2xl leading-[1.3] font-medium tracking-[-0.03em] text-ink sm:text-3xl">Coming in Sprint 4</p>
        </motion.div>
      </SectionWrapper>
    </>
  )
}
