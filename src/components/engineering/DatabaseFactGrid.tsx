import { PrincipleCard } from './PrincipleCard'

type DatabaseFact = {
  explanation: string
  title: string
}

const DATABASE_FACTS: readonly DatabaseFact[] = [
  {
    title: 'PostgreSQL, accessed through Prisma',
    explanation:
      'The database runs on managed PostgreSQL and is accessed exclusively through a typed Prisma client — application code never talks to the database directly.',
  },
  {
    title: '37 models, 17 enums, 25 migrations',
    explanation:
      'The schema has grown incrementally through timestamped migrations rather than being designed upfront, reflecting how the business domain itself expanded over time.',
  },
  {
    title: '144 indexes, tenant-first',
    explanation:
      'Almost every index leads with the tenant identifier before the fields it actually filters or sorts on — a deliberate tenant-first indexing strategy, not an afterthought.',
  },
  {
    title: 'Serializable transactions, retried on conflict',
    explanation:
      'State-transition-heavy operations — accepting an assignment, completing a visit, finalising payroll — run inside serializable transactions with automatic retry on write conflicts.',
  },
  {
    title: 'Multi-tenancy enforced in code',
    explanation:
      'Every tenant-scoped query is automatically filtered by tenant through a shared data-access extension, rather than relying on database-level row security policies.',
  },
  {
    title: 'No triggers, no stored procedures, no views',
    explanation:
      'Every rule that touches the database — validation, audit logging, sequence numbering — lives in the service layer, not in the database itself.',
  },
  {
    title: 'Deactivate, don’t delete',
    explanation:
      'Core entities carry an active flag rather than a deletion timestamp — records are archived, not destroyed, preserving history for audit and reporting.',
  },
  {
    title: 'Audit logging is a first-class model',
    explanation:
      'Every sensitive change is recorded in an append-only audit log — capturing who made the change, what changed, and when — rather than bolted on after the fact.',
  },
]

export function DatabaseFactGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {DATABASE_FACTS.map((fact) => (
        <PrincipleCard explanation={fact.explanation} key={fact.title} title={fact.title} />
      ))}
    </div>
  )
}
