import type { Metadata } from 'next'
import { ArchitecturePrinciples } from '@/components/engineering/ArchitecturePrinciples'
import { BackendArchitectureHero } from '@/components/engineering/BackendArchitectureHero'
import { BusinessDomainModel } from '@/components/engineering/BusinessDomainModel'
import { BusinessEntities } from '@/components/engineering/BusinessEntities'
import { BusinessServices } from '@/components/engineering/BusinessServices'
import { EngineeringClosing } from '@/components/engineering/EngineeringClosing'
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
        <SectionBridge
          fromLabel="Backend"
          sentence="A single backend platform needs structure — business domains give it one."
          toLabel="Business Domains"
        />
        <BusinessDomainModel />
        <SectionBridge
          fromLabel="Business Domains"
          sentence="Each business domain is realised through a collection of business entities."
          toLabel="Business Entities"
        />
        <BusinessEntities />
        <SectionBridge
          fromLabel="Business Entities"
          sentence="Entities only reveal their full meaning once you see how they relate to one another."
          toLabel="Entity Relationships"
        />
        <EntityRelationshipDiagram />
        <SectionBridge
          fromLabel="Entity Relationships"
          sentence="Those relationships are enforced and coordinated by business services."
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
        <EngineeringClosing />
      </SiteShell>
      <PortfolioFooter variant="starry" />
    </div>
  )
}
