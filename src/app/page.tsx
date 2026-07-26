import { SiteNavigation } from '@/components/layout/SiteNavigation'
import { PortfolioFooter } from '@/components/layout/PortfolioFooter'
import Hero from '../../legacy-vite/src/sections/Hero'
import SelectedWork from '../../legacy-vite/src/sections/SelectedWork'

export default function PortfolioHomePage() {
  return (
    <div className="portfolio-site portfolio-home">
      <a className="portfolio-site__skip" href="#portfolio-main">Skip to content</a>
      <SiteNavigation />
      <main id="portfolio-main">
        <Hero />
        <SelectedWork />
      </main>
      <PortfolioFooter variant="starry" />
    </div>
  )
}
