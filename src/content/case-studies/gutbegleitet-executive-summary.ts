import type { ExecutiveHighlight } from '@/components/case-study/ExecutiveSummarySection'

export const gutBegleitetExecutiveSummary = {
  summary:
    "Gut Begleitet is a Vienna-based association providing everyday assistance, social participation, and community-oriented services for older people. As the organisation's service offering expanded, its public digital presence needed a clearer information structure, a more coherent service experience, and a technical foundation capable of supporting future digital workflows. The project therefore extended beyond visual redesign. It began with analysis of the organisation, its audiences, service categories, and communication requirements, then translated those findings into information architecture, content structure, user journeys, and a modular frontend approach. The delivered solution is a production-ready React and TypeScript website built with Vite and deployed through Vercel. It brings the organisation's services, membership information, contact pathways, and emerging digital offerings into one consistent public experience. My role covered business systems analysis, service and content modelling, UX architecture, frontend architecture, and implementation. The current outcome is a live Website 2.0 redesign with reusable components and clearly separated content, providing a maintainable platform for continued development and a foundation for future booking and digital service integrations.",
  highlights: [
    {
      icon: 'challenge',
      title: 'Business Challenge',
      description:
        'Create a clearer, more coherent digital presence that can scale with the organisation and its evolving services.',
    },
    {
      icon: 'role',
      title: 'My Role',
      description:
        'Business Systems Analyst and UX & Digital Solutions Designer, responsible for analysis, information architecture, UX, and implementation.',
    },
    {
      icon: 'solution',
      title: 'Solution',
      description:
        'A modular, production-ready website designed to support current communication needs and future digital services.',
    },
    {
      icon: 'outcome',
      title: 'Outcome',
      description:
        'A live Website 2.0 redesign with modular architecture and a foundation for future booking and digital services.',
    },
  ] satisfies readonly ExecutiveHighlight[],
} as const
