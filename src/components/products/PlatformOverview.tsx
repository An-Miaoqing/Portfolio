'use client'

import { motion } from 'framer-motion'
import { revealItem } from '@/components/motion/presets'
import { Headline } from '@/components/shared/Headline'
import { SectionWrapper } from '@/components/shared/SectionWrapper'
import { PlatformDiagram } from './PlatformDiagram'

export function PlatformOverview() {
  return (
    <SectionWrapper
      as="section"
      className="border-b border-line bg-canvas py-[var(--space-section)]"
      id="meet-the-platform"
    >
      <motion.div
        animate="visible"
        initial="hidden"
        variants={revealItem}
        viewport={{ once: true, amount: 0.3 }}
        whileInView="visible"
      >
        <Headline as="h2" eyebrow="Meet the Platform">
          Every application belongs to one CareOS platform.
        </Headline>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-pretty text-muted sm:text-lg">
          The website, management workspace, employee workspace, and a planned client portal are all
          different doors into the same system — not separate products built in isolation.
        </p>
      </motion.div>

      <motion.div
        animate="visible"
        className="mt-12 sm:mt-14"
        initial="hidden"
        variants={revealItem}
        viewport={{ once: true, amount: 0.3 }}
        whileInView="visible"
      >
        <PlatformDiagram />
      </motion.div>
    </SectionWrapper>
  )
}
