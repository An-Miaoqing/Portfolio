'use client'

import { motion } from 'framer-motion'
import { revealItem } from '@/components/motion/presets'
import { Headline } from '@/components/shared/Headline'
import { SectionWrapper } from '@/components/shared/SectionWrapper'
import { EvolutionTimeline } from './EvolutionTimeline'
import { ExpansionMap } from './ExpansionMap'
import { FeatureEvolution } from './FeatureEvolution'

export function ProductEvolution() {
  return (
    <>
      <SectionWrapper
        id="product-evolution"
        className="bg-canvas py-14 sm:py-16"
      >
        <motion.div
          variants={revealItem}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-end"
        >
          <Headline eyebrow="07 / Product Evolution">
            Designed to grow without starting over
          </Headline>
          <p className="max-w-[var(--container-copy)] text-body-lg text-pretty text-muted lg:pb-1">
            CareOS is structured around stable business concepts rather than temporary features. As organisations evolve, new capabilities can be introduced while preserving the existing operational model.
          </p>
        </motion.div>
        <EvolutionTimeline />
      </SectionWrapper>

      <SectionWrapper
        id="feature-evolution"
        className="bg-canvas py-14 sm:py-16"
      >
        <FeatureEvolution />
      </SectionWrapper>

      <SectionWrapper
        id="expansion-map"
        className="bg-canvas py-14 sm:py-16"
      >
        <ExpansionMap />
      </SectionWrapper>
    </>
  )
}
