import { Headline } from '@/components/shared/Headline'
import { SectionWrapper } from '@/components/shared/SectionWrapper'

export type SolutionModuleIcon =
  | 'cards'
  | 'content'
  | 'cta'
  | 'forms'
  | 'hero'
  | 'tokens'

export type SolutionArchitectureLayer = {
  items: readonly string[]
  label: string
  status?: string
}

export type SolutionModule = {
  description: string
  icon: SolutionModuleIcon
  title: string
}

export type ContentPrinciple = {
  description: string
  title: string
}

export type SolutionDesignContent = {
  architecture: {
    description: string
    layers: readonly SolutionArchitectureLayer[]
    title: string
  }
  contentStrategy: {
    description: string
    principles: readonly ContentPrinciple[]
    title: string
  }
  modules: {
    description: string
    items: readonly SolutionModule[]
    title: string
  }
  overview: {
    description: string
    flow: readonly string[]
    title: string
  }
}

type SolutionDesignSectionProps = {
  content: SolutionDesignContent
  eyebrow?: string
  heading?: string
  id?: string
}

type SubsectionHeaderProps = {
  description: string
  index: string
  title: string
}

function SubsectionHeader({
  description,
  index,
  title,
}: SubsectionHeaderProps) {
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

function SolutionFlow({ steps }: { steps: readonly string[] }) {
  return (
    <ol
      aria-label="Solution design progression"
      className="grid overflow-hidden rounded-panel border border-line bg-surface shadow-control sm:grid-cols-3"
    >
      {steps.map((step, index) => (
        <li
          key={step}
          className="relative flex min-h-28 items-end border-b border-line p-5 last:border-b-0 sm:border-r sm:border-b-0 sm:last:border-r-0 sm:p-6"
        >
          <span className="absolute top-5 left-5 font-mono text-xs font-medium text-accent">
            {String(index + 1).padStart(2, '0')}
          </span>
          {index < steps.length - 1 ? (
            <svg
              aria-hidden="true"
              className="absolute top-5 right-5 size-4 text-line-strong"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.75"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M14 7l5 5-5 5" />
            </svg>
          ) : null}
          <span className="text-base leading-snug font-medium tracking-[-0.02em] text-ink">
            {step}
          </span>
        </li>
      ))}
    </ol>
  )
}

function ServiceArchitectureDiagram({
  layers,
}: {
  layers: readonly SolutionArchitectureLayer[]
}) {
  return (
    <div
      aria-label="Service architecture relationship diagram"
      className="overflow-hidden rounded-panel bg-ink p-5 text-white shadow-card sm:p-8"
    >
      <div className="mx-auto max-w-5xl space-y-0">
        {layers.map((layer, index) => (
          <div key={layer.label}>
            <div
              className={`relative rounded-card border p-5 sm:p-6 ${
                index === 0
                  ? 'border-accent/70 bg-accent/20'
                  : index === layers.length - 1
                    ? 'border-dashed border-white/25 bg-white/[0.04]'
                    : 'border-white/15 bg-white/[0.07]'
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="font-mono text-xs font-medium tracking-[0.14em] text-white/60 uppercase">
                  {layer.label}
                </p>
                {layer.status ? (
                  <span className="rounded-full border border-white/15 px-3 py-1 font-mono text-[0.65rem] font-medium tracking-[0.12em] text-white/55 uppercase">
                    {layer.status}
                  </span>
                ) : null}
              </div>
              <div
                className={`mt-5 grid gap-3 ${
                  layer.items.length === 1
                    ? ''
                    : 'sm:grid-cols-2 lg:grid-cols-3'
                }`}
              >
                {layer.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-control border border-white/10 bg-white/[0.06] px-4 py-4 text-sm leading-snug font-medium text-white"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            {index < layers.length - 1 ? (
              <div
                aria-hidden="true"
                className="relative mx-auto h-10 w-px bg-white/25"
              >
                <span className="absolute bottom-0 left-1/2 size-2 -translate-x-1/2 rotate-45 border-r border-b border-white/35" />
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}

function ModuleIcon({ icon }: Pick<SolutionModule, 'icon'>) {
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

  if (icon === 'hero') {
    return (
      <svg {...commonProps}>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M7 9h10M7 13h7M7 17h4" />
      </svg>
    )
  }

  if (icon === 'content') {
    return (
      <svg {...commonProps}>
        <path d="M4 5h16M4 12h10M4 19h16" />
        <path d="M17 9h3v6h-3z" />
      </svg>
    )
  }

  if (icon === 'cta') {
    return (
      <svg {...commonProps}>
        <rect x="3" y="7" width="18" height="10" rx="5" />
        <path d="M9 12h6M13 10l2 2-2 2" />
      </svg>
    )
  }

  if (icon === 'cards') {
    return (
      <svg {...commonProps}>
        <rect x="3" y="4" width="8" height="7" rx="1.5" />
        <rect x="13" y="4" width="8" height="7" rx="1.5" />
        <rect x="3" y="13" width="8" height="7" rx="1.5" />
        <rect x="13" y="13" width="8" height="7" rx="1.5" />
      </svg>
    )
  }

  if (icon === 'forms') {
    return (
      <svg {...commonProps}>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 8h8M8 12h8M8 16h4" />
      </svg>
    )
  }

  return (
    <svg {...commonProps}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
    </svg>
  )
}

function ModuleGrid({ modules }: { modules: readonly SolutionModule[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {modules.map((module) => (
        <article
          key={module.title}
          className="group min-h-52 rounded-card border border-line bg-surface p-5 shadow-control transition-[border-color,box-shadow,transform] duration-(--duration-medium) hover:-translate-y-0.5 hover:border-line-strong hover:shadow-card sm:p-6"
        >
          <div className="grid size-10 place-items-center rounded-control bg-accent-soft text-accent transition-colors duration-(--duration-medium) group-hover:bg-accent group-hover:text-white">
            <ModuleIcon icon={module.icon} />
          </div>
          <h4 className="mt-7 text-lg leading-snug font-medium tracking-[-0.025em] text-ink">
            {module.title}
          </h4>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {module.description}
          </p>
        </article>
      ))}
    </div>
  )
}

function ContentPrinciples({
  principles,
}: {
  principles: readonly ContentPrinciple[]
}) {
  return (
    <div className="grid overflow-hidden rounded-panel border border-line bg-surface shadow-control sm:grid-cols-2">
      {principles.map((principle, index) => (
        <article
          key={principle.title}
          className="group border-b border-line p-5 last:border-b-0 sm:min-h-44 sm:p-6 sm:[&:nth-child(odd)]:border-r sm:[&:nth-child(3)]:border-b-0"
        >
          <div className="flex items-center gap-4">
            <span className="grid size-8 shrink-0 place-items-center rounded-full border border-line-strong bg-canvas font-mono text-[0.65rem] font-medium text-accent">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span
              aria-hidden="true"
              className="h-px flex-1 bg-line transition-colors duration-(--duration-medium) group-hover:bg-line-strong"
            />
          </div>
          <h4 className="mt-6 text-lg leading-snug font-medium tracking-[-0.025em] text-ink">
            {principle.title}
          </h4>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {principle.description}
          </p>
        </article>
      ))}
    </div>
  )
}

export function SolutionDesignSection({
  content,
  eyebrow = 'From direction to solution',
  heading = 'Solution Design',
  id = 'solution-design',
}: SolutionDesignSectionProps) {
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
          index="01 / Overview"
          title={content.overview.title}
        />
        <SolutionFlow steps={content.overview.flow} />
      </div>

      <div className="mt-20 border-t border-line pt-16">
        <SubsectionHeader
          description={content.architecture.description}
          index="02 / Relationships"
          title={content.architecture.title}
        />
        <div className="mt-10">
          <ServiceArchitectureDiagram layers={content.architecture.layers} />
        </div>
      </div>

      <div className="mt-20 border-t border-line pt-16">
        <SubsectionHeader
          description={content.modules.description}
          index="03 / System"
          title={content.modules.title}
        />
        <div className="mt-10">
          <ModuleGrid modules={content.modules.items} />
        </div>
      </div>

      <div className="mt-20 border-t border-line pt-16">
        <SubsectionHeader
          description={content.contentStrategy.description}
          index="04 / Content"
          title={content.contentStrategy.title}
        />
        <div className="mt-10">
          <ContentPrinciples
            principles={content.contentStrategy.principles}
          />
        </div>
      </div>
    </SectionWrapper>
  )
}
