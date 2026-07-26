export type BusinessDomainId = 'customer' | 'finance' | 'operations' | 'reporting' | 'workforce'

export type BusinessDomainModelEntry = {
  dependsOn: readonly BusinessDomainId[]
  exampleQuestions: readonly string[]
  id: BusinessDomainId
  name: string
  owns: readonly string[]
  purpose: string
  responsibilities: readonly string[]
}

export const businessDomainModel: readonly BusinessDomainModelEntry[] = [
  {
    id: 'customer',
    name: 'Customer',
    purpose: 'Manage clients, households, companies, and relationships.',
    responsibilities: [
      'Maintaining client and household records',
      'Managing company and billing relationships',
      'Tracking service history and preferences',
      'Coordinating preferred employee relationships',
    ],
    owns: ['Clients', 'Households', 'Companies', 'Booking history'],
    dependsOn: [],
    exampleQuestions: [
      'Which household does this client belong to?',
      "What is this client's service history?",
      'Does this household have a preferred employee?',
    ],
  },
  {
    id: 'operations',
    name: 'Operations',
    purpose: 'Manage bookings, planning, assignments, and service execution.',
    responsibilities: [
      'Coordinating service delivery',
      'Scheduling work',
      'Managing visit execution',
      'Tracking operational status',
    ],
    owns: ['Bookings', 'Assignments', 'Visits', 'Schedules'],
    dependsOn: ['customer', 'workforce', 'finance'],
    exampleQuestions: [
      'Who will perform the visit?',
      'Has the booking been completed?',
      'Is the visit ready for settlement?',
    ],
  },
  {
    id: 'workforce',
    name: 'Workforce',
    purpose: 'Manage employees, availability, roles, and operational work.',
    responsibilities: [
      'Managing employee profiles and qualifications',
      'Tracking availability and scheduling constraints',
      'Matching employees to service requirements',
      'Monitoring operational performance',
    ],
    owns: ['Employees', 'Availability', 'Qualifications', 'Performance'],
    dependsOn: ['operations'],
    exampleQuestions: [
      'Is this employee qualified for the service?',
      'What is their availability this week?',
      'Who can be assigned to this visit?',
    ],
  },
  {
    id: 'finance',
    name: 'Finance',
    purpose: 'Manage invoices, payments, pricing, and settlement.',
    responsibilities: [
      'Generating invoices and processing payments',
      'Managing pricing and settlement',
      'Reconciling cash and payroll',
      'Maintaining financial accuracy',
    ],
    owns: ['Invoices', 'Payments', 'Payroll', 'Revenue'],
    dependsOn: ['operations', 'workforce'],
    exampleQuestions: [
      'Has this visit been billed?',
      'What is the outstanding balance for this client?',
      'How much does this employee earn this period?',
    ],
  },
  {
    id: 'reporting',
    name: 'Reporting',
    purpose: 'Transform operational data into business insight.',
    responsibilities: [
      'Aggregating operational data',
      'Surfacing business performance trends',
      'Supporting decision-making across domains',
      'Highlighting data quality issues',
    ],
    owns: [],
    dependsOn: ['customer', 'operations', 'workforce', 'finance'],
    exampleQuestions: [
      'How many bookings were requested this month?',
      'What is the revenue trend by service?',
      'Which employees completed the most visits?',
    ],
  },
] as const satisfies readonly BusinessDomainModelEntry[]

export type DomainRelationshipStep = {
  action: string
  domainId: BusinessDomainId
}

export const domainRelationshipFlow: readonly DomainRelationshipStep[] = [
  { domainId: 'customer', action: 'creates demand' },
  { domainId: 'operations', action: 'plans work' },
  { domainId: 'workforce', action: 'delivers service' },
  { domainId: 'finance', action: 'settles work' },
  { domainId: 'reporting', action: 'analyses performance' },
]
