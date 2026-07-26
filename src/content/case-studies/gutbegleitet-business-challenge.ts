import type {
  BusinessChallengeFocus,
  BusinessChallengeItem,
} from '@/components/case-study/BusinessChallengeSection'

export const gutBegleitetBusinessChallenge = {
  introduction:
    "Gut Begleitet had expanded beyond its original service offering, bringing together everyday assistance, community participation, membership, and emerging digital services. Its existing digital presence no longer represented this broader organisational structure or made the relationship between services sufficiently clear. The central challenge was therefore not simply to modernise a website. It was to translate an evolving operating model into a coherent digital structure that could communicate current services, guide people towards appropriate support, and provide a scalable foundation for future booking, communication, and service delivery without requiring another complete redesign.",
  challenges: [
    {
      icon: 'portfolio',
      title: 'Growing Service Portfolio',
      description:
        'As the range of services grew, the information structure became more complex. Visitors needed a clearer way to understand the available services and how they related to their needs.',
    },
    {
      icon: 'journey',
      title: 'Fragmented User Journey',
      description:
        'Information was difficult to navigate, while important actions such as contacting the organisation or understanding available support were not presented clearly enough.',
    },
    {
      icon: 'growth',
      title: 'Future Digital Growth',
      description:
        'Planned digital services required a platform that could expand over time without forcing the organisation through another complete redesign.',
    },
  ] satisfies readonly BusinessChallengeItem[],
  focusItems: [
    {
      icon: 'structure',
      label: 'Information Architecture',
    },
    {
      icon: 'communication',
      label: 'Service Communication',
    },
    {
      icon: 'scalability',
      label: 'Scalability',
    },
    {
      icon: 'services',
      label: 'Future Digital Services',
    },
  ] satisfies readonly BusinessChallengeFocus[],
} as const
