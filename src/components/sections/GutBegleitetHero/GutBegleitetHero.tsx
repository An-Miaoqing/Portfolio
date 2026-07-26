'use client'

import { motion } from 'framer-motion'
import { revealGroup, revealItem } from '@/components/motion/presets'
import { CaseStudySwitcher } from '@/components/shared/CaseStudySwitcher'
import { CTAButton } from '@/components/shared/CTAButton'
import { SectionWrapper } from '@/components/shared/SectionWrapper'

const projectMetadata = [
  'UX Design',
  'React',
  'TypeScript',
  'Vite',
  'Vercel',
  'REST API',
  'Supabase PostgreSQL',
] as const

const projectMetrics = [
  'Business Analysis',
  'Information Architecture',
  'Production Website',
  'Live Project',
] as const

export function GutBegleitetHero() {
  return (
    <SectionWrapper
      as="section"
      id="top"
      className="relative min-h-[calc(100svh-var(--site-nav-height))] overflow-hidden border-b border-line bg-canvas"
    >
      <motion.div
        className="grid min-h-[calc(100svh-var(--site-nav-height))] items-center gap-12 py-14 sm:py-18 lg:grid-cols-[minmax(0,0.9fr)_minmax(32rem,1.2fr)] lg:gap-16 lg:py-20"
        variants={revealGroup}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={revealItem}>
          <CaseStudySwitcher current="gutbegleitet" />

          <p className="mb-6 font-mono text-xs font-medium tracking-[0.16em] text-accent uppercase sm:text-sm">
            Business Systems
          </p>

          <h1 className="max-w-3xl text-display font-medium text-balance">
            Gut Begleitet
          </h1>

          <p className="mt-5 max-w-2xl text-2xl leading-tight font-medium tracking-[-0.04em] text-muted sm:text-3xl">
            Digital Service Platform for Community Care
          </p>

          <p className="mt-8 max-w-[var(--container-copy)] text-body-lg text-pretty text-muted sm:mt-10">
            Digital transformation of an Austrian community care organisation — from business analysis and service design to UX architecture and production implementation.
          </p>

          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Project metadata">
            {projectMetadata.map((item) => (
              <li
                key={item}
                className="rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-xs text-muted shadow-control"
              >
                {item}
              </li>
            ))}
          </ul>

          <ul
            className="mt-3 flex flex-wrap gap-2"
            aria-label="Project metrics"
          >
            {projectMetrics.map((metric) => (
              <li
                key={metric}
                className="rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-xs text-muted shadow-control"
              >
                {metric}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3 sm:mt-12">
            <CTAButton
              href="https://careos-website-xi.vercel.app/"
              label="View Live Website"
              icon="external"
              external
            />
            <CTAButton
              href="https://github.com/An-Miaoqing/careos-website"
              label="View Source"
              icon="external"
              variant="secondary"
              external
            />
          </div>
        </motion.div>

        <motion.div variants={revealItem} className="min-w-0">
          <div className="overflow-hidden rounded-[1.35rem] border border-line bg-surface shadow-card">
            <div className="flex h-11 items-center gap-2 border-b border-line bg-surface-subtle px-4">
              <span className="size-2.5 rounded-full bg-[#ff6b6b]" aria-hidden="true" />
              <span className="size-2.5 rounded-full bg-[#f5bf4f]" aria-hidden="true" />
              <span className="size-2.5 rounded-full bg-[#61c454]" aria-hidden="true" />
              <div className="ml-3 min-w-0 flex-1 rounded-md border border-line bg-surface px-3 py-1 font-mono text-[0.65rem] text-muted">
                <span className="block truncate">careos-website-xi.vercel.app</span>
              </div>
            </div>

            <div className="relative aspect-[16/10] overflow-hidden bg-[#f5f1ea]">
              <iframe
                aria-label="Live desktop preview of the Gut Begleitet website"
                className="pointer-events-none absolute top-0 left-0 h-[250%] w-[250%] origin-top-left scale-[0.4] border-0 bg-white"
                loading="lazy"
                src="https://careos-website-xi.vercel.app/"
                tabIndex={-1}
                title="Gut Begleitet website preview"
              />
            </div>
          </div>

          <p className="mt-4 text-center font-mono text-xs tracking-[0.08em] text-muted uppercase">
            Live production build · Desktop view
          </p>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}
