type CTAButtonProps = {
  href: string
  label: string
  external?: boolean
  icon?: 'down' | 'external' | 'right'
  variant?: 'primary' | 'secondary'
}

const buttonStyles = {
  primary:
    'cta-button--light-text border border-transparent bg-ink text-white shadow-control hover:-translate-y-0.5 hover:bg-accent-strong',
  secondary:
    'cta-button--light-text border border-accent bg-accent text-white shadow-control hover:-translate-y-0.5 hover:border-accent-strong hover:bg-accent-strong',
} as const

const buttonIcons = {
  down: '↓',
  external: '↗',
  right: '→',
} as const

export function CTAButton({
  href,
  label,
  external = false,
  icon = 'down',
  variant = 'primary',
}: CTAButtonProps) {
  return (
    <a
      href={href}
      className={`focus-ring group inline-flex min-h-12 items-center gap-8 rounded-control px-5 py-3 text-sm font-medium transition-[background-color,border-color,transform] duration-(--duration-fast) ${buttonStyles[variant]}`}
      rel={external ? 'noreferrer' : undefined}
      target={external ? '_blank' : undefined}
    >
      {label}
      <span
        aria-hidden="true"
        className="transition-transform duration-(--duration-fast) group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      >
        {buttonIcons[icon]}
      </span>
    </a>
  )
}
