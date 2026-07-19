'use client'

import { motion } from 'framer-motion'
import { revealGroup, revealItem } from '@/components/motion/presets'
import { CTAButton } from '@/components/shared/CTAButton'
import { Headline } from '@/components/shared/Headline'
import { ScrollIndicator } from '@/components/shared/ScrollIndicator'
import { SectionWrapper } from '@/components/shared/SectionWrapper'

export function Hero() {
  return (
    <SectionWrapper
      as="section"
      id="top"
      className="relative min-h-[100svh] overflow-hidden border-b border-line bg-canvas"
    >
      <motion.div
        className="flex min-h-[100svh] flex-col"
        variants={revealGroup}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={revealItem}
          className="flex items-center justify-between border-b border-line py-6 font-mono text-xs tracking-[0.14em] text-muted uppercase"
        >
          <span>CareOS</span>
          <span>Enterprise systems / 01</span>
        </motion.div>

        <div className="flex flex-1 items-center py-16 sm:py-20">
          <motion.div variants={revealItem} className="max-w-5xl">
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
          <ScrollIndicator />
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}
