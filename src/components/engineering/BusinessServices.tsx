'use client'

import { motion } from 'framer-motion'
import { revealItem } from '@/components/motion/presets'
import { Headline } from '@/components/shared/Headline'
import { SectionWrapper } from '@/components/shared/SectionWrapper'
import { BusinessOperationTimeline } from './BusinessOperationTimeline'
import { EditorialInsight } from './EditorialInsight'
import { ServiceExplorer } from './ServiceExplorer'

export function BusinessServices() {
  return (
    <SectionWrapper
      as="section"
      className="border-b border-line bg-canvas py-[var(--space-section)]"
      id="business-services"
    >
      <motion.div
        animate="visible"
        initial="hidden"
        variants={revealItem}
        viewport={{ once: true, amount: 0.3 }}
        whileInView="visible"
      >
        <Headline as="h2" eyebrow="Business Services">
          Business logic lives in services.
        </Headline>

        <div className="mt-8 max-w-[720px] space-y-5 text-base leading-relaxed text-pretty text-ink sm:text-lg">
          <p>A relational database stores information, but services define behaviour.</p>
          <p>
            Every important business operation—creating a booking, assigning an employee, generating an
            invoice, or completing a visit—is coordinated through business services. Each service applies
            business rules, validates information, updates related entities, and keeps the platform
            consistent.
          </p>
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
        <ServiceExplorer />
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
          How a business operation flows
        </p>
        <div className="mt-8">
          <BusinessOperationTimeline />
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
          body="Business rules should live in services rather than user interfaces or databases. Centralising behaviour keeps every application consistent, regardless of whether the request comes from the website, the management workspace, or the employee workspace."
          headline="Services protect business rules."
        />
      </motion.div>
    </SectionWrapper>
  )
}
