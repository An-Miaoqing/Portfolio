type CTAButtonProps = {
  href: string
  label: string
}

export function CTAButton({ href, label }: CTAButtonProps) {
  return (
    <a
      href={href}
      className="focus-ring group inline-flex min-h-12 items-center gap-8 rounded-control bg-ink px-5 py-3 text-sm font-medium text-white shadow-control transition-[background-color,transform] duration-(--duration-fast) hover:-translate-y-0.5 hover:bg-accent-strong"
    >
      {label}
      <span aria-hidden="true" className="transition-transform duration-(--duration-fast) group-hover:translate-y-0.5">
        ↓
      </span>
    </a>
  )
}
