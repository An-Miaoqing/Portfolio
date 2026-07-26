'use client'

import { motion } from 'framer-motion'
import { revealItem } from '@/components/motion/presets'
import { Headline } from '@/components/shared/Headline'
import { ScrollIndicator } from '@/components/shared/ScrollIndicator'
import { SectionWrapper } from '@/components/shared/SectionWrapper'
import { APIExplorer } from './APIExplorer'
import { DeploymentFlow } from './DeploymentFlow'
import { EngineeringPrinciples } from './EngineeringPrinciples'
import { ProjectStructure } from './ProjectStructure'
import { RequestJourney } from './RequestJourney'
import { ScalabilityRoadmap } from './ScalabilityRoadmap'
import { TechnologyDecision } from './TechnologyDecision'
import { TypeSafetyDiagram } from './TypeSafetyDiagram'

function ChapterContinue({ href, label }: { href: string; label: string }) {
  return (
    <motion.div
      variants={revealItem}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      className="mt-10 lg:mt-8"
    >
      <ScrollIndicator href={href} label={label} />
    </motion.div>
  )
}

export function EngineeringDecisions() {
  return (
    <>
      <SectionWrapper
        id="engineering-implementation"
        className="chapter-screen border-b border-line bg-surface py-[var(--space-section)]"
      >
        <motion.div
          variants={revealItem}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="mb-12 grid gap-8 lg:mb-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-end"
        >
          <div>
            <Headline eyebrow="07 / Engineering Decisions">
              Engineering follows business architecture.
            </Headline>
          </div>
          <p className="max-w-[var(--container-copy)] text-body-lg text-pretty text-muted lg:pb-1">
            Every technical decision exists to support the operational model introduced earlier. Technology is a consequence of architecture—not the starting point.
          </p>
        </motion.div>

        <EngineeringPrinciples />
        <ChapterContinue href="#engineering-request-journey" label="Request journey" />
      </SectionWrapper>

      <SectionWrapper
        id="engineering-request-journey"
        className="chapter-screen border-b border-line bg-canvas py-[var(--space-section)]"
      >
        <RequestJourney />
        <ChapterContinue href="#technology-decisions" label="Technology decisions" />
      </SectionWrapper>

      <SectionWrapper
        id="technology-decisions"
        className="chapter-screen border-b border-line bg-surface py-[var(--space-section)]"
      >
        <TechnologyDecision />
        <ChapterContinue href="#api-philosophy" label="API philosophy" />
      </SectionWrapper>

      <SectionWrapper
        id="api-philosophy"
        className="chapter-screen border-b border-line bg-canvas py-[var(--space-section)]"
      >
        <APIExplorer />
        <ChapterContinue href="#engineering-type-safety" label="Type safety" />
      </SectionWrapper>

      <SectionWrapper
        id="engineering-type-safety"
        className="chapter-screen border-b border-line bg-surface py-[var(--space-section)]"
      >
        <TypeSafetyDiagram />
        <ChapterContinue href="#project-and-deployment" label="Project structure & deployment" />
      </SectionWrapper>

      <SectionWrapper
        id="project-and-deployment"
        className="chapter-screen border-b border-line bg-canvas py-[var(--space-section)]"
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-10">
          <ProjectStructure />
          <DeploymentFlow />
        </div>
        <ChapterContinue href="#future-scalability" label="Future scalability" />
      </SectionWrapper>

      <SectionWrapper
        id="future-scalability"
        className="chapter-screen border-b border-line bg-surface py-[var(--space-section)]"
      >
        <ScalabilityRoadmap />
        <ChapterContinue href="#product-evolution" label="Product evolution" />
      </SectionWrapper>
    </>
  )
}
