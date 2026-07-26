'use client'

import { useReducedMotion } from 'framer-motion'
import { useId } from 'react'
import type { LifecycleStageId } from '@/domain/lifecycle/lifecycle.types'
import { LifecycleDetail } from './LifecycleDetail'
import { LifecycleEdge } from './LifecycleEdge'
import { LifecycleNode } from './LifecycleNode'
import type { StageOwnershipBadge } from './LifecycleNode'
import { ProgressIndicator } from './ProgressIndicator'
import type { WorkflowEngine } from './useWorkflowEngine'

type LifecycleCanvasProps = {
  compact?: boolean
  engine: WorkflowEngine
  interactive?: boolean
  showDetail?: boolean
  showProgress?: boolean
  stageBadges?: Readonly<Partial<Record<LifecycleStageId, readonly StageOwnershipBadge[]>>>
}

export function LifecycleCanvas({
  compact = false,
  engine,
  interactive = true,
  showDetail = true,
  showProgress = true,
  stageBadges = {},
}: LifecycleCanvasProps) {
  const detailId = useId()
  const shouldReduceMotion = useReducedMotion() ?? false
  const { model, state, activeIndex } = engine
  const activeStage = activeIndex >= 0 ? model.stages[activeIndex] : null
  const highlightedIds = state.highlightedStageIds

  const selectStage = (stageId: LifecycleStageId) => {
    if (state.focusedStageId === stageId) {
      engine.focusStage(null)
      return
    }
    engine.animateJourney(stageId)
  }

  const navigate = (index: number, direction: -1 | 1) => {
    const nextIndex = Math.min(Math.max(index + direction, 0), model.stages.length - 1)
    const nextStage = model.stages[nextIndex]
    const activeLayout = document.activeElement?.closest<HTMLElement>('[data-lifecycle-layout]')
    engine.animateJourney(nextStage.id)
    requestAnimationFrame(() => {
      activeLayout?.querySelector<HTMLButtonElement>(`[data-lifecycle-index="${nextIndex}"]`)?.focus()
    })
  }

  const isHighlighted = (stageId: LifecycleStageId) => highlightedIds?.includes(stageId) ?? false
  const isReferenced = (stageId: LifecycleStageId) => state.referencedStageIds.includes(stageId)
  const isCompleted = (stageId: LifecycleStageId) => state.completedStageIds.includes(stageId)
  const isAdjacent = (index: number) => {
    if (!highlightedIds) return false
    return model.stages.some(
      (stage, stageIndex) => isHighlighted(stage.id) && Math.abs(stageIndex - index) === 1,
    )
  }
  const getEmphasis = (stageId: LifecycleStageId, index: number) => {
    if (highlightedIds) {
      if (isHighlighted(stageId)) return 'primary' as const
      if (isReferenced(stageId)) return 'reference' as const
      if (isAdjacent(index)) return 'adjacent' as const
      return 'background' as const
    }
    if (activeIndex >= 0 && index > activeIndex) return 'adjacent' as const
    return 'primary' as const
  }
  const isConnected = (index: number) => {
    if (highlightedIds) {
      return isHighlighted(model.stages[index].id) && isHighlighted(model.stages[index + 1].id)
    }
    return activeIndex > index
  }
  const getEdgeEmphasis = (index: number) => {
    if (!highlightedIds) return 1
    const currentId = model.stages[index].id
    const nextId = model.stages[index + 1].id
    if (isHighlighted(currentId) && isHighlighted(nextId)) return 1
    if (isHighlighted(currentId) || isHighlighted(nextId)) return 0.36
    if (isReferenced(currentId) || isReferenced(nextId)) return 0.3
    return 0.14
  }

  const renderNode = (stageId: LifecycleStageId, index: number) => {
    const stage = model.stages[index]
    return (
      <LifecycleNode
        active={state.focusedStageId === stageId}
        compact={compact}
        completed={isCompleted(stageId)}
        detailId={showDetail ? detailId : undefined}
        emphasis={getEmphasis(stageId, index)}
        highlighted={isHighlighted(stageId)}
        index={index}
        interactive={interactive}
        referenced={isReferenced(stageId)}
        ownershipBadges={stageBadges[stageId]}
        stage={stage}
        subdued={getEmphasis(stageId, index) === 'background'}
        onNavigate={(direction) => navigate(index, direction)}
        onSelect={() => selectStage(stageId)}
      />
    )
  }

  return (
    <div aria-label={model.title}>
      {showProgress && (
        <ProgressIndicator
          activeIndex={activeIndex}
          journeyVersion={state.journeyVersion}
          reducedMotion={shouldReduceMotion}
          stages={model.stages}
        />
      )}

      <div
        data-lifecycle-layout="horizontal"
        className={`hidden items-center ${compact ? 'xl:flex' : 'lg:flex'}`}
        role="group"
        aria-label="Operational lifecycle stages"
      >
        {model.stages.map((stage, index) => (
          <div key={stage.id} className="contents">
            <div className="w-[9.2%] min-w-0 shrink">{renderNode(stage.id, index)}</div>
            {index < model.stages.length - 1 && (
              <LifecycleEdge
                active={activeIndex === index + 1}
                completed={isConnected(index)}
                delayIndex={index}
                emphasis={getEdgeEmphasis(index)}
                journeyVersion={state.journeyVersion}
                reducedMotion={shouldReduceMotion}
              />
            )}
          </div>
        ))}
      </div>

      <div
        data-lifecycle-layout="vertical"
        className={compact ? 'xl:hidden' : 'lg:hidden'}
        role="group"
        aria-label="Operational lifecycle stages"
      >
        {model.stages.map((stage, index) => (
          <div key={stage.id}>
            {renderNode(stage.id, index)}
            {index < model.stages.length - 1 && (
              <LifecycleEdge
                active={activeIndex === index + 1}
                completed={isConnected(index)}
                delayIndex={index}
                emphasis={getEdgeEmphasis(index)}
                journeyVersion={state.journeyVersion}
                reducedMotion={shouldReduceMotion}
                vertical
              />
            )}
          </div>
        ))}
      </div>

      {showDetail && (
        <div className="mt-8 lg:mt-6">
          <LifecycleDetail detailId={detailId} stage={activeStage} />
        </div>
      )}
    </div>
  )
}
