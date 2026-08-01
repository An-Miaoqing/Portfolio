import type { ServiceId } from './service-model'

export type PlatformApiId =
  | 'admin'
  | 'auth'
  | 'booking'
  | 'cash-handover'
  | 'client'
  | 'dashboard'
  | 'employee'
  | 'finance'
  | 'household'
  | 'invoice'
  | 'me'
  | 'notification'
  | 'payroll'
  | 'reports'
  | 'service'
  | 'visit'

export type PlatformApiEntry = {
  id: PlatformApiId
  name: string
}

export const platformApiModel: readonly PlatformApiEntry[] = [
  { id: 'auth', name: 'Auth API' },
  { id: 'me', name: 'Me API' },
  { id: 'admin', name: 'Admin API' },
  { id: 'booking', name: 'Booking API' },
  { id: 'service', name: 'Service API' },
  { id: 'client', name: 'Client API' },
  { id: 'household', name: 'Household API' },
  { id: 'employee', name: 'Employee API' },
  { id: 'visit', name: 'Visit API' },
  { id: 'invoice', name: 'Invoice API' },
  { id: 'finance', name: 'Finance API' },
  { id: 'payroll', name: 'Payroll API' },
  { id: 'cash-handover', name: 'Cash Handover API' },
  { id: 'notification', name: 'Notification API' },
  { id: 'dashboard', name: 'Dashboard API' },
  { id: 'reports', name: 'Reports API' },
] as const satisfies readonly PlatformApiEntry[]

export type ApplicationId = 'client-portal' | 'employee' | 'management' | 'website'

export type ApplicationEntry = {
  businessServices: readonly ServiceId[]
  exampleInteraction: readonly string[]
  id: ApplicationId
  isPlanned?: boolean
  name: string
  responsibilities: string
  usesApis: readonly PlatformApiId[]
}

export const applicationModel: readonly ApplicationEntry[] = [
  {
    id: 'website',
    name: 'Website',
    responsibilities: 'Accept customer enquiries and bookings, and present the service catalogue publicly.',
    usesApis: ['booking', 'service'],
    businessServices: ['booking', 'service-catalog'],
    exampleInteraction: [
      'Customer submits booking',
      'Booking API',
      'Booking Service',
      'Booking created',
      'Confirmation sent',
    ],
  },
  {
    id: 'management',
    name: 'Management Workspace',
    responsibilities:
      'Give operations staff full visibility and control across customers, bookings, workforce, billing, payroll, and reporting.',
    usesApis: [
      'auth',
      'admin',
      'client',
      'household',
      'employee',
      'booking',
      'visit',
      'invoice',
      'finance',
      'payroll',
      'cash-handover',
      'notification',
      'dashboard',
      'reports',
      'service',
    ],
    businessServices: [
      'identity',
      'customer',
      'booking',
      'scheduling',
      'workforce',
      'visit',
      'billing',
      'payroll',
      'notification',
      'reporting',
      'service-catalog',
    ],
    exampleInteraction: [
      'Admin reassigns a visit',
      'Visit API',
      'Visit Service',
      'Assignment updated',
      'Visit rescheduled',
    ],
  },
  {
    id: 'employee',
    name: 'Employee Workspace',
    responsibilities:
      'Let employees see their schedule, accept assignments, check in and out of visits, and record outcomes — almost entirely through one self-service API.',
    usesApis: ['auth', 'me'],
    businessServices: ['identity', 'workforce', 'visit', 'notification'],
    exampleInteraction: [
      'Employee checks in',
      'Me API',
      'Visit Service',
      'Visit marked in progress',
      'Outcome recorded',
    ],
  },
  {
    id: 'client-portal',
    name: 'Client Portal',
    isPlanned: true,
    responsibilities: 'A planned home for clients and households to view upcoming bookings and invoices directly.',
    usesApis: ['auth', 'booking', 'invoice'],
    businessServices: ['customer', 'booking', 'billing'],
    exampleInteraction: [
      'Client requests invoice history',
      'Invoice API',
      'Billing Service',
      'Invoices retrieved',
      'Displayed to client',
    ],
  },
] as const satisfies readonly ApplicationEntry[]
