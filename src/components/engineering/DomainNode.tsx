'use client'

import { motion } from 'framer-motion'
import type { BusinessDomainId } from '@/domain/engineering/domain-model'

type DomainNodeProps = {
  className?: string
  id: BusinessDomainId
  isActive: boolean
  label: string
  onSelect: () => void
  style?: React.CSSProperties
}

function DomainIcon({ id }: { id: BusinessDomainId }) {
  const common = {
    'aria-hidden': true,
    className: 'size-5',
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    strokeWidth: 1.75,
    viewBox: '0 0 24 24',
  }

  if (id === 'customer') {
    return (
      <svg {...common}>
        <circle cx="8.5" cy="8" r="3" />
        <path d="M2.5 20c0-3.5 2.5-6 6-6s6 2.5 6 6" />
        <circle cx="17.5" cy="9" r="2.3" />
        <path d="M15 20c.3-2.7 2-4.7 4.8-4.7" />
      </svg>
    )
  }

  if (id === 'operations') {
    return (
      <svg {...common}>
        <rect x="3.5" y="5" width="17" height="16" rx="2" />
        <path d="M8 3v4M16 3v4M3.5 10h17" />
      </svg>
    )
  }

  if (id === 'workforce') {
    return (
      <svg {...common}>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <circle cx="12" cy="9.5" r="2.4" />
        <path d="M8 17c0-2.2 1.8-3.5 4-3.5s4 1.3 4 3.5" />
      </svg>
    )
  }

  if (id === 'finance') {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7.5v9M9.3 15.2c.3 1 1.3 1.7 2.7 1.7 1.7 0 2.8-.9 2.8-2.1 0-3.1-5.5-1.5-5.5-4.4 0-1.2 1.1-2.1 2.7-2.1 1.4 0 2.4.7 2.7 1.7" />
      </svg>
    )
  }

  return (
    <svg {...common}>
      <path d="M4 20v-6M10 20V8M16 20v-10" />
      <path d="M2.5 20h19" />
    </svg>
  )
}

export function DomainNode({ className = '', id, isActive, label, onSelect, style }: DomainNodeProps) {
  return (
    <motion.button
      aria-pressed={isActive}
      className={`focus-ring flex flex-col items-center gap-2 rounded-card border bg-surface p-3.5 text-center shadow-control transition-colors duration-500 ${
        isActive ? 'border-accent' : 'border-line hover:border-line-strong'
      } ${className}`}
      onClick={onSelect}
      style={{
        boxShadow: isActive
          ? '0 0 0 1px #176b4d, 0 14px 30px rgba(23, 107, 77, 0.18)'
          : undefined,
        ...style,
      }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      type="button"
      whileHover={{ y: -3 }}
      whileTap={{ y: 0 }}
    >
      <span
        className={`grid size-9 place-items-center rounded-control transition-colors duration-500 ${
          isActive ? 'bg-accent text-white' : 'bg-accent-soft text-accent'
        }`}
      >
        <DomainIcon id={id} />
      </span>
      <span className="text-[0.72rem] leading-tight font-medium text-ink sm:text-sm">{label}</span>
    </motion.button>
  )
}
