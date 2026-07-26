'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { KeyboardEvent } from 'react'
import { motionDurations, motionTransitions, revealGroup, revealItem } from '@/components/motion/presets'
import type { EngineeringFlowStep } from '@/domain/engineering/engineering.types'

type EngineeringFlowProps = {
  activeIndex?: number
  ariaLabel: string
  interactive?: boolean
  onSelect?: (index: number) => void
  steps: readonly EngineeringFlowStep[]
}

export function EngineeringFlow({
  activeIndex = -1,
  ariaLabel,
  interactive = false,
  onSelect,
  steps,
}: EngineeringFlowProps) {
  const reducedMotion = useReducedMotion() ?? false

  const navigate = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const direction = event.key === 'ArrowDown' || event.key === 'ArrowRight'
      ? 1
      : event.key === 'ArrowUp' || event.key === 'ArrowLeft'
        ? -1
        : 0
    if (!direction || !onSelect) return
    event.preventDefault()
    const nextIndex = (index + direction + steps.length) % steps.length
    onSelect(nextIndex)
    event.currentTarget
      .closest<HTMLElement>('[data-engineering-flow]')
      ?.querySelector<HTMLButtonElement>(`[data-engineering-index="${nextIndex}"]`)
      ?.focus()
  }

  const renderNode = (step: EngineeringFlowStep, index: number) => {
    const active = index === activeIndex
    const completed = activeIndex < 0 || index < activeIndex
    const className = `focus-ring relative z-10 flex min-h-20 w-full flex-col items-center justify-center rounded-control border px-3 py-3 text-center transition-colors duration-(--duration-medium) ${active ? 'border-accent bg-accent text-white shadow-control' : completed ? 'border-accent/40 bg-accent-soft text-accent-strong' : 'border-line bg-surface text-ink'}`
    const content = (
      <>
        <span className="mb-2 font-mono text-[0.52rem] tracking-[0.08em] opacity-65">{String(index + 1).padStart(2, '0')}</span>
        <span className="text-sm leading-snug font-medium">{step.name}</span>
      </>
    )

    if (!interactive) {
      return <div className={className}>{content}</div>
    }

    return (
      <motion.button
        type="button"
        data-engineering-index={index}
        aria-current={active ? 'step' : undefined}
        onClick={() => onSelect?.(index)}
        onKeyDown={(event) => navigate(event, index)}
        animate={{ opacity: index <= activeIndex ? 1 : 0.32, y: active ? -3 : 0 }}
        transition={motionTransitions.medium}
        className={className}
      >
        {content}
      </motion.button>
    )
  }

  const renderConnector = (index: number, vertical = false) => {
    const completed = activeIndex < 0 || index < activeIndex
    return (
      <span aria-hidden="true" className={`relative shrink-0 overflow-hidden ${vertical ? 'mx-auto block h-6 w-px' : 'h-px min-w-2 flex-1'}`}>
        <motion.span
          className={`absolute inset-0 origin-top-left ${completed ? 'bg-accent' : 'bg-line-strong'}`}
          initial={vertical ? { scaleY: reducedMotion ? 1 : 0 } : { scaleX: reducedMotion ? 1 : 0 }}
          whileInView={vertical ? { scaleY: 1 } : { scaleX: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: reducedMotion ? 0 : index * motionDurations.fast, ...motionTransitions.slow }}
        />
        {completed && activeIndex >= 0 && !reducedMotion && (
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
    <motion.div
      data-engineering-flow
      variants={revealGroup}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      aria-label={ariaLabel}
    >
      <div className="hidden items-center lg:flex" role="group">
        {steps.map((step, index) => (
          <div key={step.id} className="contents">
            <motion.div variants={revealItem} className="min-w-0 flex-1">{renderNode(step, index)}</motion.div>
            {index < steps.length - 1 && renderConnector(index)}
          </div>
        ))}
      </div>

      <div className="lg:hidden" role="group">
        {steps.map((step, index) => (
          <motion.div key={step.id} variants={revealItem}>
            {renderNode(step, index)}
            {index < steps.length - 1 && renderConnector(index, true)}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
