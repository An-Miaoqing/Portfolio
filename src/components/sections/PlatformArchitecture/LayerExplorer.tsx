'use client'

import type { KeyboardEvent } from 'react'
import type { ArchitectureLayer, ArchitectureLayerId } from '@/domain/architecture/architecture.types'

type LayerExplorerProps = {
  activeLayerId: ArchitectureLayerId
  layers: readonly ArchitectureLayer[]
  onSelect: (layerId: ArchitectureLayerId) => void
}

export function LayerExplorer({ activeLayerId, layers, onSelect }: LayerExplorerProps) {
  const navigate = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const direction = event.key === 'ArrowDown' || event.key === 'ArrowRight'
      ? 1
      : event.key === 'ArrowUp' || event.key === 'ArrowLeft'
        ? -1
        : 0

    if (!direction) return
    event.preventDefault()
    const nextIndex = (index + direction + layers.length) % layers.length
    onSelect(layers[nextIndex].id)
    event.currentTarget.parentElement
      ?.querySelector<HTMLButtonElement>(`[data-layer-index="${nextIndex}"]`)
      ?.focus()
  }

  return (
    <nav aria-label="Architecture layers" className="rounded-panel border border-line bg-surface p-3 shadow-control">
      <p className="px-3 pt-2 pb-3 font-mono text-xs font-medium tracking-[0.14em] text-muted uppercase">
        Layer explorer
      </p>
      <div role="tablist" className="grid grid-cols-2 gap-1 sm:grid-cols-3 lg:grid-cols-1">
        {layers.map((layer, index) => {
          const active = activeLayerId === layer.id
          return (
            <button
              key={layer.id}
              id={`architecture-tab-${layer.id}`}
              type="button"
              role="tab"
              data-layer-index={index}
              aria-controls="architecture-layer-panel"
              aria-selected={active}
              tabIndex={active ? 0 : -1}
              onClick={() => onSelect(layer.id)}
              onKeyDown={(event) => navigate(event, index)}
              className={`focus-ring flex min-h-14 items-center justify-between gap-3 rounded-control px-3 py-2 text-left transition-[background-color,color,box-shadow,transform] duration-(--duration-medium) last:col-span-2 sm:last:col-span-1 lg:min-h-11 ${active ? '-translate-y-0.5 bg-accent text-white shadow-control' : 'text-ink hover:-translate-y-0.5 hover:bg-surface-subtle hover:shadow-control'}`}
            >
              <span className="text-sm font-medium">{layer.name}</span>
              <span aria-hidden="true" className={`font-mono text-[0.6rem] ${active ? 'text-accent-soft' : 'text-line-strong'}`}>
                {String(index + 1).padStart(2, '0')}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
