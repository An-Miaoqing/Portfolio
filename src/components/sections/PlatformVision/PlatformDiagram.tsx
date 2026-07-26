'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef, useState } from 'react'
import { motionDurations, revealGroup, revealItem } from '@/components/motion/presets'
import { ConnectionLine } from './ConnectionLine'
import { PlatformNode } from './PlatformNode'
import { platformDomains } from './platform-data'
import type { PlatformDomainId } from './platform-data'

function CareOSCore({ className = '' }: { className?: string }) {
  return (
    <motion.div
      variants={revealItem}
      className={`relative z-10 flex size-36 flex-col items-center justify-center rounded-full border border-accent bg-accent-strong text-center text-white shadow-card ${className}`}
    >
      <span className="font-mono text-[0.65rem] tracking-[0.14em] text-accent-soft uppercase">Operational core</span>
      <strong className="mt-2 text-xl font-medium tracking-[-0.035em]">CareOS</strong>
    </motion.div>
  )
}

export function PlatformDiagram() {
  const [activeDomain, setActiveDomain] = useState<PlatformDomainId | null>(null)
  const diagramRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(diagramRef, { once: true, amount: 0.2 })
  const shouldReduceMotion = useReducedMotion()
  const reduceMotion = shouldReduceMotion ?? false

  return (
    <motion.div
      ref={diagramRef}
      variants={revealGroup}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative"
      aria-label="Five business domains connected through the CareOS operational core"
    >
      <div className="relative hidden h-[45rem] md:block lg:h-[clamp(26rem,52vh,34rem)]">
        <svg
          viewBox="0 0 1100 720"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 size-full"
        >
          {platformDomains.map((domain, index) => (
            <ConnectionLine
              key={domain.id}
              activeDomain={activeDomain}
              connected={isInView}
              delayIndex={index}
              domainId={domain.id}
              path={domain.desktopPath}
              reduceMotion={reduceMotion}
            />
          ))}
        </svg>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <CareOSCore />
        </div>

        {platformDomains.map((domain) => (
          <motion.div key={domain.id} variants={revealItem}>
            <PlatformNode
              activeDomain={activeDomain}
              domain={domain}
              onChange={setActiveDomain}
              positionClassName={domain.desktopPosition}
            />
          </motion.div>
        ))}
      </div>

      <div className="relative grid gap-5 md:hidden">
        <svg
          viewBox="0 0 4 1000"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="pointer-events-none absolute top-16 bottom-12 left-1/2 h-[calc(100%-7rem)] w-1 -translate-x-1/2"
        >
          <ConnectionLine
            activeDomain={null}
            connected={isInView}
            delayIndex={0}
            domainId="customer-management"
            path="M2 0 V1000"
            reduceMotion={reduceMotion}
          />
        </svg>

        <CareOSCore className="mx-auto mb-3" />

        {platformDomains.map((domain, index) => (
          <motion.div
            key={domain.id}
            variants={revealItem}
            transition={{ delay: reduceMotion ? 0 : index * motionDurations.fast }}
            className="relative z-10"
          >
            <PlatformNode activeDomain={activeDomain} domain={domain} onChange={setActiveDomain} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
