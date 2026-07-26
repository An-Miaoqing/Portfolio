import { Headline } from '@/components/shared/Headline'
import { SectionWrapper } from '@/components/shared/SectionWrapper'

export type AnalysisStakeholder = {
  name: string
}

export type AnalysisService = {
  name: string
}

export type AnalysisArchitecture = {
  root: string
  sections: readonly string[]
}

export type AnalysisJourney = {
  actor: string
  steps: readonly string[]
}

export type AnalysisRequirement = {
  description: string
  title: string
}

type AnalysisSubsectionCopy = {
  description: string
  title: string
}

export type BusinessAnalysisContent = {
  approach: {
    description: string
    steps: readonly string[]
    title: string
  }
  architecture: AnalysisSubsectionCopy & AnalysisArchitecture
  ecosystem: AnalysisSubsectionCopy & {
    centre: string
    services: readonly AnalysisService[]
  }
  journeys: AnalysisSubsectionCopy & {
    items: readonly AnalysisJourney[]
  }
  requirements: AnalysisSubsectionCopy & {
    items: readonly AnalysisRequirement[]
  }
  stakeholders: AnalysisSubsectionCopy & {
    centre: string
    groups: readonly AnalysisStakeholder[]
  }
}

type BusinessAnalysisSectionProps = {
  content: BusinessAnalysisContent
  eyebrow?: string
  heading?: string
  id?: string
}

function SubsectionHeading({
  description,
  index,
  title,
}: AnalysisSubsectionCopy & { index: string }) {
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

function AnalysisFlow({ steps }: { steps: readonly string[] }) {
  return (
    <ol
      className="mt-10 grid overflow-hidden rounded-panel border border-line bg-surface shadow-control sm:grid-cols-2 lg:grid-cols-4"
      aria-label="Business analysis process"
    >
      {steps.map((step, index) => (
        <li
          key={step}
          className="group relative flex min-h-32 items-end border-b border-line p-5 last:border-b-0 sm:[&:nth-child(odd)]:border-r sm:[&:nth-child(3)]:border-b-0 lg:border-r lg:border-b-0 lg:last:border-r-0 sm:p-6"
        >
          <span className="absolute top-5 left-5 font-mono text-xs font-medium text-accent">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-base leading-snug font-medium tracking-[-0.02em] text-ink">
            {step}
          </span>
          {index < steps.length - 1 ? (
            <svg
              aria-hidden="true"
              className="absolute top-5 right-5 size-4 text-line-strong transition-transform duration-(--duration-medium) group-hover:translate-x-0.5"
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
        </li>
      ))}
    </ol>
  )
}

function StakeholderMap({
  centre,
  groups,
}: Pick<BusinessAnalysisContent['stakeholders'], 'centre' | 'groups'>) {
  return (
    <div
      className="relative overflow-hidden rounded-panel border border-line bg-surface p-5 shadow-control sm:p-8"
      aria-label={`${centre} stakeholder relationship map`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[17%] top-1/2 hidden h-px bg-line-strong md:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-[19%] left-1/2 hidden w-px bg-line-strong md:block"
      />
      <div className="relative grid gap-3 md:grid-cols-3 md:grid-rows-3">
        {groups.map((group, index) => (
          <div
            key={group.name}
            className={`relative z-10 flex min-h-24 items-center justify-center rounded-card border border-line bg-canvas px-4 py-5 text-center text-sm leading-snug font-medium text-ink shadow-control ${
              index === 3 ? 'md:col-start-3' : ''
            } ${index === 4 ? 'md:col-start-1 md:row-start-3' : ''} ${
              index === 5 ? 'md:col-start-3 md:row-start-3' : ''
            }`}
          >
            {group.name}
          </div>
        ))}
        <div className="relative z-20 row-start-1 flex min-h-24 items-center justify-center rounded-card bg-ink px-5 py-6 text-center text-base font-medium text-white shadow-card md:col-start-2 md:row-start-2">
          {centre}
        </div>
      </div>
    </div>
  )
}

function ServiceEcosystem({
  centre,
  services,
}: Pick<BusinessAnalysisContent['ecosystem'], 'centre' | 'services'>) {
  return (
    <div
      className="rounded-panel border border-line bg-ink p-5 text-white shadow-card sm:p-8"
      aria-label={`${centre} service ecosystem`}
    >
      <div className="grid items-stretch gap-3 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_0.8fr_1fr_1fr]">
        {services.map((service, index) => (
          <div
            key={service.name}
            className={`relative flex min-h-28 items-center justify-center rounded-card border border-white/15 bg-white/[0.06] p-5 text-center text-sm leading-snug font-medium ${
              index === 2 ? 'lg:col-start-5' : ''
            } ${index === 3 ? 'lg:col-start-1' : ''} ${
              index === 4 ? 'lg:col-start-2' : ''
            } ${index === 5 ? 'lg:col-start-5 lg:row-start-2' : ''
            }`}
          >
            {service.name}
          </div>
        ))}
        <div className="relative flex min-h-28 items-center justify-center rounded-card bg-accent p-5 text-center text-base leading-snug font-medium text-white shadow-card sm:col-span-2 lg:col-span-1 lg:col-start-3 lg:row-start-1 lg:row-end-3">
          <span
            aria-hidden="true"
            className="absolute top-1/2 right-full hidden h-px w-[200%] bg-white/20 lg:block"
          />
          <span
            aria-hidden="true"
            className="absolute top-1/2 left-full hidden h-px w-[200%] bg-white/20 lg:block"
          />
          <span
            aria-hidden="true"
            className="absolute bottom-full left-1/2 hidden h-12 w-px bg-white/20 lg:block"
          />
          <span
            aria-hidden="true"
            className="absolute top-full left-1/2 hidden h-12 w-px bg-white/20 lg:block"
          />
          <span className="relative z-10">{centre}</span>
        </div>
      </div>
    </div>
  )
}

function InformationArchitecture({
  root,
  sections,
}: AnalysisArchitecture) {
  return (
    <div
      className="rounded-panel border border-line bg-surface p-5 shadow-control sm:p-8"
      aria-label={`${root} information architecture`}
    >
      <div className="mx-auto max-w-4xl">
        <div className="relative mx-auto flex min-h-24 max-w-sm items-center justify-center rounded-card bg-ink px-6 py-5 text-center text-base font-medium text-white shadow-card">
          {root}
          <span
            aria-hidden="true"
            className="absolute top-full left-1/2 h-8 w-px bg-line-strong"
          />
        </div>
        <div
          aria-hidden="true"
          className="mx-auto mt-8 hidden h-px w-[calc(100%-12.5%)] bg-line-strong sm:block"
        />
        <div className="mt-3 grid gap-3 sm:mt-0 sm:grid-cols-2 lg:grid-cols-4">
          {sections.map((section) => (
            <div
              key={section}
              className="relative flex min-h-20 items-center justify-center rounded-card border border-line bg-canvas px-4 py-4 text-center text-sm font-medium text-ink shadow-control"
            >
              <span
                aria-hidden="true"
                className="absolute bottom-full left-1/2 hidden h-3 w-px bg-line-strong sm:block"
              />
              {section}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function JourneyFlows({ journeys }: { journeys: readonly AnalysisJourney[] }) {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {journeys.map((journey) => (
        <article
          key={journey.actor}
          className="rounded-card border border-line bg-surface p-5 shadow-control transition-[border-color,box-shadow,transform] duration-(--duration-medium) hover:-translate-y-0.5 hover:border-line-strong hover:shadow-card sm:p-6"
        >
          <p className="font-mono text-xs font-medium tracking-[0.14em] text-accent uppercase">
            {journey.actor}
          </p>
          <ol className="mt-6 space-y-0">
            {journey.steps.map((step, index) => (
              <li key={step} className="relative pb-7 last:pb-0">
                {index < journey.steps.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="absolute top-7 left-[0.95rem] h-[calc(100%-1.25rem)] w-px bg-line-strong"
                  />
                ) : null}
                <div className="flex items-start gap-4">
                  <span className="relative z-10 grid size-8 shrink-0 place-items-center rounded-full border border-line-strong bg-canvas font-mono text-[0.65rem] font-medium text-muted">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="pt-1 text-sm leading-relaxed font-medium text-ink">
                    {step}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </article>
      ))}
    </div>
  )
}

function RequirementGrid({
  requirements,
}: {
  requirements: readonly AnalysisRequirement[]
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {requirements.map((requirement, index) => (
        <article
          key={requirement.title}
          className="group min-h-48 rounded-card border border-line bg-canvas p-5 shadow-control transition-[border-color,box-shadow,transform] duration-(--duration-medium) hover:-translate-y-0.5 hover:border-line-strong hover:shadow-card sm:p-6"
        >
          <div className="flex items-center justify-between">
            <span className="grid size-9 place-items-center rounded-control bg-accent-soft font-mono text-xs font-medium text-accent transition-colors duration-(--duration-medium) group-hover:bg-accent group-hover:text-white">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span aria-hidden="true" className="h-px w-10 bg-line-strong" />
          </div>
          <h4 className="mt-7 text-lg leading-snug font-medium tracking-[-0.025em] text-ink">
            {requirement.title}
          </h4>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {requirement.description}
          </p>
        </article>
      ))}
    </div>
  )
}

export function BusinessAnalysisSection({
  content,
  eyebrow = 'Analytical process',
  heading = 'Business Analysis',
  id = 'business-analysis',
}: BusinessAnalysisSectionProps) {
  return (
    <SectionWrapper
      as="section"
      id={id}
      className="border-b border-line bg-canvas py-[var(--space-section)]"
    >
      <Headline eyebrow={eyebrow}>{heading}</Headline>

      <div className="mt-16 sm:mt-20">
        <SubsectionHeading
          description={content.approach.description}
          index="01 / Foundation"
          title={content.approach.title}
        />
        <AnalysisFlow steps={content.approach.steps} />
      </div>

      <div className="mt-20 grid items-start gap-10 border-t border-line pt-16 lg:grid-cols-[minmax(16rem,0.65fr)_minmax(0,1.35fr)] lg:gap-16">
        <SubsectionHeading
          description={content.stakeholders.description}
          index="02 / People"
          title={content.stakeholders.title}
        />
        <StakeholderMap
          centre={content.stakeholders.centre}
          groups={content.stakeholders.groups}
        />
      </div>

      <div className="mt-20 border-t border-line pt-16">
        <SubsectionHeading
          description={content.ecosystem.description}
          index="03 / Services"
          title={content.ecosystem.title}
        />
        <div className="mt-10">
          <ServiceEcosystem
            centre={content.ecosystem.centre}
            services={content.ecosystem.services}
          />
        </div>
      </div>

      <div className="mt-20 border-t border-line pt-16">
        <SubsectionHeading
          description={content.architecture.description}
          index="04 / Structure"
          title={content.architecture.title}
        />
        <div className="mt-10">
          <InformationArchitecture
            root={content.architecture.root}
            sections={content.architecture.sections}
          />
        </div>
      </div>

      <div className="mt-20 border-t border-line pt-16">
        <SubsectionHeading
          description={content.journeys.description}
          index="05 / Journeys"
          title={content.journeys.title}
        />
        <div className="mt-10">
          <JourneyFlows journeys={content.journeys.items} />
        </div>
      </div>

      <div className="mt-20 border-t border-line pt-16">
        <SubsectionHeading
          description={content.requirements.description}
          index="06 / Requirements"
          title={content.requirements.title}
        />
        <div className="mt-10">
          <RequirementGrid requirements={content.requirements.items} />
        </div>
      </div>
    </SectionWrapper>
  )
}
