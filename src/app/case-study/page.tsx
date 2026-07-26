import type { Metadata } from 'next'
import { PortfolioFooter } from '@/components/layout/PortfolioFooter'
import { SiteShell } from '@/components/layout/SiteShell'
import { SiteNavigation } from '@/components/layout/SiteNavigation'
import { AboutMethodology } from '@/components/sections/AboutMethodology/AboutMethodology'
import { BusinessDomains } from '@/components/sections/BusinessDomains/BusinessDomains'
import { EngineeringDecisions } from '@/components/sections/EngineeringDecisions/EngineeringDecisions'
import { Hero } from '@/components/sections/Hero/Hero'
import { OperationalLifecycle } from '@/components/sections/OperationalLifecycle/OperationalLifecycle'
import { PlatformApplications } from '@/components/sections/PlatformApplications/PlatformApplications'
import { PlatformArchitecture } from '@/components/sections/PlatformArchitecture/PlatformArchitecture'
import { PlatformVision } from '@/components/sections/PlatformVision/PlatformVision'
import { ProductEvolution } from '@/components/sections/ProductEvolution/ProductEvolution'

export const metadata: Metadata = {
  title: 'CareOS Case Study',
  description:
    'A detailed CareOS case study covering its operational lifecycle, business domains, applications, architecture, engineering decisions and product evolution.',
}

export default function CareOSCaseStudyPage() {
  return (
    <div className="case-study-site">
      <SiteNavigation />
      <SiteShell>
        <Hero />
        <PlatformVision />
        <OperationalLifecycle />
        <BusinessDomains />
        <PlatformApplications />
        <PlatformArchitecture />
        <EngineeringDecisions />
        <ProductEvolution />
        <AboutMethodology />
      </SiteShell>
      <PortfolioFooter variant="starry" />
    </div>
  )
}
