import type { BusinessDomainId } from './domain-model'

export type DomainEntityId =
  | 'access-roles'
  | 'assignments'
  | 'audit-logs'
  | 'availability'
  | 'booking-items'
  | 'booking-status-history'
  | 'bookings'
  | 'cash-handovers'
  | 'clients'
  | 'companies'
  | 'documents'
  | 'employee-services'
  | 'employees'
  | 'households'
  | 'invoice-lines'
  | 'invoices'
  | 'notifications'
  | 'payments'
  | 'payroll-entries'
  | 'payroll-periods'
  | 'receipts'
  | 'sequences'
  | 'services'
  | 'skills'
  | 'time-entries'
  | 'users'
  | 'visits'

export type DomainEntityEntry = {
  businessRules: readonly string[]
  domainId: BusinessDomainId
  id: DomainEntityId
  lifecycle?: readonly string[]
  name: string
  purpose: string
  relatedEntities: readonly DomainEntityId[]
  relationshipSummary: string
}

export const domainEntityModel: readonly DomainEntityEntry[] = [
  // Identity
  {
    id: 'users',
    name: 'Users',
    domainId: 'identity',
    purpose:
      'The authenticated identity behind every person who signs in to the platform, whether staff, manager, or administrator.',
    relatedEntities: ['access-roles', 'employees'],
    relationshipSummary:
      'A user account is granted one or more roles and, for staff, is also linked to their employee profile.',
    businessRules: [
      'Every user must hold at least one assigned role before they can access the platform.',
      'A user account can be linked to at most one employee profile.',
      'Deactivating a user immediately revokes their access to the platform.',
      'A user cannot be permanently deleted once linked to historical activity — only deactivated.',
    ],
    lifecycle: ['Invited', 'Active', 'Deactivated'],
  },
  {
    id: 'access-roles',
    name: 'Roles',
    domainId: 'identity',
    purpose: 'A named grouping — Employee or Admin — that determines what a user is allowed to do on the platform.',
    relatedEntities: ['users'],
    relationshipSummary: 'A role is held by one or more users, determining their access level.',
    businessRules: [
      'A user can hold more than one role at the same time.',
      'Removing a role from a user takes effect immediately, without requiring re-login.',
      'System-defined roles — Employee and Admin — are fixed by the platform and cannot be created or deleted by administrators.',
    ],
  },

  // Customer
  {
    id: 'companies',
    name: 'Companies',
    domainId: 'customer',
    purpose: 'An organisation that holds a service relationship on behalf of member households.',
    relatedEntities: ['households', 'invoices'],
    relationshipSummary:
      'A company can hold many households and clients, and everything billed to it flows back through its invoices.',
    businessRules: [
      'A company must have at least one household before it can be billed.',
      'Deactivating a company does not remove its historical households or invoices.',
      'Billing details set at the company level apply to every household under it unless overridden.',
    ],
  },
  {
    id: 'households',
    name: 'Households',
    domainId: 'customer',
    purpose: 'A home or family unit that receives care services.',
    relatedEntities: ['companies', 'clients'],
    relationshipSummary: 'A household belongs to one company and contains one or more clients.',
    businessRules: [
      'A household must belong to exactly one company, or be billed directly.',
      'A household cannot be removed while it has an active client.',
    ],
  },
  {
    id: 'clients',
    name: 'Clients',
    domainId: 'customer',
    purpose: 'The individual person receiving care.',
    relatedEntities: ['households', 'bookings'],
    relationshipSummary: 'A client belongs to one household and is the person every booking is made for.',
    businessRules: [
      'A client must belong to exactly one household.',
      'Archiving a client preserves their booking and visit history for reporting.',
    ],
  },

  // Operations
  {
    id: 'bookings',
    name: 'Bookings',
    domainId: 'operations',
    purpose: 'Represents a customer request for one or more services.',
    relatedEntities: ['clients', 'visits', 'invoices', 'assignments', 'booking-status-history'],
    relationshipSummary:
      'A booking belongs to one client, can contain multiple visits, may create invoices, and coordinates operational work.',
    businessRules: [
      'A booking must contain at least one booking item before it can be confirmed.',
      'A booking cannot be marked complete until every visit within it is completed.',
      'Cancelling a booking cancels every unstarted visit connected to it.',
    ],
    lifecycle: ['Created', 'Confirmed', 'Planned', 'Assigned', 'Completed', 'Settled'],
  },
  {
    id: 'booking-items',
    name: 'Booking Items',
    domainId: 'operations',
    purpose: 'An individual service line within a booking.',
    relatedEntities: ['bookings', 'services'],
    relationshipSummary: 'A booking item belongs to one booking and references the service being requested.',
    businessRules: [
      'A booking item must reference a service that is active in the catalogue.',
      'A booking item cannot be removed once its visit has started.',
      'Changing the service on a booking item requires re-confirming its price.',
    ],
  },
  {
    id: 'visits',
    name: 'Visits',
    domainId: 'operations',
    purpose: 'A scheduled occurrence of service delivery.',
    relatedEntities: ['bookings', 'assignments', 'employees'],
    relationshipSummary: 'A visit belongs to one booking and is delivered through the employee assignment made against it.',
    businessRules: [
      'A visit cannot be marked completed until it has an assigned employee.',
      "A visit's scheduled time must fall within the assigned employee's availability.",
      'Completed visits cannot be rescheduled — only new visits can be created.',
    ],
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
    businessRules: [
      'An employee can only be assigned to one visit at a time within the same window.',
      'An assignment requires the employee to be eligible for the service through an employee service record.',
      'Withdrawing an assignment returns the visit to an unassigned state, not a cancelled one.',
    ],
  },
  {
    id: 'services',
    name: 'Services',
    domainId: 'operations',
    purpose: 'The catalogue of services that can be booked.',
    relatedEntities: ['booking-items'],
    relationshipSummary:
      'A service is referenced by booking items when a client requests it, and by employee service records that determine who can deliver it.',
    businessRules: [
      'A service must be active in the catalogue before it can be booked.',
      'Retiring a service does not affect bookings that already reference it.',
      'A service defines which employees are approved to deliver it, tracked through employee service records.',
    ],
  },
  {
    id: 'booking-status-history',
    name: 'Booking Status History',
    domainId: 'operations',
    purpose: 'A recorded trail of every status a booking has passed through, and when.',
    relatedEntities: ['bookings'],
    relationshipSummary:
      'A booking status history entry belongs to one booking and records a single transition in its lifecycle.',
    businessRules: [
      "A new history entry is created every time a booking's status changes — none are edited retroactively.",
      'Booking status history cannot be deleted, even if the booking itself is later cancelled.',
      "The current status of a booking must always match its most recent history entry.",
    ],
  },

  // Workforce
  {
    id: 'employees',
    name: 'Employees',
    domainId: 'workforce',
    purpose: 'A person employed to deliver services.',
    relatedEntities: ['assignments', 'availability', 'time-entries', 'skills', 'employee-services'],
    relationshipSummary:
      'An employee is assigned to visits, tracks their own availability and skills, and accrues payroll through time entries.',
    businessRules: [
      'An employee must have a matching employee service record before being assigned to a service that requires it.',
      "An employee cannot be assigned to a visit outside their recorded availability.",
      'Deactivating an employee automatically withdraws any future assignments.',
    ],
  },
  {
    id: 'availability',
    name: 'Employee Availability',
    domainId: 'workforce',
    purpose: 'The time windows an employee can be assigned work.',
    relatedEntities: ['employees'],
    relationshipSummary: 'Availability belongs to one employee and constrains which visits they can be assigned to.',
    businessRules: [
      'Availability windows for the same employee cannot overlap.',
      'An employee cannot be scheduled outside their declared availability without an explicit exception.',
      'Availability changes do not retroactively affect visits already assigned.',
    ],
  },
  {
    id: 'time-entries',
    name: 'Time Entries',
    domainId: 'workforce',
    purpose: 'A record of hours worked by an employee.',
    relatedEntities: ['employees', 'payroll-entries'],
    relationshipSummary: 'A time entry belongs to one employee and feeds directly into their payroll entry.',
    businessRules: [
      'A time entry must be linked to a completed visit or assignment.',
      'Time entries cannot be edited once included in a payroll entry.',
      'Every hour paid to an employee must be traceable to a time entry.',
    ],
  },
  {
    id: 'skills',
    name: 'Skills',
    domainId: 'workforce',
    purpose: 'A specific capability an employee has, used to match them to the right work.',
    relatedEntities: ['employees', 'employee-services'],
    relationshipSummary:
      'A skill is held by one or more employees and referenced when matching them to the services they are suited for.',
    businessRules: [
      'A skill can be held by many employees and does not expire.',
      'Skills refine assignment matching for the services an employee is approved to deliver.',
    ],
  },
  {
    id: 'employee-services',
    name: 'Employee Services',
    domainId: 'workforce',
    purpose: 'The specific services an employee is approved and able to deliver.',
    relatedEntities: ['employees', 'services', 'skills'],
    relationshipSummary:
      'An employee service connects one employee to one service, based on the skills that make them eligible to deliver it.',
    businessRules: [
      'An employee can only be assigned to a service if a matching employee service record exists.',
      'An employee service can be revoked if the employee no longer meets the skill requirements for that service.',
      'Adding an employee service requires the employee to already hold the relevant skills.',
    ],
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
    businessRules: [
      'An invoice cannot be generated before its related visits are marked completed.',
      'An invoice must reference at least one invoice line.',
      "Once issued, an invoice's charges cannot be edited — only corrected through a new invoice or credit.",
    ],
    lifecycle: ['Draft', 'Issued', 'Paid', 'Overdue'],
  },
  {
    id: 'invoice-lines',
    name: 'Invoice Lines',
    domainId: 'finance',
    purpose: 'An individual charge within an invoice.',
    relatedEntities: ['invoices', 'services'],
    relationshipSummary: 'An invoice line belongs to one invoice and references the service being billed.',
    businessRules: [
      'An invoice line must reference a completed, billable unit of service.',
      "The price on an invoice line is fixed once the invoice is issued, even if the service's price later changes.",
      'An invoice line cannot exist without a parent invoice.',
    ],
  },
  {
    id: 'payments',
    name: 'Payments',
    domainId: 'finance',
    purpose: 'Money received against an invoice.',
    relatedEntities: ['invoices', 'receipts'],
    relationshipSummary:
      'A payment settles one invoice, closing the loop a booking started, and is confirmed by the receipt issued for it.',
    businessRules: [
      'A payment cannot exceed the outstanding balance of the invoice it settles.',
      'A payment must be linked to exactly one invoice.',
      'Reconciled payments cannot be edited or deleted.',
    ],
    lifecycle: ['Initiated', 'Cleared', 'Reconciled'],
  },
  {
    id: 'payroll-periods',
    name: 'Payroll Periods',
    domainId: 'finance',
    purpose: 'A defined span of time — typically weekly or monthly — over which employee pay is calculated and finalised.',
    relatedEntities: ['payroll-entries', 'employees'],
    relationshipSummary: 'A payroll period groups the payroll entries for every employee paid within that timeframe.',
    businessRules: [
      'A payroll period cannot be finalised while any of its payroll entries are still pending.',
      'Once finalised, a payroll period cannot be reopened — only corrected in a subsequent period.',
      'Payroll periods cannot overlap for the same employee.',
    ],
    lifecycle: ['Open', 'Calculated', 'Finalised', 'Paid'],
  },
  {
    id: 'payroll-entries',
    name: 'Payroll Employee Entries',
    domainId: 'finance',
    purpose: 'The compensation calculated for one employee within a single payroll period.',
    relatedEntities: ['employees', 'time-entries', 'payroll-periods'],
    relationshipSummary:
      'A payroll entry belongs to one employee within one payroll period and is calculated from their time entries for that period.',
    businessRules: [
      'A payroll entry must be backed by time entries covering the same period.',
      'A payroll entry cannot be edited once its payroll period is finalised.',
      'Every payroll entry must be approved before payment is released.',
    ],
    lifecycle: ['Calculated', 'Approved', 'Paid'],
  },
  {
    id: 'receipts',
    name: 'Receipts',
    domainId: 'finance',
    purpose: 'A record confirming that a specific payment was received, used for client and audit records.',
    relatedEntities: ['payments'],
    relationshipSummary: 'A receipt is issued for one payment, confirming it was received and by what method.',
    businessRules: [
      'A receipt cannot be issued without a corresponding recorded payment.',
      'Receipts are immutable once issued — corrections require a new receipt, not an edit.',
    ],
  },
  {
    id: 'cash-handovers',
    name: 'Cash Handovers',
    domainId: 'finance',
    purpose: "The transfer of physical cash collected in the field to the organisation's finance function.",
    relatedEntities: ['receipts', 'employees'],
    relationshipSummary:
      'A cash handover is submitted by the employee who collected payment and is reconciled against the receipts it covers.',
    businessRules: [
      'A cash handover must reconcile exactly against the receipts it references.',
      'Cash cannot be recorded as settled until its handover is confirmed by finance.',
      'Discrepancies in a cash handover must be resolved before the related payments are reconciled.',
    ],
    lifecycle: ['Submitted', 'Reconciled', 'Confirmed'],
  },

  // Platform Services
  {
    id: 'documents',
    name: 'Documents',
    domainId: 'platform-services',
    purpose: 'A file or record stored and linked to the relevant business entity, such as a client.',
    relatedEntities: ['clients'],
    relationshipSummary:
      'A document is attached to the entity it supports, such as a client, providing the underlying paperwork behind a decision.',
    businessRules: [
      'A document must be linked to at least one business record — it cannot exist in isolation.',
      'Documents cannot be permanently deleted once linked to a client record, only archived.',
      "Access to a document follows the same access rules as the record it's attached to.",
    ],
    lifecycle: ['Uploaded', 'Verified', 'Archived'],
  },
  {
    id: 'notifications',
    name: 'Notifications',
    domainId: 'platform-services',
    purpose: 'A message sent to a user or employee to alert them of something requiring their attention.',
    relatedEntities: ['users', 'employees'],
    relationshipSummary:
      'A notification is generated by an event elsewhere in the platform and delivered to the user or employee it concerns.',
    businessRules: [
      'A notification must reference the event or record that triggered it.',
      'Notifications are delivered once and marked read — they are not edited after sending.',
      'Critical notifications, such as a missed visit, cannot be dismissed without acknowledgement.',
    ],
    lifecycle: ['Sent', 'Read', 'Dismissed'],
  },
  {
    id: 'audit-logs',
    name: 'Audit Logs',
    domainId: 'platform-services',
    purpose: 'A permanent record of a significant action taken within the platform, kept for accountability and compliance.',
    relatedEntities: ['users'],
    relationshipSummary:
      'An audit log entry records the user responsible for an action, alongside what changed and when.',
    businessRules: [
      'Audit logs are append-only — no entry can ever be edited or deleted.',
      'Every change to sensitive data, such as payroll records, must produce an audit log entry.',
      'Audit logs must record who performed an action, not just what changed.',
    ],
  },
  {
    id: 'sequences',
    name: 'Sequences',
    domainId: 'platform-services',
    purpose: 'A controlled, gapless numbering source used to generate reference numbers such as invoice, receipt, or cash handover numbers.',
    relatedEntities: ['invoices', 'receipts', 'cash-handovers'],
    relationshipSummary:
      'A sequence issues the next reference number to invoices, receipts, and cash handovers — one dedicated sequence per company per year for each — guaranteeing each number is issued once and in order.',
    businessRules: [
      'A sequence must never issue the same number twice.',
      'Sequence numbers are issued in order and are never reused, even if a record is later deleted.',
      'Each reference type, such as invoice numbers, has its own independent sequence.',
    ],
  },
] as const satisfies readonly DomainEntityEntry[]
