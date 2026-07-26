import { Headline } from '@/components/shared/Headline'
import { SectionWrapper } from '@/components/shared/SectionWrapper'

export type ProjectOutcomeIcon =
  | 'architecture'
  | 'components'
  | 'content'
  | 'deployment'
  | 'hierarchy'
  | 'presence'
  | 'responsive'
  | 'services'

export type ProjectOutcome = {
  description: string
  icon: ProjectOutcomeIcon
  title: string
}

type ProjectOutcomesSectionProps = {
  closingNote: string
  eyebrow?: string
  heading?: string
  id?: string
  introduction: string
  outcomes: readonly ProjectOutcome[]
}

function OutcomeIcon({ icon }: Pick<ProjectOutcome, 'icon'>) {
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

  if (icon === 'presence') {
    return (
      <svg {...commonProps}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
      </svg>
    )
  }

  if (icon === 'services') {
    return (
      <svg {...commonProps}>
        <path d="M4 5h16M4 12h10M4 19h16" />
        <circle cx="18" cy="12" r="3" />
      </svg>
    )
  }

  if (icon === 'hierarchy') {
    return (
      <svg {...commonProps}>
        <rect x="9" y="3" width="6" height="5" rx="1" />
        <rect x="3" y="16" width="6" height="5" rx="1" />
        <rect x="15" y="16" width="6" height="5" rx="1" />
        <path d="M12 8v4M6 16v-4h12v4" />
      </svg>
    )
  }

  if (icon === 'architecture') {
    return (
      <svg {...commonProps}>
        <path d="M4 20V9l8-5 8 5v11M2 20h20" />
        <path d="M8 20v-6h8v6M8 10h8" />
      </svg>
    )
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

  return (
    <svg {...commonProps}>
      <path d="M12 3 4 7v10l8 4 8-4V7l-8-4Z" />
      <path d="m4 7 8 4 8-4M12 11v10" />
      <path d="m9 6 6 3" />
    </svg>
  )
}

export function ProjectOutcomesSection({
  closingNote,
  eyebrow = 'Delivered foundation',
  heading = 'Project Outcomes',
  id = 'project-outcomes',
  introduction,
  outcomes,
}: ProjectOutcomesSectionProps) {
  return (
    <SectionWrapper
      as="section"
      id={id}
      className="border-b border-line bg-surface-subtle py-[var(--space-section)]"
    >
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(16rem,0.68fr)_minmax(0,1.32fr)] lg:gap-16">
        <div className="lg:sticky lg:top-[calc(var(--site-nav-height)+3rem)]">
          <Headline eyebrow={eyebrow}>{heading}</Headline>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-pretty text-muted sm:text-lg">
            {introduction}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {outcomes.map((outcome, index) => (
            <article
              key={outcome.title}
              className="group min-h-52 rounded-card border border-line bg-surface p-5 shadow-control transition-[border-color,box-shadow,transform] duration-(--duration-medium) hover:-translate-y-0.5 hover:border-line-strong hover:shadow-card sm:p-6"
            >
              <div className="flex items-center justify-between">
                <div className="grid size-10 place-items-center rounded-control bg-accent-soft text-accent transition-colors duration-(--duration-medium) group-hover:bg-accent group-hover:text-white">
                  <OutcomeIcon icon={outcome.icon} />
                </div>
                <span className="font-mono text-xs font-medium tracking-[0.12em] text-muted/60">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-7 text-lg leading-snug font-medium tracking-[-0.025em] text-ink">
                {outcome.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {outcome.description}
              </p>
            </article>
          ))}
        </div>
      </div>

      <aside className="mt-16 rounded-panel border border-line bg-canvas p-6 shadow-control sm:mt-20 sm:p-8 lg:grid lg:grid-cols-[16rem_minmax(0,1fr)] lg:items-start lg:gap-12">
        <p className="font-mono text-xs font-medium tracking-[0.14em] text-accent uppercase">
          Future opportunities
        </p>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-pretty text-muted lg:mt-0">
          {closingNote}
        </p>
      </aside>
    </SectionWrapper>
  )
}
