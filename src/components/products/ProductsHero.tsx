'use client'

import { motion } from 'framer-motion'
import { revealItem } from '@/components/motion/presets'
import { Headline } from '@/components/shared/Headline'
import { SectionWrapper } from '@/components/shared/SectionWrapper'

export function ProductsHero() {
  return (
    <SectionWrapper
      as="section"
      className="relative overflow-hidden border-b border-line bg-canvas py-[var(--space-section)]"
      id="products-hero"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[5%] right-[-10rem] size-[40rem] rounded-full blur-[80px]"
        style={{
          background:
            'conic-gradient(from 210deg, rgba(67, 111, 225, 0.2), rgba(137, 92, 230, 0.22), rgba(235, 111, 179, 0.15), rgba(67, 111, 225, 0.05))',
        }}
      />

      <motion.div
        animate="visible"
        className="relative"
        initial="hidden"
        variants={revealItem}
        viewport={{ once: true, amount: 0.3 }}
        whileInView="visible"
      >
        <Headline as="h1" size="display">
          Experience <span className="gradient-text">CareOS</span>
        </Headline>

        <div
          className="mt-6 max-w-xl text-body-lg text-pretty text-muted"
          style={{ lineHeight: 1.8 }}
        >
          <p>One business platform.</p>
          <p>Multiple applications.</p>
          <p>Designed for real-world operations.</p>
        </div>

        <div className="hero__actions mt-10">
          <a className="button button--primary" href="#experience-careos">
            Experience the Platform <span aria-hidden="true">↓</span>
          </a>
          <a className="button button--secondary" href="/case-study">
            View Case Study
          </a>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
