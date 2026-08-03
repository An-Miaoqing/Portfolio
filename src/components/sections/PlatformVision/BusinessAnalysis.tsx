import { analysisPractices } from '@/domain/methodology/careos-methodology'

export function BusinessAnalysis() {
  return (
    <article>
      <p className="font-mono text-sm font-medium tracking-[0.16em] text-accent uppercase">Business analysis</p>
      <h2 className="mt-5 text-section font-medium text-balance tracking-[-0.048em] text-ink">Make the operating problem visible.</h2>
      <p className="mt-5 max-w-2xl text-body-lg text-pretty text-muted">
        Analysis turns fragmented observations into a shared understanding of work, responsibility and information.
      </p>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        {analysisPractices.map((practice) => (
          <li key={practice.id} className="rounded-card border border-line bg-surface p-4 shadow-control">
            <strong className="block text-base font-medium text-ink">{practice.name}</strong>
            <span className="mt-2 block text-sm leading-relaxed text-muted">{practice.outcome}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}
