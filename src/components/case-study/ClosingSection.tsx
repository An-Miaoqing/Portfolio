'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { revealItem } from '@/components/motion/presets'
import { ContactCard } from '@/components/sections/AboutMethodology/ContactCard'
import { SectionWrapper } from '@/components/shared/SectionWrapper'

export type ClosingContent = {
  liveUrl: string
  statement: string
  supporting: string
}

type ClosingSectionProps = {
  content: ClosingContent
  id?: string
}

export function ClosingSection({ content, id = 'closing' }: ClosingSectionProps) {
  return (
    <>
      <SectionWrapper
        as="section"
        id={id}
        className="bg-ink py-24 text-white sm:py-32"
      >
        <motion.div
          variants={revealItem}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="font-mono text-sm font-medium tracking-[0.16em] text-accent-soft uppercase">
            Gut Begleitet / Conclusion
          </p>
          <p className="mt-7 text-3xl leading-[1.3] font-medium tracking-[-0.04em] text-white sm:text-5xl">
            {content.statement}
          </p>
          <p className="mx-auto mt-6 max-w-3xl text-body-lg text-pretty text-white/65">
            {content.supporting}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              className="focus-ring rounded-control bg-white px-5 py-3 text-sm font-medium text-ink"
              href={content.liveUrl}
              rel="noreferrer"
              target="_blank"
            >
              View live website
            </a>
            <Link
              className="focus-ring rounded-control border border-white/20 px-5 py-3 text-sm font-medium text-white"
              href="/case-study"
            >
              Explore the CareOS platform
            </Link>
            <Link
              className="focus-ring rounded-control border border-white/20 px-5 py-3 text-sm font-medium text-white"
              href="/work"
            >
              Return to selected work
            </Link>
          </div>
        </motion.div>
      </SectionWrapper>

      <SectionWrapper
        as="section"
        className="border-b border-line bg-canvas py-[var(--space-section)]"
      >
        <ContactCard />
      </SectionWrapper>
    </>
  )
}
