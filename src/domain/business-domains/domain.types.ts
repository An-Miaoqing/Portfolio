import type { LifecycleStageId } from '@/domain/lifecycle/lifecycle.types'

export type BusinessDomainId =
  | 'customer-management'
  | 'operations'
  | 'workforce'
  | 'finance'
  | 'reporting'

export type BusinessDomain = {
  id: BusinessDomainId
  badge: string
  name: string
  purpose: string
  responsibilityGroups: readonly {
    title: string
    items: readonly string[]
  }[]
  businessValue: string
  relationshipAction: string
  stageIds: readonly LifecycleStageId[]
  referenceStageIds: readonly LifecycleStageId[]
}
