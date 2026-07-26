'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type ApplicationNodeProps = {
  icon: ReactNode
  isActive: boolean
  label: string
  onSelect: () => void
}

export function ApplicationNode({ icon, isActive, label, onSelect }: ApplicationNodeProps) {
  return (
    <motion.button
      aria-pressed={isActive}
      className={`focus-ring flex flex-col items-center gap-2 rounded-card border bg-surface p-3.5 text-center shadow-control transition-colors duration-500 sm:p-4 ${
        isActive ? 'border-accent' : 'border-line hover:border-line-strong'
      }`}
      onClick={onSelect}
      style={{
        boxShadow: isActive
          ? '0 0 0 1px #176b4d, 0 14px 30px rgba(23, 107, 77, 0.18)'
          : undefined,
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
        {icon}
      </span>
      <span className="text-[0.72rem] leading-tight font-medium text-ink sm:text-sm">
        {label}
      </span>
    </motion.button>
  )
}
