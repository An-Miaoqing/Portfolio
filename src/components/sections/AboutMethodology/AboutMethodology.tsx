'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { revealItem } from '@/components/motion/presets'
import { Headline } from '@/components/shared/Headline'
import { ScrollIndicator } from '@/components/shared/ScrollIndicator'
import { SectionWrapper } from '@/components/shared/SectionWrapper'
import { BusinessAnalysis } from './BusinessAnalysis'
import { CaseStudyReflection } from './CaseStudyReflection'
import { ContactCard } from './ContactCard'
import { CorePrinciples } from './CorePrinciples'
import { LookingAhead } from './LookingAhead'
import { MethodologyFlow } from './MethodologyFlow'
import { SkillsOverview } from './SkillsOverview'
import { SystemDesign } from './SystemDesign'

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

export function AboutMethodology() {
  return (
    <>
      <SectionWrapper
        id="about-methodology"
        className="chapter-screen border-b border-line bg-canvas py-[var(--space-section)]"
      >
        <motion.div
          variants={revealItem}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-end"
        >
          <Headline eyebrow="09 / About & Methodology">
            Designing systems from business understanding.
          </Headline>
          <p className="max-w-[var(--container-copy)] text-body-lg text-pretty text-muted lg:pb-1">
            CareOS demonstrates my approach to Business Systems Analysis: understanding organisations, modelling operational processes, designing domain-driven architectures, and implementing practical digital solutions that can evolve over time.
          </p>
        </motion.div>
        <MethodologyFlow />
        <ChapterContinue href="#analysis-to-architecture" label="Analysis to architecture" />
      </SectionWrapper>

      <SectionWrapper
        id="analysis-to-architecture"
        className="border-b border-line bg-surface py-[var(--space-section)]"
      >
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-10">
          <BusinessAnalysis />
          <SystemDesign />
        </div>
        <ChapterContinue href="#principles-and-skills" label="Principles & skills" />
      </SectionWrapper>

      <SectionWrapper
        id="principles-and-skills"
        className="border-b border-line bg-canvas py-[var(--space-section)]"
      >
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-10">
          <CorePrinciples />
          <SkillsOverview />
        </div>
        <ChapterContinue href="#careos-reflection" label="CareOS in context" />
      </SectionWrapper>

      <SectionWrapper
        id="careos-reflection"
        className="chapter-screen border-b border-line bg-surface py-[var(--space-section)]"
      >
        <CaseStudyReflection />
        <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <LookingAhead />
          <ContactCard />
        </div>
        <ChapterContinue href="#case-study-conclusion" label="Conclusion" />
      </SectionWrapper>

      <SectionWrapper
        id="case-study-conclusion"
        className="bg-ink py-24 text-white sm:py-32 lg:flex lg:min-h-[100svh] lg:items-center lg:py-12"
      >
        <motion.div
          variants={revealItem}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="font-mono text-sm font-medium tracking-[0.16em] text-accent-soft uppercase">CareOS / Conclusion</p>
          <p className="mt-7 text-3xl leading-[1.3] font-medium tracking-[-0.04em] text-white sm:text-5xl">
            CareOS is more than a software concept.
          </p>
          <p className="mx-auto mt-6 max-w-3xl text-body-lg text-pretty text-white/65">
            It represents a structured approach to understanding organisations, designing business systems, and building platforms that can evolve with changing operational needs.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link className="focus-ring rounded-control bg-white px-5 py-3 text-sm font-medium text-ink" href="/work">Return to selected work</Link>
            <Link className="focus-ring rounded-control border border-white/20 px-5 py-3 text-sm font-medium text-white" href="/">Portfolio home</Link>
          </div>
        </motion.div>
      </SectionWrapper>
    </>
  )
}
