export type BusinessDomainId =
  | 'customer'
  | 'finance'
  | 'identity'
  | 'operations'
  | 'platform-services'
  | 'workforce'

export type BusinessDomainModelEntry = {
  exampleQuestions: readonly string[]
  id: BusinessDomainId
  name: string
  purpose: string
  responsibilities: readonly string[]
}

export const businessDomainModel: readonly BusinessDomainModelEntry[] = [
  {
    id: 'identity',
    name: 'Identity',
    purpose: 'Manage user accounts, roles, and secure access to the platform.',
    responsibilities: [
      'Authenticating users',
      'Managing roles and the access they grant',
      'Securing sensitive operations',
    ],
    exampleQuestions: [
      'Which role does this user hold?',
      'Is this user allowed to approve payroll?',
      'Which employee profile is this user linked to?',
    ],
  },
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
    exampleQuestions: [
      'Who will perform the visit?',
      'Has the booking been completed?',
      'Is the visit ready for settlement?',
    ],
  },
  {
    id: 'workforce',
    name: 'Workforce',
    purpose: 'Manage employees, availability, and operational work.',
    responsibilities: [
      'Managing employee profiles and skills',
      'Tracking availability and scheduling constraints',
      'Matching employees to service requirements',
      'Monitoring operational performance',
    ],
    exampleQuestions: [
      'Is this employee approved to deliver this service?',
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
    exampleQuestions: [
      'Has this visit been billed?',
      'What is the outstanding balance for this client?',
      'How much does this employee earn this period?',
    ],
  },
  {
    id: 'platform-services',
    name: 'Platform Services',
    purpose: 'Provide the shared, cross-cutting capabilities every other domain relies on.',
    responsibilities: [
      'Storing and securing documents',
      'Delivering notifications',
      'Recording audit history',
      'Issuing reference numbers',
    ],
    exampleQuestions: [
      'Who approved this change?',
      'Was the client notified about their visit?',
      'Where is the signed intake document for this client?',
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
]
