import { Headline } from '@/components/shared/Headline'
import { SectionWrapper } from '@/components/shared/SectionWrapper'

export type ProjectProcessIcon =
  | 'ai'
  | 'analysis'
  | 'deployment'
  | 'discovery'
  | 'solution'
  | 'validation'

export type ProjectProcessStage = {
  description: string
  icon: ProjectProcessIcon
  title: string
}

export type ProjectCapability = {
  name: string
}

type ProjectProcessSectionProps = {
  capabilities: readonly ProjectCapability[]
  eyebrow?: string
  heading?: string
  id?: string
  introduction: string
  panelTitle?: string
  stages: readonly ProjectProcessStage[]
}

function ProcessIcon({ icon }: Pick<ProjectProcessStage, 'icon'>) {
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

  if (icon === 'discovery') {
    return (
      <svg {...commonProps}>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m15.5 15.5 5 5M8 8h5M8 11h4" />
      </svg>
    )
  }

  if (icon === 'analysis') {
    return (
      <svg {...commonProps}>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 8h8M8 12h5M8 16h3M15 16l2 2 3-4" />
      </svg>
    )
  }

  if (icon === 'solution') {
    return (
      <svg {...commonProps}>
        <rect x="3" y="4" width="8" height="7" rx="1.5" />
        <rect x="13" y="4" width="8" height="7" rx="1.5" />
        <rect x="8" y="15" width="8" height="6" rx="1.5" />
        <path d="M7 11v2h10v-2M12 13v2" />
      </svg>
    )
  }

  if (icon === 'ai') {
    return (
      <svg {...commonProps}>
        <rect x="5" y="5" width="14" height="14" rx="3" />
        <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M19 9h3M2 15h3M19 15h3" />
        <path d="m9 14 3-5 3 5M10 12h4" />
      </svg>
    )
  }

  if (icon === 'validation') {
    return (
      <svg {...commonProps}>
        <path d="M20 11a8 8 0 1 1-2.3-5.7" />
        <path d="M20 4v7h-7M8.5 12l2.2 2.2L15.5 9" />
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

function ProcessTimeline({
  stages,
}: {
  stages: readonly ProjectProcessStage[]
}) {
  return (
    <ol aria-label="Project process stages" className="space-y-4 md:space-y-0">
      {stages.map((stage, index) => (
        <li
          key={stage.title}
          className="group relative md:grid md:grid-cols-[3.5rem_minmax(0,1fr)] md:gap-5 md:pb-7 md:last:pb-0"
        >
          <div className="relative hidden justify-center md:flex">
            {index < stages.length - 1 ? (
              <span
                aria-hidden="true"
                className="absolute top-12 bottom-[-1.75rem] left-1/2 w-px -translate-x-1/2 bg-line-strong"
              />
            ) : null}
            <span className="relative z-10 grid size-11 place-items-center rounded-full border border-line-strong bg-canvas font-mono text-xs font-medium text-accent shadow-control">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>

          <article className="rounded-card border border-line bg-surface p-5 shadow-control transition-[border-color,box-shadow,transform] duration-(--duration-medium) group-hover:-translate-y-0.5 group-hover:border-line-strong group-hover:shadow-card sm:p-6">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="font-mono text-xs font-medium tracking-[0.14em] text-accent uppercase md:hidden">
                  Stage {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-3 text-xl leading-snug font-medium tracking-[-0.03em] text-ink md:mt-0">
                  {stage.title}
                </h3>
              </div>
              <div className="grid size-10 shrink-0 place-items-center rounded-control bg-accent-soft text-accent transition-colors duration-(--duration-medium) group-hover:bg-accent group-hover:text-white">
                <ProcessIcon icon={stage.icon} />
              </div>
            </div>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              {stage.description}
            </p>
          </article>
        </li>
      ))}
    </ol>
  )
}

function CapabilityPanel({
  capabilities,
  title,
}: {
  capabilities: readonly ProjectCapability[]
  title: string
}) {
  return (
    <aside className="rounded-panel bg-ink p-6 text-white shadow-card sm:p-8 lg:sticky lg:top-[calc(var(--site-nav-height)+3rem)]">
      <p className="font-mono text-xs font-medium tracking-[0.14em] text-white/55 uppercase">
        Demonstrated capabilities
      </p>
      <h3 className="mt-4 text-2xl leading-tight font-medium tracking-[-0.04em]">
        {title}
      </h3>
      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        {capabilities.map((capability, index) => (
          <div
            key={capability.name}
            className="group min-h-28 rounded-card border border-white/15 bg-white/[0.06] p-4 transition-[background-color,border-color,transform] duration-(--duration-medium) hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.1]"
          >
            <span className="font-mono text-[0.65rem] font-medium tracking-[0.12em] text-white/45">
              {String(index + 1).padStart(2, '0')}
            </span>
            <p className="mt-5 text-sm leading-snug font-medium text-white">
              {capability.name}
            </p>
          </div>
        ))}
      </div>
    </aside>
  )
}

export function ProjectProcessSection({
  capabilities,
  eyebrow = 'From problem to production',
  heading = 'Project Process',
  id = 'project-process',
  introduction,
  panelTitle = 'How I Worked',
  stages,
}: ProjectProcessSectionProps) {
  return (
    <SectionWrapper
      as="section"
      id={id}
      className="border-b border-line bg-surface-subtle py-[var(--space-section)]"
    >
      <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)] lg:gap-16">
        <Headline eyebrow={eyebrow}>{heading}</Headline>
        <p className="max-w-2xl text-base leading-relaxed text-pretty text-muted sm:text-lg">
          {introduction}
        </p>
      </div>

      <div className="mt-16 grid items-start gap-12 sm:mt-20 lg:grid-cols-[minmax(0,1.25fr)_minmax(20rem,0.75fr)] lg:gap-16">
        <ProcessTimeline stages={stages} />
        <CapabilityPanel capabilities={capabilities} title={panelTitle} />
      </div>
    </SectionWrapper>
  )
}
