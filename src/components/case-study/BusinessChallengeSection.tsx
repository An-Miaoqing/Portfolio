import { Headline } from '@/components/shared/Headline'
import { SectionWrapper } from '@/components/shared/SectionWrapper'

export type BusinessChallengeIcon =
  | 'communication'
  | 'growth'
  | 'journey'
  | 'portfolio'
  | 'scalability'
  | 'services'
  | 'structure'

export type BusinessChallengeItem = {
  description: string
  icon: BusinessChallengeIcon
  title: string
}

export type BusinessChallengeFocus = {
  icon: BusinessChallengeIcon
  label: string
}

type BusinessChallengeSectionProps = {
  challenges: readonly BusinessChallengeItem[]
  eyebrow?: string
  focusItems: readonly BusinessChallengeFocus[]
  focusTitle?: string
  heading?: string
  id?: string
  introduction: string
}

function ChallengeIcon({ icon }: { icon: BusinessChallengeIcon }) {
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

  if (icon === 'portfolio') {
    return (
      <svg {...commonProps}>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" />
      </svg>
    )
  }

  if (icon === 'journey') {
    return (
      <svg {...commonProps}>
        <circle cx="5" cy="18" r="2" />
        <circle cx="19" cy="6" r="2" />
        <path d="M7 18h2a3 3 0 0 0 3-3v-6a3 3 0 0 1 3-3h2" />
      </svg>
    )
  }

  if (icon === 'growth') {
    return (
      <svg {...commonProps}>
        <path d="M4 19V5M4 19h16M7 15l4-4 3 2 5-7" />
        <path d="M15 6h4v4" />
      </svg>
    )
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

  if (icon === 'communication') {
    return (
      <svg {...commonProps}>
        <path d="M21 11.5a8 8 0 0 1-8.5 8 9 9 0 0 1-3.8-.9L3 21l1.5-4.6A8.5 8.5 0 1 1 21 11.5Z" />
        <path d="M8 10h8M8 14h5" />
      </svg>
    )
  }

  if (icon === 'scalability') {
    return (
      <svg {...commonProps}>
        <path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5" />
        <path d="m3 8 6-5M21 8l-6-5M3 16l6 5M21 16l-6 5" />
      </svg>
    )
  }

  return (
    <svg {...commonProps}>
      <path d="M12 3v18M3 12h18" />
      <circle cx="12" cy="12" r="8" />
    </svg>
  )
}

export function BusinessChallengeSection({
  challenges,
  eyebrow = 'Organisational context',
  focusItems,
  focusTitle = 'Key Challenges',
  heading = 'Business Challenge',
  id = 'business-challenge',
  introduction,
}: BusinessChallengeSectionProps) {
  return (
    <SectionWrapper
      as="section"
      id={id}
      className="border-b border-line bg-surface-subtle py-[var(--space-section)]"
    >
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(20rem,0.92fr)] lg:gap-16">
        <div>
          <Headline eyebrow={eyebrow}>{heading}</Headline>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-pretty text-muted sm:text-lg">
            {introduction}
          </p>

          <div className="mt-10 border-t border-line">
            {challenges.map((challenge) => (
              <article
                key={challenge.title}
                className="group grid gap-4 border-b border-line py-6 sm:grid-cols-[auto_1fr] sm:gap-5"
              >
                <div className="grid size-10 place-items-center rounded-control bg-accent-soft text-accent transition-colors duration-(--duration-medium) group-hover:bg-accent group-hover:text-white">
                  <ChallengeIcon icon={challenge.icon} />
                </div>
                <div>
                  <h3 className="text-lg leading-snug font-medium tracking-[-0.025em] text-ink">
                    {challenge.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                    {challenge.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside
          aria-labelledby={`${id}-focus-title`}
          className="rounded-panel bg-ink p-6 text-white shadow-card sm:p-8 lg:sticky lg:top-[calc(var(--site-nav-height)+3rem)]"
        >
          <p className="font-mono text-xs font-medium tracking-[0.14em] text-white/60 uppercase">
            Business systems view
          </p>
          <h3
            id={`${id}-focus-title`}
            className="mt-4 text-2xl leading-tight font-medium tracking-[-0.04em]"
          >
            {focusTitle}
          </h3>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {focusItems.map((item) => (
              <div
                key={item.label}
                className="group min-h-32 rounded-card border border-white/15 bg-white/[0.06] p-5 transition-[background-color,border-color,transform] duration-(--duration-medium) hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.1]"
              >
                <div className="grid size-9 place-items-center rounded-control bg-white/10 text-white/75 transition-colors duration-(--duration-medium) group-hover:bg-accent group-hover:text-white">
                  <ChallengeIcon icon={item.icon} />
                </div>
                <p className="mt-5 text-sm leading-snug font-medium text-white">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </SectionWrapper>
  )
}
