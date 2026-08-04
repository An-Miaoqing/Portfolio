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
      'A business operating system designed from real service operations — connecting bookings, scheduling, employees, service delivery and operational records across one platform.',
    areas: ['Business Analysis', 'Process Design', 'Data Modelling', 'System Design'],
    workHref: '/work#careos',
  },
  {
    id: 'engineering',
    category: 'BUSINESS SYSTEMS · PLATFORM ENGINEERING',
    title: 'Platform Architecture',
    description:
      'A technical view of how CareOS supports multiple applications through shared APIs, business services, data access and a relational operational database.',
    areas: ['REST API', 'Business Services', 'Data Modelling', 'PostgreSQL'],
    workHref: '/engineering',
    ctaLabel: 'View Engineering',
    ctaHref: '/engineering',
  },
  {
    id: 'gut-begleitet',
    category: 'CLIENT WORK · GUT BEGLEITET',
    title: 'Gut Begleitet',
    description:
      'How the everyday operations of an Austrian care organisation transformed into a connected digital service system',
    areas: [],
    workHref: '/work#gutbegleitet',
    ctaLabel: 'View case study',
    ctaHref: '/case-study/gutbegleitet',
  },
] as const satisfies readonly HomeProjectEntry[]
