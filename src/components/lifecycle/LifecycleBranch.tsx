'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { revealGroup, revealItem } from '@/components/motion/presets'
import type { LifecycleBranchDefinition } from '@/domain/lifecycle/lifecycle.types'
import { BranchConnector } from './BranchConnector'
import { MergeConnector } from './MergeConnector'

export function LifecycleBranch({ branch }: { branch: LifecycleBranchDefinition }) {
  const reducedMotion = useReducedMotion() ?? false

  return (
    <motion.div variants={revealGroup} initial="hidden" animate="visible" className="mt-7 border-t border-line pt-6">
      <BranchConnector reducedMotion={reducedMotion} sourceLabel={branch.sourceLabel} splitLabel={branch.splitLabel} />
      <div className="grid gap-4 sm:grid-cols-2">
        {branch.paths.map((path) => (
          <motion.div key={path.id} variants={revealItem} className="rounded-card border border-line bg-surface-subtle p-4">
            <p className="font-mono text-xs font-medium tracking-[0.12em] text-accent uppercase">{path.title}</p>
            <ol className="mt-4 flex flex-wrap items-center gap-2" aria-label={`${path.title} settlement path`}>
              {path.steps.map((step, index) => (
                <li key={step} className="flex items-center gap-2 text-sm text-ink">
                  {index > 0 && <span aria-hidden="true" className="text-line-strong">→</span>}
                  <span className="rounded-control border border-line bg-surface px-3 py-2">{step}</span>
                </li>
              ))}
            </ol>
          </motion.div>
        ))}
      </div>
      <MergeConnector label={branch.mergeLabel} reducedMotion={reducedMotion} />
    </motion.div>
  )
}
