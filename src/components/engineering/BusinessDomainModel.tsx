'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { revealItem } from '@/components/motion/presets'
import { Headline } from '@/components/shared/Headline'
import { SectionWrapper } from '@/components/shared/SectionWrapper'
import {
  type BusinessDomainId,
  businessDomainModel,
} from '@/domain/engineering/domain-model'
import { DomainExplanation } from './DomainExplanation'
import { DomainNode } from './DomainNode'
import { DomainRelationshipFlow } from './DomainRelationshipFlow'
import { EditorialInsight } from './EditorialInsight'
import { EntityPreview } from './EntityPreview'
import { NextChapterTransition } from './NextChapterTransition'

const ACCENT = '#176b4d'
const IDLE_LINE = '#bdc7c0'
const BLOB_RADIUS = '44% 56% 52% 48% / 52% 46% 56% 44%'

const CORE_SHADOW_REST = 'inset 0 0 24px rgba(255, 255, 255, 0.06), 0 16px 40px rgba(31, 41, 55, 0.28)'
const CORE_SHADOW_REACT = 'inset 0 0 24px rgba(255, 255, 255, 0.1), 0 22px 56px rgba(23, 107, 77, 0.4)'

const DOMAIN_POSITIONS: Record<BusinessDomainId, { x: number; y: number }> = {
  customer: { x: 50, y: 12 },
  reporting: { x: 86, y: 38 },
  workforce: { x: 72, y: 81 },
  finance: { x: 28, y: 81 },
  operations: { x: 14, y: 38 },
}

function radialPath(x: number, y: number) {
  const dx = 50 - x
  const dy = 50 - y
  const length = Math.sqrt(dx * dx + dy * dy) || 1
  const midX = (x + 50) / 2
  const midY = (y + 50) / 2
  const offset = 9
  const controlX = midX + (-dy / length) * offset
  const controlY = midY + (dx / length) * offset
  return `M ${x} ${y} Q ${controlX} ${controlY} 50 50`
}

export function BusinessDomainModel() {
  const [selected, setSelected] = useState<BusinessDomainId>('operations')
  const [isReacting, setIsReacting] = useState(false)
  const reactTimer = useRef<number | undefined>(undefined)

  const handleSelect = (id: BusinessDomainId) => {
    setSelected(id)
    setIsReacting(true)
    if (reactTimer.current) window.clearTimeout(reactTimer.current)
    reactTimer.current = window.setTimeout(() => setIsReacting(false), 700)
  }

  useEffect(() => {
    return () => {
      if (reactTimer.current) window.clearTimeout(reactTimer.current)
    }
  }, [])

  const activeDomain = businessDomainModel.find((domain) => domain.id === selected)!
  const dependsOnNames = activeDomain.dependsOn.map(
    (id) => businessDomainModel.find((domain) => domain.id === id)?.name ?? id,
  )

  return (
    <SectionWrapper
      as="section"
      className="border-b border-line bg-canvas py-[var(--space-section)]"
      id="business-domain-model"
    >
      <motion.div
        animate="visible"
        initial="hidden"
        variants={revealItem}
        viewport={{ once: true, amount: 0.3 }}
        whileInView="visible"
      >
        <Headline as="h2" eyebrow="Business Domain Model">
          Business concepts become software architecture.
        </Headline>

        <div className="mt-8 max-w-[720px] space-y-5 text-base leading-relaxed text-pretty text-ink sm:text-lg">
          <p>Every organisation is built around a set of core business concepts.</p>
          <p>
            Instead of designing the backend around technical layers or database tables, CareOS is
            organised around business domains. Each domain represents a responsibility within the
            organisation and owns the data, rules, and workflows related to that responsibility.
          </p>
          <p>
            This creates a backend that reflects how the business actually operates rather than how
            the software happens to be implemented.
          </p>
        </div>
      </motion.div>

      <motion.div
        animate="visible"
        className="mt-14 grid gap-8 lg:grid-cols-[1.35fr_1fr] lg:items-start sm:mt-16"
        initial="hidden"
        variants={revealItem}
        viewport={{ once: true, amount: 0.2 }}
        whileInView="visible"
      >
        <div className="rounded-panel border border-line bg-surface p-5 shadow-card sm:p-8">
          <h3 className="sr-only">Interactive business domain map</h3>

          {/* Desktop / tablet: radial domain map */}
          <div className="relative mx-auto hidden aspect-square w-full max-w-[30rem] sm:block">
            <svg aria-hidden="true" className="absolute inset-0 h-full w-full" viewBox="0 0 100 100">
              {businessDomainModel.map((domain) => {
                const position = DOMAIN_POSITIONS[domain.id]
                const isActive = domain.id === selected
                return (
                  <motion.path
                    animate={{
                      opacity: isActive ? 1 : 0.35,
                      stroke: isActive ? ACCENT : IDLE_LINE,
                    }}
                    d={radialPath(position.x, position.y)}
                    fill="none"
                    initial={{ opacity: 0.35, stroke: IDLE_LINE }}
                    key={domain.id}
                    strokeLinecap="round"
                    strokeWidth={1.4}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                  />
                )
              })}
            </svg>

            {businessDomainModel.map((domain) => {
              const position = DOMAIN_POSITIONS[domain.id]
              return (
                <DomainNode
                  className="absolute w-28"
                  id={domain.id}
                  isActive={domain.id === selected}
                  key={domain.id}
                  label={domain.name}
                  onSelect={() => handleSelect(domain.id)}
                  style={{
                    left: `${position.x}%`,
                    top: `${position.y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                />
              )
            })}

            <motion.div
              animate={{ boxShadow: isReacting ? CORE_SHADOW_REACT : CORE_SHADOW_REST }}
              aria-label="Business Model — the shared centre every business domain connects to"
              className="absolute grid place-items-center text-center text-white"
              initial={{ boxShadow: CORE_SHADOW_REST }}
              role="img"
              style={{
                background: 'linear-gradient(135deg, #4b5568, #22262f)',
                borderRadius: BLOB_RADIUS,
                height: 100,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: 100,
              }}
              transition={{ duration: 0.55, ease: 'easeInOut' }}
            >
              <span className="font-mono text-[0.58rem] leading-snug font-medium tracking-[0.1em] uppercase">
                Business
                <br />
                Model
              </span>
            </motion.div>
          </div>

          {/* Mobile: horizontal domain selector */}
          <div
            aria-label="Choose a business domain"
            className="-mx-1 flex snap-x gap-2.5 overflow-x-auto px-1 pb-1 sm:hidden"
            role="group"
          >
            {businessDomainModel.map((domain) => (
              <DomainNode
                className="w-24 shrink-0 snap-start"
                id={domain.id}
                isActive={domain.id === selected}
                key={domain.id}
                label={domain.name}
                onSelect={() => handleSelect(domain.id)}
              />
            ))}
          </div>
        </div>

        <DomainExplanation
          dependsOn={dependsOnNames}
          exampleQuestions={activeDomain.exampleQuestions}
          name={activeDomain.name}
          owns={activeDomain.owns}
          purpose={activeDomain.purpose}
          responsibilities={activeDomain.responsibilities}
        />
      </motion.div>

      <motion.div
        animate="visible"
        className="mt-16 sm:mt-20"
        initial="hidden"
        variants={revealItem}
        viewport={{ once: true, amount: 0.3 }}
        whileInView="visible"
      >
        <p className="text-center font-mono text-xs font-medium tracking-[0.14em] text-accent uppercase">
          How the domains connect
        </p>
        <div className="mt-8">
          <DomainRelationshipFlow />
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
          body="The domain model defines the language of the platform. Databases, APIs, and services are later implementations of these business concepts. By modelling the organisation before designing the software, the platform remains easier to understand, extend, and maintain."
          headline="Business first. Database second."
        />
      </motion.div>

      <motion.div
        animate="visible"
        className="mt-16 sm:mt-20"
        initial="hidden"
        variants={revealItem}
        viewport={{ once: true, amount: 0.3 }}
        whileInView="visible"
      >
        <EntityPreview />
      </motion.div>

      <motion.div
        animate="visible"
        className="mt-16 sm:mt-20"
        initial="hidden"
        variants={revealItem}
        viewport={{ once: true, amount: 0.4 }}
        whileInView="visible"
      >
        <NextChapterTransition />
      </motion.div>
    </SectionWrapper>
  )
}
