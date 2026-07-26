'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { revealItem } from '@/components/motion/presets'
import { SectionWrapper } from '@/components/shared/SectionWrapper'

export function EngineeringClosing() {
  return (
    <SectionWrapper as="section" className="bg-ink py-24 text-white sm:py-32" id="engineering-closing">
      <motion.div
        animate="visible"
        className="mx-auto max-w-3xl text-center"
        initial="hidden"
        variants={revealItem}
        viewport={{ once: true, amount: 0.5 }}
        whileInView="visible"
      >
        <p className="font-mono text-sm font-medium tracking-[0.16em] text-accent-soft uppercase">
          Engineering / Conclusion
        </p>
        <p className="mt-7 text-3xl leading-[1.3] font-medium tracking-[-0.04em] text-white sm:text-5xl">
          Engineering is only one perspective.
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-body-lg text-pretty text-white/65">
          CareOS was designed by combining business analysis, systems thinking, process design, data
          modelling, and software engineering into a single operational platform.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            className="focus-ring rounded-control bg-white px-5 py-3 text-sm font-medium text-ink"
            href="/case-study"
          >
            Return to CareOS Case Study
          </Link>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
