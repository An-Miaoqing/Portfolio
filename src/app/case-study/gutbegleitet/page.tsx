import type { Metadata } from 'next'
import { BusinessAnalysisSection } from '@/components/case-study/BusinessAnalysisSection'
import { BusinessChallengeSection } from '@/components/case-study/BusinessChallengeSection'
import { BookingServiceWorkflowSection } from '@/components/case-study/BookingServiceWorkflowSection'
import { ClosingSection } from '@/components/case-study/ClosingSection'
import { DesignPrinciplesSection } from '@/components/case-study/DesignPrinciplesSection'
import { ExecutiveSummarySection } from '@/components/case-study/ExecutiveSummarySection'
import { ImplementationHighlightsSection } from '@/components/case-study/ImplementationHighlightsSection'
import { KeyDesignDecisionsSection } from '@/components/case-study/KeyDesignDecisionsSection'
import { ProjectOutcomesSection } from '@/components/case-study/ProjectOutcomesSection'
import { ProjectProcessSection } from '@/components/case-study/ProjectProcessSection'
import { QuickFactsSection } from '@/components/case-study/QuickFactsSection'
import { SolutionDesignSection } from '@/components/case-study/SolutionDesignSection'
import { TechnicalArchitectureSection } from '@/components/case-study/TechnicalArchitectureSection'
import { VisualGallerySection } from '@/components/case-study/VisualGallerySection'
import { PortfolioFooter } from '@/components/layout/PortfolioFooter'
import { SiteNavigation } from '@/components/layout/SiteNavigation'
import { SiteShell } from '@/components/layout/SiteShell'
import { GutBegleitetHero } from '@/components/sections/GutBegleitetHero/GutBegleitetHero'
import { gutBegleitetBusinessAnalysis } from '@/content/case-studies/gutbegleitet-business-analysis'
import { gutBegleitetBusinessChallenge } from '@/content/case-studies/gutbegleitet-business-challenge'
import { gutBegleitetBookingWorkflow } from '@/content/case-studies/gutbegleitet-booking-workflow'
import { gutBegleitetClosing } from '@/content/case-studies/gutbegleitet-closing'
import { gutBegleitetDesignPrinciples } from '@/content/case-studies/gutbegleitet-design-principles'
import { gutBegleitetDesignDecisions } from '@/content/case-studies/gutbegleitet-design-decisions'
import { gutBegleitetExecutiveSummary } from '@/content/case-studies/gutbegleitet-executive-summary'
import { gutBegleitetImplementationHighlights } from '@/content/case-studies/gutbegleitet-implementation-highlights'
import { gutBegleitetProjectProcess } from '@/content/case-studies/gutbegleitet-project-process'
import { gutBegleitetProjectOutcomes } from '@/content/case-studies/gutbegleitet-project-outcomes'
import { gutBegleitetSolutionDesign } from '@/content/case-studies/gutbegleitet-solution-design'
import { gutBegleitetTechnicalArchitecture } from '@/content/case-studies/gutbegleitet-technical-architecture'
import { gutBegleitetVisualGallery } from '@/content/case-studies/gutbegleitet-visual-gallery'
import { gutBegleitetQuickFacts } from '@/content/case-studies/gutbegleitet'

export const metadata: Metadata = {
  title: 'Gut Begleitet Case Study',
  description:
    'A digital transformation case study for the Gut Begleitet community-care service platform.',
}

export default function GutBegleitetCaseStudyPage() {
  return (
    <div className="case-study-site">
      <SiteNavigation />
      <SiteShell>
        <GutBegleitetHero />
        <QuickFactsSection
          description={gutBegleitetQuickFacts.description}
          facts={gutBegleitetQuickFacts.facts}
        />
        <ExecutiveSummarySection
          highlights={gutBegleitetExecutiveSummary.highlights}
          summary={gutBegleitetExecutiveSummary.summary}
        />
        <BusinessChallengeSection
          challenges={gutBegleitetBusinessChallenge.challenges}
          focusItems={gutBegleitetBusinessChallenge.focusItems}
          introduction={gutBegleitetBusinessChallenge.introduction}
        />
        <BusinessAnalysisSection content={gutBegleitetBusinessAnalysis} />
        <DesignPrinciplesSection
          introduction={gutBegleitetDesignPrinciples.introduction}
          principles={gutBegleitetDesignPrinciples.principles}
        />
        <SolutionDesignSection content={gutBegleitetSolutionDesign} />
        <ProjectProcessSection
          capabilities={gutBegleitetProjectProcess.capabilities}
          introduction={gutBegleitetProjectProcess.introduction}
          stages={gutBegleitetProjectProcess.stages}
        />
        <KeyDesignDecisionsSection
          decisions={gutBegleitetDesignDecisions.decisions}
          introduction={gutBegleitetDesignDecisions.introduction}
        />
        <ProjectOutcomesSection
          closingNote={gutBegleitetProjectOutcomes.closingNote}
          introduction={gutBegleitetProjectOutcomes.introduction}
          outcomes={gutBegleitetProjectOutcomes.outcomes}
        />
        <BookingServiceWorkflowSection
          content={gutBegleitetBookingWorkflow}
        />
        <TechnicalArchitectureSection
          content={gutBegleitetTechnicalArchitecture}
        />
        <ImplementationHighlightsSection
          content={gutBegleitetImplementationHighlights}
        />
        <VisualGallerySection content={gutBegleitetVisualGallery} />
        <ClosingSection content={gutBegleitetClosing} />
      </SiteShell>
      <PortfolioFooter variant="starry" />
    </div>
  )
}
