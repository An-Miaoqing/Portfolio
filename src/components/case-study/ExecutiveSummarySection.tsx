import { Headline } from '@/components/shared/Headline'
import { SectionWrapper } from '@/components/shared/SectionWrapper'

export type ExecutiveHighlightIcon =
  | 'challenge'
  | 'role'
  | 'solution'
  | 'outcome'

export type ExecutiveHighlight = {
  description: string
  icon: ExecutiveHighlightIcon
  title: string
}

type ExecutiveSummarySectionProps = {
  eyebrow?: string
  heading?: string
  highlights: readonly ExecutiveHighlight[]
  id?: string
  summary: string
}

function HighlightIcon({ icon }: Pick<ExecutiveHighlight, 'icon'>) {
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

  if (icon === 'challenge') {
    return (
      <svg {...commonProps}>
        <path d="M12 3 3.8 18a2 2 0 0 0 1.8 3h12.8a2 2 0 0 0 1.8-3L12 3Z" />
        <path d="M12 9v5M12 17.5h.01" />
      </svg>
    )
  }

  if (icon === 'role') {
    return (
      <svg {...commonProps}>
        <circle cx="12" cy="7.5" r="3.5" />
        <path d="M5 21v-2.5A5.5 5.5 0 0 1 10.5 13h3a5.5 5.5 0 0 1 5.5 5.5V21" />
      </svg>
    )
  }

  if (icon === 'solution') {
    return (
      <svg {...commonProps}>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M8 4v5M16 4v5" />
      </svg>
    )
  }

  return (
    <svg {...commonProps}>
      <path d="M4 18V9M10 18V5M16 18v-7M22 18V3" />
      <path d="M2 21h20" />
    </svg>
  )
}

export function ExecutiveSummarySection({
  eyebrow = 'Project overview',
  heading = 'Executive Summary',
  highlights,
  id = 'executive-summary',
  summary,
}: ExecutiveSummarySectionProps) {
  return (
    <SectionWrapper
      as="section"
      id={id}
      className="border-b border-line bg-canvas py-[var(--space-section)]"
    >
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <div>
          <Headline eyebrow={eyebrow}>{heading}</Headline>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-pretty text-muted sm:text-lg">
            {summary}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {highlights.map((highlight) => (
            <article
              key={highlight.title}
              className="group min-h-56 rounded-card border border-line bg-surface p-5 shadow-control transition-[border-color,box-shadow,transform] duration-(--duration-medium) hover:-translate-y-0.5 hover:border-line-strong hover:shadow-card sm:p-6"
            >
              <div className="grid size-10 place-items-center rounded-control bg-accent-soft text-accent transition-colors duration-(--duration-medium) group-hover:bg-accent group-hover:text-white">
                <HighlightIcon icon={highlight.icon} />
              </div>
              <h3 className="mt-8 text-xl leading-snug font-medium tracking-[-0.03em] text-ink">
                {highlight.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {highlight.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
