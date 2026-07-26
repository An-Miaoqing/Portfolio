import { Headline } from '@/components/shared/Headline'
import { SectionWrapper } from '@/components/shared/SectionWrapper'

export type DesignPrincipleIcon =
  | 'accessibility'
  | 'consistency'
  | 'content'
  | 'foundation'
  | 'information'
  | 'scalability'

export type DesignPrinciple = {
  description: string
  icon: DesignPrincipleIcon
  title: string
}

type DesignPrinciplesSectionProps = {
  eyebrow?: string
  heading?: string
  id?: string
  introduction: string
  principles: readonly DesignPrinciple[]
}

function PrincipleIcon({ icon }: Pick<DesignPrinciple, 'icon'>) {
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

  if (icon === 'information') {
    return (
      <svg {...commonProps}>
        <circle cx="6" cy="6" r="2.5" />
        <path d="M3 20v-4.5A3.5 3.5 0 0 1 6.5 12H9" />
        <path d="M13 5h8M13 10h8M13 15h6M13 20h4" />
      </svg>
    )
  }

  if (icon === 'scalability') {
    return (
      <svg {...commonProps}>
        <rect x="3" y="13" width="8" height="8" rx="1.5" />
        <rect x="13" y="3" width="8" height="8" rx="1.5" />
        <path d="M9 13 13 9M9 9h4v4" />
      </svg>
    )
  }

  if (icon === 'consistency') {
    return (
      <svg {...commonProps}>
        <rect x="3" y="4" width="8" height="7" rx="1.5" />
        <rect x="13" y="4" width="8" height="7" rx="1.5" />
        <rect x="3" y="13" width="8" height="7" rx="1.5" />
        <rect x="13" y="13" width="8" height="7" rx="1.5" />
      </svg>
    )
  }

  if (icon === 'accessibility') {
    return (
      <svg {...commonProps}>
        <circle cx="12" cy="4.5" r="2" />
        <path d="M4 8h16M12 8v5M8 21l4-8 4 8M8.5 11.5 6 17M15.5 11.5 18 17" />
      </svg>
    )
  }

  if (icon === 'content') {
    return (
      <svg {...commonProps}>
        <path d="M6 3h9l4 4v14H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
        <path d="M14 3v5h5M8 12h7M8 16h7" />
      </svg>
    )
  }

  return (
    <svg {...commonProps}>
      <path d="M4 20V9l8-5 8 5v11" />
      <path d="M8 20v-6h8v6M2 20h20" />
      <path d="m9.5 10 1.5 1.5 3.5-3.5" />
    </svg>
  )
}

export function DesignPrinciplesSection({
  eyebrow = 'From insight to direction',
  heading = 'Design Principles',
  id = 'design-principles',
  introduction,
  principles,
}: DesignPrinciplesSectionProps) {
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
          {principles.map((principle, index) => (
            <article
              key={principle.title}
              className="group min-h-56 rounded-card border border-line bg-surface p-5 shadow-control transition-[border-color,box-shadow,transform] duration-(--duration-medium) hover:-translate-y-0.5 hover:border-line-strong hover:shadow-card sm:p-6"
            >
              <div className="flex items-center justify-between">
                <div className="grid size-10 place-items-center rounded-control bg-accent-soft text-accent transition-colors duration-(--duration-medium) group-hover:bg-accent group-hover:text-white">
                  <PrincipleIcon icon={principle.icon} />
                </div>
                <span className="font-mono text-xs font-medium tracking-[0.12em] text-muted/60">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-8 text-xl leading-snug font-medium tracking-[-0.03em] text-ink">
                {principle.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
