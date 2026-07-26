import type { BusinessDomainId } from './domain-model'

export type BusinessEntityId =
  | 'addresses'
  | 'assignments'
  | 'availability'
  | 'booking-items'
  | 'bookings'
  | 'clients'
  | 'companies'
  | 'contacts'
  | 'dashboards'
  | 'employees'
  | 'households'
  | 'invoice-lines'
  | 'invoices'
  | 'kpis'
  | 'metrics'
  | 'payments'
  | 'payroll'
  | 'pricing-rules'
  | 'qualifications'
  | 'read-models'
  | 'reports'
  | 'roles'
  | 'schedules'
  | 'service-types'
  | 'time-records'
  | 'visits'

export type BusinessEntityEntry = {
  domainId: BusinessDomainId
  id: BusinessEntityId
  lifecycle?: readonly string[]
  name: string
  purpose: string
  relatedEntities: readonly BusinessEntityId[]
  relationshipSummary: string
}

export const businessEntityModel: readonly BusinessEntityEntry[] = [
  // Customer
  {
    id: 'companies',
    name: 'Companies',
    domainId: 'customer',
    purpose: 'An organisation that holds a service relationship on behalf of member households.',
    relatedEntities: ['households', 'invoices'],
    relationshipSummary:
      'A company can hold many households and clients, and everything billed to it flows back through its invoices.',
  },
  {
    id: 'households',
    name: 'Households',
    domainId: 'customer',
    purpose: 'A home or family unit that receives care services.',
    relatedEntities: ['companies', 'clients', 'addresses'],
    relationshipSummary:
      'A household belongs to one company, contains one or more clients, and is tied to the addresses service is delivered to.',
  },
  {
    id: 'clients',
    name: 'Clients',
    domainId: 'customer',
    purpose: 'The individual person receiving care.',
    relatedEntities: ['households', 'contacts', 'bookings'],
    relationshipSummary:
      'A client belongs to one household, can have several contacts, and is the person every booking is made for.',
  },
  {
    id: 'addresses',
    name: 'Addresses',
    domainId: 'customer',
    purpose: 'A physical location where service is delivered or billed.',
    relatedEntities: ['households', 'clients'],
    relationshipSummary: 'An address belongs to a household or client, describing where service happens.',
  },
  {
    id: 'contacts',
    name: 'Contacts',
    domainId: 'customer',
    purpose: 'A person associated with a household or company for communication.',
    relatedEntities: ['households', 'companies'],
    relationshipSummary:
      'A contact belongs to a household or company, giving the organisation someone to reach beyond the client.',
  },

  // Operations
  {
    id: 'bookings',
    name: 'Bookings',
    domainId: 'operations',
    purpose: 'Represents a customer request for one or more services.',
    relatedEntities: ['clients', 'visits', 'invoices', 'assignments'],
    relationshipSummary:
      'A booking belongs to one client, can contain multiple visits, may create invoices, and coordinates operational work.',
    lifecycle: ['Created', 'Confirmed', 'Planned', 'Assigned', 'Completed', 'Settled'],
  },
  {
    id: 'booking-items',
    name: 'Booking Items',
    domainId: 'operations',
    purpose: 'An individual service line within a booking.',
    relatedEntities: ['bookings', 'service-types'],
    relationshipSummary: 'A booking item belongs to one booking and references the service type being requested.',
  },
  {
    id: 'visits',
    name: 'Visits',
    domainId: 'operations',
    purpose: 'A scheduled occurrence of service delivery.',
    relatedEntities: ['bookings', 'assignments', 'employees'],
    relationshipSummary:
      'A visit belongs to one booking and is delivered through the employee assignment made against it.',
    lifecycle: ['Planned', 'Assigned', 'In progress', 'Completed'],
  },
  {
    id: 'assignments',
    name: 'Assignments',
    domainId: 'operations',
    purpose: 'The pairing of an employee to a visit.',
    relatedEntities: ['visits', 'employees', 'bookings'],
    relationshipSummary:
      'An assignment connects one visit to one employee — the point where scheduled work becomes tracked, paid work.',
  },
  {
    id: 'schedules',
    name: 'Schedules',
    domainId: 'operations',
    purpose: 'The planned timing of visits across the organisation.',
    relatedEntities: ['visits', 'employees'],
    relationshipSummary: 'A schedule reflects planned visits set against employee availability.',
  },
  {
    id: 'service-types',
    name: 'Service Types',
    domainId: 'operations',
    purpose: 'The catalogue of services that can be booked.',
    relatedEntities: ['booking-items', 'pricing-rules'],
    relationshipSummary:
      'A service type is referenced by booking items on one side and priced through pricing rules on the other.',
  },

  // Workforce
  {
    id: 'employees',
    name: 'Employees',
    domainId: 'workforce',
    purpose: 'A person employed to deliver services.',
    relatedEntities: ['assignments', 'availability', 'qualifications', 'time-records'],
    relationshipSummary:
      'An employee is assigned to visits, tracks their own availability and qualifications, and accrues payroll through time records.',
  },
  {
    id: 'availability',
    name: 'Availability',
    domainId: 'workforce',
    purpose: 'The time windows an employee can be assigned work.',
    relatedEntities: ['employees', 'schedules'],
    relationshipSummary: 'Availability belongs to one employee and constrains which schedules are possible.',
  },
  {
    id: 'roles',
    name: 'Roles',
    domainId: 'workforce',
    purpose: 'The function an employee performs within the organisation.',
    relatedEntities: ['employees', 'qualifications'],
    relationshipSummary:
      'A role groups the employees who hold it and the qualifications that role is expected to have.',
  },
  {
    id: 'qualifications',
    name: 'Qualifications',
    domainId: 'workforce',
    purpose: 'A certification or skill required for certain services.',
    relatedEntities: ['employees', 'roles'],
    relationshipSummary: 'A qualification belongs to an employee and can be required by a given role.',
  },
  {
    id: 'time-records',
    name: 'Time Records',
    domainId: 'workforce',
    purpose: 'A record of hours worked by an employee.',
    relatedEntities: ['employees', 'payroll'],
    relationshipSummary: 'A time record belongs to one employee and feeds directly into their payroll.',
  },

  // Finance
  {
    id: 'invoices',
    name: 'Invoices',
    domainId: 'finance',
    purpose: 'A bill issued to a client or company for completed services.',
    relatedEntities: ['bookings', 'invoice-lines', 'payments'],
    relationshipSummary:
      'An invoice belongs to one client, is built from booking activity, and is settled through one or more payments.',
    lifecycle: ['Draft', 'Issued', 'Paid', 'Overdue'],
  },
  {
    id: 'invoice-lines',
    name: 'Invoice Lines',
    domainId: 'finance',
    purpose: 'An individual charge within an invoice.',
    relatedEntities: ['invoices', 'service-types'],
    relationshipSummary: 'An invoice line belongs to one invoice and references the service type being billed.',
  },
  {
    id: 'payments',
    name: 'Payments',
    domainId: 'finance',
    purpose: 'Money received against an invoice.',
    relatedEntities: ['invoices'],
    relationshipSummary: 'A payment settles one invoice, closing the loop a booking started.',
    lifecycle: ['Initiated', 'Cleared', 'Reconciled'],
  },
  {
    id: 'payroll',
    name: 'Payroll',
    domainId: 'finance',
    purpose: 'Compensation owed to employees for completed work.',
    relatedEntities: ['employees', 'time-records'],
    relationshipSummary: "Payroll aggregates an employee's time records into a paid amount for a period.",
    lifecycle: ['Calculated', 'Approved', 'Paid'],
  },
  {
    id: 'pricing-rules',
    name: 'Pricing Rules',
    domainId: 'finance',
    purpose: 'The logic that determines how services are priced.',
    relatedEntities: ['service-types', 'invoice-lines'],
    relationshipSummary: 'A pricing rule determines how a service type is priced once it reaches an invoice line.',
  },

  // Reporting
  {
    id: 'reports',
    name: 'Reports',
    domainId: 'reporting',
    purpose: 'A structured summary of operational or financial activity.',
    relatedEntities: ['metrics', 'kpis'],
    relationshipSummary:
      "A report aggregates metrics and KPIs — it doesn't own data of its own, it summarises every other domain.",
  },
  {
    id: 'kpis',
    name: 'KPIs',
    domainId: 'reporting',
    purpose: 'A measurable indicator of business performance.',
    relatedEntities: ['metrics', 'dashboards'],
    relationshipSummary: 'A KPI distills metrics into a single tracked indicator shown on dashboards.',
  },
  {
    id: 'dashboards',
    name: 'Dashboards',
    domainId: 'reporting',
    purpose: 'A visual collection of reports and KPIs.',
    relatedEntities: ['reports', 'kpis'],
    relationshipSummary: 'A dashboard arranges reports and KPIs together for at-a-glance monitoring.',
  },
  {
    id: 'metrics',
    name: 'Metrics',
    domainId: 'reporting',
    purpose: 'A single quantified data point used in reporting.',
    relatedEntities: ['kpis', 'reports'],
    relationshipSummary: 'A metric is the smallest quantified unit that KPIs and reports are built from.',
  },
  {
    id: 'read-models',
    name: 'Read Models',
    domainId: 'reporting',
    purpose: 'A denormalised view optimised for fast reporting queries.',
    relatedEntities: ['reports', 'metrics'],
    relationshipSummary: 'A read model is a denormalised projection built to keep reports and metrics fast to query.',
  },
] as const satisfies readonly BusinessEntityEntry[]

export type EntityRelationshipStep = {
  entityId: BusinessEntityId
}

export const entityRelationshipChain: readonly EntityRelationshipStep[] = [
  { entityId: 'companies' },
  { entityId: 'households' },
  { entityId: 'clients' },
  { entityId: 'bookings' },
  { entityId: 'visits' },
  { entityId: 'invoices' },
  { entityId: 'payments' },
]
