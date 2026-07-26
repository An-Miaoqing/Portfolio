import { typeSafetyFlow } from '@/domain/engineering/careos-engineering'
import { EngineeringFlow } from './EngineeringFlow'

export function TypeSafetyDiagram() {
  return (
    <div>
      <p className="font-mono text-sm font-medium tracking-[0.16em] text-accent uppercase">Type safety</p>
      <h2 className="mt-5 text-3xl leading-[1.2] font-medium tracking-[-0.04em] text-ink sm:text-4xl">
        One contract across every boundary.
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
        One shared type system reduces runtime errors as data moves from interface to validation and relational storage.
      </p>
      <div className="mt-7 rounded-panel border border-line bg-canvas p-5 shadow-control sm:p-6">
        <EngineeringFlow ariaLabel="Type safety from React to PostgreSQL" steps={typeSafetyFlow} />
      </div>
    </div>
  )
}
