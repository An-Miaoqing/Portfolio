'use client'

import { motion } from 'framer-motion'
import type { DemoEntry } from '@/domain/products/demos'
import type { ProductEntry, ProductId } from '@/domain/products/products'
import { CTAButton } from '@/components/shared/CTAButton'

const QR_PATTERN = [
  [1, 1, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 1, 1, 0, 0],
  [0, 0, 1, 1, 1],
  [1, 0, 0, 1, 0],
]

function QRPlaceholder({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-card border border-dashed border-line-strong bg-surface-subtle p-4">
      <div
        aria-hidden="true"
        className="grid grid-cols-5 gap-[3px] rounded-control bg-surface p-2"
        style={{ width: '5.5rem', height: '5.5rem' }}
      >
        {QR_PATTERN.flat().map((filled, index) => (
          <span
            className={filled ? 'rounded-[1.5px] bg-ink' : 'rounded-[1.5px] bg-transparent'}
            key={index}
          />
        ))}
      </div>
      <p className="font-mono text-[0.6rem] font-medium tracking-[0.14em] text-muted uppercase">{label}</p>
    </div>
  )
}

function ProductIcon({ id }: { id: ProductId }) {
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

  if (id === 'website') {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M3.5 12h17M12 3.5c2.5 2.5 3.8 5.5 3.8 8.5s-1.3 6-3.8 8.5c-2.5-2.5-3.8-5.5-3.8-8.5S9.5 6 12 3.5Z" />
      </svg>
    )
  }

  if (id === 'management') {
    return (
      <svg {...common}>
        <rect x="3" y="4" width="8" height="7" rx="1.5" />
        <rect x="13" y="4" width="8" height="7" rx="1.5" />
        <rect x="3" y="13" width="8" height="7" rx="1.5" />
        <rect x="13" y="13" width="8" height="7" rx="1.5" />
      </svg>
    )
  }

  if (id === 'employee') {
    return (
      <svg {...common}>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <circle cx="12" cy="9.5" r="2.4" />
        <path d="M8 17c0-2.2 1.8-3.5 4-3.5s4 1.3 4 3.5" />
      </svg>
    )
  }

  return (
    <svg {...common}>
      <path d="M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6l7-3Z" />
      <circle cx="12" cy="10.3" r="2.1" />
      <path d="M9 15c0-1.8 1.3-2.8 3-2.8s3 1 3 2.8" />
    </svg>
  )
}

type DemoCardProps = {
  demo: DemoEntry
  product: ProductEntry
}

export function DemoCard({ demo, product }: DemoCardProps) {
  return (
    <motion.div
      className="flex flex-col gap-4 rounded-panel border border-line bg-surface p-6 shadow-card transition-colors duration-500 hover:border-line-strong"
      id={`experience-${product.id}`}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      whileHover={{ y: -6, boxShadow: '0 20px 46px rgba(23, 41, 34, 0.14)' }}
    >
      <div className="flex items-start justify-between gap-2">
        <span className="grid size-10 shrink-0 place-items-center rounded-control bg-accent-soft text-accent">
          <ProductIcon id={product.id} />
        </span>
        {product.isPlanned ? (
          <span className="rounded-full border border-line bg-surface-subtle px-2.5 py-1 font-mono text-[0.6rem] font-medium tracking-[0.1em] text-muted uppercase">
            Coming Soon
          </span>
        ) : null}
      </div>

      <div>
        <h3 className="text-lg leading-tight font-medium tracking-[-0.02em] text-ink">{product.name}</h3>
        <p className="mt-1 font-mono text-[0.65rem] font-medium tracking-[0.1em] text-muted uppercase">
          {product.audience}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-pretty text-muted">{product.shortDescription}</p>
      </div>

      {product.isPlanned ? (
        <div className="rounded-card border border-dashed border-line-strong bg-surface-subtle p-6 text-center">
          <p className="text-sm text-pretty text-muted italic">A live preview isn&apos;t ready yet — check back soon.</p>
        </div>
      ) : (
        <>
          <QRPlaceholder label={demo.qrLabel} />

          {demo.credentials ? (
            <div className="rounded-card border border-line bg-surface-subtle p-3.5 text-xs">
              <p className="flex items-center justify-between gap-2 text-muted">
                <span className="font-mono tracking-wide uppercase">Username</span>
                <span className="font-medium text-ink">{demo.credentials.username}</span>
              </p>
              <p className="mt-1.5 flex items-center justify-between gap-2 text-muted">
                <span className="font-mono tracking-wide uppercase">Password</span>
                <span className="font-medium text-ink">{demo.credentials.password}</span>
              </p>
            </div>
          ) : (
            <p className="text-center text-xs text-pretty text-muted italic">No login required.</p>
          )}
        </>
      )}

      <div className="mt-auto pt-1">
        {product.isPlanned ? (
          <span className="focus-ring inline-flex min-h-12 w-full items-center justify-center rounded-control border border-line bg-surface-subtle px-5 py-3 text-sm font-medium text-muted">
            Coming Soon
          </span>
        ) : (
          <CTAButton href={demo.demoUrl} icon="right" label={demo.buttonLabel} variant="primary" />
        )}
      </div>
    </motion.div>
  )
}
