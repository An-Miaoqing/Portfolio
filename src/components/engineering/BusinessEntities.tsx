'use client'

import { motion } from 'framer-motion'
import { revealItem } from '@/components/motion/presets'
import { Headline } from '@/components/shared/Headline'
import { SectionWrapper } from '@/components/shared/SectionWrapper'
import { DomainEntityExplorer } from './DomainEntityExplorer'
import { EditorialInsight } from './EditorialInsight'
import { RelationshipPreview } from './RelationshipPreview'

export function BusinessEntities() {
  return (
    <SectionWrapper
      as="section"
      className="border-b border-line bg-canvas py-[var(--space-section)]"
      id="business-entities"
    >
      <motion.div
        animate="visible"
        initial="hidden"
        variants={revealItem}
        viewport={{ once: true, amount: 0.3 }}
        whileInView="visible"
      >
        <Headline as="h2" eyebrow="Business Entities">
          From business concepts to data structures.
        </Headline>

        <div className="mt-8 max-w-[720px] space-y-5 text-base leading-relaxed text-pretty text-ink sm:text-lg">
          <p>
            Business domains define responsibilities. Business entities define the information each
            domain needs to manage.
          </p>
          <p>
            People, organisations, bookings, visits, invoices, and payments already exist within the
            business. The database simply gives those concepts a consistent structure.
          </p>
          <p>
            Rather than designing tables first, CareOS begins by identifying the real-world entities
            that make up the organisation.
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
        <DomainEntityExplorer />
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
          How the entities connect
        </p>
        <div className="mt-8">
          <RelationshipPreview />
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
          body="A database is not a collection of isolated tables. Its value comes from the relationships between business entities. Understanding these relationships ensures that every workflow, report, and business rule is built upon a consistent representation of the organisation."
          headline="Relationships matter more than tables."
        />
      </motion.div>
    </SectionWrapper>
  )
}
