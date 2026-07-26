import { Headline } from '@/components/shared/Headline'
import { SectionWrapper } from '@/components/shared/SectionWrapper'

export type DesignDecisionIcon =
  | 'consistency'
  | 'content'
  | 'modules'
  | 'navigation'
  | 'organisation'
  | 'structure'

export type DesignDecision = {
  challenge: string
  decision: string
  icon: DesignDecisionIcon
  outcome: string
  rationale: string
}

type KeyDesignDecisionsSectionProps = {
  decisions: readonly DesignDecision[]
  eyebrow?: string
  heading?: string
  id?: string
  introduction: string
}

function DecisionIcon({ icon }: Pick<DesignDecision, 'icon'>) {
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

  if (icon === 'structure') {
    return (
      <svg {...commonProps}>
        <rect x="9" y="3" width="6" height="5" rx="1" />
        <rect x="3" y="16" width="6" height="5" rx="1" />
        <rect x="15" y="16" width="6" height="5" rx="1" />
        <path d="M12 8v4M6 16v-4h12v4" />
      </svg>
    )
  }

  if (icon === 'organisation') {
    return (
      <svg {...commonProps}>
        <path d="M4 5h16M4 12h10M4 19h16" />
        <circle cx="18" cy="12" r="3" />
      </svg>
    )
  }

  if (icon === 'consistency') {
    return (
      <svg {...commonProps}>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M8 4v5M8 13h8M8 17h5" />
      </svg>
    )
  }

  if (icon === 'modules') {
    return (
      <svg {...commonProps}>
        <rect x="3" y="4" width="8" height="7" rx="1.5" />
        <rect x="13" y="4" width="8" height="7" rx="1.5" />
        <rect x="3" y="13" width="8" height="7" rx="1.5" />
        <rect x="13" y="13" width="8" height="7" rx="1.5" />
      </svg>
    )
  }

  if (icon === 'navigation') {
    return (
      <svg {...commonProps}>
        <circle cx="12" cy="12" r="9" />
        <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
      </svg>
    )
  }

  return (
    <svg {...commonProps}>
      <path d="M6 3h9l4 4v14H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
      <path d="M14 3v5h5M8 12h7M8 16h5" />
    </svg>
  )
}

function DecisionCard({
  decision,
  index,
}: {
  decision: DesignDecision
  index: number
}) {
  return (
    <article className="group overflow-hidden rounded-card border border-line bg-surface shadow-control transition-[border-color,box-shadow,transform] duration-(--duration-medium) hover:-translate-y-0.5 hover:border-line-strong hover:shadow-card">
      <div className="h-1 bg-accent" />
      <div className="p-5 sm:p-7">
        <div className="flex items-start justify-between gap-5">
          <div className="grid size-10 shrink-0 place-items-center rounded-control bg-accent-soft text-accent transition-colors duration-(--duration-medium) group-hover:bg-accent group-hover:text-white">
            <DecisionIcon icon={decision.icon} />
          </div>
          <span className="font-mono text-xs font-medium tracking-[0.12em] text-muted/60 lg:hidden">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <div className="mt-7">
          <p className="font-mono text-xs font-medium tracking-[0.14em] text-accent uppercase">
            Challenge
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            {decision.challenge}
          </p>
        </div>

        <div className="mt-6 border-t border-line pt-6">
          <p className="font-mono text-xs font-medium tracking-[0.14em] text-muted uppercase">
            Decision
          </p>
          <h3 className="mt-3 text-xl leading-snug font-medium tracking-[-0.03em] text-ink">
            {decision.decision}
          </h3>
        </div>

        <div className="mt-6 grid gap-5 border-t border-line pt-6 sm:grid-cols-2">
          <div>
            <p className="font-mono text-[0.7rem] font-medium tracking-[0.12em] text-muted uppercase">
              Why this approach
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {decision.rationale}
            </p>
          </div>
          <div className="rounded-control bg-accent-soft p-4">
            <p className="font-mono text-[0.7rem] font-medium tracking-[0.12em] text-accent uppercase">
              Outcome
            </p>
            <p className="mt-3 text-sm leading-relaxed font-medium text-ink">
              {decision.outcome}
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}

export function KeyDesignDecisionsSection({
  decisions,
  eyebrow = 'Problem to value',
  heading = 'Key Design Decisions',
  id = 'key-design-decisions',
  introduction,
}: KeyDesignDecisionsSectionProps) {
  return (
    <SectionWrapper
      as="section"
      id={id}
      className="border-b border-line bg-canvas py-[var(--space-section)]"
    >
      <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)] lg:gap-16">
        <Headline eyebrow={eyebrow}>{heading}</Headline>
        <p className="max-w-2xl text-base leading-relaxed text-pretty text-muted sm:text-lg">
          {introduction}
        </p>
      </div>

      <div className="relative mt-16 sm:mt-20">
        <span
          aria-hidden="true"
          className="absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-line-strong lg:block"
        />
        <ol className="relative space-y-5 lg:space-y-12">
          {decisions.map((decision, index) => (
            <li
              key={decision.decision}
              className="relative lg:grid lg:grid-cols-2 lg:gap-20"
            >
              <span
                aria-hidden="true"
                className="absolute top-10 left-1/2 z-10 hidden size-10 -translate-x-1/2 place-items-center rounded-full border border-line-strong bg-canvas font-mono text-xs font-medium text-accent shadow-control lg:grid"
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <div
                className={
                  index % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-2'
                }
              >
                <DecisionCard decision={decision} index={index} />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </SectionWrapper>
  )
}
