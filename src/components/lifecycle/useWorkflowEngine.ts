'use client'

import { useCallback, useMemo, useState } from 'react'
import type { LifecycleModel, LifecycleStageId } from '@/domain/lifecycle/lifecycle.types'

export type WorkflowContext = {
  domain: string | null
  application: string | null
  architectureLayer: string | null
}

export type WorkflowEngineState = {
  focusedStageId: LifecycleStageId | null
  highlightedStageIds: readonly LifecycleStageId[] | null
  referencedStageIds: readonly LifecycleStageId[]
  completedStageIds: readonly LifecycleStageId[]
  journeyVersion: number
  context: WorkflowContext
}

export type WorkflowEngine = {
  model: LifecycleModel
  state: WorkflowEngineState
  activeIndex: number
  highlightStages: (
    stageIds: readonly LifecycleStageId[] | null,
    referencedStageIds?: readonly LifecycleStageId[],
  ) => void
  highlightOwnership: (
    stageIds: readonly LifecycleStageId[],
    referencedStageIds?: readonly LifecycleStageId[],
  ) => void
  highlightReferences: (stageIds: readonly LifecycleStageId[]) => void
  focusStage: (stageId: LifecycleStageId | null) => void
  animateJourney: (stageId: LifecycleStageId) => void
  animateOwnership: (
    stageIds: readonly LifecycleStageId[],
    referencedStageIds?: readonly LifecycleStageId[],
  ) => void
  setDomainFocus: (
    domainId: string,
    stageIds: readonly LifecycleStageId[],
    referencedStageIds?: readonly LifecycleStageId[],
  ) => void
  clearDomainFocus: () => void
  setDomain: (
    domainId: string | null,
    stageIds?: readonly LifecycleStageId[],
    referencedStageIds?: readonly LifecycleStageId[],
  ) => void
  setApplication: (
    applicationId: string | null,
    stageIds?: readonly LifecycleStageId[],
    referencedStageIds?: readonly LifecycleStageId[],
  ) => void
  setArchitectureLayer: (
    layerId: string | null,
    stageIds?: readonly LifecycleStageId[],
    referencedStageIds?: readonly LifecycleStageId[],
  ) => void
}

type WorkflowEngineOptions = {
  initialFocusedStageId?: LifecycleStageId | null
  initialHighlightedStageIds?: readonly LifecycleStageId[] | null
  initialReferencedStageIds?: readonly LifecycleStageId[]
  initialContext?: Partial<WorkflowContext>
}

const emptyContext: WorkflowContext = {
  domain: null,
  application: null,
  architectureLayer: null,
}

export function useWorkflowEngine(
  model: LifecycleModel,
  options: WorkflowEngineOptions = {},
): WorkflowEngine {
  const [focusedStageId, setFocusedStageId] = useState<LifecycleStageId | null>(
    options.initialFocusedStageId ?? null,
  )
  const [highlightedStageIds, setHighlightedStageIds] = useState<readonly LifecycleStageId[] | null>(
    options.initialHighlightedStageIds ?? null,
  )
  const [referencedStageIds, setReferencedStageIds] = useState<readonly LifecycleStageId[]>(
    options.initialReferencedStageIds ?? [],
  )
  const [journeyVersion, setJourneyVersion] = useState(0)
  const [context, setContext] = useState<WorkflowContext>({
    ...emptyContext,
    ...options.initialContext,
  })

  const activeIndex = model.stages.findIndex((stage) => stage.id === focusedStageId)
  const completedStageIds = useMemo(
    () => (activeIndex > 0 ? model.stages.slice(0, activeIndex).map((stage) => stage.id) : []),
    [activeIndex, model.stages],
  )

  const highlightStages = useCallback(
    (
      stageIds: readonly LifecycleStageId[] | null,
      referenceIds: readonly LifecycleStageId[] = [],
    ) => {
      setHighlightedStageIds(stageIds)
      setReferencedStageIds(referenceIds)
    },
    [],
  )

  const focusStage = useCallback((stageId: LifecycleStageId | null) => {
    setFocusedStageId(stageId)
    setHighlightedStageIds(null)
    setReferencedStageIds([])
    setContext(emptyContext)
  }, [])

  const highlightOwnership = useCallback(
    (stageIds: readonly LifecycleStageId[], referenceIds: readonly LifecycleStageId[] = []) => {
      setFocusedStageId(null)
      setHighlightedStageIds(stageIds)
      setReferencedStageIds(referenceIds)
    },
    [],
  )

  const highlightReferences = useCallback((stageIds: readonly LifecycleStageId[]) => {
    setReferencedStageIds(stageIds)
  }, [])

  const animateJourney = useCallback((stageId: LifecycleStageId) => {
    setFocusedStageId(stageId)
    setHighlightedStageIds(null)
    setReferencedStageIds([])
    setContext(emptyContext)
    setJourneyVersion((version) => version + 1)
  }, [])

  const animateOwnership = useCallback(
    (stageIds: readonly LifecycleStageId[], referenceIds: readonly LifecycleStageId[] = []) => {
      setFocusedStageId(null)
      setHighlightedStageIds(stageIds)
      setReferencedStageIds(referenceIds)
      setJourneyVersion((version) => version + 1)
    },
    [],
  )

  const setScope = useCallback(
    (
      scope: keyof WorkflowContext,
      scopeId: string | null,
      stageIds: readonly LifecycleStageId[] = [],
      referenceIds: readonly LifecycleStageId[] = [],
    ) => {
      setContext({ ...emptyContext, [scope]: scopeId })
      setFocusedStageId(null)
      setHighlightedStageIds(scopeId ? stageIds : null)
      setReferencedStageIds(scopeId ? referenceIds : [])
      setJourneyVersion((version) => version + 1)
    },
    [],
  )

  const setDomain = useCallback<WorkflowEngine['setDomain']>(
    (domainId, stageIds, referenceIds) => setScope('domain', domainId, stageIds, referenceIds),
    [setScope],
  )
  const setDomainFocus = useCallback<WorkflowEngine['setDomainFocus']>(
    (domainId, stageIds, referenceIds) => setScope('domain', domainId, stageIds, referenceIds),
    [setScope],
  )
  const clearDomainFocus = useCallback(() => setScope('domain', null), [setScope])
  const setApplication = useCallback<WorkflowEngine['setApplication']>(
    (applicationId, stageIds, referenceIds) =>
      setScope('application', applicationId, stageIds, referenceIds),
    [setScope],
  )
  const setArchitectureLayer = useCallback<WorkflowEngine['setArchitectureLayer']>(
    (layerId, stageIds, referenceIds) =>
      setScope('architectureLayer', layerId, stageIds, referenceIds),
    [setScope],
  )

  return useMemo(
    () => ({
      model,
      state: {
        focusedStageId,
        highlightedStageIds,
        referencedStageIds,
        completedStageIds,
        journeyVersion,
        context,
      },
      activeIndex,
      highlightStages,
      highlightOwnership,
      highlightReferences,
      focusStage,
      animateJourney,
      animateOwnership,
      setDomainFocus,
      clearDomainFocus,
      setDomain,
      setApplication,
      setArchitectureLayer,
    }),
    [
      activeIndex,
      animateOwnership,
      animateJourney,
      clearDomainFocus,
      completedStageIds,
      context,
      focusStage,
      focusedStageId,
      highlightStages,
      highlightOwnership,
      highlightReferences,
      highlightedStageIds,
      journeyVersion,
      model,
      referencedStageIds,
      setApplication,
      setArchitectureLayer,
      setDomain,
      setDomainFocus,
    ],
  )
}
