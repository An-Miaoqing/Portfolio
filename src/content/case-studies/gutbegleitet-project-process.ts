import type {
  ProjectCapability,
  ProjectProcessStage,
} from '@/components/case-study/ProjectProcessSection'

export const gutBegleitetProjectProcess = {
  introduction:
    'The project progressed as a connected digital transformation process: beginning with organisational understanding, moving through analysis and solution definition, and continuing through supported implementation, review, and production delivery. Each stage informed the next, while recurring validation kept the evolving platform aligned with stakeholder needs, service communication, and the organisation’s longer-term direction.',
  stages: [
    {
      icon: 'discovery',
      title: 'Business Discovery',
      description:
        'Understand the organisation, its services, users, and the communication challenges shaping the project.',
    },
    {
      icon: 'analysis',
      title: 'Business Analysis',
      description:
        'Define stakeholder needs, information architecture, user journeys, and the business requirements guiding the solution.',
    },
    {
      icon: 'solution',
      title: 'Solution Design',
      description:
        'Translate analytical insights into a modular digital platform and a reusable, coherent design system.',
    },
    {
      icon: 'ai',
      title: 'AI-assisted Development',
      description:
        'Use AI-assisted coding to support iterative implementation, testing, refinement, and architectural review. Architecture, structure, and design decisions remained human-led.',
    },
    {
      icon: 'validation',
      title: 'Validation & Refinement',
      description:
        'Use multiple review cycles to improve usability, consistency, accessibility, responsiveness, and content quality.',
    },
    {
      icon: 'deployment',
      title: 'Production Deployment',
      description:
        'Deliver the solution to a live production environment with a maintainable structure prepared for future expansion.',
    },
  ] satisfies readonly ProjectProcessStage[],
  capabilities: [
    { name: 'Business Analysis' },
    { name: 'Service Design' },
    { name: 'Information Architecture' },
    { name: 'UX Design' },
    { name: 'AI-assisted Development' },
    { name: 'Deployment' },
  ] satisfies readonly ProjectCapability[],
} as const
