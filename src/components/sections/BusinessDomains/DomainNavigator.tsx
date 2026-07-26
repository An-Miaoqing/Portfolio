'use client'

import type { KeyboardEvent } from 'react'
import type { BusinessDomain, BusinessDomainId } from '@/domain/business-domains/domain.types'

type DomainNavigatorProps = {
  activeDomainId: BusinessDomainId
  domains: readonly BusinessDomain[]
  onSelect: (domainId: BusinessDomainId) => void
}

export function DomainNavigator({ activeDomainId, domains, onSelect }: DomainNavigatorProps) {
  const navigate = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const direction = event.key === 'ArrowDown' || event.key === 'ArrowRight'
      ? 1
      : event.key === 'ArrowUp' || event.key === 'ArrowLeft'
        ? -1
        : 0

    if (!direction) return
    event.preventDefault()
    const nextIndex = (index + direction + domains.length) % domains.length
    const nextDomain = domains[nextIndex]
    onSelect(nextDomain.id)
    event.currentTarget.parentElement
      ?.querySelector<HTMLButtonElement>(`[data-domain-index="${nextIndex}"]`)
      ?.focus()
  }

  return (
    <nav aria-label="Business domains" className="rounded-panel border border-line bg-surface p-3 shadow-control">
      <p className="px-3 pt-2 pb-3 font-mono text-xs font-medium tracking-[0.14em] text-muted uppercase">Domain navigator</p>
      <div role="tablist" className="grid grid-cols-2 gap-1 sm:grid-cols-3 lg:grid-cols-1">
        {domains.map((domain, index) => {
          const active = domain.id === activeDomainId
          return (
            <button
              key={domain.id}
              id={`domain-tab-${domain.id}`}
              type="button"
              role="tab"
              data-domain-index={index}
              aria-controls="domain-explanation"
              aria-selected={active}
              tabIndex={active ? 0 : -1}
              onClick={() => onSelect(domain.id)}
              onKeyDown={(event) => navigate(event, index)}
              className={`focus-ring group flex min-h-14 flex-col justify-center rounded-control px-3 py-2 text-left transition-[background-color,color,box-shadow,transform] duration-(--duration-medium) last:col-span-2 sm:last:col-span-1 lg:min-h-9 lg:flex-row lg:items-center lg:justify-between lg:gap-3 lg:px-3 lg:py-1.5 ${active ? '-translate-y-0.5 bg-accent text-white shadow-control' : 'text-ink hover:-translate-y-0.5 hover:bg-surface-subtle hover:shadow-control'}`}
            >
              <span>
                <span className="block text-sm font-medium">{domain.name}</span>
              </span>
              <span aria-hidden="true" className={`font-mono text-[0.62rem] ${active ? 'text-accent-soft' : 'text-line-strong'}`}>{domain.badge}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
