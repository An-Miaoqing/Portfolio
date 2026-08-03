import type {
  AnalysisPractice,
  ContactItem,
  MethodologyStep,
  SkillGroup,
  SystemDesignStage,
} from './methodology.types'

export const methodologySteps: readonly MethodologyStep[] = [
  {
    id: 'understand',
    name: 'Understand',
    purpose: 'Establish how the organisation works before defining a solution.',
    deliverables: ['Business context', 'Stakeholder map', 'Shared terminology'],
    questions: ['Who participates?', 'What outcome matters?', 'Where does work begin and end?'],
  },
  {
    id: 'analyse',
    name: 'Analyse',
    purpose: 'Examine responsibilities, decisions, bottlenecks and information movement.',
    deliverables: ['Process maps', 'Pain points', 'Business rules'],
    questions: ['Where is context lost?', 'Who owns each decision?', 'What prevents reliable delivery?'],
  },
  {
    id: 'model',
    name: 'Model',
    purpose: 'Represent operations through stable entities, relationships and lifecycle states.',
    deliverables: ['Domain model', 'Entity relationships', 'Workflow states'],
    questions: ['What concepts remain stable?', 'How are they related?', 'How does their state change?'],
  },
  {
    id: 'design',
    name: 'Design',
    purpose: 'Translate the business model into clear system boundaries and responsibilities.',
    deliverables: ['Platform architecture', 'Service boundaries', 'Application responsibilities'],
    questions: ['Where should rules live?', 'What must be shared?', 'Which interfaces serve each role?'],
  },
  {
    id: 'implement',
    name: 'Implement',
    purpose: 'Build the smallest coherent system that supports the operational model.',
    deliverables: ['Working interfaces', 'Platform services', 'Operational data model'],
    questions: ['What proves the model?', 'What should be reusable?', 'Where is simplicity most valuable?'],
  },
  {
    id: 'validate',
    name: 'Validate',
    purpose: 'Test whether the system behaves consistently with real operational needs.',
    deliverables: ['Workflow checks', 'Rule validation', 'Implementation feedback'],
    questions: ['Does the workflow reflect practice?', 'Are responsibilities clear?', 'Is state consistent everywhere?'],
  },
  {
    id: 'evolve',
    name: 'Evolve',
    purpose: 'Add capability while preserving the platform’s stable foundations.',
    deliverables: ['Prioritised improvements', 'Extension paths', 'Updated operational insight'],
    questions: ['What has changed?', 'What can be reused?', 'How can the platform grow without fragmentation?'],
  },
]

export const analysisPractices: readonly AnalysisPractice[] = [
  { id: 'stakeholders', name: 'Identify stakeholders', outcome: 'Make roles, needs and decision authority visible.' },
  { id: 'workflows', name: 'Map operational workflows', outcome: 'Understand how real work and information move.' },
  { id: 'domains', name: 'Define business domains', outcome: 'Group responsibilities around stable business concerns.' },
  { id: 'responsibilities', name: 'Clarify responsibilities', outcome: 'Establish ownership at each operational stage.' },
  { id: 'bottlenecks', name: 'Discover bottlenecks', outcome: 'Locate delays, duplication and missing context.' },
  { id: 'entities', name: 'Model business entities', outcome: 'Represent the concepts the organisation depends on.' },
  { id: 'terminology', name: 'Establish terminology', outcome: 'Create shared language between business and technology.' },
]

export const systemDesignStages: readonly SystemDesignStage[] = [
  { id: 'business-process', name: 'Business Process', explanation: 'Real operational work defines the starting point.' },
  { id: 'domain-model', name: 'Domain Model', explanation: 'Processes reveal stable entities, states and rules.' },
  { id: 'platform-architecture', name: 'Platform Architecture', explanation: 'Domains become authoritative services and boundaries.' },
  { id: 'applications', name: 'Applications', explanation: 'Interfaces expose the platform for specific responsibilities.' },
  { id: 'engineering', name: 'Engineering', explanation: 'Technology is selected to implement the established structure.' },
]

export const skillGroups: readonly SkillGroup[] = [
  {
    id: 'business-systems',
    name: 'Business Systems',
    capabilities: ['Process Analysis', 'Requirements Engineering', 'Domain Modelling', 'Systems Thinking'],
  },
  {
    id: 'architecture',
    name: 'Architecture',
    capabilities: ['Platform Design', 'API Design', 'Data Modelling', 'Workflow Design'],
  },
  {
    id: 'engineering',
    name: 'Engineering',
    capabilities: ['TypeScript', 'Next.js', 'PostgreSQL', 'Prisma', 'REST APIs'],
  },
  {
    id: 'data',
    name: 'Data',
    capabilities: ['SQL', 'Data Analysis', 'Reporting', 'Dashboard Design'],
  },
]

export const contactItems: readonly ContactItem[] = [
  { id: 'role', label: 'Role', value: 'Business Systems Analyst' },
  { id: 'linkedin', label: 'LinkedIn', value: 'Profile to be added', placeholder: true },
  { id: 'github', label: 'GitHub', value: 'Profile to be added', placeholder: true },
  { id: 'email', label: 'Email', value: 'Address to be added', placeholder: true },
]

export const portfolioNavigation: readonly ContactItem[] = [
  { id: 'home', label: 'Portfolio', value: 'Home', href: '/' },
  { id: 'work', label: 'Selected work', value: 'Work', href: '/work' },
  { id: 'case-study', label: 'CareOS', value: 'Case study', href: '/case-study' },
]
