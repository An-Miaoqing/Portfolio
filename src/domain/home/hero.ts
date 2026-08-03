export type HeroHeadingLine = {
  text: string
  tone: 'dark' | 'gradient' | 'indigo'
}

export const heroEyebrow = 'Business Systems Analyst'

export const heroHeadingLines: readonly HeroHeadingLine[] = [
  { text: 'Understanding businesses', tone: 'indigo' },
  { text: 'Designing systems', tone: 'gradient' },
  { text: 'Delivering practical solutions', tone: 'gradient' },
]

export const heroLeadIn =
  'Helping organisations transform business complexity into practical digital systems.'

export const heroCta = {
  label: 'View selected work',
  href: '#work',
}

export const heroSecondaryCta = {
  label: 'Explore case studies',
  href: '/case-study',
}

export const heroBridge = 'organisations・systems・outcomes'
