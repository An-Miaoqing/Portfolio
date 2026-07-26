import { designPrinciples } from '@/domain/evolution/careos-evolution'

export function DesignPhilosophy() {
  return (
    <article className="h-full rounded-panel border border-line bg-surface p-6 shadow-control sm:p-8">
      <p className="font-mono text-xs font-medium tracking-[0.14em] text-accent uppercase">Design philosophy</p>
      <h2 className="mt-5 text-3xl leading-[1.2] font-medium tracking-[-0.04em] text-ink">Build capabilities, not isolated features.</h2>
      <p className="mt-4 text-base leading-relaxed text-muted">Every enhancement should:</p>
      <ol className="mt-6 space-y-3">
        {designPrinciples.map((principle, index) => (
          <li key={principle} className="flex items-center gap-4 border-t border-line pt-3 text-sm font-medium text-ink">
            <span className="font-mono text-xs text-accent">{String(index + 1).padStart(2, '0')}</span>
            {principle}
          </li>
        ))}
      </ol>
    </article>
  )
}
