'use client'

import { motion } from 'framer-motion'

type EntityCardProps = {
  isActive: boolean
  name: string
  onSelect: () => void
  purpose: string
}

export function EntityCard({ isActive, name, onSelect, purpose }: EntityCardProps) {
  return (
    <motion.button
      aria-pressed={isActive}
      className={`focus-ring flex flex-col items-start gap-1.5 rounded-card border bg-surface p-4 text-left transition-colors duration-500 ${
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
      <span className={`text-sm font-medium ${isActive ? 'text-accent' : 'text-ink'}`}>{name}</span>
      <span className="text-xs leading-snug text-pretty text-muted">{purpose}</span>
    </motion.button>
  )
}
