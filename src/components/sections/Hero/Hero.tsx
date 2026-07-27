'use client'

import { motion } from 'framer-motion'
import { revealGroup, revealItem } from '@/components/motion/presets'
import { CTAButton } from '@/components/shared/CTAButton'
import { CaseStudySwitcher } from '@/components/shared/CaseStudySwitcher'
import { Headline } from '@/components/shared/Headline'
import { ScrollIndicator } from '@/components/shared/ScrollIndicator'
import { SectionWrapper } from '@/components/shared/SectionWrapper'

export function Hero() {
  return (
    <SectionWrapper
      as="section"
      id="top"
      className="relative min-h-[calc(100svh-var(--site-nav-height))] overflow-hidden border-b border-line bg-canvas"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[5%] right-[-10rem] size-[40rem] rounded-full blur-[80px]"
        style={{
          background:
            'conic-gradient(from 210deg, rgba(67, 111, 225, 0.2), rgba(137, 92, 230, 0.22), rgba(235, 111, 179, 0.15), rgba(67, 111, 225, 0.05))',
        }}
      />

      <motion.div
        className="relative flex min-h-[calc(100svh-var(--site-nav-height))] flex-col"
        variants={revealGroup}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-1 items-center py-16 sm:py-20">
          <motion.div variants={revealItem} className="max-w-5xl">
            <CaseStudySwitcher current="careos" />

            <Headline as="h1" eyebrow="Enterprise platform" size="display">
              <span className="block">Enterprise Platform</span>
              <span className="block text-muted">for Service Organisations.</span>
            </Headline>

            <p className="mt-8 max-w-[var(--container-copy)] text-body-lg text-pretty text-muted sm:mt-10">
              Connecting Customer Management, Operations, Workforce, Finance and Reporting through one operational platform.
            </p>

            <div className="mt-10 sm:mt-12">
              <CTAButton href="#platform-vision" label="Explore CareOS" />
            </div>
          </motion.div>
        </div>

        <motion.div variants={revealItem}>
          <ScrollIndicator className="mb-8" />
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}
