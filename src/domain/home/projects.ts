export type HomeProjectId = 'careos' | 'engineering' | 'gut-begleitet'

export type HomeProjectEntry = {
  areas: readonly string[]
  category: string
  ctaHref?: string
  ctaLabel?: string
  description: string
  id: HomeProjectId
  title: string
  workHref: string
}

export const homeProjects: readonly HomeProjectEntry[] = [
  {
    id: 'careos',
    category: 'BUSINESS SYSTEMS · SYSTEM DESIGN',
    title: 'CareOS',
    description:
      'A production business operating system for a real service organisation — unifying bookings, scheduling, employee operations, billing and payroll across a public website, admin dashboard and employee app.',
    areas: [
      'Business Analysis',
      'Process Design',
      'Data Modelling',
      'Workflow Design',
      'System Architecture',
      'Implementation',
    ],
    workHref: '/work#careos',
  },
  {
    id: 'engineering',
    category: 'BUSINESS SYSTEMS · PLATFORM ENGINEERING',
    title: 'Enterprise Backend',
    description:
      'How CareOS’s backend is organised — one platform shared by every application, structured around business domains, entities and services rather than technical layers.',
    areas: [
      'Domain Modelling',
      'Data Relationships',
      'Business Services',
      'Platform APIs',
      'Architecture Principles',
    ],
    workHref: '/engineering',
    ctaLabel: 'View Engineering',
    ctaHref: '/engineering',
  },
  {
    id: 'gut-begleitet',
    category: 'CLIENT WORK · GUT BEGLEITET',
    title: 'Gut Begleitet',
    description:
      'A digital service platform for an Austrian community-care association — turning informal service requests into a structured booking workflow, live in production today.',
    areas: [],
    workHref: '/work#gutbegleitet',
  },
] as const satisfies readonly HomeProjectEntry[]
