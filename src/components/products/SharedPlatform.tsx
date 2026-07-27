'use client'

import { motion } from 'framer-motion'
import { EditorialInsight } from '@/components/engineering/EditorialInsight'
import { revealItem } from '@/components/motion/presets'
import { Headline } from '@/components/shared/Headline'
import { SectionWrapper } from '@/components/shared/SectionWrapper'
import { sharedFoundations } from '@/domain/products/platform'

export function SharedPlatform() {
  return (
    <SectionWrapper
      as="section"
      className="border-b border-line bg-canvas py-[var(--space-section)]"
      id="why-one-platform"
    >
      <motion.div
        animate="visible"
        initial="hidden"
        variants={revealItem}
        viewport={{ once: true, amount: 0.3 }}
        whileInView="visible"
      >
        <Headline as="h2" eyebrow="Why One Platform?">
          Every application shares the same foundation.
        </Headline>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-pretty text-muted sm:text-lg">
          {sharedFoundations.join(', ')} — every application draws from the same source, so nothing ever
          drifts out of sync.
        </p>
      </motion.div>

      <motion.div
        animate="visible"
        className="mt-10 sm:mt-12"
        initial="hidden"
        variants={revealItem}
        viewport={{ once: true, amount: 0.3 }}
        whileInView="visible"
      >
        <EditorialInsight
          body="Business logic, data, and workflows all live in one shared foundation. Every application — present or future — builds on the same operational reality, instead of reinventing its own version of the truth."
          headline="One platform. Never duplicated."
        />
      </motion.div>
    </SectionWrapper>
  )
}
