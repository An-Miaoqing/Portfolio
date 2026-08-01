import type { Metadata } from 'next'
import { PortfolioFooter } from '@/components/layout/PortfolioFooter'
import { SiteNavigation } from '@/components/layout/SiteNavigation'
import { CareOSSlideshow } from '@/components/work/CareOSSlideshow'
import { EngineeringSlideshow } from '@/components/work/EngineeringSlideshow'
import { GutBegleitetSlideshow } from '@/components/work/GutBegleitetSlideshow'
import { WorkHero } from '@/components/work/WorkHero'

export const metadata: Metadata = {
  title: 'Selected Work',
  description:
    'Selected business systems and digital solutions, including the CareOS platform and the Gut Begleitet community-care project.',
}

const careosAreas = [
  'Business Analysis',
  'Process Mapping',
  'Requirements Engineering',
  'Data Modelling',
  'Workflow Design',
  'System Architecture',
  'Implementation',
]

const gutBegleitetAreas = [
  'Client Communication',
  'Requirements Analysis',
  'Process Improvement',
  'Digital Transformation',
  'System Implementation',
  'Delivery',
]

const engineeringAreas = [
  'Data Modelling',
  'Entity Relationships',
  'Application Services',
  'REST API Design',
  'Backend Architecture',
]

export default function WorkPage() {
  return (
    <div className="careos-page work-index">
      <a className="work-index__skip" href="#work-main">Skip to content</a>
      <SiteNavigation />

      <main id="work-main">
        <WorkHero />

        <article id="careos" aria-labelledby="careos-work-title">
          <div className="container work-index__intro">
            <p className="work-index__breadcrumb work-index__breadcrumb--heading" id="careos-work-title">
              System
            </p>
            <p className="work-index__areas-text" aria-label="CareOS project areas">
              {careosAreas.join('・')}
            </p>
          </div>

          <div className="container work-index__slideshow">
            <CareOSSlideshow />
            <a className="button button--primary work-index__case-study-cta" href="/case-study">
              Explore CareOS case study <span aria-hidden="true">→</span>
            </a>
          </div>
        </article>

        <article id="engineering" aria-labelledby="engineering-work-title">
          <div className="container work-index__intro">
            <p className="work-index__breadcrumb work-index__breadcrumb--heading" id="engineering-work-title">
              Backend
            </p>
            <p className="work-index__areas-text" aria-label="Engineering page topics">
              {engineeringAreas.join('・')}
            </p>
          </div>

          <div className="container work-index__slideshow">
            <EngineeringSlideshow />
            <a className="button button--primary work-index__case-study-cta" href="/engineering">
              Explore engineering <span aria-hidden="true">→</span>
            </a>
          </div>
        </article>

        <article id="gutbegleitet" aria-labelledby="gutbegleitet-work-title">
          <div className="container work-index__intro">
            <p className="work-index__breadcrumb work-index__breadcrumb--heading" id="gutbegleitet-work-title">
              Client Solutions
            </p>
            <p className="work-index__summary">
              A digital service platform for an Austrian community-care association — from business analysis and service design to a structured booking workflow and a live production website.
            </p>
            <p className="work-index__areas-text" aria-label="Gut Begleitet project areas">
              {gutBegleitetAreas.join('・')}
            </p>
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
