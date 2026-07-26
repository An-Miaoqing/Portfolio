import type { TechnicalArchitectureContent } from '@/components/case-study/TechnicalArchitectureSection'

export const gutBegleitetTechnicalArchitecture = {
  overview: {
    title: 'Architecture Overview',
    description:
      'The technical architecture was intentionally shaped by the project’s business requirements rather than by tools alone. It separates organisational needs, information relationships, content structure, shared patterns, service-specific experiences, and production delivery into clear layers. This organisation supports maintainability today while leaving defined points for future services and content growth. The result is a structure that can evolve without weakening the consistency of the public platform or requiring its foundations to be rebuilt.',
  },
  layers: {
    title: 'System Architecture',
    description:
      'Each layer translates the decisions of the layer above into a more concrete part of the delivered platform, preserving a visible connection between business intent and production delivery.',
    items: [
      {
        title: 'Business Requirements',
        description:
          'Stakeholder needs, service relationships, communication priorities, and future growth define what the platform must support.',
      },
      {
        title: 'Information Architecture',
        description:
          'Business needs are organised into clear relationships between audiences, services, information, and intended actions.',
      },
      {
        title: 'Content Architecture',
        description:
          'Messages and service information are structured by purpose so they can evolve independently from individual page layouts.',
      },
      {
        title: 'Reusable Components',
        description:
          'Recurring communication needs become shared patterns that preserve consistency and reduce duplicated structure.',
      },
      {
        title: 'Feature Pages',
        description:
          'Shared patterns are assembled into focused experiences for individual services, organisational topics, and visitor needs.',
      },
      {
        title: 'Backend & Data Layer',
        description:
          'Booking submissions are validated by an Express REST API and persisted through Prisma into Supabase PostgreSQL, creating connected company, household, client, and booking records with an initial Requested status — the website itself never touches the database directly.',
      },
      {
        title: 'Deployment',
        description:
          'The reviewed platform is delivered to a live production environment through a repeatable release path.',
      },
    ],
  },
  foundation: {
    title: 'Technical Foundation',
    description:
      'Seven supporting foundations keep the delivered platform coherent and make future change easier to understand, review, and introduce.',
    items: [
      {
        icon: 'components',
        title: 'Component Reuse',
        description:
          'Shared patterns reduce duplicated structure and keep recurring service communication consistent.',
      },
      {
        icon: 'content',
        title: 'Structured Content',
        description:
          'Content is separated by purpose so updates do not require unrelated parts of the experience to be reconstructed.',
      },
      {
        icon: 'responsive',
        title: 'Responsive Layout',
        description:
          'A shared layout system preserves hierarchy and access to essential information across screen sizes.',
      },
      {
        icon: 'tokens',
        title: 'Design Tokens',
        description:
          'Central visual rules keep typography, spacing, colour, and interaction states coherent as the platform grows.',
      },
      {
        icon: 'deployment',
        title: 'Deployment Workflow',
        description:
          'A defined path from review to production supports controlled delivery and future updates.',
      },
      {
        icon: 'codebase',
        title: 'Maintainable Codebase',
        description:
          'Clear separation between shared structure and project content makes changes easier to locate and review.',
      },
      {
        icon: 'api',
        title: 'API & Data Boundary',
        description:
          'One validated REST endpoint is the only path from the public website into the operational database, keeping booking data structured and the frontend fully decoupled from persistence.',
      },
    ],
  },
} as const satisfies TechnicalArchitectureContent
