import type {
  EvolutionFeature,
  EvolutionPhase,
  ExpansionLayer,
  FutureIntegration,
  MaturityLevel,
} from './evolution.types'

export const evolutionPhases: readonly EvolutionPhase[] = [
  {
    id: 'operational-foundation',
    name: 'Operational Foundation',
    scopeLabel: 'Current scope',
    capabilities: ['Booking', 'Workforce', 'Finance', 'Reporting'],
    status: 'Implemented',
    foundation: 'Establishes the shared operational model that every later capability can reuse.',
  },
  {
    id: 'client-experience',
    name: 'Client Experience',
    scopeLabel: 'Examples',
    capabilities: ['Client Portal', 'Visit History', 'Digital Documents', 'Messaging'],
    status: 'Planned',
    foundation: 'Extends existing services and records into a dedicated customer interface.',
  },
  {
    id: 'business-intelligence',
    name: 'Business Intelligence',
    scopeLabel: 'Examples',
    capabilities: ['Operational Dashboards', 'KPI Analytics', 'Capacity Forecasting', 'Service Performance'],
    status: 'Future',
    foundation: 'Turns consistent operational data into management insight and planning support.',
  },
  {
    id: 'platform-expansion',
    name: 'Platform Expansion',
    scopeLabel: 'Examples',
    capabilities: ['Multi-company', 'Regional Operations', 'White-label Deployments', 'Partner Organisations'],
    status: 'Long-term',
    foundation: 'Applies the same domain model across broader organisational structures.',
  },
  {
    id: 'intelligent-assistance',
    name: 'Intelligent Assistance',
    scopeLabel: 'Examples',
    capabilities: ['AI Scheduling Assistant', 'Operational Insights', 'Document Automation', 'Knowledge Assistant'],
    status: 'Vision',
    foundation: 'Adds governed assistance on top of established workflows, services and operational context.',
  },
]

export const maturityLevels: readonly MaturityLevel[] = [
  { id: 'foundation', name: 'Foundation', explanation: 'Shared entities, rules and reliable operational data.' },
  { id: 'operations', name: 'Operations', explanation: 'Connected workflows coordinate daily service delivery.' },
  { id: 'automation', name: 'Automation', explanation: 'Repeatable rules reduce manual coordination.' },
  { id: 'optimisation', name: 'Optimisation', explanation: 'Operational evidence improves planning and performance.' },
  { id: 'intelligence', name: 'Intelligence', explanation: 'Assistance works from trusted context and governed services.' },
]

export const evolutionFeatures: readonly EvolutionFeature[] = [
  {
    id: 'ai-scheduling-assistant',
    name: 'AI Scheduling Assistant',
    description: 'Assists planning through the platform’s existing operational context.',
    connections: [
      { label: 'Workflow', values: ['Planning', 'Assignment'] },
      { label: 'Business domains', values: ['Operations', 'Workforce'] },
      { label: 'APIs', values: ['Booking API', 'Employee API'] },
      { label: 'Database', values: ['Bookings', 'Employees', 'Availability'] },
    ],
    outcome: 'The assistant consumes governed services. The operational model and backend authority remain unchanged.',
  },
  {
    id: 'client-portal',
    name: 'Client Portal',
    description: 'Introduces a new customer-facing window into existing platform services.',
    connections: [
      { label: 'Workflow', values: ['Booking', 'Confirmation', 'Reporting'] },
      { label: 'Reused services', values: ['Booking', 'Reporting', 'Invoices', 'Notifications'] },
      { label: 'Business domains', values: ['Customer', 'Finance', 'Reporting'] },
      { label: 'Application model', values: ['New client', 'Existing APIs'] },
    ],
    outcome: 'A new application consumes existing services instead of creating a parallel customer system.',
  },
]

export const stableFoundations: readonly string[] = [
  'Operational lifecycle',
  'Business domains',
  'Domain model',
  'Workflow engine',
  'Backend authority',
  'Shared APIs',
]

export const expansionLayers: readonly ExpansionLayer[] = [
  { id: 'core', name: 'Core Platform', items: ['Shared domain model', 'Workflow engine', 'Platform APIs'] },
  { id: 'existing', name: 'Existing Applications', items: ['Website', 'Management', 'Employee'] },
  { id: 'future', name: 'Future Applications', items: ['Client Portal', 'AI Assistant', 'Partner Portal', 'Analytics Hub', 'Integrations'] },
]

export const futureIntegrations: readonly FutureIntegration[] = [
  { id: 'accounting', name: 'Accounting', purpose: 'Financial exchange' },
  { id: 'calendar', name: 'Calendar', purpose: 'Schedule coordination' },
  { id: 'email', name: 'Email', purpose: 'Service communication' },
  { id: 'sms', name: 'SMS', purpose: 'Time-sensitive updates' },
  { id: 'payments', name: 'Payment Providers', purpose: 'Payment processing' },
  { id: 'government', name: 'Government Services', purpose: 'Required data exchange' },
]

export const designPrinciples: readonly string[] = [
  'Support an existing business process',
  'Reuse domain services',
  'Share operational data',
  'Strengthen the platform rather than fragment it',
]
