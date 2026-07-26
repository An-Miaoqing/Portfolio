import { architecturePrinciples } from '@/domain/architecture/careos-architecture'

export function ArchitecturePrinciples() {
  return (
    <article className="mt-8 rounded-panel border border-accent/40 bg-accent-soft p-6 shadow-control sm:p-8 lg:mt-6">
      <div className="grid gap-6 lg:grid-cols-[0.65fr_1.35fr] lg:items-start">
        <div>
          <p className="font-mono text-xs font-medium tracking-[0.14em] text-accent uppercase">Architecture principles</p>
          <h3 className="mt-4 text-2xl leading-[1.2] font-medium tracking-[-0.035em] text-ink">
            One authoritative platform by design.
          </h3>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {architecturePrinciples.map((principle) => (
            <li key={principle} className="flex items-start gap-3 rounded-control border border-accent/20 bg-surface px-4 py-3 text-sm font-medium text-ink">
              <span aria-hidden="true" className="text-accent">✓</span>
              {principle}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
