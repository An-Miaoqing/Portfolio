import type { Metadata } from 'next'
import { PortfolioFooter } from '@/components/layout/PortfolioFooter'
import { SiteNavigation } from '@/components/layout/SiteNavigation'
import { CareOSSlideshow } from '@/components/work/CareOSSlideshow'
import { GutBegleitetSlideshow } from '@/components/work/GutBegleitetSlideshow'

export const metadata: Metadata = {
  title: 'Selected Work',
  description:
    'Selected business systems and digital solutions, including the CareOS platform and the Gut Begleitet community-care project.',
}

const careosAreas = [
  'Business Analysis',
  'Process Design',
  'Data Modelling',
  'Workflow Design',
  'System Architecture',
  'Implementation',
]

const gutBegleitetAreas = [
  'Business Analysis',
  'Service Design',
  'Information Architecture',
  'UX Design',
  'Production Website',
]

export default function WorkPage() {
  return (
    <div className="careos-page work-index">
      <a className="work-index__skip" href="#work-main">Skip to content</a>
      <SiteNavigation />

      <main id="work-main">
        <article id="careos" aria-labelledby="careos-work-title">
          <div className="container work-index__intro">
            <p className="work-index__breadcrumb">01 / BUSINESS SYSTEMS · SYSTEM DESIGN</p>
            <div className="work-index__heading">
              <h1 id="careos-work-title">Care<span>OS</span></h1>
              <p className="work-index__summary">
                A business operating system designed to connect clients, households, employees, services, bookings, visits, payments and operational workflows.
              </p>
            </div>
            <div className="work-index__meta" aria-label="CareOS project areas">
              {careosAreas.map((area) => <span key={area}>{area}</span>)}
            </div>
          </div>

          <div className="container work-index__slideshow">
            <CareOSSlideshow />
            <a className="work-index__case-study-link" href="/case-study">
              <span>Explore the complete CareOS case study</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </article>

        <article id="gutbegleitet" aria-labelledby="gutbegleitet-work-title">
          <div className="container work-index__intro">
            <p className="work-index__breadcrumb">02 / BUSINESS SYSTEMS · DIGITAL SERVICE PLATFORM</p>
            <div className="work-index__heading">
              <h1 id="gutbegleitet-work-title">Gut <span>Begleitet</span></h1>
              <p className="work-index__summary">
                A digital service platform for an Austrian community-care association — from business analysis and service design to a structured booking workflow and a live production website.
              </p>
            </div>
            <div className="work-index__meta" aria-label="Gut Begleitet project areas">
              {gutBegleitetAreas.map((area) => <span key={area}>{area}</span>)}
            </div>
          </div>

          <div className="container work-index__slideshow">
            <GutBegleitetSlideshow />
            <a className="work-index__case-study-link" href="/case-study/gutbegleitet">
              <span>Explore the complete Gut Begleitet case study</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </article>
      </main>

      <PortfolioFooter variant="starry" />
    </div>
  )
}
