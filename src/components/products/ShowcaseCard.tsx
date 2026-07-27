import type { ProductEntry } from '@/domain/products/products'
import { CTAButton } from '@/components/shared/CTAButton'

function ImagePlaceholder({ alt }: { alt: string }) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-panel border border-line bg-surface-subtle">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-line) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="relative grid h-full place-items-center p-6 text-center">
        <div>
          <span
            aria-hidden="true"
            className="mx-auto grid size-12 place-items-center rounded-full border border-line bg-surface text-muted"
          >
            ▢
          </span>
          <p className="mt-3 font-mono text-xs font-medium tracking-[0.1em] text-muted uppercase">{alt}</p>
        </div>
      </div>
    </div>
  )
}

type ShowcaseCardProps = {
  product: ProductEntry
  reverse: boolean
}

export function ShowcaseCard({ product, reverse }: ShowcaseCardProps) {
  const image = <ImagePlaceholder alt={product.imageAlt} />

  const content = (
    <div>
      <p className="font-mono text-xs font-medium tracking-[0.14em] text-accent uppercase">{product.audience}</p>
      <h3 className="mt-3 text-2xl leading-tight font-medium tracking-[-0.03em] text-ink sm:text-3xl">
        {product.name}
      </h3>
      <p className="mt-4 max-w-lg text-base leading-relaxed text-pretty text-muted sm:text-lg">
        {product.purpose}
      </p>

      <div className="mt-6 border-t border-line pt-5">
        <p className="font-mono text-[0.65rem] font-medium tracking-[0.12em] text-muted uppercase">
          Intended for
        </p>
        <ul className="mt-2 flex flex-wrap gap-1.5">
          {product.intendedUsers.map((user) => (
            <li
              className="rounded-full border border-line bg-surface-subtle px-3 py-1 text-xs font-medium text-ink"
              key={user}
            >
              {user}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 border-t border-line pt-5">
        <p className="font-mono text-[0.65rem] font-medium tracking-[0.12em] text-muted uppercase">
          Key capabilities
        </p>
        <ul className="mt-2 space-y-1.5">
          {product.keyCapabilities.map((capability) => (
            <li className="flex items-start gap-2 text-sm leading-relaxed text-pretty text-ink" key={capability}>
              <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
              {capability}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <CTAButton href={product.primaryCta.href} icon="right" label={product.primaryCta.label} variant="primary" />
        <a
          className="focus-ring group flex items-center gap-3 rounded-card border border-line bg-surface-subtle px-4 py-3 text-sm font-medium text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
          href={`#experience-${product.id}`}
        >
          <span
            aria-hidden="true"
            className="grid size-7 shrink-0 place-items-center rounded-full bg-accent-soft text-accent transition-transform duration-300 group-hover:translate-x-0.5"
          >
            ↗
          </span>
          Experience this product
        </a>
      </div>
    </div>
  )

  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
      {reverse ? content : image}
      {reverse ? image : content}
    </div>
  )
}
