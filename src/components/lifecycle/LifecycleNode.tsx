'use client'

import { motion } from 'framer-motion'
import type { KeyboardEvent } from 'react'
import { memo } from 'react'
import { motionTransitions } from '@/components/motion/presets'
import type { LifecycleStage } from '@/domain/lifecycle/lifecycle.types'
import { StageBadge } from './StageBadge'

type LifecycleNodeProps = {
  active: boolean
  compact?: boolean
  completed: boolean
  detailId?: string
  emphasis: 'primary' | 'adjacent' | 'reference' | 'background'
  highlighted: boolean
  index: number
  interactive?: boolean
  referenced: boolean
  ownershipBadges?: readonly StageOwnershipBadge[]
  stage: LifecycleStage
  subdued: boolean
  onNavigate: (direction: -1 | 1) => void
  onSelect: () => void
}

export type StageOwnershipBadge = {
  label: string
  title: string
}

export const LifecycleNode = memo(function LifecycleNode({
  active,
  compact = false,
  completed,
  detailId,
  emphasis,
  highlighted,
  index,
  interactive = true,
  referenced,
  ownershipBadges = [],
  stage,
  subdued,
  onNavigate,
  onSelect,
}: LifecycleNodeProps) {
  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault()
      onNavigate(1)
    }
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault()
      onNavigate(-1)
    }
  }

  const opacity = subdued
    ? 0.14
    : emphasis === 'adjacent'
      ? 0.36
      : emphasis === 'reference'
        ? 0.38
        : 1
  const className = `focus-ring group relative z-10 flex w-full flex-col justify-between rounded-card border p-4 text-left shadow-control transition-colors duration-(--duration-medium) ${interactive ? 'cursor-pointer' : 'cursor-default'} ${compact ? 'min-h-28 xl:min-h-32 xl:p-3 2xl:p-4' : 'min-h-32 lg:min-h-40 lg:p-3 xl:p-4'} ${
    active || highlighted
      ? 'border-accent bg-accent-soft'
      : completed
        ? 'border-accent/50 bg-surface'
        : referenced
          ? 'border-accent/60 bg-surface'
          : 'border-line bg-surface hover:border-line-strong'
  }`
  const content = (
    <>
      <StageBadge completed={completed} index={index} referenced={referenced} stage={stage} />
      <span className={`mt-7 leading-tight font-medium tracking-[-0.025em] text-ink ${compact ? 'text-sm 2xl:text-base' : 'text-base lg:text-sm xl:text-base'}`}>
        {stage.title}
      </span>
      {ownershipBadges.length > 0 && (
        <span className="mt-3 flex flex-wrap gap-1" aria-label={`Owned by ${ownershipBadges.map((badge) => badge.title).join(' and ')}`}>
          {ownershipBadges.map((badge) => (
            <span key={badge.label} title={badge.title} className="rounded-full border border-line-strong bg-surface px-1.5 py-0.5 font-mono text-[0.52rem] font-medium tracking-[0.08em] text-muted uppercase">
              {badge.label}
            </span>
          ))}
        </span>
      )}
      {referenced && !highlighted && (
        <span className="absolute top-3 right-3 size-1.5 rounded-full bg-accent" aria-label="Contributes context" />
      )}
    </>
  )

  if (!interactive) {
    return (
      <motion.div
        data-lifecycle-index={index}
        animate={{ opacity, scale: highlighted ? 1.01 : 1, y: highlighted ? -3 : 0 }}
        transition={motionTransitions.medium}
        className={className}
      >
        {content}
      </motion.div>
    )
  }

  return (
    <motion.button
      layout
      type="button"
      data-lifecycle-index={index}
      aria-expanded={detailId ? active : undefined}
      aria-controls={detailId}
      aria-label={`${stage.title}, explore stage`}
      onClick={onSelect}
      onKeyDown={handleKeyDown}
      animate={{ opacity, scale: active ? 1.035 : 1, y: active ? -6 : 0 }}
      transition={motionTransitions.medium}
      className={className}
    >
      {content}
    </motion.button>
  )
})
