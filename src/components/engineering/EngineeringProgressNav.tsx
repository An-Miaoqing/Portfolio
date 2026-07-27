'use client'

import { useEffect, useState } from 'react'

const NAV_ITEMS = [
  { id: 'backend-is-the-platform', label: 'Architecture' },
  { id: 'business-domain-model', label: 'Domains' },
  { id: 'business-entities', label: 'Entities' },
  { id: 'entity-relationships', label: 'Relationships' },
  { id: 'business-services', label: 'Services' },
  { id: 'platform-apis', label: 'Platform Interface' },
  { id: 'architecture-principles', label: 'Principles' },
] as const

export function EngineeringProgressNav() {
  const [activeId, setActiveId] = useState<string>(NAV_ITEMS[0].id)

  useEffect(() => {
    const elements = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      (element): element is HTMLElement => element !== null,
    )

    if (elements.length === 0) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <nav
      aria-label="Engineering page sections"
      className="fixed top-[38%] right-5 z-40 hidden -translate-y-1/2 flex-col items-end gap-2.5 lg:flex xl:right-8"
    >
      {NAV_ITEMS.map((item) => {
        const isActive = item.id === activeId

        return (
          <a
            aria-current={isActive ? 'true' : undefined}
            className="focus-ring group flex items-center gap-2.5"
            href={`#${item.id}`}
            key={item.id}
          >
            <span
              className={`text-right text-xs font-medium transition-colors duration-300 ${
                isActive ? 'text-accent' : 'text-muted group-hover:text-ink'
              }`}
            >
              {item.label}
            </span>
            <span
              aria-hidden="true"
              className={`block size-2 shrink-0 rounded-full border transition-colors duration-300 ${
                isActive ? 'border-accent bg-accent' : 'border-line-strong bg-transparent group-hover:border-accent'
              }`}
            />
          </a>
        )
      })}
    </nav>
  )
}
