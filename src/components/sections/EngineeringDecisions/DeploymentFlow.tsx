import { deploymentFlow } from '@/domain/engineering/careos-engineering'
import { EngineeringFlow } from './EngineeringFlow'

export function DeploymentFlow() {
  return (
    <div>
      <p className="font-mono text-sm font-medium tracking-[0.16em] text-accent uppercase">Deployment</p>
      <h2 className="mt-5 text-3xl leading-[1.2] font-medium tracking-[-0.04em] text-ink sm:text-4xl">
        Rapid iteration. Stable production.
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
        Continuous deployment shortens the path from reviewed change to production while keeping the production branch stable.
      </p>
      <div className="mt-7 rounded-panel border border-line bg-surface p-5 shadow-control sm:p-6">
        <EngineeringFlow ariaLabel="Deployment from GitHub to production" steps={deploymentFlow} />
      </div>
    </div>
  )
}
