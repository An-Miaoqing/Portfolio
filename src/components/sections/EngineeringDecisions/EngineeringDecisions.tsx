'use client'

import { motion } from 'framer-motion'
import { revealItem } from '@/components/motion/presets'
import { Headline } from '@/components/shared/Headline'
import { SectionWrapper } from '@/components/shared/SectionWrapper'
import { EngineeringPrinciples } from './EngineeringPrinciples'
import { RequestJourney } from './RequestJourney'
import { ScalabilityRoadmap } from './ScalabilityRoadmap'
import { TechnologyDecision } from './TechnologyDecision'

export function EngineeringDecisions() {
  return (
    <>
      <SectionWrapper
        id="engineering-implementation"
        className="bg-canvas py-14 sm:py-16"
      >
        <motion.div
          variants={revealItem}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="mb-12 grid gap-8 lg:mb-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-end"
        >
          <div>
            <Headline eyebrow="06 / Engineering Decisions">
              Engineering follows business architecture
            </Headline>
          </div>
          <p className="max-w-[var(--container-copy)] text-body-lg text-pretty text-muted lg:pb-1">
            Every technical decision exists to support the operational model introduced earlier. Technology is a consequence of architecture—not the starting point.
          </p>
        </motion.div>

        <EngineeringPrinciples />
      </SectionWrapper>

      <SectionWrapper
        id="engineering-request-journey"
        className="bg-canvas py-14 sm:py-16"
      >
        <RequestJourney />
      </SectionWrapper>

      <SectionWrapper
        id="technology-decisions"
        className="bg-canvas py-14 sm:py-16"
      >
        <TechnologyDecision />
      </SectionWrapper>

      <SectionWrapper
        id="future-scalability"
        className="bg-canvas py-14 sm:py-16"
      >
        <ScalabilityRoadmap />
      </SectionWrapper>
    </>
  )
}
