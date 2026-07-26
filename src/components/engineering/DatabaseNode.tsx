'use client'

import { motion } from 'framer-motion'

const ACCENT = '#176b4d'
const MUTED = '#69716c'
const SURFACE = '#ffffff'
const SURFACE_LIT = '#e4f1eb'

type DatabaseNodeProps = {
  isGlowing: boolean
  isPulsing: boolean
}

function DatabaseIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      viewBox="0 0 24 24"
    >
      <ellipse cx="12" cy="6" rx="7.5" ry="3" />
      <path d="M4.5 6v5.5c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3V6" />
      <path d="M4.5 11.5V17c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3v-5.5" />
    </svg>
  )
}

export function DatabaseNode({ isGlowing, isPulsing }: DatabaseNodeProps) {
  return (
    <div className="relative mx-auto w-full max-w-[15rem]">
      {isPulsing ? (
        <motion.span
          animate={{ opacity: 0, scale: 1.4 }}
          aria-hidden="true"
          className="absolute inset-0 rounded-panel"
          initial={{ opacity: 0.65, scale: 0.92 }}
          style={{
            background:
              'radial-gradient(circle, rgba(23, 107, 77, 0.3), rgba(23, 107, 77, 0.1) 55%, transparent 75%)',
          }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      ) : null}

      <motion.div
        animate={{
          backgroundColor: isGlowing ? SURFACE_LIT : SURFACE,
          boxShadow: isGlowing
            ? '0 14px 32px rgba(23, 107, 77, 0.18)'
            : '0 4px 14px rgba(15, 23, 42, 0.05)',
        }}
        aria-label="Shared Database — the persistent operational data store"
        className={`relative flex items-center justify-center gap-2.5 rounded-panel border px-6 py-4 text-center transition-colors duration-700 ${
          isGlowing ? 'border-accent/50' : 'border-line'
        }`}
        initial={{ backgroundColor: SURFACE, boxShadow: '0 4px 14px rgba(15, 23, 42, 0.05)' }}
        role="img"
        transition={{ duration: 0.55, ease: 'easeInOut' }}
      >
        <motion.span
          animate={{ color: isGlowing ? ACCENT : MUTED }}
          initial={{ color: MUTED }}
          transition={{ duration: 0.55, ease: 'easeInOut' }}
        >
          <DatabaseIcon />
        </motion.span>
        <motion.span
          animate={{ color: isGlowing ? ACCENT : MUTED }}
          className="font-mono text-[0.68rem] font-medium tracking-[0.1em] uppercase"
          initial={{ color: MUTED }}
          transition={{ duration: 0.55, ease: 'easeInOut' }}
        >
          Shared Database
        </motion.span>
      </motion.div>
    </div>
  )
}
