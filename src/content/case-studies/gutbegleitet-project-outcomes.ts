import type { ProjectOutcome } from '@/components/case-study/ProjectOutcomesSection'

export const gutBegleitetProjectOutcomes = {
  introduction:
    'The project established a scalable digital foundation that brings Gut Begleitet’s organisation, services, and public communication into one coherent platform. It supports current needs through clearer structure, reusable communication patterns, responsive layouts, and a live production presence. At the same time, its modular architecture and structured content model provide room for the organisation to expand its services and digital capabilities without replacing the foundation already delivered.',
  outcomes: [
    {
      icon: 'presence',
      title: 'Unified digital presence',
      description:
        'The organisation, its service portfolio, activities, membership, and contact pathways are presented through one coherent public platform.',
    },
    {
      icon: 'services',
      title: 'Clear service communication',
      description:
        'Core and supporting services have distinct explanations while remaining connected to the wider organisational offering.',
    },
    {
      icon: 'hierarchy',
      title: 'Improved information hierarchy',
      description:
        'Organisational context, service information, updates, and next actions follow a defined and understandable structure.',
    },
    {
      icon: 'architecture',
      title: 'Modular page architecture',
      description:
        'Shared page patterns support different service areas without requiring each one to use an unrelated structure.',
    },
    {
      icon: 'components',
      title: 'Reusable component system',
      description:
        'Recurring content, card, action, and form patterns can be applied consistently across the platform.',
    },
    {
      icon: 'content',
      title: 'Structured content model',
      description:
        'Content is organised by purpose and can evolve within an established hierarchy rather than being tied to one presentation.',
    },
    {
      icon: 'responsive',
      title: 'Responsive user experience',
      description:
        'The platform structure and primary content adapt across desktop, tablet, and mobile screen sizes.',
    },
    {
      icon: 'deployment',
      title: 'Live production deployment',
      description:
        'The completed public website is delivered through a live production environment rather than remaining a design concept.',
    },
  ] satisfies readonly ProjectOutcome[],
  closingNote:
    'The delivered platform provides a maintainable base for future opportunities such as online booking, CRM integration, and additional digital services. These capabilities are not presented as completed features; the current architecture creates a clearer path for introducing them as organisational priorities, workflows, and requirements become defined.',
} as const
