import type {
  ArchitectureLayer,
  ArchitectureLayerId,
  BackendExample,
  BusinessEntity,
  DataFlowStep,
} from './architecture.types'
import { careOSApplications } from '@/domain/applications/careos-applications'
import { careOSDomains } from '@/domain/business-domains/careos-domains'
import { careOSLifecycle } from '@/domain/lifecycle/careos-lifecycle'

const applicationIds = careOSApplications.map((application) => application.id)
const domainIds = careOSDomains.map((domain) => domain.id)
const workflowStageIds = careOSLifecycle.stages.map((stage) => stage.id)

export const careOSArchitectureLayers = [
  {
    id: 'applications',
    name: 'Applications',
    description: 'Public Website, Management Workspace, Employee Workspace and the planned Client App.',
    purpose: 'Different users interact through different interfaces.',
    dependencies: ['platform-apis'],
    relatedApplications: applicationIds,
    relatedDomains: domainIds,
    relatedWorkflowStages: workflowStageIds,
  },
  {
    id: 'platform-apis',
    name: 'Platform APIs',
    description: 'A consistent boundary between every interface and the authoritative platform.',
    purpose: 'Applications communicate through a consistent API.',
    dependencies: ['domain-services'],
    relatedApplications: applicationIds,
    relatedDomains: domainIds,
    relatedWorkflowStages: workflowStageIds,
  },
  {
    id: 'domain-services',
    name: 'Domain Services',
    description: 'Centralised business capabilities coordinate customer, operational, workforce and financial responsibilities.',
    purpose: 'Business rules live here.',
    dependencies: ['workflow-engine'],
    relatedApplications: applicationIds,
    relatedDomains: domainIds,
    relatedWorkflowStages: workflowStageIds,
  },
  {
    id: 'workflow-engine',
    name: 'Operational Workflow Engine',
    description: 'One shared operational lifecycle governs state across every interface.',
    purpose: 'Coordinates operational state.',
    dependencies: ['shared-database'],
    relatedApplications: applicationIds,
    relatedDomains: domainIds,
    relatedWorkflowStages: workflowStageIds,
  },
  {
    id: 'shared-database',
    name: 'Shared Database',
    description: 'Applications and services work with the same organisational and operational data.',
    purpose: 'Stores one authoritative business record.',
    dependencies: [],
    relatedApplications: applicationIds,
    relatedDomains: domainIds,
    relatedWorkflowStages: workflowStageIds,
  },
] as const satisfies readonly ArchitectureLayer[]

export const authoritativeBackendExamples: readonly BackendExample[] = [
  {
    id: 'employee-check-in',
    title: 'Employee checks in',
    request: 'Check in',
    decisions: ['Assignment exists', 'Visit is active', 'Employee is authorised', 'Timestamps', 'Status transition'],
    result: 'The frontend receives the updated visit.',
  },
  {
    id: 'invoice-generation',
    title: 'Invoice generation',
    request: 'Generate invoice',
    decisions: ['Billable items', 'Pricing', 'Tax', 'Payment status'],
    result: 'The frontend receives the authoritative invoice result.',
  },
  {
    id: 'booking-creation',
    title: 'Booking creation',
    actors: ['Website', 'Employee', 'Manager'],
    request: 'Create booking',
    decisions: ['One workflow', 'One booking lifecycle', 'One source of truth'],
    result: 'Every interface receives the same booking state.',
  },
]

export const careOSBusinessEntities = [
  { id: 'companies', name: 'Companies', description: 'The organisational context for operations.' },
  { id: 'households', name: 'Households', description: 'The shared service location and household context.' },
  { id: 'clients', name: 'Clients', description: 'The people receiving services.' },
  { id: 'bookings', name: 'Bookings', description: 'The agreed request for service.' },
  { id: 'visits', name: 'Visits', description: 'The scheduled delivery of a service.' },
  { id: 'employees', name: 'Employees', description: 'The people assigned to deliver work.' },
  { id: 'invoices', name: 'Invoices', description: 'The financial record of billable work.' },
  { id: 'payments', name: 'Payments', description: 'The settlement of financial obligations.' },
  { id: 'reports', name: 'Reports', description: 'Operational evidence assembled for business insight.' },
] as const satisfies readonly BusinessEntity[]

export const careOSDataFlow = [
  { id: 'customer-books', name: 'Customer books service' },
  { id: 'booking-api', name: 'Booking API' },
  { id: 'booking-service', name: 'Booking Service' },
  { id: 'workflow-engine', name: 'Workflow Engine' },
  { id: 'database', name: 'Database' },
  { id: 'notifications', name: 'Notifications' },
  { id: 'management-workspace', name: 'Management Workspace' },
  { id: 'employee-workspace', name: 'Employee Workspace' },
  { id: 'reporting', name: 'Reporting' },
] as const satisfies readonly DataFlowStep[]

export const architecturePrinciples = [
  'Backend owns business rules',
  'Applications never calculate financial outcomes',
  'Shared workflow across every interface',
  'One operational lifecycle',
  'Centralised validation',
  'Shared domain model',
  'One source of truth',
] as const

export function getArchitectureLayer(layerId: ArchitectureLayerId): ArchitectureLayer {
  return careOSArchitectureLayers.find((layer) => layer.id === layerId) ?? careOSArchitectureLayers[0]
}
