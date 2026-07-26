import { PrincipleCard } from './PrincipleCard'

type Principle = {
  explanation: string
  title: string
}

const PRINCIPLES: readonly Principle[] = [
  {
    title: 'Business before technology',
    explanation: 'Software should reflect how the organisation operates rather than how it is implemented.',
  },
  {
    title: 'Single source of truth',
    explanation: 'Business information should exist in one authoritative location.',
  },
  {
    title: 'Shared business logic',
    explanation: 'Rules belong in the platform, not individual applications.',
  },
  {
    title: 'Separation of responsibilities',
    explanation: 'Each domain, service, and application has a clearly defined role.',
  },
  {
    title: 'Design for evolution',
    explanation: 'New services and applications should extend the platform without changing its foundations.',
  },
  {
    title: 'Consistency through reuse',
    explanation: 'Shared models and services reduce duplication and improve reliability.',
  },
]

export function PrincipleGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {PRINCIPLES.map((principle) => (
        <PrincipleCard explanation={principle.explanation} key={principle.title} title={principle.title} />
      ))}
    </div>
  )
}
