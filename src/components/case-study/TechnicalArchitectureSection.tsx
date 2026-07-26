import { Headline } from '@/components/shared/Headline'
import { SectionWrapper } from '@/components/shared/SectionWrapper'

export type TechnicalFoundationIcon =
  | 'api'
  | 'codebase'
  | 'components'
  | 'content'
  | 'deployment'
  | 'responsive'
  | 'tokens'

export type TechnicalArchitectureLayer = {
  description: string
  title: string
}

export type TechnicalFoundation = {
  description: string
  icon: TechnicalFoundationIcon
  title: string
}

export type TechnicalArchitectureContent = {
  foundation: {
    description: string
    items: readonly TechnicalFoundation[]
    title: string
  }
  layers: {
    description: string
    items: readonly TechnicalArchitectureLayer[]
    title: string
  }
  overview: {
    description: string
    title: string
  }
}

type TechnicalArchitectureSectionProps = {
  content: TechnicalArchitectureContent
  eyebrow?: string
  heading?: string
  id?: string
}

function SubsectionHeader({
  description,
  index,
  title,
}: {
  description: string
  index: string
  title: string
}) {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-xs font-medium tracking-[0.14em] text-accent uppercase">
        {index}
      </p>
      <h3 className="mt-4 text-2xl leading-tight font-medium tracking-[-0.04em] text-ink sm:text-3xl">
        {title}
      </h3>
      <p className="mt-4 text-base leading-relaxed text-pretty text-muted">
        {description}
      </p>
    </div>
  )
}

function ArchitectureDiagram({
  layers,
}: {
  layers: readonly TechnicalArchitectureLayer[]
}) {
  return (
    <div
      aria-label="Technical architecture layers"
      className="overflow-hidden rounded-panel bg-ink p-5 text-white shadow-card sm:p-8"
    >
      <ol className="mx-auto max-w-5xl">
        {layers.map((layer, index) => (
          <li key={layer.title} className="flex flex-col items-center">
            <article
              className={`grid w-full gap-3 rounded-card border p-5 sm:grid-cols-[3.5rem_minmax(12rem,0.7fr)_minmax(0,1.3fr)] sm:items-center sm:gap-6 sm:p-6 ${
                index === 0
                  ? 'border-accent/70 bg-accent/20'
                  : index === layers.length - 1
                    ? 'border-white/25 bg-white/[0.1]'
                    : 'border-white/15 bg-white/[0.06]'
              }`}
            >
              <span className="font-mono text-xs font-medium tracking-[0.12em] text-white/45">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h4 className="text-base leading-snug font-medium text-white">
                {layer.title}
              </h4>
              <p className="text-sm leading-relaxed text-white/65">
                {layer.description}
              </p>
            </article>
            {index < layers.length - 1 ? (
              <div
                aria-hidden="true"
                className="relative h-9 w-px bg-white/25"
              >
                <span className="absolute bottom-0 left-1/2 size-2 -translate-x-1/2 rotate-45 border-r border-b border-white/35" />
              </div>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  )
}

function FoundationIcon({ icon }: Pick<TechnicalFoundation, 'icon'>) {
  const commonProps = {
    'aria-hidden': true,
    className: 'size-5',
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    strokeWidth: 1.75,
    viewBox: '0 0 24 24',
  }

  if (icon === 'components') {
    return (
      <svg {...commonProps}>
        <rect x="3" y="4" width="8" height="7" rx="1.5" />
        <rect x="13" y="4" width="8" height="7" rx="1.5" />
        <rect x="3" y="13" width="8" height="7" rx="1.5" />
        <rect x="13" y="13" width="8" height="7" rx="1.5" />
      </svg>
    )
  }

  if (icon === 'content') {
    return (
      <svg {...commonProps}>
        <path d="M6 3h9l4 4v14H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
        <path d="M14 3v5h5M8 12h7M8 16h5" />
      </svg>
    )
  }

  if (icon === 'responsive') {
    return (
      <svg {...commonProps}>
        <rect x="3" y="4" width="14" height="11" rx="2" />
        <rect x="14" y="10" width="7" height="11" rx="1.5" />
        <path d="M8 20h3M10 15v5" />
      </svg>
    )
  }

  if (icon === 'tokens') {
    return (
      <svg {...commonProps}>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
      </svg>
    )
  }

  if (icon === 'deployment') {
    return (
      <svg {...commonProps}>
        <path d="M12 3 4 7v10l8 4 8-4V7l-8-4Z" />
        <path d="m4 7 8 4 8-4M12 11v10" />
        <path d="m9 6 6 3" />
      </svg>
    )
  }

  if (icon === 'api') {
    return (
      <svg {...commonProps}>
        <ellipse cx="12" cy="6" rx="7.5" ry="3" />
        <path d="M4.5 6v5.5c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3V6" />
        <path d="M4.5 11.5V17c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3v-5.5" />
      </svg>
    )
  }

  return (
    <svg {...commonProps}>
      <path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" />
    </svg>
  )
}

function FoundationGrid({
  items,
}: {
  items: readonly TechnicalFoundation[]
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article
          key={item.title}
          className="group min-h-52 rounded-card border border-line bg-surface p-5 shadow-control transition-[border-color,box-shadow,transform] duration-(--duration-medium) hover:-translate-y-0.5 hover:border-line-strong hover:shadow-card sm:p-6"
        >
          <div className="grid size-10 place-items-center rounded-control bg-accent-soft text-accent transition-colors duration-(--duration-medium) group-hover:bg-accent group-hover:text-white">
            <FoundationIcon icon={item.icon} />
          </div>
          <h4 className="mt-7 text-lg leading-snug font-medium tracking-[-0.025em] text-ink">
            {item.title}
          </h4>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {item.description}
          </p>
        </article>
      ))}
    </div>
  )
}

export function TechnicalArchitectureSection({
  content,
  eyebrow = 'System structure',
  heading = 'Technical Architecture',
  id = 'technical-architecture',
}: TechnicalArchitectureSectionProps) {
  return (
    <SectionWrapper
      as="section"
      id={id}
      className="border-b border-line bg-canvas py-[var(--space-section)]"
    >
      <Headline eyebrow={eyebrow}>{heading}</Headline>

      <div className="mt-16 grid items-start gap-10 sm:mt-20 lg:grid-cols-[minmax(16rem,0.68fr)_minmax(0,1.32fr)] lg:gap-16">
        <SubsectionHeader
          description={content.overview.description}
          index="01 / Intent"
          title={content.overview.title}
        />
        <div className="rounded-panel border border-line bg-surface p-6 shadow-control sm:p-8">
          <p className="font-mono text-xs font-medium tracking-[0.14em] text-accent uppercase">
            Architecture objective
          </p>
          <p className="mt-5 text-xl leading-relaxed font-medium tracking-[-0.025em] text-ink">
            Translate business requirements into a structure that remains clear,
            reusable, and ready to evolve.
          </p>
        </div>
      </div>

      <div className="mt-20 border-t border-line pt-16">
        <SubsectionHeader
          description={content.layers.description}
          index="02 / Layers"
          title={content.layers.title}
        />
        <div className="mt-10">
          <ArchitectureDiagram layers={content.layers.items} />
        </div>
      </div>

      <div className="mt-20 border-t border-line pt-16">
        <SubsectionHeader
          description={content.foundation.description}
          index="03 / Foundation"
          title={content.foundation.title}
        />
        <div className="mt-10">
          <FoundationGrid items={content.foundation.items} />
        </div>
      </div>
    </SectionWrapper>
  )
}
