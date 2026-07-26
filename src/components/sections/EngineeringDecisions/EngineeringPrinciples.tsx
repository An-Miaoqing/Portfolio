'use client'

import { AnimatePresence, motion } from 'framer-motion'
import type { KeyboardEvent } from 'react'
import { useState } from 'react'
import { detailReveal, motionTransitions, revealGroup, revealItem } from '@/components/motion/presets'
import { engineeringPrinciples } from '@/domain/engineering/careos-engineering'

export function EngineeringPrinciples() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activePrinciple = engineeringPrinciples[activeIndex]

  const navigate = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const direction = event.key === 'ArrowDown' || event.key === 'ArrowRight'
      ? 1
      : event.key === 'ArrowUp' || event.key === 'ArrowLeft'
        ? -1
        : 0
    if (!direction) return
    event.preventDefault()
    const nextIndex = (index + direction + engineeringPrinciples.length) % engineeringPrinciples.length
    setActiveIndex(nextIndex)
    event.currentTarget.parentElement
      ?.querySelector<HTMLButtonElement>(`[data-principle-index="${nextIndex}"]`)
      ?.focus()
  }

  return (
    <div>
      <motion.div variants={revealGroup} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3" role="group" aria-label="Engineering principles">
        {engineeringPrinciples.map((principle, index) => {
          const active = index === activeIndex
          return (
            <motion.button
              key={principle.id}
              type="button"
              data-principle-index={index}
              aria-pressed={active}
              variants={revealItem}
              onClick={() => setActiveIndex(index)}
              onKeyDown={(event) => navigate(event, index)}
              animate={{ opacity: active ? 1 : 0.48, y: active ? -3 : 0 }}
              transition={motionTransitions.medium}
              className={`focus-ring min-h-32 rounded-card border p-4 text-left transition-colors duration-(--duration-medium) ${active ? 'border-accent bg-accent-soft shadow-control' : 'border-line bg-surface hover:border-line-strong hover:shadow-control'}`}
            >
              <span className="font-mono text-[0.58rem] tracking-[0.1em] text-muted uppercase">Principle {String(index + 1).padStart(2, '0')}</span>
              <strong className="mt-4 block text-lg leading-[1.2] font-medium tracking-[-0.025em] text-ink">{principle.title}</strong>
              <span className="mt-3 block text-sm leading-relaxed text-muted">{principle.statement}</span>
            </motion.button>
          )
        })}
      </motion.div>

      <div className="mt-5 min-h-24 rounded-card border border-line bg-surface p-5 shadow-control">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={activePrinciple.id} variants={detailReveal} initial="hidden" animate="visible" exit="exit" aria-live="polite">
            <p className="font-mono text-[0.58rem] tracking-[0.1em] text-accent uppercase">Engineering consequence</p>
            <p className="mt-3 max-w-4xl text-base leading-relaxed text-ink">{activePrinciple.impact}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
