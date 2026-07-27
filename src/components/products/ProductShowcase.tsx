'use client'

import { motion } from 'framer-motion'
import { revealItem } from '@/components/motion/presets'
import { Headline } from '@/components/shared/Headline'
import { SectionWrapper } from '@/components/shared/SectionWrapper'
import { products } from '@/domain/products/products'
import { ShowcaseCard } from './ShowcaseCard'

export function ProductShowcase() {
  return (
    <SectionWrapper
      as="section"
      className="border-b border-line bg-canvas py-[var(--space-section)]"
      id="product-showcase"
    >
      <motion.div
        animate="visible"
        initial="hidden"
        variants={revealItem}
        viewport={{ once: true, amount: 0.3 }}
        whileInView="visible"
      >
        <Headline as="h2" eyebrow="Product Showcase">
          A closer look at each application.
        </Headline>
      </motion.div>

      <div className="mt-14 space-y-20 sm:mt-16 sm:space-y-24">
        {products.map((product, index) => (
          <motion.div
            animate="visible"
            initial="hidden"
            key={product.id}
            variants={revealItem}
            viewport={{ once: true, amount: 0.2 }}
            whileInView="visible"
          >
            <ShowcaseCard product={product} reverse={index % 2 === 1} />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
