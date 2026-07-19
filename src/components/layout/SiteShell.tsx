import type { ReactNode } from 'react'
import { MotionProvider } from '@/components/motion/MotionProvider'

type SiteShellProps = {
  children: ReactNode
}

export function SiteShell({ children }: SiteShellProps) {
  return (
    <MotionProvider>
      <a
        href="#main-content"
        className="focus-ring fixed top-4 left-4 z-50 -translate-y-24 rounded-control bg-ink px-4 py-3 text-sm font-medium text-white transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <main id="main-content">{children}</main>
    </MotionProvider>
  )
}
