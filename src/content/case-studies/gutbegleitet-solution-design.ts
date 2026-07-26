import type { SolutionDesignContent } from '@/components/case-study/SolutionDesignSection'

export const gutBegleitetSolutionDesign = {
  overview: {
    title: 'Solution Overview',
    description:
      'The resulting solution was defined as more than a redesigned website. It became a structured public digital platform that brings the organisation, its services, and its communication pathways into one coherent system. The solution addresses current information and contact needs while establishing clear relationships between service areas, reusable communication patterns, and an extensible foundation that can accommodate future organisational growth and digital services without disrupting the overall structure.',
    flow: [
      'Clarify current services',
      'Connect information and actions',
      'Prepare for future growth',
    ],
  },
  architecture: {
    title: 'Service Architecture',
    description:
      'The platform is organised as connected service layers. A shared public entry point introduces the organisation, core and supporting services work together to guide people, and future services can extend the model without replacing it.',
    layers: [
      {
        label: 'Public entry point',
        items: ['Home'],
      },
      {
        label: 'Core services',
        items: ['Alltagshilfe', 'Salon & Club', 'Gut Friend'],
      },
      {
        label: 'Supporting services',
        items: ['Membership', 'News & Events', 'Contact'],
      },
      {
        label: 'Future capability layer',
        items: ['Future digital services'],
        status: 'Extensible',
      },
    ],
  },
  modules: {
    title: 'Modular Component System',
    description:
      'A shared set of communication modules gives different service areas a consistent structure while allowing their content and purpose to remain distinct.',
    items: [
      {
        icon: 'hero',
        title: 'Reusable Hero',
        description:
          'Introduces each major service or topic with a clear purpose, context, and appropriate next step.',
      },
      {
        icon: 'content',
        title: 'Shared Content Sections',
        description:
          'Organise explanations into familiar patterns that support comprehension across different service areas.',
      },
      {
        icon: 'cta',
        title: 'Reusable CTA Blocks',
        description:
          'Provide consistent pathways towards contact, consultation, participation, or further information.',
      },
      {
        icon: 'cards',
        title: 'Shared Cards',
        description:
          'Group related services, activities, and updates into comparable units without flattening their differences.',
      },
      {
        icon: 'forms',
        title: 'Reusable Forms',
        description:
          'Create predictable ways for visitors to express interest, ask questions, or begin a conversation.',
      },
      {
        icon: 'tokens',
        title: 'Design Tokens',
        description:
          'Maintain a coherent visual language across service areas while allowing the platform to grow consistently.',
      },
    ],
  },
  contentStrategy: {
    title: 'Content Strategy',
    description:
      'Content is treated as part of the operating structure: clearly separated by purpose, consistently organised, and prepared to evolve as the service portfolio changes.',
    principles: [
      {
        title: 'Clear service separation',
        description:
          'Give each service a distinct purpose and explanation while preserving its relationship to the wider organisation.',
      },
      {
        title: 'Consistent information hierarchy',
        description:
          'Present essential context, service details, and next actions in a dependable order.',
      },
      {
        title: 'Structured content architecture',
        description:
          'Separate reusable content patterns from individual service messages so information remains coherent.',
      },
      {
        title: 'Future content scalability',
        description:
          'Allow new services, updates, and guidance to enter the platform without weakening the existing structure.',
      },
    ],
  },
} as const satisfies SolutionDesignContent
