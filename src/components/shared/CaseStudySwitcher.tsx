import Link from 'next/link'

type CaseStudyId = 'careos' | 'gutbegleitet'

type CaseStudySwitcherProps = {
  current: CaseStudyId
}

const caseStudies = [
  {
    id: 'gutbegleitet',
    label: 'Gut Begleitet',
    href: '/case-study/gutbegleitet',
  },
  { id: 'careos', label: 'CareOS', href: '/case-study' },
] as const

export function CaseStudySwitcher({ current }: CaseStudySwitcherProps) {
  return (
    <nav aria-label="Case studies" className="mb-8 sm:mb-10">
      <div className="inline-flex rounded-full border border-line bg-surface p-1 shadow-control">
        {caseStudies.map((caseStudy) => {
          const isCurrent = caseStudy.id === current

          return (
            <Link
              key={caseStudy.id}
              href={{ pathname: caseStudy.href }}
              aria-current={isCurrent ? 'page' : undefined}
              className={`focus-ring rounded-full px-4 py-2 font-mono text-xs font-medium tracking-[0.08em] transition-colors duration-(--duration-fast) sm:px-5 ${
                isCurrent
                  ? 'case-study-switcher__active bg-ink text-white'
                  : 'text-muted hover:bg-surface-subtle hover:text-ink'
              }`}
            >
              {caseStudy.label}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
