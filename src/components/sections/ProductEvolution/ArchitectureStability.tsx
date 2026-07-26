import { stableFoundations } from '@/domain/evolution/careos-evolution'

export function ArchitectureStability() {
  return (
    <article className="h-full rounded-panel border border-line bg-accent p-6 text-white shadow-card sm:p-8">
      <p className="font-mono text-xs font-medium tracking-[0.14em] text-accent-soft uppercase">Architectural stability</p>
      <h2 className="mt-5 max-w-xl text-3xl leading-[1.2] font-medium tracking-[-0.04em]">Stable foundations enable continuous evolution.</h2>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70">
        As the platform grows, these foundations remain unchanged. New capabilities are added around them.
      </p>
      <ul className="mt-7 grid gap-2 sm:grid-cols-2">
        {stableFoundations.map((foundation) => (
          <li key={foundation} className="rounded-control border border-white/15 bg-white/8 px-4 py-3 text-sm font-medium">
            {foundation}
          </li>
        ))}
      </ul>
    </article>
  )
}
