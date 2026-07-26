import { Headline } from '@/components/shared/Headline'
import { SectionWrapper } from '@/components/shared/SectionWrapper'

export type ImplementationHighlightVisual =
  | {
      components: readonly string[]
      outputs: readonly string[]
      type: 'component-system'
    }
  | {
      breakpoints: readonly { label: string; width: string }[]
      type: 'responsive'
    }
  | {
      label: string
      steps: readonly string[]
      type: 'flow'
    }

export type ImplementationHighlight = {
  businessProblem: string
  businessValue: string
  implementedSolution: string
  title: string
  visual: ImplementationHighlightVisual
}

export type ImplementationHighlightsContent = {
  highlights: readonly ImplementationHighlight[]
  introduction: string
}

type ImplementationHighlightsSectionProps = {
  content: ImplementationHighlightsContent
  eyebrow?: string
  heading?: string
  id?: string
}

function FlowDiagram({
  label,
  steps,
}: {
  label: string
  steps: readonly string[]
}) {
  return (
    <div
      aria-label={label}
      className="overflow-hidden rounded-panel bg-ink p-5 text-white shadow-card sm:p-6"
    >
      <ol className="mx-auto max-w-xs">
        {steps.map((step, index) => (
          <li key={step} className="flex flex-col items-center">
            <div className="flex w-full items-center gap-3 rounded-card border border-white/15 bg-white/[0.07] p-4">
              <span className="font-mono text-xs font-medium tracking-[0.12em] text-white/45">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="text-sm leading-snug font-medium text-white">
                {step}
              </span>
            </div>
            {index < steps.length - 1 ? (
              <div
                aria-hidden="true"
                className="relative h-7 w-px bg-white/25"
              >
                <span className="absolute bottom-0 left-1/2 size-1.5 -translate-x-1/2 rotate-45 border-r border-b border-white/35" />
              </div>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  )
}

function ComponentSystemDiagram({
  components,
  outputs,
}: {
  components: readonly string[]
  outputs: readonly string[]
}) {
  return (
    <div
      aria-label="Reusable component system diagram"
      className="overflow-hidden rounded-panel bg-ink p-5 text-white shadow-card sm:p-6"
    >
      <p className="font-mono text-xs font-medium tracking-[0.14em] text-white/50 uppercase">
        Shared components
      </p>
      <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
        {components.map((component) => (
          <div
            key={component}
            className="rounded-control border border-accent/40 bg-accent/15 px-3 py-2.5 text-center text-xs leading-snug font-medium text-white"
          >
            {component}
          </div>
        ))}
      </div>

      <div
        aria-hidden="true"
        className="relative mx-auto my-5 h-8 w-px bg-white/25"
      >
        <span className="absolute bottom-0 left-1/2 size-1.5 -translate-x-1/2 rotate-45 border-r border-b border-white/35" />
      </div>

      <p className="font-mono text-xs font-medium tracking-[0.14em] text-white/50 uppercase">
        Assembled pages
      </p>
      <div className="mt-4 grid gap-2.5 sm:grid-cols-3">
        {outputs.map((output) => (
          <div
            key={output}
            className="rounded-control border border-dashed border-white/25 bg-white/[0.05] px-3 py-2.5 text-center text-xs leading-snug font-medium text-white/80"
          >
            {output}
          </div>
        ))}
      </div>
    </div>
  )
}

function ResponsiveDiagram({
  breakpoints,
}: {
  breakpoints: readonly { label: string; width: string }[]
}) {
  return (
    <div
      aria-label="Responsive layout adaptation diagram"
      className="overflow-hidden rounded-panel bg-ink p-5 text-white shadow-card sm:p-6"
    >
      <div className="flex flex-wrap items-end justify-center gap-4">
        {breakpoints.map((breakpoint, index) => (
          <div
            key={breakpoint.label}
            className="flex flex-col items-center gap-3"
          >
            <div
              className={`flex flex-col gap-1.5 rounded-md border border-white/20 bg-white/[0.06] p-2 ${
                index === 0
                  ? 'h-28 w-24'
                  : index === 1
                    ? 'h-24 w-16'
                    : 'h-20 w-10'
              }`}
            >
              <span className="h-1.5 w-full shrink-0 rounded-full bg-accent/70" />
              {index === 0 ? (
                <span className="grid h-full w-full grid-cols-2 gap-1">
                  <span className="rounded-[2px] bg-white/20" />
                  <span className="rounded-[2px] bg-white/20" />
                </span>
              ) : (
                <span className="flex h-full w-full flex-col gap-1">
                  <span className="h-full w-full rounded-[2px] bg-white/20" />
                  <span className="h-full w-full rounded-[2px] bg-white/20" />
                </span>
              )}
            </div>
            <div className="text-center">
              <p className="text-xs font-medium text-white">
                {breakpoint.label}
              </p>
              <p className="font-mono text-[0.6rem] text-white/45">
                {breakpoint.width}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function HighlightVisualDiagram({
  visual,
}: {
  visual: ImplementationHighlightVisual
}) {
  if (visual.type === 'component-system') {
    return (
      <ComponentSystemDiagram
        components={visual.components}
        outputs={visual.outputs}
      />
    )
  }

  if (visual.type === 'responsive') {
    return <ResponsiveDiagram breakpoints={visual.breakpoints} />
  }

  return <FlowDiagram label={visual.label} steps={visual.steps} />
}

function HighlightCard({
  highlight,
  index,
}: {
  highlight: ImplementationHighlight
  index: number
}) {
  const reversed = index % 2 === 1

  return (
    <article
      className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
        index === 0 ? 'mt-16 sm:mt-20' : 'mt-20 border-t border-line pt-16'
      }`}
    >
      <div className={reversed ? 'lg:order-2' : ''}>
        <HighlightVisualDiagram visual={highlight.visual} />
      </div>

      <div className={reversed ? 'lg:order-1' : ''}>
        <p className="font-mono text-xs font-medium tracking-[0.14em] text-accent uppercase">
          {String(index + 1).padStart(2, '0')} / {highlight.title}
        </p>
        <h3 className="mt-4 text-2xl leading-tight font-medium tracking-[-0.04em] text-ink sm:text-3xl">
          {highlight.title}
        </h3>

        <div className="mt-6 space-y-5">
          <div>
            <p className="font-mono text-[0.65rem] font-medium tracking-[0.12em] text-muted uppercase">
              Business Problem
            </p>
            <p className="mt-2 text-base leading-relaxed text-pretty text-ink">
              {highlight.businessProblem}
            </p>
          </div>

          <div>
            <p className="font-mono text-[0.65rem] font-medium tracking-[0.12em] text-muted uppercase">
              Implemented Solution
            </p>
            <p className="mt-2 text-base leading-relaxed text-pretty text-ink">
              {highlight.implementedSolution}
            </p>
          </div>

          <div className="rounded-card border border-line bg-surface p-5 shadow-control">
            <p className="font-mono text-[0.65rem] font-medium tracking-[0.12em] text-accent uppercase">
              Business Value
            </p>
            <p className="mt-2 text-sm leading-relaxed text-pretty text-muted">
              {highlight.businessValue}
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}

export function ImplementationHighlightsSection({
  content,
  eyebrow = 'Proof of execution',
  heading = 'Implementation Highlights',
  id = 'implementation-highlights',
}: ImplementationHighlightsSectionProps) {
  return (
    <SectionWrapper
      as="section"
      id={id}
      className="border-b border-line bg-canvas py-[var(--space-section)]"
    >
      <Headline eyebrow={eyebrow}>{heading}</Headline>

      <p className="mt-8 max-w-3xl text-base leading-relaxed text-pretty text-muted sm:text-lg">
        {content.introduction}
      </p>

      {content.highlights.map((highlight, index) => (
        <HighlightCard
          key={highlight.title}
          highlight={highlight}
          index={index}
        />
      ))}
    </SectionWrapper>
  )
}
