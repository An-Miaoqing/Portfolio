'use client'

import { motion } from 'framer-motion'
import { revealGroup, revealItem } from '@/components/motion/presets'
import { Headline } from '@/components/shared/Headline'
import { SectionWrapper } from '@/components/shared/SectionWrapper'
import { demos } from '@/domain/products/demos'
import { products } from '@/domain/products/products'
import { DemoCard } from './DemoCard'

export function ExperienceCenter() {
  return (
    <SectionWrapper
      as="section"
      className="border-b border-line bg-canvas py-[var(--space-section)]"
      id="experience-careos"
    >
      <motion.div
        animate="visible"
        initial="hidden"
        variants={revealItem}
        viewport={{ once: true, amount: 0.3 }}
        whileInView="visible"
      >
        <Headline as="h2" eyebrow="Try It Yourself">
          Experience <span className="gradient-text">CareOS</span> firsthand
        </Headline>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-pretty text-muted sm:text-lg">
          Scan a QR code or launch a live demo directly — no sales call required. Every application below
          runs on the same real platform.
        </p>
      </motion.div>

      <motion.div
        animate="visible"
        className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 xl:grid-cols-4"
        initial="hidden"
        variants={revealGroup}
        viewport={{ once: true, amount: 0.15 }}
        whileInView="visible"
      >
        {products.map((product) => {
          const demo = demos.find((entry) => entry.productId === product.id)!
          return (
            <motion.div key={product.id} variants={revealItem}>
              <DemoCard demo={demo} product={product} />
            </motion.div>
          )
        })}
      </motion.div>
    </SectionWrapper>
  )
}
