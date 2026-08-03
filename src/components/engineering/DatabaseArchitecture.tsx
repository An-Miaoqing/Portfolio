'use client'

import { motion } from 'framer-motion'
import { revealItem } from '@/components/motion/presets'
import { Headline } from '@/components/shared/Headline'
import { SectionWrapper } from '@/components/shared/SectionWrapper'
import { DatabaseFactGrid } from './DatabaseFactGrid'
import { EditorialInsight } from './EditorialInsight'

export function DatabaseArchitecture() {
  return (
    <SectionWrapper
      as="section"
      className="bg-canvas py-14 sm:py-16"
      id="database-architecture"
    >
      <motion.div
        animate="visible"
        initial="hidden"
        variants={revealItem}
        viewport={{ once: true, amount: 0.3 }}
        whileInView="visible"
      >
        <Headline as="h2" eyebrow="Database Architecture">
          Built on PostgreSQL. Structured for the business.
        </Headline>

        <div className="mt-8 max-w-[720px] space-y-5 text-base leading-relaxed text-pretty text-ink sm:text-lg">
          <p>
            The database is not designed table-first. It is the physical expression of the business
            domains, entities, and relationships already defined above.
          </p>
          <p>
            CareOS runs on managed PostgreSQL, accessed exclusively through Prisma. The schema has grown
            to 37 models and 17 enums across 25 migrations, with 144 indexes tuned for a multi-tenant
            access pattern. Concurrency-sensitive operations run inside serializable transactions with
            automatic retry, and tenant isolation is enforced in code rather than left to database-level
            row security.
          </p>
        </div>
      </motion.div>

      <motion.div
        animate="visible"
        className="mt-16 sm:mt-20"
        initial="hidden"
        variants={revealItem}
        viewport={{ once: true, amount: 0.2 }}
        whileInView="visible"
      >
        <p className="text-center font-mono text-xs font-medium tracking-[0.14em] text-accent uppercase">
          The database, in numbers
        </p>
        <h3 className="mt-3 text-center text-xl leading-tight font-medium tracking-[-0.03em] text-ink sm:text-2xl">
          Structure and scale, not assumptions.
        </h3>
        <div className="mt-8">
          <DatabaseFactGrid />
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
          body="Constraints, indexes, and referential integrity keep the data itself correct. Everything about how that data changes — validation, business rules, audit trails — is deliberately kept out of the database and inside the platform's service layer, where it can be tested, versioned, and reasoned about like any other code."
          headline="The database enforces structure. The service layer enforces behaviour."
        />
      </motion.div>
    </SectionWrapper>
  )
}
