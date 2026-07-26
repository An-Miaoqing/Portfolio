import { Headline } from '@/components/shared/Headline'
import { SectionWrapper } from '@/components/shared/SectionWrapper'

export type WorkflowStatus = 'current' | 'future'

export type CustomerJourneyStep = {
  label: string
}

export type OperationalWorkflowStage = {
  description: string
  status: WorkflowStatus
  title: string
}

export type BookingDataField = {
  name: string
}

export type BookingValueIcon =
  | 'centralised'
  | 'experience'
  | 'operations'
  | 'requests'
  | 'scalable'
  | 'workflow'

export type BookingBusinessValue = {
  description: string
  icon: BookingValueIcon
  title: string
}

export type BookingServiceWorkflowContent = {
  businessValue: {
    description: string
    items: readonly BookingBusinessValue[]
    title: string
  }
  customerJourney: {
    description: string
    steps: readonly CustomerJourneyStep[]
    title: string
  }
  dataStructure: {
    description: string
    entityName: string
    fields: readonly BookingDataField[]
    futureNote: string
    title: string
  }
  operationalWorkflow: {
    description: string
    stages: readonly OperationalWorkflowStage[]
    title: string
  }
  whyItMatters: {
    description: string
    title: string
  }
}

type BookingServiceWorkflowSectionProps = {
  content: BookingServiceWorkflowContent
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

function CustomerJourney({
  steps,
}: {
  steps: readonly CustomerJourneyStep[]
}) {
  return (
    <div className="overflow-hidden rounded-panel border border-line bg-surface p-5 shadow-control sm:p-8">
      <ol
        aria-label="Customer booking journey"
        className="flex flex-col items-stretch lg:flex-row lg:items-center"
      >
        {steps.map((step, index) => (
          <li
            key={step.label}
            className="flex min-w-0 flex-1 flex-col items-center lg:flex-row"
          >
            <div className="flex min-h-24 w-full flex-1 flex-col justify-between rounded-card border border-line bg-canvas p-4 text-center">
              <span className="font-mono text-[0.65rem] font-medium tracking-[0.12em] text-accent">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="mt-4 text-sm leading-snug font-medium text-ink">
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 ? (
              <svg
                aria-hidden="true"
                className="my-2 size-4 shrink-0 rotate-90 text-line-strong lg:mx-1 lg:my-0 lg:rotate-0"
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
    </div>
  )
}

function OperationalWorkflow({
  stages,
}: {
  stages: readonly OperationalWorkflowStage[]
}) {
  return (
    <div
      aria-label="Booking operational workflow"
      className="overflow-hidden rounded-panel bg-ink p-5 text-white shadow-card sm:p-8"
    >
      <div className="mb-6 flex flex-wrap gap-3 border-b border-white/10 pb-6">
        <span className="rounded-full border border-accent/50 bg-accent/20 px-3 py-1.5 font-mono text-[0.65rem] font-medium tracking-[0.1em] text-white uppercase">
          Current
        </span>
        <span className="rounded-full border border-dashed border-white/25 px-3 py-1.5 font-mono text-[0.65rem] font-medium tracking-[0.1em] text-white/55 uppercase">
          Future opportunity
        </span>
      </div>

      <ol className="mx-auto max-w-5xl">
        {stages.map((stage, index) => (
          <li key={stage.title} className="flex flex-col items-center">
            <article
              className={`grid w-full gap-3 rounded-card border p-5 sm:grid-cols-[3.5rem_minmax(12rem,0.65fr)_minmax(0,1.35fr)_auto] sm:items-center sm:gap-6 sm:p-6 ${
                stage.status === 'future'
                  ? 'border-dashed border-white/25 bg-white/[0.035]'
                  : 'border-white/15 bg-white/[0.07]'
              }`}
            >
              <span className="font-mono text-xs font-medium tracking-[0.12em] text-white/40">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h4 className="text-base leading-snug font-medium text-white">
                {stage.title}
              </h4>
              <p className="text-sm leading-relaxed text-white/65">
                {stage.description}
              </p>
              <span
                className={`w-fit rounded-full px-3 py-1 font-mono text-[0.6rem] font-medium tracking-[0.1em] uppercase ${
                  stage.status === 'future'
                    ? 'border border-dashed border-white/25 text-white/50'
                    : 'border border-accent/40 bg-accent/20 text-white'
                }`}
              >
                {stage.status === 'future' ? 'Future' : 'Current'}
              </span>
            </article>
            {index < stages.length - 1 ? (
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

function BookingEntity({
  entityName,
  fields,
}: {
  entityName: string
  fields: readonly BookingDataField[]
}) {
  return (
    <article className="overflow-hidden rounded-panel border border-line bg-surface shadow-card">
      <div className="flex items-center justify-between bg-ink px-5 py-5 text-white sm:px-7">
        <div>
          <p className="font-mono text-[0.65rem] font-medium tracking-[0.12em] text-white/50 uppercase">
            Simplified operational record
          </p>
          <h4 className="mt-2 text-xl leading-tight font-medium tracking-[-0.03em]">
            {entityName}
          </h4>
        </div>
        <svg
          aria-hidden="true"
          className="size-6 text-white/55"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.75"
          viewBox="0 0 24 24"
        >
          <ellipse cx="12" cy="5" rx="8" ry="3" />
          <path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7" />
        </svg>
      </div>
      <ul className="grid gap-px bg-line sm:grid-cols-2">
        {fields.map((field) => (
          <li
            key={field.name}
            className="bg-surface px-5 py-4 text-sm font-medium text-ink sm:px-6"
          >
            {field.name}
          </li>
        ))}
      </ul>
    </article>
  )
}

function ValueIcon({ icon }: Pick<BookingBusinessValue, 'icon'>) {
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

  if (icon === 'requests') {
    return (
      <svg {...commonProps}>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 8h8M8 12h8M8 16h5" />
      </svg>
    )
  }

  if (icon === 'centralised') {
    return (
      <svg {...commonProps}>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7" />
      </svg>
    )
  }

  if (icon === 'workflow') {
    return (
      <svg {...commonProps}>
        <circle cx="5" cy="6" r="2" />
        <circle cx="19" cy="18" r="2" />
        <path d="M7 6h5a3 3 0 0 1 3 3v6a3 3 0 0 0 3 3M9 18H5a2 2 0 0 1-2-2v-3" />
      </svg>
    )
  }

  if (icon === 'operations') {
    return (
      <svg {...commonProps}>
        <path d="M4 19V5M4 19h16M7 15l4-4 3 2 5-7" />
        <path d="M15 6h4v4" />
      </svg>
    )
  }

  if (icon === 'scalable') {
    return (
      <svg {...commonProps}>
        <path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5" />
        <path d="m3 8 6-5M21 8l-6-5M3 16l6 5M21 16l-6 5" />
      </svg>
    )
  }

  return (
    <svg {...commonProps}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12h8M13 8l4 4-4 4" />
    </svg>
  )
}

function BusinessValueGrid({
  values,
}: {
  values: readonly BookingBusinessValue[]
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {values.map((value) => (
        <article
          key={value.title}
          className="group min-h-52 rounded-card border border-line bg-surface p-5 shadow-control transition-[border-color,box-shadow,transform] duration-(--duration-medium) hover:-translate-y-0.5 hover:border-line-strong hover:shadow-card sm:p-6"
        >
          <div className="grid size-10 place-items-center rounded-control bg-accent-soft text-accent transition-colors duration-(--duration-medium) group-hover:bg-accent group-hover:text-white">
            <ValueIcon icon={value.icon} />
          </div>
          <h4 className="mt-7 text-lg leading-snug font-medium tracking-[-0.025em] text-ink">
            {value.title}
          </h4>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {value.description}
          </p>
        </article>
      ))}
    </div>
  )
}

export function BookingServiceWorkflowSection({
  content,
  eyebrow = 'Operational service flow',
  heading = 'Booking & Service Workflow',
  id = 'booking-service-workflow',
}: BookingServiceWorkflowSectionProps) {
  return (
    <SectionWrapper
      as="section"
      id={id}
      className="border-b border-line bg-canvas py-[var(--space-section)]"
    >
      <Headline eyebrow={eyebrow}>{heading}</Headline>

      <div className="mt-16 grid items-start gap-10 sm:mt-20 lg:grid-cols-[minmax(16rem,0.68fr)_minmax(0,1.32fr)] lg:gap-16">
        <SubsectionHeader
          description={content.whyItMatters.description}
          index="01 / Business process"
          title={content.whyItMatters.title}
        />
        <div className="rounded-panel border border-line bg-surface p-6 shadow-control sm:p-8">
          <p className="font-mono text-xs font-medium tracking-[0.14em] text-accent uppercase">
            Operational shift
          </p>
          <p className="mt-5 text-xl leading-relaxed font-medium tracking-[-0.025em] text-ink">
            From publishing service information to creating structured,
            actionable service requests.
          </p>
        </div>
      </div>

      <div className="mt-20 border-t border-line pt-16">
        <SubsectionHeader
          description={content.customerJourney.description}
          index="02 / Customer experience"
          title={content.customerJourney.title}
        />
        <div className="mt-10">
          <CustomerJourney steps={content.customerJourney.steps} />
        </div>
      </div>

      <div className="mt-20 border-t border-line pt-16">
        <SubsectionHeader
          description={content.operationalWorkflow.description}
          index="03 / Operations"
          title={content.operationalWorkflow.title}
        />
        <div className="mt-10">
          <OperationalWorkflow stages={content.operationalWorkflow.stages} />
        </div>
      </div>

      <div className="mt-20 grid items-start gap-10 border-t border-line pt-16 lg:grid-cols-[minmax(16rem,0.68fr)_minmax(0,1.32fr)] lg:gap-16">
        <div>
          <SubsectionHeader
            description={content.dataStructure.description}
            index="04 / Data"
            title={content.dataStructure.title}
          />
          <p className="mt-6 rounded-card border border-dashed border-line-strong bg-surface-subtle p-5 text-sm leading-relaxed text-muted">
            {content.dataStructure.futureNote}
          </p>
        </div>
        <BookingEntity
          entityName={content.dataStructure.entityName}
          fields={content.dataStructure.fields}
        />
      </div>

      <div className="mt-20 border-t border-line pt-16">
        <SubsectionHeader
          description={content.businessValue.description}
          index="05 / Value"
          title={content.businessValue.title}
        />
        <div className="mt-10">
          <BusinessValueGrid values={content.businessValue.items} />
        </div>
      </div>
    </SectionWrapper>
  )
}
