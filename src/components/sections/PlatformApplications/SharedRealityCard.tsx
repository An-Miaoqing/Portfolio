const sharedRecords = ['Bookings', 'Clients', 'Visits', 'Invoices', 'Reporting'] as const

export function SharedRealityCard() {
  return (
    <article className="h-full rounded-panel border border-accent/40 bg-accent-soft p-6 shadow-control sm:p-8">
      <p className="font-mono text-xs font-medium tracking-[0.14em] text-accent uppercase">One source of truth</p>
      <h3 className="mt-4 max-w-xl text-2xl leading-[1.2] font-medium tracking-[-0.035em] text-ink">
        Every application shares the same operational reality.
      </h3>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
        Managers, employees and customers do not maintain separate records. Changes become visible everywhere through one shared platform.
      </p>
      <ul className="mt-6 flex flex-wrap gap-2" aria-label="Shared operational records">
        {sharedRecords.map((record) => (
          <li key={record} className="rounded-full border border-accent/30 bg-surface px-3 py-1.5 text-xs font-medium text-accent-strong">
            {record}
          </li>
        ))}
      </ul>
    </article>
  )
}
