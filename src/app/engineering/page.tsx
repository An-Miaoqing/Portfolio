import type { Metadata } from 'next'
import { BackendArchitectureHero } from '@/components/engineering/BackendArchitectureHero'
import { BusinessDomainModel } from '@/components/engineering/BusinessDomainModel'
import { PortfolioFooter } from '@/components/layout/PortfolioFooter'
import { SiteNavigation } from '@/components/layout/SiteNavigation'
import { SiteShell } from '@/components/layout/SiteShell'

export const metadata: Metadata = {
  title: 'Engineering',
  description:
    'Designing the operational core of a business platform—from domain modelling and database architecture to APIs, workflows, and business rules.',
}

export default function EngineeringPage() {
  return (
    <div className="case-study-site">
      <SiteNavigation />
      <SiteShell>
        <BackendArchitectureHero />
        <BusinessDomainModel />
      </SiteShell>
      <PortfolioFooter variant="starry" />
    </div>
  )
}
