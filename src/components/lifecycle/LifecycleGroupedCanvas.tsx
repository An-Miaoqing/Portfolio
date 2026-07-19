'use client'

import { useReducedMotion } from 'framer-motion'
import type { LifecycleStageGroup } from '@/domain/lifecycle/lifecycle.types'
import { LifecycleEdge } from './LifecycleEdge'
import { LifecycleGroupNode } from './LifecycleGroupNode'
import type { WorkflowEngine } from './useWorkflowEngine'

type LifecycleGroupedCanvasProps = {
  engine: WorkflowEngine
  groups: readonly LifecycleStageGroup[]
}

export function LifecycleGroupedCanvas({ engine, groups }: LifecycleGroupedCanvasProps) {
  const reducedMotion = useReducedMotion() ?? false
  const highlightedIds = engine.state.highlightedStageIds ?? []
  const referencedIds = engine.state.referencedStageIds

  const groupIsHighlighted = (group: LifecycleStageGroup) =>
    group.stageIds.some((stageId) => highlightedIds.includes(stageId))
  const groupIsReferenced = (group: LifecycleStageGroup) =>
    group.stageIds.some((stageId) => referencedIds.includes(stageId))
  const activeGroupIndex = groups.findIndex(groupIsHighlighted)
  const getEmphasis = (group: LifecycleStageGroup, index: number) => {
    if (groupIsHighlighted(group)) return 'primary' as const
    if (groupIsReferenced(group)) return 'reference' as const
    if (activeGroupIndex >= 0 && Math.abs(activeGroupIndex - index) === 1) return 'adjacent' as const
    return 'background' as const
  }
  const stagesForGroup = (group: LifecycleStageGroup) =>
    engine.model.stages.filter((stage) => group.stageIds.includes(stage.id))
  const edgeEmphasis = (index: number) => {
    if (activeGroupIndex === index || activeGroupIndex === index + 1) return 0.36
    if (groupIsReferenced(groups[index]) || groupIsReferenced(groups[index + 1])) return 0.3
    return 0.14
  }

  const renderGroup = (group: LifecycleStageGroup, index: number) => (
    <LifecycleGroupNode
      emphasis={getEmphasis(group, index)}
      group={group}
      stages={stagesForGroup(group)}
    />
  )

  return (
    <div aria-label="Operational lifecycle grouped by business ownership">
      <div className="hidden items-center xl:flex" role="group" aria-label="Business ownership workflow">
        {groups.map((group, index) => (
          <div key={group.id} className="contents">
            <div className="w-[17%] min-w-0 shrink">{renderGroup(group, index)}</div>
            {index < groups.length - 1 && (
              <LifecycleEdge
                active={activeGroupIndex === index + 1}
                completed={activeGroupIndex === index + 1}
                delayIndex={index}
                emphasis={edgeEmphasis(index)}
                journeyVersion={engine.state.journeyVersion}
                reducedMotion={reducedMotion}
              />
            )}
          </div>
        ))}
      </div>

      <div className="xl:hidden" role="group" aria-label="Business ownership workflow">
        {groups.map((group, index) => (
          <div key={group.id}>
            {renderGroup(group, index)}
            {index < groups.length - 1 && (
              <LifecycleEdge
                active={activeGroupIndex === index + 1}
                completed={activeGroupIndex === index + 1}
                delayIndex={index}
                emphasis={edgeEmphasis(index)}
                journeyVersion={engine.state.journeyVersion}
                reducedMotion={reducedMotion}
                vertical
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
