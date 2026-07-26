import type { ServiceId } from './service-model'

export type PlatformApiId =
  | 'billing-api'
  | 'booking-api'
  | 'reporting-api'
  | 'scheduling-api'
  | 'service-catalogue-api'
  | 'visit-api'
  | 'workforce-api'

export type PlatformApiEntry = {
  id: PlatformApiId
  name: string
}

export const platformApiModel: readonly PlatformApiEntry[] = [
  { id: 'booking-api', name: 'Booking API' },
  { id: 'service-catalogue-api', name: 'Service Catalogue API' },
  { id: 'scheduling-api', name: 'Scheduling API' },
  { id: 'workforce-api', name: 'Workforce API' },
  { id: 'visit-api', name: 'Visit API' },
  { id: 'billing-api', name: 'Billing API' },
  { id: 'reporting-api', name: 'Reporting API' },
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
    usesApis: ['booking-api', 'service-catalogue-api'],
    businessServices: ['booking', 'scheduling'],
    exampleInteraction: [
      'Customer submits booking',
      'Booking API',
      'Booking Service',
      'Booking created',
      'Scheduling triggered',
    ],
  },
  {
    id: 'management',
    name: 'Management Workspace',
    responsibilities:
      'Give operations staff full visibility and control across bookings, scheduling, workforce, billing, and reporting.',
    usesApis: ['booking-api', 'scheduling-api', 'workforce-api', 'billing-api', 'reporting-api'],
    businessServices: ['booking', 'scheduling', 'workforce', 'billing', 'reporting'],
    exampleInteraction: [
      'Admin reassigns a visit',
      'Workforce API',
      'Workforce Service',
      'Assignment updated',
      'Visit rescheduled',
    ],
  },
  {
    id: 'employee',
    name: 'Employee Workspace',
    responsibilities: 'Let employees see their schedule, check in and out of visits, and record outcomes.',
    usesApis: ['workforce-api', 'visit-api'],
    businessServices: ['workforce', 'visit'],
    exampleInteraction: [
      'Employee checks in',
      'Visit API',
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
    usesApis: ['booking-api', 'billing-api'],
    businessServices: ['booking', 'billing'],
    exampleInteraction: [
      'Client requests invoice history',
      'Billing API',
      'Billing Service',
      'Invoices retrieved',
      'Displayed to client',
    ],
  },
] as const satisfies readonly ApplicationEntry[]

export const requestJourney: readonly string[] = [
  'Website',
  'Platform API',
  'Booking Service',
  'Booking',
  'Scheduling Service',
  'Response',
]
