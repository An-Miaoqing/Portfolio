import { corePrinciples } from '@/domain/methodology/careos-methodology'

export function CorePrinciples() {
  return (
    <article>
      <p className="font-mono text-sm font-medium tracking-[0.16em] text-accent uppercase">Core principles</p>
      <h2 className="mt-5 text-section font-medium text-balance tracking-[-0.048em] text-ink">Principles visible throughout CareOS.</h2>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        {corePrinciples.map((principle) => (
          <li key={principle.id} className="rounded-card border border-line bg-surface p-4 shadow-control">
            <div className="flex items-start gap-3">
              <span aria-hidden="true" className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-accent-soft text-xs font-bold text-accent">✓</span>
              <div>
                <strong className="block text-base font-medium text-ink">{principle.name}</strong>
                <span className="mt-2 block font-mono text-xs tracking-[0.08em] text-muted uppercase">{principle.connection}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </article>
  )
}
