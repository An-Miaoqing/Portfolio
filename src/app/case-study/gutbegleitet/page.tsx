import type { Metadata } from 'next'
import { CareOSEcosystemSection } from '@/components/case-study/CareOSEcosystemSection'
import { ConnectedWorkflowSection } from '@/components/case-study/ConnectedWorkflowSection'
import { GutBegleitetOpening } from '@/components/case-study/GutBegleitetOpening'
import { OperationalDataModelSection } from '@/components/case-study/OperationalDataModelSection'
import { WhatChangedSection } from '@/components/case-study/WhatChangedSection'
import { PortfolioFooter } from '@/components/layout/PortfolioFooter'
import { SiteNavigation } from '@/components/layout/SiteNavigation'
import { SiteShell } from '@/components/layout/SiteShell'

export const metadata: Metadata = {
  title: 'Gut Begleitet Case Study',
  description:
    'A digital transformation case study for the Gut Begleitet community-care service platform.',
}

export default function GutBegleitetCaseStudyPage() {
  return (
    <div className="case-study-site">
      <SiteNavigation />
      <SiteShell>
        <GutBegleitetOpening />
        <CareOSEcosystemSection />
        <ConnectedWorkflowSection />
        <OperationalDataModelSection />
        <WhatChangedSection />
      </SiteShell>
      <PortfolioFooter variant="starry" />
    </div>
  )
}
