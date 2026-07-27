'use client'

import { motion } from 'framer-motion'
import { revealGroup, revealItem } from '@/components/motion/presets'
import { Headline } from '@/components/shared/Headline'
import { SectionWrapper } from '@/components/shared/SectionWrapper'

const paths = [
  {
    eyebrow: 'Business Perspective',
    description: 'See the real-world story — stakeholders, service design, and outcomes.',
    href: '/case-study',
    cta: 'CareOS Case Study',
  },
  {
    eyebrow: 'Technical Perspective',
    description: 'See how the backend is architected — domains, entities, services, and APIs.',
    href: '/engineering',
    cta: 'Engineering',
  },
] as const

export function ProductsCTA() {
  return (
    <SectionWrapper as="section" className="bg-canvas py-[var(--space-section)]" id="continue-exploring">
      <motion.div
        animate="visible"
        initial="hidden"
        variants={revealItem}
        viewport={{ once: true, amount: 0.3 }}
        whileInView="visible"
      >
        <Headline as="h2" eyebrow="Continue Exploring">
          See the platform from every angle.
        </Headline>
      </motion.div>

      <motion.div
        animate="visible"
        className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2"
        initial="hidden"
        variants={revealGroup}
        viewport={{ once: true, amount: 0.2 }}
        whileInView="visible"
      >
        {paths.map((path) => (
          <motion.a
            className="focus-ring group flex flex-col justify-between gap-8 rounded-panel border border-line bg-surface p-8 shadow-card transition-colors duration-300 hover:border-accent sm:p-10"
            href={path.href}
            key={path.href}
            variants={revealItem}
          >
            <div>
              <p className="font-mono text-xs font-medium tracking-[0.14em] text-accent uppercase">
                {path.eyebrow}
              </p>
              <p className="mt-4 text-xl leading-snug font-medium tracking-[-0.02em] text-ink sm:text-2xl">
                {path.description}
              </p>
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-ink transition-transform duration-300 group-hover:translate-x-1">
              {path.cta}
              <span aria-hidden="true">→</span>
            </span>
          </motion.a>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
