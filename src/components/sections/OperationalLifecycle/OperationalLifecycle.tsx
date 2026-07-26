'use client'

import { motion } from 'framer-motion'
import { LifecycleCanvas, useWorkflowEngine } from '@/components/lifecycle'
import { revealItem } from '@/components/motion/presets'
import { Headline } from '@/components/shared/Headline'
import { ScrollIndicator } from '@/components/shared/ScrollIndicator'
import { SectionWrapper } from '@/components/shared/SectionWrapper'
import { careOSLifecycle } from '@/domain/lifecycle/careos-lifecycle'

export function OperationalLifecycle() {
  const engine = useWorkflowEngine(careOSLifecycle)

  return (
    <SectionWrapper id="operational-lifecycle" className="chapter-screen border-b border-line bg-canvas py-[var(--space-section)]">
        <motion.div
          variants={revealItem}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="mb-12 grid gap-8 lg:mb-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-end"
        >
          <div>
            <Headline eyebrow="03 / Operational lifecycle">
              One operational workflow.<br />Many connected responsibilities.
            </Headline>
          </div>
          <p className="max-w-[var(--container-copy)] text-body-lg text-pretty text-muted lg:pb-1">
            Every service moves through a structured lifecycle — from customer request to workforce coordination, financial settlement and business reporting.
          </p>
        </motion.div>

      <LifecycleCanvas engine={engine} />

      <motion.div variants={revealItem} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.6 }} className="mt-10 flex items-start gap-4 border-t border-line pt-6 lg:mt-6 lg:pt-4">
        <span aria-hidden="true" className="mt-2 size-2 shrink-0 rounded-full bg-accent" />
        <p className="max-w-2xl text-base leading-relaxed text-muted">Business insight continuously improves future planning, operations and customer experience.</p>
      </motion.div>

      <motion.div variants={revealItem} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.8 }} className="mt-8 lg:mt-4">
        <ScrollIndicator href="#business-domains" label="Business domains" />
      </motion.div>
    </SectionWrapper>
  )
}
