import type { BusinessAnalysisContent } from '@/components/case-study/BusinessAnalysisSection'

export const gutBegleitetBusinessAnalysis = {
  approach: {
    title: 'My Approach',
    description:
      'The project began with understanding the organisation before defining its digital solution. I examined how Gut Begleitet described its purpose, organised its services, communicated with different stakeholder groups, and guided people towards support. This analysis established the relationships between audiences, services, information, and future capabilities. Only after that structure was clear could the project move towards information architecture, experience decisions, and an appropriate implementation approach.',
    steps: [
      'Understand the organisation',
      'Map people and services',
      'Define relationships and structure',
      'Shape the digital direction',
    ],
  },
  stakeholders: {
    title: 'Stakeholder Analysis',
    description:
      'Each group approached the organisation with different questions, levels of familiarity, and intended actions. Their needs shaped how information had to be prioritised, connected, and explained.',
    centre: 'Gut Begleitet',
    groups: [
      { name: 'Older adults' },
      { name: 'Family members' },
      { name: 'Volunteers' },
      { name: 'Employees' },
      { name: 'Organisation management' },
      { name: 'Community partners' },
    ],
  },
  ecosystem: {
    title: 'Service Ecosystem',
    description:
      'The service portfolio operates as one connected public offering. The analysis clarified how practical support, community participation, relationships, and organisational communication should reinforce one another.',
    centre: 'Connected service experience',
    services: [
      { name: 'Alltagshilfe' },
      { name: 'Salon & Club' },
      { name: 'Gut Friend' },
      { name: 'Membership' },
      { name: 'Contact' },
      { name: 'News & Events' },
    ],
  },
  architecture: {
    title: 'Information Architecture',
    description:
      'The resulting structure groups organisational context, service information, participation, updates, and contact pathways beneath one clear public entry point.',
    root: 'Public digital platform',
    sections: [
      'Organisation',
      'Everyday support',
      'Community & relationships',
      'Membership',
      'News & events',
      'Contact pathways',
      'Service guidance',
      'Future services',
    ],
  },
  journeys: {
    title: 'User Journeys',
    description:
      'Three simplified journeys helped test whether different visitors could move from an initial need or interest towards a meaningful next action.',
    items: [
      {
        actor: 'Older adult',
        steps: ['Need support', 'Explore services', 'Book consultation'],
      },
      {
        actor: 'Family member',
        steps: ['Understand the situation', 'Learn about services', 'Contact the organisation'],
      },
      {
        actor: 'Community visitor',
        steps: ['Discover activities', 'Explore upcoming events', 'Join an event'],
      },
    ],
  },
  requirements: {
    title: 'Key Requirements',
    description:
      'The analysis was translated into business requirements that could guide later structural and implementation decisions without prescribing a particular interface.',
    items: [
      {
        title: 'Clear information hierarchy',
        description:
          'Help visitors understand the organisation, its services, and relevant next steps without unnecessary complexity.',
      },
      {
        title: 'Scalable architecture',
        description:
          'Allow the public platform to accommodate additional services and capabilities as the organisation evolves.',
      },
      {
        title: 'Responsive experience',
        description:
          'Keep essential information and actions usable across the devices available to different stakeholder groups.',
      },
      {
        title: 'Maintainable content',
        description:
          'Support clear ownership and ongoing updates without creating avoidable structural duplication.',
      },
      {
        title: 'Future booking integration',
        description:
          'Preserve a path for booking and consultation capabilities to connect with the wider service model.',
      },
      {
        title: 'Accessible interface',
        description:
          'Make information understandable and operable for people with differing abilities and levels of digital confidence.',
      },
    ],
  },
} as const satisfies BusinessAnalysisContent
