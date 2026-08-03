'use client'

import { motion } from 'framer-motion'
import { revealItem } from '@/components/motion/presets'
import { Headline } from '@/components/shared/Headline'
import { SectionWrapper } from '@/components/shared/SectionWrapper'
import { ArchitectureSummary } from './ArchitectureSummary'
import { EditorialInsight } from './EditorialInsight'
import { PrincipleGrid } from './PrincipleGrid'

export function ArchitecturePrinciples() {
  return (
    <SectionWrapper
      as="section"
      className="bg-canvas py-14 sm:py-16"
      id="architecture-principles"
    >
      <motion.div
        animate="visible"
        initial="hidden"
        variants={revealItem}
        viewport={{ once: true, amount: 0.3 }}
        whileInView="visible"
      >
        <Headline as="h2" eyebrow="Architecture Principles">
          Design decisions that shape the platform.
        </Headline>

        <div className="mt-8 max-w-[720px] space-y-5 text-base leading-relaxed text-pretty text-ink sm:text-lg">
          <p>Every architectural decision reflects a trade-off.</p>
          <p>
            Rather than optimising for short-term implementation speed, CareOS is designed around
            principles that support long-term maintainability, consistency, and business evolution.
          </p>
          <p>These principles guide every layer of the platform—from business modelling to application interfaces.</p>
        </div>
      </motion.div>

      <motion.div
        animate="visible"
        className="mt-14 sm:mt-16"
        initial="hidden"
        variants={revealItem}
        viewport={{ once: true, amount: 0.2 }}
        whileInView="visible"
      >
        <PrincipleGrid />
      </motion.div>

      <motion.div
        animate="visible"
        className="mt-16 sm:mt-20"
        initial="hidden"
        variants={revealItem}
        viewport={{ once: true, amount: 0.3 }}
        whileInView="visible"
      >
        <p className="text-center font-mono text-xs font-medium tracking-[0.14em] text-accent uppercase">
          How the platform is layered
        </p>
        <div className="mt-8">
          <ArchitectureSummary />
        </div>
      </motion.div>

      <motion.div
        animate="visible"
        className="mt-16 sm:mt-20"
        initial="hidden"
        variants={revealItem}
        viewport={{ once: true, amount: 0.3 }}
        whileInView="visible"
      >
        <EditorialInsight
          body="Well-designed systems are easier to understand, maintain, and extend. By aligning software structure with business structure, the platform remains resilient as organisations, teams, and requirements evolve."
          headline="Architecture is an investment."
        />
      </motion.div>
    </SectionWrapper>
  )
}
