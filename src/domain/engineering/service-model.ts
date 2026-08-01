import type { BusinessEntityId } from './entity-model'

export type ServiceId =
  | 'billing'
  | 'booking'
  | 'customer'
  | 'identity'
  | 'notification'
  | 'payroll'
  | 'reporting'
  | 'scheduling'
  | 'service-catalog'
  | 'visit'
  | 'workforce'

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
    id: 'identity',
    name: 'Identity Service',
    purpose: 'Authenticates users and manages the credentials that secure every request.',
    reads: ['users', 'access-roles'],
    updates: ['users'],
    collaboratesWith: ['workforce'],
    exampleProcess: [
      'Receive login request',
      'Verify credentials',
      'Issue access token',
      'Start session',
      'Authorise the request',
    ],
  },
  {
    id: 'customer',
    name: 'Customer Service',
    purpose: 'Manages households and the clients within them, keeping customer records accurate and current.',
    reads: ['households', 'clients'],
    updates: ['clients', 'households'],
    collaboratesWith: ['booking'],
    exampleProcess: [
      'Receive customer update',
      'Validate household relationship',
      'Update client record',
      'Confirm change',
      'Notify booking service',
    ],
  },
  {
    id: 'booking',
    name: 'Booking Service',
    purpose: 'Creates and manages customer bookings.',
    reads: ['clients', 'services', 'availability'],
    updates: ['bookings', 'booking-items'],
    collaboratesWith: ['customer', 'scheduling', 'service-catalog', 'billing'],
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
    reads: ['bookings', 'availability'],
    updates: ['visits'],
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
    reads: ['employees', 'availability', 'visits'],
    updates: ['assignments', 'availability'],
    collaboratesWith: ['identity', 'scheduling', 'visit', 'payroll'],
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
    updates: ['visits', 'time-entries'],
    collaboratesWith: ['workforce', 'billing', 'notification'],
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
    purpose: 'Turns completed work into invoices, payments, and settled cash.',
    reads: ['visits', 'bookings'],
    updates: ['invoices', 'invoice-lines', 'payments', 'receipts', 'cash-handovers'],
    collaboratesWith: ['visit', 'payroll', 'reporting'],
    exampleProcess: [
      'Receive completed visit',
      'Price the work',
      'Generate invoice line',
      'Issue invoice',
      'Record payment or cash settlement',
    ],
  },
  {
    id: 'payroll',
    name: 'Payroll Service',
    purpose: 'Calculates and finalises employee compensation for each payroll period.',
    reads: ['time-entries', 'employees'],
    updates: ['payroll-periods', 'payroll-entries'],
    collaboratesWith: ['workforce', 'billing', 'reporting'],
    exampleProcess: [
      'Open payroll period',
      'Aggregate time records',
      'Calculate pay',
      'Finalise period',
      'Release payment',
    ],
  },
  {
    id: 'notification',
    name: 'Notification Service',
    purpose: 'Generates and delivers notifications whenever an event elsewhere in the platform needs attention.',
    reads: ['users', 'employees'],
    updates: ['notifications'],
    collaboratesWith: ['booking', 'workforce', 'visit'],
    exampleProcess: [
      'Receive triggering event',
      'Determine recipient',
      'Compose notification',
      'Deliver notification',
      'Mark as read once acknowledged',
    ],
  },
  {
    id: 'reporting',
    name: 'Reporting Service',
    purpose:
      'Aggregates activity across every other service into business insight. It is read-only — reports and dashboards are computed on demand, not stored as their own records.',
    reads: ['bookings', 'visits', 'invoices', 'payments', 'employees', 'assignments'],
    updates: [],
    collaboratesWith: ['booking', 'scheduling', 'workforce', 'visit', 'billing', 'payroll'],
    exampleProcess: [
      'Collect activity across services',
      'Aggregate into read-only projections',
      'Compute KPIs on demand',
      'Render dashboards',
      'Surface reports',
    ],
  },
  {
    id: 'service-catalog',
    name: 'Service Catalog Service',
    purpose: 'Maintains the catalogue of services that can be booked and their pricing.',
    reads: ['services'],
    updates: ['services'],
    collaboratesWith: ['booking'],
    exampleProcess: [
      'Receive catalogue change',
      'Validate service pricing',
      'Update service',
      'Publish to booking',
      'Confirm availability for booking',
    ],
  },
] as const satisfies readonly ServiceModelEntry[]
