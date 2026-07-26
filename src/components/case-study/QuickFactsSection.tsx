import { Headline } from '@/components/shared/Headline'
import { SectionWrapper } from '@/components/shared/SectionWrapper'

export type QuickFact = {
  label: string
  value: string | readonly string[]
  wide?: boolean
}

type QuickFactsSectionProps = {
  description: string
  eyebrow?: string
  facts: readonly QuickFact[]
  heading?: string
  id?: string
}

function FactValue({ value }: Pick<QuickFact, 'value'>) {
  const values = typeof value === 'string' ? [value] : value

  return (
    <ul className="mt-4 space-y-2">
      {values.map((item) => (
        <li key={item} className="text-base leading-snug font-medium text-ink sm:text-lg">
          {item}
        </li>
      ))}
    </ul>
  )
}

export function QuickFactsSection({
  description,
  eyebrow = 'Quick facts',
  facts,
  heading = 'Project at a Glance',
  id = 'quick-facts',
}: QuickFactsSectionProps) {
  return (
    <SectionWrapper
      as="section"
      id={id}
      className="border-b border-line bg-surface-subtle py-[var(--space-section)]"
    >
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(16rem,0.65fr)_minmax(0,1.35fr)] lg:gap-16">
        <div className="lg:sticky lg:top-[calc(var(--site-nav-height)+3rem)]">
          <Headline eyebrow={eyebrow}>{heading}</Headline>
          <p className="mt-6 max-w-xl text-body-lg text-pretty text-muted sm:mt-8">
            {description}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {facts.map((fact) => (
            <article
              key={fact.label}
              className={`rounded-card border border-line bg-surface p-5 shadow-control transition-[border-color,box-shadow,transform] duration-(--duration-medium) hover:-translate-y-0.5 hover:border-line-strong hover:shadow-card sm:p-6 ${
                fact.wide ? 'sm:col-span-2' : ''
              }`}
            >
              <p className="font-mono text-xs font-medium tracking-[0.14em] text-accent uppercase">
                {fact.label}
              </p>
              <FactValue value={fact.value} />
            </article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
