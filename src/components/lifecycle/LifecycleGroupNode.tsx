'use client'

import { motion } from 'framer-motion'
import { memo } from 'react'
import { motionTransitions } from '@/components/motion/presets'
import type { LifecycleStage, LifecycleStageGroup } from '@/domain/lifecycle/lifecycle.types'

type LifecycleGroupNodeProps = {
  emphasis: 'primary' | 'adjacent' | 'reference' | 'background'
  group: LifecycleStageGroup
  stages: readonly LifecycleStage[]
}

const emphasisOpacity = {
  primary: 1,
  adjacent: 0.36,
  reference: 0.38,
  background: 0.14,
} as const

export const LifecycleGroupNode = memo(function LifecycleGroupNode({
  emphasis,
  group,
  stages,
}: LifecycleGroupNodeProps) {
  const primary = emphasis === 'primary'
  const referenced = emphasis === 'reference'

  return (
    <motion.article
      animate={{
        opacity: emphasisOpacity[emphasis],
        scale: primary ? 1.015 : 1,
        y: primary ? -3 : 0,
      }}
      transition={motionTransitions.medium}
      aria-label={`${group.owner} owns ${stages.map((stage) => stage.title).join(', ')}`}
      className={`relative z-10 flex min-h-36 w-full flex-col rounded-card border p-3 shadow-control transition-colors duration-(--duration-medium) ${
        primary
          ? 'border-accent bg-accent-soft'
          : referenced
            ? 'border-accent/60 bg-surface'
            : 'border-line bg-surface'
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-[0.62rem] font-medium tracking-[0.1em] text-muted uppercase">
          {group.owner}
        </span>
        <span className="rounded-full border border-line-strong bg-surface px-2 py-1 font-mono text-[0.56rem] font-medium tracking-[0.08em] text-muted uppercase">
          {group.badge}
        </span>
      </div>

      <ol className="mt-4 grid gap-2">
        {stages.map((stage, index) => (
          <li key={stage.id} className="relative flex items-start gap-2 text-sm leading-snug font-medium text-ink">
            <span aria-hidden="true" className={`mt-1.5 size-1.5 shrink-0 rounded-full ${primary ? 'bg-accent' : 'bg-line-strong'}`} />
            <span>{stage.title}</span>
            {index < stages.length - 1 && (
              <span aria-hidden="true" className={`absolute top-4 left-[0.17rem] h-3 w-px ${primary ? 'bg-accent' : 'bg-line'}`} />
            )}
          </li>
        ))}
      </ol>

      {referenced && (
        <span className="mt-auto pt-4 font-mono text-[0.58rem] tracking-[0.1em] text-accent uppercase">
          Observed by Reporting
        </span>
      )}
    </motion.article>
  )
})
