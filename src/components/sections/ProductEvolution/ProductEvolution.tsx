'use client'

import { motion } from 'framer-motion'
import { revealItem } from '@/components/motion/presets'
import { Headline } from '@/components/shared/Headline'
import { ScrollIndicator } from '@/components/shared/ScrollIndicator'
import { SectionWrapper } from '@/components/shared/SectionWrapper'
import { ArchitectureStability } from './ArchitectureStability'
import { DesignPhilosophy } from './DesignPhilosophy'
import { EvolutionTimeline } from './EvolutionTimeline'
import { ExpansionMap } from './ExpansionMap'
import { FeatureEvolution } from './FeatureEvolution'
import { FutureIntegrations } from './FutureIntegrations'
import { PlatformMaturity } from './PlatformMaturity'

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

export function ProductEvolution() {
  return (
    <>
      <SectionWrapper
        id="product-evolution"
        className="chapter-screen border-b border-line bg-canvas py-[var(--space-section)]"
      >
        <motion.div
          variants={revealItem}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-end"
        >
          <Headline eyebrow="08 / Product Evolution">
            Designed to grow without starting over.
          </Headline>
          <p className="max-w-[var(--container-copy)] text-body-lg text-pretty text-muted lg:pb-1">
            CareOS is structured around stable business concepts rather than temporary features. As organisations evolve, new capabilities can be introduced while preserving the existing operational model.
          </p>
        </motion.div>
        <EvolutionTimeline />
        <ChapterContinue href="#platform-maturity" label="Platform maturity" />
      </SectionWrapper>

      <SectionWrapper
        id="platform-maturity"
        className="chapter-screen border-b border-line bg-surface py-[var(--space-section)]"
      >
        <PlatformMaturity />
        <ChapterContinue href="#feature-evolution" label="Feature evolution" />
      </SectionWrapper>

      <SectionWrapper
        id="feature-evolution"
        className="chapter-screen border-b border-line bg-canvas py-[var(--space-section)]"
      >
        <FeatureEvolution />
        <ChapterContinue href="#architectural-stability" label="Architectural stability" />
      </SectionWrapper>

      <SectionWrapper
        id="architectural-stability"
        className="chapter-screen border-b border-line bg-surface py-[var(--space-section)]"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <ArchitectureStability />
          <DesignPhilosophy />
        </div>
        <ChapterContinue href="#expansion-map" label="Expansion map" />
      </SectionWrapper>

      <SectionWrapper
        id="expansion-map"
        className="chapter-screen border-b border-line bg-canvas py-[var(--space-section)]"
      >
        <ExpansionMap />
        <ChapterContinue href="#future-integrations" label="Future integrations" />
      </SectionWrapper>

      <SectionWrapper
        id="future-integrations"
        className="chapter-screen border-b border-line bg-surface py-[var(--space-section)]"
      >
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <FutureIntegrations />
          <article className="rounded-panel border border-line bg-surface-subtle p-6 sm:p-8">
            <p className="font-mono text-xs font-medium tracking-[0.14em] text-accent uppercase">Evolution principle</p>
            <h2 className="mt-5 text-3xl leading-[1.2] font-medium tracking-[-0.04em] text-ink">
              Extend the platform. Preserve its operational reality.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              CareOS is intentionally extensible. Every future capability builds on the same lifecycle, domains, services and data instead of creating parallel systems.
            </p>
          </article>
        </div>
        <ChapterContinue href="#about-methodology" label="About & methodology" />
      </SectionWrapper>
    </>
  )
}
