import type { Metadata } from 'next'
import { PortfolioFooter } from '@/components/layout/PortfolioFooter'
import { SiteNavigation } from '@/components/layout/SiteNavigation'
import { SiteShell } from '@/components/layout/SiteShell'
import { ExperienceCenter } from '@/components/products/ExperienceCenter'
import { PlatformOverview } from '@/components/products/PlatformOverview'
import { ProductShowcase } from '@/components/products/ProductShowcase'
import { ProductsCTA } from '@/components/products/ProductsCTA'
import { SharedPlatform } from '@/components/products/SharedPlatform'

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Experience CareOS firsthand — one business platform, multiple applications, designed for real-world operations.',
}

export default function ProductsPage() {
  return (
    <div className="case-study-site">
      <SiteNavigation />
      <SiteShell>
        <ExperienceCenter />
        <PlatformOverview />
        <ProductShowcase />
        <SharedPlatform />
        <ProductsCTA />
      </SiteShell>
      <PortfolioFooter variant="starry" />
    </div>
  )
}
