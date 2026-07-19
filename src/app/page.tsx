import { SiteShell } from '@/components/layout/SiteShell'
import { BusinessDomains } from '@/components/sections/BusinessDomains/BusinessDomains'
import { Hero } from '@/components/sections/Hero/Hero'
import { OperationalLifecycle } from '@/components/sections/OperationalLifecycle/OperationalLifecycle'
import { PlatformVision } from '@/components/sections/PlatformVision/PlatformVision'

export default function HomePage() {
  return (
    <SiteShell>
      <Hero />
      <PlatformVision />
      <OperationalLifecycle />
      <BusinessDomains />
    </SiteShell>
  )
}
