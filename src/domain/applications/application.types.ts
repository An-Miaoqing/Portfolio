import type { BusinessDomainId } from '@/domain/business-domains/domain.types'
import type { LifecycleStageId } from '@/domain/lifecycle/lifecycle.types'

export type CareOSApplicationId =
  | 'public-website'
  | 'management-workspace'
  | 'employee-workspace'
  | 'client-app'

export type CareOSApplication = {
  id: CareOSApplicationId
  name: string
  navigatorLabel: string
  description: string
  purpose: string
  businessValue: string
  users: readonly string[]
  responsibilities: readonly string[]
  workflowStageIds: readonly LifecycleStageId[]
  businessDomainIds: readonly BusinessDomainId[]
  status: 'available' | 'planned'
  planned: boolean
  icon: string
}
