import type {
  ApiDefinition,
  EngineeringFlowStep,
  EngineeringPrinciple,
  ProjectLayer,
  ScalabilityCapability,
  TechnologyDecision,
} from './engineering.types'

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

export const technologyDecisions: readonly TechnologyDecision[] = [
  {
    id: 'nextjs',
    category: 'Frontend',
    technology: 'Next.js',
    reason: 'A structured application foundation for role-specific interfaces.',
    benefits: ['Server rendering', 'Routing', 'Performance'],
  },
  {
    id: 'typescript',
    category: 'Language',
    technology: 'TypeScript',
    reason: 'Shared contracts keep application and platform assumptions explicit.',
    benefits: ['Shared types', 'Compile-time validation'],
  },
  {
    id: 'express',
    category: 'Backend',
    technology: 'Express',
    reason: 'A focused service layer for consistent platform endpoints.',
    benefits: ['Simple REST architecture', 'Shared business services'],
  },
  {
    id: 'prisma',
    category: 'ORM',
    technology: 'Prisma',
    reason: 'A typed boundary between business services and relational data.',
    benefits: ['Strong typing', 'Schema management', 'Migrations'],
  },
  {
    id: 'postgresql',
    category: 'Database',
    technology: 'PostgreSQL',
    reason: 'Operational entities and their relationships require reliable relational integrity.',
    benefits: ['Relational operational data', 'Integrity', 'Scalability'],
  },
  {
    id: 'framer-motion',
    category: 'Animations',
    technology: 'Framer Motion',
    reason: 'Motion clarifies state, sequence and relationships.',
    benefits: ['Explains interactions', 'Not decoration'],
  },
]

export const platformApis: readonly ApiDefinition[] = [
  {
    id: 'booking-api',
    name: 'Booking API',
    purpose: 'Coordinates booking creation and lifecycle state.',
    sharedRule: 'Every interface creates bookings through the same platform boundary.',
  },
  {
    id: 'visit-api',
    name: 'Visit API',
    purpose: 'Coordinates scheduled work, execution and visit status.',
    sharedRule: 'Operational transitions are validated centrally.',
  },
  {
    id: 'finance-api',
    name: 'Finance API',
    purpose: 'Coordinates billable work, invoices and payments.',
    sharedRule: 'Applications never calculate financial outcomes independently.',
  },
  {
    id: 'employee-api',
    name: 'Employee API',
    purpose: 'Coordinates workforce information, availability and assignments.',
    sharedRule: 'Management and employee interfaces use the same workforce state.',
  },
]

export const typeSafetyFlow: readonly EngineeringFlowStep[] = [
  { id: 'react', name: 'React' },
  { id: 'typescript', name: 'TypeScript' },
  { id: 'rest', name: 'REST' },
  { id: 'validation', name: 'Validation' },
  { id: 'prisma', name: 'Prisma' },
  { id: 'postgresql', name: 'PostgreSQL' },
]

export const projectLayers: readonly ProjectLayer[] = [
  { id: 'presentation', name: 'Presentation', purpose: 'Role-specific interfaces and interaction.' },
  { id: 'domain', name: 'Domain', purpose: 'Business entities, rules and language.' },
  { id: 'application', name: 'Application', purpose: 'Use cases and operational coordination.' },
  { id: 'infrastructure', name: 'Infrastructure', purpose: 'APIs, integrations and runtime concerns.' },
  { id: 'data', name: 'Data', purpose: 'Persistence, integrity and migrations.' },
]

export const deploymentFlow: readonly EngineeringFlowStep[] = [
  { id: 'github', name: 'GitHub' },
  { id: 'vercel', name: 'Vercel' },
  { id: 'continuous-deployment', name: 'Continuous Deployment' },
  { id: 'production', name: 'Production' },
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
