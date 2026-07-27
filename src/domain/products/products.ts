export type ProductId = 'client-portal' | 'employee' | 'management' | 'website'

export type ProductEntry = {
  audience: string
  id: ProductId
  imageAlt: string
  intendedUsers: readonly string[]
  isPlanned?: boolean
  keyCapabilities: readonly string[]
  name: string
  primaryCta: { href: string; label: string }
  purpose: string
  shortDescription: string
}

export const products: readonly ProductEntry[] = [
  {
    id: 'website',
    name: 'Website',
    audience: 'Public · Customers',
    shortDescription: 'Where customers discover services and submit bookings — no account required.',
    purpose: 'Give customers a simple, public entry point into the platform.',
    intendedUsers: ['Prospective customers', 'Existing clients browsing services'],
    keyCapabilities: ['Public service catalogue', 'Guided booking submission', 'No login required'],
    imageAlt: 'Website booking interface preview',
    primaryCta: { label: 'Open Demo', href: '#experience-website' },
  },
  {
    id: 'management',
    name: 'Management Workspace',
    audience: 'Operations & Admin Staff',
    shortDescription:
      'Full visibility and control across bookings, scheduling, workforce, billing and reporting.',
    purpose: 'Give operations staff one place to run the business day to day.',
    intendedUsers: ['Operations managers', 'Schedulers', 'Finance staff'],
    keyCapabilities: ['Booking and scheduling control', 'Workforce assignment', 'Billing and reporting'],
    imageAlt: 'Management workspace dashboard preview',
    primaryCta: { label: 'Launch Demo', href: '#experience-management' },
  },
  {
    id: 'employee',
    name: 'Employee Workspace',
    audience: 'Field Employees',
    shortDescription: 'See assigned visits, check in and out, and record outcomes.',
    purpose: 'Give employees a focused, mobile-friendly view of their own work.',
    intendedUsers: ['Care workers', 'Field employees'],
    keyCapabilities: ['Daily schedule at a glance', 'Visit check-in and check-out', 'Outcome recording'],
    imageAlt: 'Employee workspace visit schedule preview',
    primaryCta: { label: 'Launch Demo', href: '#experience-employee' },
  },
  {
    id: 'client-portal',
    name: 'Client Portal',
    audience: 'Clients & Households',
    isPlanned: true,
    shortDescription: 'A planned home for clients to view bookings and invoices directly.',
    purpose: 'Give clients direct visibility into their own bookings and billing — without contacting staff.',
    intendedUsers: ['Clients', 'Households'],
    keyCapabilities: ['View upcoming bookings', 'View invoices and payment history', 'Update contact details'],
    imageAlt: 'Client portal concept preview',
    primaryCta: { label: 'Coming Soon', href: '#experience-client-portal' },
  },
] as const satisfies readonly ProductEntry[]
