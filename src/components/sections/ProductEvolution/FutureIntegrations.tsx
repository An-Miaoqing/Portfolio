import { futureIntegrations } from '@/domain/evolution/careos-evolution'

export function FutureIntegrations() {
  return (
    <article className="h-full rounded-panel border border-line bg-surface p-6 shadow-control sm:p-8">
      <p className="font-mono text-xs font-medium tracking-[0.14em] text-accent uppercase">Future integrations</p>
      <h2 className="mt-5 text-3xl leading-[1.2] font-medium tracking-[-0.04em] text-ink">External systems meet the platform boundary.</h2>
      <p className="mt-4 text-base leading-relaxed text-muted">
        Integrations connect through shared platform APIs—not directly to individual applications.
      </p>
      <ul className="mt-7 grid gap-2 sm:grid-cols-2">
        {futureIntegrations.map((integration) => (
          <li key={integration.id} className="rounded-control border border-line bg-surface-subtle px-4 py-3">
            <strong className="block text-sm font-medium text-ink">{integration.name}</strong>
            <span className="mt-1 block text-xs leading-relaxed text-muted">{integration.purpose}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}
