import type { CareOSApplication, CareOSApplicationId } from './application.types'

export const careOSApplications = [
  {
    id: 'public-website',
    name: 'Public Website',
    navigatorLabel: 'Website',
    description: 'The public entry point into the CareOS service experience.',
    purpose: 'Customer acquisition and booking.',
    businessValue: 'Turns customer interest into structured service requests inside the shared platform.',
    users: ['Customers'],
    responsibilities: ['Information', 'Booking', 'Consultation', 'Contact', 'Service catalogue'],
    workflowStageIds: ['booking-sources', 'booking-request'],
    businessDomainIds: ['customer-management'],
    status: 'available',
    planned: false,
    icon: 'WEB',
  },
  {
    id: 'management-workspace',
    name: 'Management Workspace',
    navigatorLabel: 'Management',
    description: 'The operational workspace used to coordinate the organisation.',
    purpose: 'Coordinate and operate the organisation.',
    businessValue: 'Gives managers one connected view of customer, operational, workforce and financial responsibilities.',
    users: ['Managers'],
    responsibilities: ['CRM', 'Scheduling', 'Employees', 'Finance', 'Reporting', 'Administration'],
    workflowStageIds: ['booking-request', 'confirmation', 'planning', 'assignment', 'settlement', 'finance', 'reporting'],
    businessDomainIds: ['customer-management', 'operations', 'workforce', 'finance', 'reporting'],
    status: 'available',
    planned: false,
    icon: 'MGT',
  },
  {
    id: 'employee-workspace',
    name: 'Employee Workspace',
    navigatorLabel: 'Employee',
    description: 'A focused interface for work assigned to service employees.',
    purpose: 'Execute assigned services.',
    businessValue: 'Connects field execution directly to the organisation’s operational record.',
    users: ['Employees'],
    responsibilities: ["Today's schedule", 'Check In', 'Check Out', 'Visit notes', 'Availability', 'Notifications'],
    workflowStageIds: ['assignment', 'execution'],
    businessDomainIds: ['operations', 'workforce'],
    status: 'available',
    planned: false,
    icon: 'EMP',
  },
  {
    id: 'client-app',
    name: 'Future Client App',
    navigatorLabel: 'Client',
    description: 'A planned customer view into services managed through CareOS.',
    purpose: 'Give customers visibility into their own services.',
    businessValue: 'Will provide customers with a direct view of the same service information used by the organisation.',
    users: ['Clients'],
    responsibilities: ['Upcoming visits', 'Visit history', 'Invoices', 'Messages', 'Documents'],
    workflowStageIds: ['booking-request', 'confirmation', 'reporting'],
    businessDomainIds: ['customer-management', 'reporting'],
    status: 'planned',
    planned: true,
    icon: 'APP',
  },
] as const satisfies readonly CareOSApplication[]

export function getCareOSApplication(applicationId: CareOSApplicationId): CareOSApplication {
  return careOSApplications.find((application) => application.id === applicationId) ?? careOSApplications[0]
}

export function getApplicationStages(applicationId: CareOSApplicationId) {
  return getCareOSApplication(applicationId).workflowStageIds
}

export function getApplicationDomains(applicationId: CareOSApplicationId) {
  return getCareOSApplication(applicationId).businessDomainIds
}
