import type { ElementType, ReactNode } from 'react'

type SectionWrapperProps = {
  as?: ElementType
  children: ReactNode
  className?: string
  id?: string
}

export function SectionWrapper({
  as: Component = 'section',
  children,
  className = '',
  id,
}: SectionWrapperProps) {
  return (
    <Component id={id} className={`px-5 sm:px-8 lg:px-12 ${className}`}>
      <div className="mx-auto w-full max-w-[var(--container-page)]">{children}</div>
    </Component>
  )
}
