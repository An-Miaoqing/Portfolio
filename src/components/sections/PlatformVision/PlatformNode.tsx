'use client'

import { AnimatePresence, motion } from 'framer-motion'
import type { FocusEvent, MouseEvent } from 'react'
import { detailReveal, motionTransitions } from '@/components/motion/presets'
import type { PlatformDomain, PlatformDomainId } from './platform-data'

type PlatformNodeProps = {
  activeDomain: PlatformDomainId | null
  domain: PlatformDomain
  onChange: (domain: PlatformDomainId | null) => void
}

export function PlatformNode({
  activeDomain,
  domain,
  onChange,
}: PlatformNodeProps) {
  const isActive = activeDomain === domain.id
  const isSubdued = activeDomain !== null && !isActive
  const detailId = `${domain.id}-details`

  const handleMouseLeave = (event: MouseEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(document.activeElement)) {
      onChange(null)
    }
  }

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      onChange(null)
    }
  }

  return (
    <div className="w-full">
      <motion.article
        layout
        transition={motionTransitions.medium}
        onMouseEnter={() => onChange(domain.id)}
        onMouseLeave={handleMouseLeave}
        onFocus={() => onChange(domain.id)}
        onBlur={handleBlur}
        className={`overflow-hidden rounded-card border bg-white shadow-control transition-colors duration-(--duration-fast) ${
          isActive ? 'border-accent' : 'border-line'
        }`}
      >
        <button
          type="button"
          aria-expanded={isActive}
          aria-controls={detailId}
          onClick={() => onChange(isActive ? null : domain.id)}
          className="focus-ring flex min-h-24 w-full items-center justify-between gap-6 rounded-card px-5 py-4 text-left"
        >
          <span
            className={`transition-opacity duration-(--duration-fast) ${isSubdued ? 'opacity-[0.38]' : 'opacity-100'}`}
          >
            <span className="mb-2 block font-mono text-xs tracking-[0.12em] text-muted">{domain.index}</span>
            <span className="block text-lg font-medium tracking-[-0.025em] text-ink">{domain.name}</span>
          </span>
          <span
            aria-hidden="true"
            className={`text-lg text-muted transition-[transform,opacity] duration-(--duration-medium) ${isActive ? 'rotate-45' : ''} ${isSubdued ? 'opacity-[0.38]' : 'opacity-100'}`}
          >
            +
          </span>
        </button>

        <AnimatePresence initial={false}>
          {isActive && (
            <motion.div
              id={detailId}
              key={detailId}
              variants={detailReveal}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="overflow-hidden"
            >
              <div className="border-t border-line px-5 pt-4 pb-5">
                <p className="mb-4 text-sm leading-relaxed text-muted">{domain.summary}</p>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-3" aria-label={`${domain.name} capabilities`}>
                  {domain.capabilities.map((capability) => (
                    <li key={capability} className="flex items-start gap-2 text-sm text-ink">
                      <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.article>
    </div>
  )
}
