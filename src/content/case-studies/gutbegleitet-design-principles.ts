import type { DesignPrinciple } from '@/components/case-study/DesignPrinciplesSection'

export const gutBegleitetDesignPrinciples = {
  introduction:
    'Every design decision followed from the business analysis and the needs of the people using the organisation’s services. Visual preference was not the starting point. The analysis established what information people needed, how services related to one another, and which future capabilities the platform should accommodate. These principles translated those findings into a clear direction for structuring the solution while keeping it understandable, maintainable, and able to evolve.',
  principles: [
    {
      icon: 'information',
      title: 'User-first Information',
      description:
        'Organise information around user needs and intended actions rather than mirroring the organisation’s internal structure.',
    },
    {
      icon: 'scalability',
      title: 'Scalable Architecture',
      description:
        'Create a modular structure capable of supporting additional services without requiring another complete redesign.',
    },
    {
      icon: 'consistency',
      title: 'Consistency',
      description:
        'Reuse shared patterns and structures to reduce complexity, support comprehension, and improve maintainability.',
    },
    {
      icon: 'accessibility',
      title: 'Accessibility',
      description:
        'Prioritise readability, clear navigation, and simple interaction for older adults, their families, and other visitors.',
    },
    {
      icon: 'content',
      title: 'Content-driven Design',
      description:
        'Let content evolve independently from presentation through a clear and structured content architecture.',
    },
    {
      icon: 'foundation',
      title: 'Future-ready Foundation',
      description:
        'Preserve a path for future booking workflows, CRM integration, and digital care services as organisational needs develop.',
    },
  ] satisfies readonly DesignPrinciple[],
} as const
