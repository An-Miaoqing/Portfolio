import { businessDomainModel } from '@/domain/engineering/domain-model'

export function EntityPreview() {
  return (
    <div>
      <p className="text-center font-mono text-xs font-medium tracking-[0.14em] text-accent uppercase">
        A glimpse of what each domain holds
      </p>
      <h3 className="mt-3 text-center text-xl leading-tight font-medium tracking-[-0.03em] text-ink sm:text-2xl">
        Domains already have a shape — entities come next.
      </h3>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-5 sm:gap-4">
        {businessDomainModel.map((domain) => (
          <div
            className="rounded-card border border-line bg-surface p-4 text-center"
            key={domain.id}
          >
            <p className="text-sm font-medium text-ink">{domain.name}</p>
            <span aria-hidden="true" className="mt-1 block text-line-strong">
              ↓
            </span>
            {domain.owns.length > 0 ? (
              <ul className="mt-1 space-y-1">
                {domain.owns.map((item) => (
                  <li className="text-xs text-pretty text-muted" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-1 text-xs text-pretty text-muted italic">Reads every domain</p>
            )}
          </div>
        ))}
      </div>

      <p className="mt-6 text-center text-sm text-pretty text-muted italic">
        Not the full data model — just a preview. The following section turns these into concrete
        database entities.
      </p>
    </div>
  )
}
