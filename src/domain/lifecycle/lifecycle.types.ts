export type LifecycleStageId =
  | 'booking-sources'
  | 'booking-request'
  | 'confirmation'
  | 'planning'
  | 'assignment'
  | 'execution'
  | 'settlement'
  | 'finance'
  | 'reporting'

export type LifecycleReferenceMap = {
  domains: readonly string[]
  applications: readonly string[]
  architecture: readonly string[]
  engineering: readonly string[]
}

export type LifecycleBranchPath = {
  id: string
  title: string
  steps: readonly string[]
}

export type LifecycleBranchDefinition = {
  sourceLabel: string
  splitLabel: string
  paths: readonly LifecycleBranchPath[]
  mergeLabel: string
}

export type LifecycleStage = {
  id: LifecycleStageId
  title: string
  description: string
  details: readonly string[]
  next: readonly LifecycleStageId[]
  icon: string
  status: 'entry' | 'process' | 'decision' | 'outcome'
  references: LifecycleReferenceMap
  branch?: LifecycleBranchDefinition
}

export type LifecycleModel = {
  id: string
  title: string
  stages: readonly LifecycleStage[]
}

export type LifecycleStageGroup = {
  id: string
  owner: string
  badge: string
  stageIds: readonly LifecycleStageId[]
}
