'use client'

import { motion } from 'framer-motion'
import { revealItem } from '@/components/motion/presets'
import { Headline } from '@/components/shared/Headline'
import { ScrollIndicator } from '@/components/shared/ScrollIndicator'
import { SectionWrapper } from '@/components/shared/SectionWrapper'
import { Tooltip } from '@/components/shared/Tooltip'
import { PlatformDiagram } from './PlatformDiagram'

export function PlatformVision() {
  return (
    <SectionWrapper
      id="platform-vision"
      className="chapter-screen border-b border-line bg-surface py-[var(--space-section)]"
    >
      <motion.div
        variants={revealItem}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="mb-12 grid items-end gap-8 lg:mb-8 lg:grid-cols-[1.35fr_0.65fr]"
      >
        <div>
          <Headline eyebrow="02 / Platform vision">One platform. Five connected business domains.</Headline>
        </div>

        <div className="lg:pb-1">
          <p className="max-w-[var(--container-copy)] text-body-lg text-pretty text-muted">
            CareOS creates one operational model across customer management, operations, workforce, finance and reporting.
          </p>

          <div className="mt-5">
            <Tooltip content="Hover, focus or select a domain to inspect the responsibilities it brings into the shared platform.">
              <span aria-hidden="true" className="grid size-5 place-items-center rounded-full border border-line-strong font-mono text-[0.65rem]">
                i
              </span>
              Interaction model
            </Tooltip>
          </div>
        </div>
      </motion.div>

      <PlatformDiagram />

      <motion.div
        variants={revealItem}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        className="mt-10 lg:mt-6"
      >
        <ScrollIndicator href="#operational-lifecycle" label="Operational lifecycle" />
      </motion.div>
    </SectionWrapper>
  )
}
