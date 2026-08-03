import { methodologySteps } from '@/domain/methodology/careos-methodology'

export function MethodologyFlow() {
  return (
    <ol className="mt-10 flex flex-wrap items-center gap-x-2 gap-y-4" aria-label="Methodology process">
      {methodologySteps.map((step, index) => (
        <li key={step.id} className="flex items-center gap-2">
          <span className="rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-ink shadow-control">
            {step.name}
          </span>
          {index < methodologySteps.length - 1 ? (
            <span aria-hidden="true" className="text-line-strong">
              →
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  )
}
