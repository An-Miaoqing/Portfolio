'use client'

import { motion } from 'framer-motion'
import { revealItem } from '@/components/motion/presets'
import { Headline } from '@/components/shared/Headline'
import { SectionWrapper } from '@/components/shared/SectionWrapper'
import { ApplicationApiExplorer } from './ApplicationApiExplorer'
import { EditorialInsight } from './EditorialInsight'

export function PlatformApis() {
  return (
    <SectionWrapper
      as="section"
      className="bg-canvas py-14 sm:py-16"
      id="platform-apis"
    >
      <motion.div
        animate="visible"
        initial="hidden"
        variants={revealItem}
        viewport={{ once: true, amount: 0.3 }}
        whileInView="visible"
      >
        <Headline as="h2" eyebrow="Platform APIs">
          A single platform. Multiple applications.
        </Headline>

        <div className="mt-8 max-w-[720px] space-y-5 text-base leading-relaxed text-pretty text-ink sm:text-lg">
          <p>Business services define behaviour. Platform APIs expose that behaviour to every application.</p>
          <p>
            Rather than allowing each application to implement its own business logic, CareOS provides a
            shared interface between the frontend experiences and the backend services. This ensures that
            the website, management workspace, employee workspace, and future client portal all operate
            consistently on the same business rules.
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
        <ApplicationApiExplorer />
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
          body="Applications should communicate through well-defined platform interfaces rather than accessing data directly. This keeps business rules centralised and allows every frontend experience to evolve independently while sharing the same operational foundation."
          headline="APIs expose capabilities, not databases."
        />
      </motion.div>
    </SectionWrapper>
  )
}
