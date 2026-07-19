export type PlatformDomainId =
  | 'customer-management'
  | 'operations'
  | 'workforce'
  | 'finance'
  | 'reporting'

export type PlatformDomain = {
  id: PlatformDomainId
  index: string
  name: string
  summary: string
  capabilities: readonly string[]
  desktopPosition: string
  desktopPath: string
}

export const platformDomains: readonly PlatformDomain[] = [
  {
    id: 'customer-management',
    index: '01',
    name: 'Customer Management',
    summary: 'A continuous view of the customer relationship.',
    capabilities: ['Clients', 'Households', 'Booking History', 'Communication'],
    desktopPosition: 'md:top-6 md:left-0',
    desktopPath: 'M550 350 L144 74',
  },
  {
    id: 'operations',
    index: '02',
    name: 'Operations',
    summary: 'Coordinated work from request through completion.',
    capabilities: ['Bookings', 'Scheduling', 'Visits', 'Service Catalogue'],
    desktopPosition: 'md:top-6 md:right-0',
    desktopPath: 'M550 350 L956 74',
  },
  {
    id: 'workforce',
    index: '03',
    name: 'Workforce',
    summary: 'Clear responsibility across planning and delivery.',
    capabilities: ['Employees', 'Availability', 'Assignments', 'Service Closeout'],
    desktopPosition: 'md:bottom-16 md:left-0',
    desktopPath: 'M550 350 L144 610',
  },
  {
    id: 'finance',
    index: '04',
    name: 'Finance',
    summary: 'Commercial records connected to delivered work.',
    capabilities: ['Invoices', 'Payments', 'Cash Handover', 'Payroll'],
    desktopPosition: 'md:right-0 md:bottom-16',
    desktopPath: 'M550 350 L956 610',
  },
  {
    id: 'reporting',
    index: '05',
    name: 'Reporting',
    summary: 'Operational visibility across the complete platform.',
    capabilities: ['Operations', 'Services', 'Workforce', 'Finance'],
    desktopPosition: 'md:bottom-0 md:left-1/2 md:-translate-x-1/2',
    desktopPath: 'M550 350 L550 680',
  },
]
