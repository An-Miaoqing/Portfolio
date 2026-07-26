import type { CareOSApplicationId } from '@/domain/applications/application.types'
import type { BusinessDomainId } from '@/domain/business-domains/domain.types'
import type { LifecycleStageId } from '@/domain/lifecycle/lifecycle.types'

export type ArchitectureLayerId =
  | 'applications'
  | 'platform-apis'
  | 'domain-services'
  | 'workflow-engine'
  | 'shared-database'

export type ArchitectureLayer = {
  id: ArchitectureLayerId
  name: string
  description: string
  purpose: string
  dependencies: readonly ArchitectureLayerId[]
  relatedApplications: readonly CareOSApplicationId[]
  relatedDomains: readonly BusinessDomainId[]
  relatedWorkflowStages: readonly LifecycleStageId[]
}

export type BackendExample = {
  id: string
  title: string
  actors?: readonly string[]
  request: string
  decisions: readonly string[]
  result: string
}

export type BusinessEntity = {
  id: string
  name: string
  description: string
}

export type DataFlowStep = {
  id: string
  name: string
}
