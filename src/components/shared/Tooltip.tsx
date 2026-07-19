'use client'

import { useId } from 'react'
import type { ReactNode } from 'react'

type TooltipProps = {
  children: ReactNode
  content: string
}

export function Tooltip({ children, content }: TooltipProps) {
  const tooltipId = useId()

  return (
    <span className="group relative inline-flex">
      <button
        type="button"
        aria-describedby={tooltipId}
        className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-control border border-line bg-surface px-3 text-sm font-medium text-muted shadow-control transition-colors duration-(--duration-fast) hover:text-ink"
      >
        {children}
      </button>
      <span
        id={tooltipId}
        role="tooltip"
        className="pointer-events-none absolute right-0 bottom-[calc(100%+0.75rem)] z-20 w-60 translate-y-1 rounded-control bg-ink px-3 py-2 text-xs leading-relaxed text-white opacity-0 shadow-card transition-[opacity,transform] duration-(--duration-fast) group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100"
      >
        {content}
      </span>
    </span>
  )
}
