'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { KeyboardEvent } from 'react'
import { useState } from 'react'
import { motionDurations, motionTransitions, revealGroup, revealItem } from '@/components/motion/presets'
import { careOSDataFlow } from '@/domain/architecture/careos-architecture'

export function DataFlow({ onFocusDataFlow }: { onFocusDataFlow: (stepId: string) => void }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const reducedMotion = useReducedMotion() ?? false

  const selectStep = (index: number) => {
    setActiveIndex(index)
    onFocusDataFlow(careOSDataFlow[index].id)
  }

  const navigate = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const direction = event.key === 'ArrowDown' || event.key === 'ArrowRight'
      ? 1
      : event.key === 'ArrowUp' || event.key === 'ArrowLeft'
        ? -1
        : 0
    if (!direction) return
    event.preventDefault()
    const nextIndex = (index + direction + careOSDataFlow.length) % careOSDataFlow.length
    selectStep(nextIndex)
    event.currentTarget
      .closest<HTMLElement>('[data-flow-layout]')
      ?.querySelector<HTMLButtonElement>(`[data-flow-index="${nextIndex}"]`)
      ?.focus()
  }

  const renderStep = (index: number) => {
    const step = careOSDataFlow[index]
    const active = index === activeIndex
    const completed = index < activeIndex
    return (
      <motion.button
        type="button"
        data-flow-index={index}
        aria-current={active ? 'step' : undefined}
        onClick={() => selectStep(index)}
        onKeyDown={(event) => navigate(event, index)}
        animate={{ opacity: index <= activeIndex ? 1 : 0.32, y: active ? -3 : 0 }}
        transition={motionTransitions.medium}
        className={`focus-ring relative z-10 min-h-20 w-full rounded-control border px-3 py-3 text-center text-sm font-medium transition-colors duration-(--duration-medium) ${active ? 'border-accent bg-accent text-white shadow-control' : completed ? 'border-accent/50 bg-accent-soft text-accent-strong' : 'border-line bg-surface text-ink'}`}
      >
        <span className="mb-2 block font-mono text-[0.52rem] tracking-[0.08em] opacity-70">{String(index + 1).padStart(2, '0')}</span>
        {step.name}
      </motion.button>
    )
  }

  const renderConnector = (index: number, vertical = false) => {
    const completed = index < activeIndex
    return (
      <span aria-hidden="true" className={`relative shrink-0 overflow-hidden ${vertical ? 'mx-auto block h-6 w-px' : 'h-px min-w-2 flex-1'}`}>
        <motion.span
          className={`absolute inset-0 origin-top-left ${completed ? 'bg-accent' : 'bg-line-strong'}`}
          animate={vertical ? { scaleY: 1 } : { scaleX: 1 }}
          initial={vertical ? { scaleY: reducedMotion ? 1 : 0 } : { scaleX: reducedMotion ? 1 : 0 }}
          transition={{ delay: reducedMotion ? 0 : index * motionDurations.fast, ...motionTransitions.slow }}
        />
        {completed && !reducedMotion && (
          <motion.span
            className="absolute size-1.5 rounded-full bg-accent"
            animate={vertical ? { top: ['-20%', '110%'], opacity: [0, 1, 0] } : { left: ['-20%', '110%'], opacity: [0, 1, 0] }}
            transition={{ duration: motionDurations.slow, ease: 'linear' }}
          />
        )}
      </span>
    )
  }

  return (
    <div>
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <p className="font-mono text-sm font-medium tracking-[0.16em] text-accent uppercase">Operational data flow</p>
          <h2 className="mt-5 text-section font-medium text-balance tracking-[-0.048em] text-ink">
            One action propagates through the platform.
          </h2>
        </div>
        <p className="max-w-2xl text-body-lg text-pretty text-muted lg:justify-self-end">
          A customer request becomes shared operational state, coordinated work and business insight without creating separate records in each interface.
        </p>
      </div>

      <motion.div variants={revealGroup} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} className="mt-10 rounded-panel border border-line bg-canvas p-5 shadow-control sm:p-6">
        <div data-flow-layout="horizontal" className="hidden items-center lg:flex" role="group" aria-label="Customer booking data flow">
          {careOSDataFlow.map((step, index) => (
            <div key={step.id} className="contents">
              <motion.div variants={revealItem} className="w-[9.2%] min-w-0 shrink">{renderStep(index)}</motion.div>
              {index < careOSDataFlow.length - 1 && renderConnector(index)}
            </div>
          ))}
        </div>

        <div data-flow-layout="vertical" className="lg:hidden" role="group" aria-label="Customer booking data flow">
          {careOSDataFlow.map((step, index) => (
            <motion.div key={step.id} variants={revealItem}>
              {renderStep(index)}
              {index < careOSDataFlow.length - 1 && renderConnector(index, true)}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
