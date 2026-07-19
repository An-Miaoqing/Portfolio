import type { ReactNode } from 'react'

type HeadlineProps = {
  as?: 'h1' | 'h2'
  children: ReactNode
  eyebrow: string
  size?: 'display' | 'section'
}

const headlineSizes = {
  display: 'text-display',
  section: 'text-section',
} as const

export function Headline({
  as: Heading = 'h2',
  children,
  eyebrow,
  size = 'section',
}: HeadlineProps) {
  return (
    <div>
      <p className="mb-6 font-mono text-xs font-medium tracking-[0.16em] text-accent uppercase sm:text-sm">
        {eyebrow}
      </p>
      <Heading className={`max-w-5xl font-medium text-balance ${headlineSizes[size]}`}>
        {children}
      </Heading>
    </div>
  )
}
