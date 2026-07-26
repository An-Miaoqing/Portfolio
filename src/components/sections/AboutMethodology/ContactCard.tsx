import { contactItems, portfolioNavigation } from '@/domain/methodology/careos-methodology'

export function ContactCard() {
  return (
    <article className="rounded-panel border border-line bg-surface p-6 shadow-card sm:p-8">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="font-mono text-xs font-medium tracking-[0.14em] text-accent uppercase">Contact</p>
          <p className="mt-5 text-3xl leading-[1.2] font-medium tracking-[-0.04em] text-ink">AMQ / Systems</p>
          <p className="mt-3 text-base text-muted">Business Systems Analyst</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <dl className="space-y-3">
            {contactItems.slice(1).map((item) => (
              <div key={item.id} className="border-b border-line pb-3">
                <dt className="font-mono text-xs tracking-[0.1em] text-muted uppercase">{item.label}</dt>
                <dd className="mt-1 text-sm font-medium text-ink">{item.value}</dd>
              </div>
            ))}
          </dl>
          <nav aria-label="Portfolio navigation">
            <p className="font-mono text-xs tracking-[0.1em] text-muted uppercase">Portfolio navigation</p>
            <ul className="mt-3 space-y-2">
              {portfolioNavigation.map((item) => (
                <li key={item.id}>
                  <a className="focus-ring flex items-center justify-between rounded-control border border-line px-3 py-2 text-sm font-medium text-ink hover:border-accent" href={item.href}>
                    {item.value}<span aria-hidden="true">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </article>
  )
}
