import type { LifecycleStage } from '@/domain/lifecycle/lifecycle.types'

type StageBadgeProps = {
  completed?: boolean
  index: number
  referenced?: boolean
  stage: LifecycleStage
}

export function StageBadge({ completed = false, index, referenced = false, stage }: StageBadgeProps) {
  return (
    <span className={`flex items-center gap-2 font-mono text-[0.7rem] font-medium tracking-[0.12em] uppercase ${completed ? 'text-accent' : 'text-muted'}`}>
      <span className={`grid size-6 place-items-center rounded-full border text-[0.62rem] ${completed ? 'border-accent bg-accent text-white' : referenced ? 'border-accent bg-surface text-accent' : 'border-line bg-surface-subtle text-accent'}`}>
        {completed ? '✓' : stage.icon}
      </span>
      {String(index + 1).padStart(2, '0')}
    </span>
  )
}
