import type {
  LifecycleModel,
  LifecycleReferenceMap,
  LifecycleStage,
  LifecycleStageId,
} from './lifecycle.types'

const references = (
  domains: readonly string[],
  applications: readonly string[],
  architecture: readonly string[] = [],
  engineering: readonly string[] = [],
): LifecycleReferenceMap => ({ domains, applications, architecture, engineering })

export const careOSLifecycle = {
  id: 'careos-operational-lifecycle',
  title: 'CareOS operational lifecycle',
  stages: [
    {
      id: 'booking-sources',
      title: 'Booking Sources',
      description: 'Multiple channels. One operational workflow.',
      details: ['Website', 'Facebook', 'Instagram', 'WhatsApp', 'Phone', 'Email', 'Future Client App'],
      next: ['booking-request'],
      icon: 'IN',
      status: 'entry',
      references: references(['Customer Management'], ['Customer Website', 'Future Client App'], ['Channel adapters']),
    },
    {
      id: 'booking-request',
      title: 'Booking Request',
      description: 'A customer request enters the platform and validation begins.',
      details: ['Request received', 'Validation begins', 'Status created'],
      next: ['confirmation'],
      icon: 'RQ',
      status: 'process',
      references: references(['Customer Management', 'Operations'], ['Customer Website', 'Admin Application'], ['Booking workflow']),
    },
    {
      id: 'confirmation',
      title: 'Confirmation',
      description: 'The request becomes an agreed service commitment.',
      details: ['Customer communication', 'Scheduling agreement', 'Service confirmation'],
      next: ['planning'],
      icon: 'CF',
      status: 'process',
      references: references(['Customer Management', 'Operations'], ['Admin Application'], ['Communication workflow']),
    },
    {
      id: 'planning',
      title: 'Planning',
      description: 'Operations prepares the service for coordinated delivery.',
      details: ['Calendar', 'Capacity', 'Availability', 'Service preparation'],
      next: ['assignment'],
      icon: 'PL',
      status: 'process',
      references: references(['Operations'], ['Admin Application'], ['Scheduling model']),
    },
    {
      id: 'assignment',
      title: 'Assignment',
      description: 'The right employee is coordinated with the planned service.',
      details: ['Employee selected', 'Qualification checked', 'Availability validated', 'Notification sent', 'Accept / Reject'],
      next: ['execution'],
      icon: 'AS',
      status: 'decision',
      references: references(['Operations'], ['Admin Application', 'Employee App'], ['Assignment workflow']),
    },
    {
      id: 'execution',
      title: 'Execution',
      description: 'Service delivery is recorded where the work happens.',
      details: ['Check In', 'Service', 'Check Out', 'Duration captured'],
      next: ['settlement'],
      icon: 'EX',
      status: 'process',
      references: references(['Workforce'], ['Employee App'], ['Visit execution']),
    },
    {
      id: 'settlement',
      title: 'Settlement',
      description: 'Completed work follows the appropriate settlement path.',
      details: ['Cash settlement', 'Invoice settlement'],
      next: ['finance'],
      icon: 'ST',
      status: 'decision',
      references: references(['Finance'], ['Admin Application', 'Employee App'], ['Settlement workflow']),
      branch: {
        sourceLabel: 'Execution',
        splitLabel: 'Settlement',
        paths: [
          { id: 'cash', title: 'Cash', steps: ['Receipt', 'Cash Handover'] },
          { id: 'invoice', title: 'Invoice', steps: ['Billable Item', 'Invoice', 'Payment'] },
        ],
        mergeLabel: 'Finance',
      },
    },
    {
      id: 'finance',
      title: 'Finance',
      description: 'Financial responsibilities remain connected to delivered work.',
      details: ['Payroll', 'Revenue', 'Payments', 'Cash Custody'],
      next: ['reporting'],
      icon: 'FN',
      status: 'process',
      references: references(['Finance'], ['Admin Application'], ['Financial records']),
    },
    {
      id: 'reporting',
      title: 'Reporting',
      description: 'The operational lifecycle becomes business visibility.',
      details: ['Operational KPIs', 'Revenue', 'Workforce', 'Service Performance'],
      next: [],
      icon: 'RP',
      status: 'outcome',
      references: references(['Reporting'], ['Admin Application'], ['Reporting model']),
    },
  ],
} as const satisfies LifecycleModel

export const lifecycleStageById = new Map<LifecycleStageId, LifecycleStage>(
  careOSLifecycle.stages.map((stage) => [stage.id, stage]),
)

export function getLifecycleStagesForReference(
  referenceType: keyof LifecycleReferenceMap,
  reference: string,
): readonly LifecycleStage[] {
  return careOSLifecycle.stages.filter((stage) => stage.references[referenceType].includes(reference))
}
