'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { revealItem } from '@/components/motion/presets'
import { Headline } from '@/components/shared/Headline'
import { SectionWrapper } from '@/components/shared/SectionWrapper'
import { MethodologyFlow } from './MethodologyFlow'
import { SkillsOverview } from './SkillsOverview'

export function AboutMethodology() {
  return (
    <>
      <SectionWrapper
        id="about-methodology"
        className="bg-canvas py-14 sm:py-16"
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

        <div className="mt-14 lg:mt-16">
          <SkillsOverview />
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="case-study-conclusion"
        className="bg-accent py-20 text-white sm:py-24"
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
            <Link className="focus-ring rounded-control bg-[#7759e8] px-5 py-3 text-sm font-medium text-white" href="/case-study/gutbegleitet">View another case study</Link>
            <Link className="focus-ring rounded-control border border-white/20 px-5 py-3 text-sm font-medium text-white" href="/">Portfolio home</Link>
          </div>
        </motion.div>
      </SectionWrapper>
    </>
  )
}
