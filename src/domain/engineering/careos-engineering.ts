import type { EngineeringFlowStep, EngineeringPrinciple, ScalabilityCapability } from './engineering.types'

export const engineeringPrinciples: readonly EngineeringPrinciple[] = [
  {
    id: 'business-before-technology',
    title: 'Business before Technology',
    statement: 'Business processes define software structure.',
    impact: 'Technical boundaries follow real operational responsibilities instead of arbitrary feature groupings.',
  },
  {
    id: 'one-source-of-truth',
    title: 'One Source of Truth',
    statement: 'Every application works from the same operational data.',
    impact: 'Managers, employees and customers see consistent state across every interface.',
  },
  {
    id: 'backend-business-rules',
    title: 'Backend Owns Business Rules',
    statement: 'Frontends request. Backend decides.',
    impact: 'Validation and state transitions remain consistent regardless of which interface initiates an action.',
  },
  {
    id: 'shared-domain-model',
    title: 'Shared Domain Model',
    statement: 'Business entities are reused across the platform.',
    impact: 'Applications describe the same clients, bookings, visits and financial records in the same way.',
  },
  {
    id: 'type-safety',
    title: 'Type Safety',
    statement: 'Data remains consistent from interface to database.',
    impact: 'Incompatible assumptions are detected earlier, before they become operational errors.',
  },
  {
    id: 'composable-architecture',
    title: 'Composable Architecture',
    statement: 'Reusable components. Reusable services. Reusable workflows.',
    impact: 'New interfaces and capabilities can build upon stable platform foundations.',
  },
]

export const requestJourney: readonly EngineeringFlowStep[] = [
  { id: 'employee-action', name: 'Employee taps Check In', description: 'A role-specific interface requests an operational action.' },
  { id: 'rest-api', name: 'REST API', description: 'The request enters through a consistent platform boundary.' },
  { id: 'validation', name: 'Validation', description: 'Identity, input and operational context are checked.' },
  { id: 'business-rule', name: 'Business Rule', description: 'The backend decides whether the state transition is valid.' },
  { id: 'database', name: 'Database', description: 'The authoritative visit state is recorded.' },
  { id: 'notifications', name: 'Notifications', description: 'Relevant interfaces receive the operational change.' },
  { id: 'ui-updates', name: 'UI updates', description: 'Users see the same updated visit state.' },
]

export const scalabilityCapabilities: readonly ScalabilityCapability[] = [
  {
    id: 'multi-company',
    name: 'Multi-company',
    explanation: 'The organisational model can extend across multiple operating companies.',
  },
  {
    id: 'client-portal',
    name: 'Client portal',
    explanation: 'A customer interface can reuse the existing workflow, services and records.',
  },
  {
    id: 'native-apps',
    name: 'Native apps',
    explanation: 'New clients can consume the same platform APIs and business rules.',
  },
  {
    id: 'ai-assistants',
    name: 'AI assistants',
    explanation: 'Assistance can operate through governed platform services rather than separate data.',
  },
  {
    id: 'integrations',
    name: 'Integrations',
    explanation: 'External systems can connect through stable platform boundaries.',
  },
]
