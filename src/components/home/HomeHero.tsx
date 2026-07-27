'use client'

import { motion } from 'framer-motion'
import { revealItem } from '@/components/motion/presets'
import { Headline } from '@/components/shared/Headline'
import { SectionWrapper } from '@/components/shared/SectionWrapper'
import {
  heroBridge,
  heroCta,
  heroEyebrow,
  heroHeadingLines,
  heroLeadIn,
  heroSecondaryCta,
} from '@/domain/home/hero'

type SystemModelIconName = 'business' | 'data' | 'process' | 'technology'

function SystemModelIcon({ name }: { name: SystemModelIconName }) {
  const common = {
    className: 'system-model__icon',
    viewBox: '0 0 24 24',
    'aria-hidden': true,
    focusable: false,
  }

  if (name === 'business') {
    return (
      <svg {...common}>
        <path d="M4 8.5h16a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 18v-8A1.5 1.5 0 0 1 4 8.5Z" />
        <path d="M9 8.5V6.8A1.8 1.8 0 0 1 10.8 5h2.4A1.8 1.8 0 0 1 15 6.8v1.7" />
        <path d="M2.5 13.5h19" />
      </svg>
    )
  }

  if (name === 'process') {
    return (
      <svg {...common}>
        <path d="M4 12a8 8 0 0 1 13.66-5.66M20 12a8 8 0 0 1-13.66 5.66" />
        <path d="M17.5 3.5v3.5H14" />
        <path d="M6.5 20.5V17H10" />
      </svg>
    )
  }

  if (name === 'data') {
    return (
      <svg {...common}>
        <ellipse cx="12" cy="6" rx="7.5" ry="3" />
        <path d="M4.5 6v5.5c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3V6" />
        <path d="M4.5 11.5V17c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3v-5.5" />
      </svg>
    )
  }

  return (
    <svg {...common}>
      <rect x="7" y="7" width="10" height="10" rx="1.6" />
      <rect x="10" y="10" width="4" height="4" rx="0.6" />
      <path d="M9.5 3.5v3M12 3.5v3M14.5 3.5v3M9.5 17.5v3M12 17.5v3M14.5 17.5v3M3.5 9.5h3M3.5 12h3M3.5 14.5h3M17.5 9.5h3M17.5 12h3M17.5 14.5h3" />
    </svg>
  )
}

function SystemModel() {
  return (
    <div
      className="system-model"
      aria-label="A visual model connecting business, processes, data and technology"
    >
      <div className="system-model__node system-model__node--business">
        <SystemModelIcon name="business" />
        <span>Business</span>
      </div>
      <div className="system-model__node system-model__node--process">
        <SystemModelIcon name="process" />
        <span>Processes</span>
      </div>
      <div className="system-model__node system-model__node--data">
        <SystemModelIcon name="data" />
        <span>Data</span>
      </div>
      <div className="system-model__node system-model__node--technology">
        <SystemModelIcon name="technology" />
        <span>Technology</span>
      </div>
      <div className="system-model__core">SYSTEM</div>
      <span className="system-model__line system-model__line--vertical" aria-hidden="true" />
      <span className="system-model__line system-model__line--horizontal" aria-hidden="true" />
      <span className="system-model__connection system-model__connection--business" aria-hidden="true" />
      <span className="system-model__connection system-model__connection--process" aria-hidden="true" />
      <span className="system-model__connection system-model__connection--data" aria-hidden="true" />
      <span className="system-model__connection system-model__connection--technology" aria-hidden="true" />
    </div>
  )
}

export function HomeHero() {
  return (
    <SectionWrapper as="section" className="hero" id="top">
      <motion.div
        animate="visible"
        className="hero__grid"
        initial="hidden"
        variants={revealItem}
        viewport={{ once: true, amount: 0.3 }}
        whileInView="visible"
      >
        <div className="hero__content">
          <Headline as="h1" eyebrow={heroEyebrow} size="display">
            {heroHeadingLines.map((line) => {
              const toneClass =
                line.tone === 'gradient'
                  ? 'gradient-text'
                  : line.tone === 'indigo'
                    ? 'hero__indigo-text'
                    : 'hero__dark-text'

              return (
                <span className={`hero__heading-line ${toneClass}`} key={line.text}>
                  {line.text}
                </span>
              )
            })}
          </Headline>

          <p
            className="mt-5 max-w-[var(--container-copy)] text-body-lg text-pretty text-muted sm:mt-6"
            style={{ lineHeight: 1.8 }}
          >
            {heroLeadIn}
          </p>

          <div className="hero__actions mt-8 sm:mt-9">
            <a className="button button--primary" href={heroCta.href}>
              {heroCta.label} <span aria-hidden="true">↓</span>
            </a>
            <a className="button button--secondary" href={heroSecondaryCta.href}>
              {heroSecondaryCta.label}
            </a>
          </div>

          <p className="hero__bridge">{heroBridge}</p>
        </div>

        <SystemModel />
      </motion.div>
    </SectionWrapper>
  )
}
