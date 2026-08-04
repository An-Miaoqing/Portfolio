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
      <div className="border-b border-line bg-accent-soft px-4 py-3 text-center">
        <p className="font-mono text-xs font-medium tracking-[0.1em] text-accent uppercase">
          Under construction — this page is still being built
        </p>
      </div>
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
