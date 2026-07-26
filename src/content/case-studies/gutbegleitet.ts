import type { QuickFact } from '@/components/case-study/QuickFactsSection'

export const gutBegleitetQuickFacts = {
  description:
    "The project involved the complete redesign of Gut Begleitet's public digital presence and established a scalable foundation for future digital services.",
  facts: [
    {
      label: 'Client',
      value: 'Gut Begleitet – Verein für Alltagshilfe für Senioren',
      wide: true,
    },
    {
      label: 'Industry',
      value: ['Community Care', 'Social Services'],
    },
    {
      label: 'Location',
      value: 'Vienna, Austria',
    },
    {
      label: 'Role',
      value: [
        'Business Systems Analyst',
        'UX & Digital Solutions Designer',
      ],
      wide: true,
    },
    {
      label: 'Project Type',
      value: ['Digital Transformation', 'Public Website', 'Service Platform'],
    },
    {
      label: 'Technology',
      value: ['React', 'TypeScript', 'Vite', 'GitHub', 'Vercel'],
    },
    {
      label: 'Scope',
      value: [
        'Business Analysis',
        'Information Architecture',
        'UX Design',
        'Frontend Architecture',
        'Content Strategy',
        'AI-assisted Development',
      ],
      wide: true,
    },
    {
      label: 'Status',
      value: 'Live',
    },
  ] satisfies readonly QuickFact[],
} as const
