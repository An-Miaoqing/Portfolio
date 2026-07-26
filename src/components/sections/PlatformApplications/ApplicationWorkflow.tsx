'use client'

import { LifecycleCanvas } from '@/components/lifecycle'
import type { WorkflowEngine } from '@/components/lifecycle'
import type { CareOSApplication } from '@/domain/applications/application.types'

export function ApplicationWorkflow({
  application,
  engine,
}: {
  application: CareOSApplication
  engine: WorkflowEngine
}) {
  return (
    <div className="rounded-panel border border-line bg-canvas p-4 sm:p-6 lg:p-5">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <p className="font-mono text-xs font-medium tracking-[0.14em] text-muted uppercase">
          Connected workflow stages / {application.navigatorLabel}
        </p>
        {application.planned && (
          <span className="rounded-full border border-line-strong px-2 py-1 font-mono text-[0.56rem] tracking-[0.1em] text-muted uppercase">
            Planned
          </span>
        )}
      </div>
      <LifecycleCanvas engine={engine} interactive={false} showDetail={false} showProgress={false} />
    </div>
  )
}
