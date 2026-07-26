'use client'

import type { KeyboardEvent } from 'react'
import type { CareOSApplication, CareOSApplicationId } from '@/domain/applications/application.types'

type ApplicationNavigatorProps = {
  activeApplicationId: CareOSApplicationId
  applications: readonly CareOSApplication[]
  onSelect: (applicationId: CareOSApplicationId) => void
}

export function ApplicationNavigator({
  activeApplicationId,
  applications,
  onSelect,
}: ApplicationNavigatorProps) {
  const navigate = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const direction = event.key === 'ArrowDown' || event.key === 'ArrowRight'
      ? 1
      : event.key === 'ArrowUp' || event.key === 'ArrowLeft'
        ? -1
        : 0

    if (!direction) return
    event.preventDefault()
    const nextIndex = (index + direction + applications.length) % applications.length
    const nextApplication = applications[nextIndex]
    onSelect(nextApplication.id)
    event.currentTarget.parentElement
      ?.querySelector<HTMLButtonElement>(`[data-application-index="${nextIndex}"]`)
      ?.focus()
  }

  return (
    <nav aria-label="Platform applications" className="rounded-panel border border-line bg-surface p-3 shadow-control">
      <p className="px-3 pt-2 pb-3 font-mono text-xs font-medium tracking-[0.14em] text-muted uppercase">
        Application navigator
      </p>
      <div role="tablist" className="grid grid-cols-2 gap-1 sm:grid-cols-4 lg:grid-cols-1">
        {applications.map((application, index) => {
          const active = application.id === activeApplicationId
          return (
            <button
              key={application.id}
              id={`application-tab-${application.id}`}
              type="button"
              role="tab"
              data-application-index={index}
              aria-controls="application-panel"
              aria-selected={active}
              tabIndex={active ? 0 : -1}
              onClick={() => onSelect(application.id)}
              onKeyDown={(event) => navigate(event, index)}
              className={`focus-ring flex min-h-14 items-center justify-between gap-3 rounded-control px-3 py-2 text-left transition-[background-color,color,box-shadow,transform] duration-(--duration-medium) lg:min-h-11 ${active ? '-translate-y-0.5 bg-accent text-white shadow-control' : 'text-ink hover:-translate-y-0.5 hover:bg-surface-subtle hover:shadow-control'}`}
            >
              <span className="text-sm font-medium">{application.navigatorLabel}</span>
              {application.planned ? (
                <span className={`rounded-full border px-2 py-1 font-mono text-[0.52rem] tracking-[0.08em] uppercase ${active ? 'border-accent-soft/50 text-accent-soft' : 'border-line-strong text-muted'}`}>
                  Planned
                </span>
              ) : (
                <span aria-hidden="true" className={`font-mono text-[0.6rem] ${active ? 'text-accent-soft' : 'text-line-strong'}`}>
                  {application.icon}
                </span>
              )}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
