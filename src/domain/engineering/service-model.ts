import type { BusinessEntityId } from './entity-model'

export type ServiceId = 'billing' | 'booking' | 'reporting' | 'scheduling' | 'visit' | 'workforce'

export type ServiceModelEntry = {
  collaboratesWith: readonly ServiceId[]
  exampleProcess: readonly string[]
  id: ServiceId
  name: string
  purpose: string
  reads: readonly BusinessEntityId[]
  updates: readonly BusinessEntityId[]
}

export const serviceModel: readonly ServiceModelEntry[] = [
  {
    id: 'booking',
    name: 'Booking Service',
    purpose: 'Creates and manages customer bookings.',
    reads: ['clients', 'service-types', 'availability'],
    updates: ['bookings', 'booking-items'],
    collaboratesWith: ['scheduling', 'billing'],
    exampleProcess: [
      'Receive booking',
      'Validate client',
      'Create booking',
      'Schedule visit',
      'Notify downstream services',
    ],
  },
  {
    id: 'scheduling',
    name: 'Scheduling Service',
    purpose: 'Turns a confirmed booking into a scheduled visit matched against employee availability.',
    reads: ['bookings', 'availability', 'schedules'],
    updates: ['visits', 'schedules'],
    collaboratesWith: ['booking', 'workforce'],
    exampleProcess: [
      'Receive scheduling request',
      'Check employee availability',
      'Reserve a time window',
      'Create visit',
      'Hand off to Workforce Service',
    ],
  },
  {
    id: 'workforce',
    name: 'Workforce Service',
    purpose: 'Matches qualified, available employees to scheduled visits and manages their assignments.',
    reads: ['employees', 'qualifications', 'availability', 'visits'],
    updates: ['assignments', 'availability'],
    collaboratesWith: ['scheduling', 'visit'],
    exampleProcess: [
      'Receive visit needing staff',
      'Filter by qualification and availability',
      'Assign employee',
      'Notify employee',
      'Track acceptance',
    ],
  },
  {
    id: 'visit',
    name: 'Visit Service',
    purpose: 'Coordinates the actual delivery of a visit, from check-in through completion.',
    reads: ['assignments', 'visits', 'employees'],
    updates: ['visits', 'time-records'],
    collaboratesWith: ['workforce', 'billing'],
    exampleProcess: [
      'Employee checks in',
      'Track visit in progress',
      'Employee checks out',
      'Record outcome',
      'Mark visit complete',
    ],
  },
  {
    id: 'billing',
    name: 'Billing Service',
    purpose: 'Turns completed work into invoices and payments.',
    reads: ['visits', 'bookings', 'pricing-rules'],
    updates: ['invoices', 'invoice-lines', 'payments'],
    collaboratesWith: ['visit', 'reporting'],
    exampleProcess: [
      'Receive completed visit',
      'Price the work',
      'Generate invoice line',
      'Issue invoice',
      'Record payment',
    ],
  },
  {
    id: 'reporting',
    name: 'Reporting Service',
    purpose: 'Aggregates activity across every other service into business insight.',
    reads: ['bookings', 'visits', 'invoices', 'payments', 'employees', 'assignments'],
    updates: ['reports', 'kpis', 'dashboards', 'metrics', 'read-models'],
    collaboratesWith: ['booking', 'scheduling', 'workforce', 'visit', 'billing'],
    exampleProcess: [
      'Collect activity across services',
      'Aggregate into metrics',
      'Compute KPIs',
      'Build dashboards',
      'Surface reports',
    ],
  },
] as const satisfies readonly ServiceModelEntry[]

export type OperationTimelineStep = {
  id?: ServiceId
  label: string
}

export const businessOperationTimeline: readonly OperationTimelineStep[] = [
  { label: 'Customer requests service' },
  { id: 'booking', label: 'Booking Service' },
  { id: 'scheduling', label: 'Scheduling Service' },
  { id: 'workforce', label: 'Workforce Service' },
  { id: 'visit', label: 'Visit Service' },
  { id: 'billing', label: 'Billing Service' },
  { id: 'reporting', label: 'Reporting Service' },
]
