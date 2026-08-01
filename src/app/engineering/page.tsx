import type { Metadata } from 'next'
import { ArchitecturePrinciples } from '@/components/engineering/ArchitecturePrinciples'
import { BackendArchitectureHero } from '@/components/engineering/BackendArchitectureHero'
import { BusinessDomainModel } from '@/components/engineering/BusinessDomainModel'
import { BusinessEntities } from '@/components/engineering/BusinessEntities'
import { BusinessServices } from '@/components/engineering/BusinessServices'
import { DatabaseArchitecture } from '@/components/engineering/DatabaseArchitecture'
import { EngineeringProgressNav } from '@/components/engineering/EngineeringProgressNav'
import { EntityRelationshipDiagram } from '@/components/engineering/EntityRelationshipDiagram'
import { PlatformApis } from '@/components/engineering/PlatformApis'
import { SectionBridge } from '@/components/engineering/SectionBridge'
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
      <EngineeringProgressNav />
      <SiteShell>
        <BackendArchitectureHero />
        <BusinessDomainModel />
        <BusinessEntities />
        <EntityRelationshipDiagram />
        <SectionBridge
          fromLabel="Entity Relationships"
          sentence="Those relationships are physically expressed in a real, production database."
          toLabel="Database Architecture"
        />
        <DatabaseArchitecture />
        <SectionBridge
          fromLabel="Database Architecture"
          sentence="The database enforces structure. Business services enforce behaviour."
          toLabel="Business Services"
        />
        <BusinessServices />
        <SectionBridge
          fromLabel="Business Services"
          sentence="Business services are exposed to every application through platform APIs."
          toLabel="Platform APIs"
        />
        <PlatformApis />
        <SectionBridge
          fromLabel="Platform APIs"
          sentence="Every layer above rests on a small set of architectural principles."
          toLabel="Architecture Principles"
        />
        <ArchitecturePrinciples />
      </SiteShell>
      <PortfolioFooter variant="starry" />
    </div>
  )
}
