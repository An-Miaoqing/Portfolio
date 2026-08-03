'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { LifecycleGroupedCanvas, useWorkflowEngine } from '@/components/lifecycle'
import { revealItem } from '@/components/motion/presets'
import { Headline } from '@/components/shared/Headline'
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
      <SectionWrapper id="business-domains" className="bg-canvas py-14 sm:py-16">
        <motion.div variants={revealItem} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} className="mb-12 grid gap-8 lg:mb-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
          <div>
            <Headline eyebrow="04 / Business Domains">Five business domains.<br />One shared operational model.</Headline>
          </div>
          <p className="max-w-[var(--container-copy)] text-body-lg text-pretty text-muted lg:pb-1">
            Every responsibility inside CareOS is organised into a business domain. Each domain owns specific parts of the operational lifecycle while sharing one connected platform.
          </p>
        </motion.div>

        <div className="grid items-start gap-8 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-6">
          <DomainNavigator activeDomainId={activeDomainId} domains={careOSDomains} onSelect={selectDomain} />
          <div className="min-w-0 rounded-panel border border-line bg-canvas p-4 sm:p-6 lg:p-5">
            <p className="mb-4 font-mono text-xs font-medium tracking-[0.14em] text-muted uppercase">Workflow ownership / {activeDomain.name}</p>
            <LifecycleGroupedCanvas engine={engine} groups={careOSDomainWorkflowGroups} />
          </div>
        </div>

        <div className="mt-8 lg:mt-6">
          <DomainPanel domain={activeDomain} />
        </div>
      </SectionWrapper>
  )
}
