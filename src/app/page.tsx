import { HomeHero } from '@/components/home/HomeHero'
import { SelectedWork } from '@/components/home/SelectedWork'
import { PortfolioFooter } from '@/components/layout/PortfolioFooter'
import { SiteNavigation } from '@/components/layout/SiteNavigation'

export default function PortfolioHomePage() {
  return (
    <div className="portfolio-site portfolio-home">
      <a className="portfolio-site__skip" href="#portfolio-main">Skip to content</a>
      <SiteNavigation />
      <main id="portfolio-main">
        <HomeHero />
        <SelectedWork />
      </main>
      <PortfolioFooter variant="starry" />
    </div>
  )
}
