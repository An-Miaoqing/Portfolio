import type { BusinessDomain } from './domain.types'
import type { LifecycleStageGroup } from '@/domain/lifecycle/lifecycle.types'

export const careOSDomains = [
  {
    id: 'customer-management',
    badge: 'CRM',
    name: 'Customer Management',
    purpose: 'Build and maintain the customer relationship from first contact through confirmed service.',
    responsibilityGroups: [
      { title: 'Records', items: ['Client Records', 'Households', 'Care Information'] },
      { title: 'Engagement', items: ['Communication', 'Consent'] },
      { title: 'History', items: ['Booking History'] },
    ],
    businessValue: 'Provides one trusted customer record across every interaction.',
    relationshipAction: 'creates demand',
    stageIds: ['booking-sources', 'booking-request', 'confirmation'],
    referenceStageIds: [],
  },
  {
    id: 'operations',
    badge: 'OPS',
    name: 'Operations',
    purpose: 'Coordinate service delivery from scheduling through completion.',
    responsibilityGroups: [
      { title: 'Planning', items: ['Scheduling', 'Capacity'] },
      { title: 'Delivery', items: ['Bookings', 'Visit Coordination', 'Operational Control'] },
      { title: 'Knowledge', items: ['Service Catalogue'] },
    ],
    businessValue: 'Transforms confirmed requests into coordinated service delivery.',
    relationshipAction: 'plans delivery',
    stageIds: ['planning', 'assignment'],
    referenceStageIds: [],
  },
  {
    id: 'workforce',
    badge: 'WF',
    name: 'Workforce',
    purpose: 'Coordinate the people delivering the service.',
    responsibilityGroups: [
      { title: 'People', items: ['Employees', 'Availability', 'Qualifications'] },
      { title: 'Delivery', items: ['Assignments', 'Visit Completion'] },
      { title: 'Insight', items: ['Performance'] },
    ],
    businessValue: 'Ensures the right employee performs the right service at the right time.',
    relationshipAction: 'delivers service',
    stageIds: ['execution'],
    referenceStageIds: [],
  },
  {
    id: 'finance',
    badge: 'FIN',
    name: 'Finance',
    purpose: 'Convert completed operational work into financial records.',
    responsibilityGroups: [
      { title: 'Billing', items: ['Invoices', 'Payments'] },
      { title: 'Settlement', items: ['Cash', 'Cash Custody'] },
      { title: 'Performance', items: ['Payroll', 'Revenue'] },
    ],
    businessValue: 'Maintains commercial integrity between delivered work and financial outcomes.',
    relationshipAction: 'settles work',
    stageIds: ['settlement', 'finance'],
    referenceStageIds: [],
  },
  {
    id: 'reporting',
    badge: 'BI',
    name: 'Reporting',
    purpose: 'Turn operational activity into business intelligence.',
    responsibilityGroups: [
      { title: 'Performance', items: ['KPIs', 'Performance', 'Analytics'] },
      { title: 'Financial', items: ['Revenue'] },
      { title: 'Operations', items: ['Operations', 'Workforce'] },
    ],
    businessValue: 'Provides evidence for continuous improvement across the organisation.',
    relationshipAction: 'creates business intelligence',
    stageIds: ['reporting'],
    referenceStageIds: ['booking-sources', 'booking-request', 'confirmation', 'planning', 'assignment', 'execution', 'settlement', 'finance'],
  },
] as const satisfies readonly BusinessDomain[]

export const careOSDomainWorkflowGroups = careOSDomains.map((domain) => ({
  id: `${domain.id}-workflow`,
  owner: domain.name,
  badge: domain.badge,
  stageIds: domain.stageIds,
})) satisfies readonly LifecycleStageGroup[]
