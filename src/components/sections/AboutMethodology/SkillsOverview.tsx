import { skillGroups } from '@/domain/methodology/careos-methodology'

export function SkillsOverview() {
  return (
    <article>
      <p className="font-mono text-sm font-medium tracking-[0.16em] text-accent uppercase">Selected skills</p>
      <h2 className="mt-5 text-section font-medium text-balance tracking-[-0.048em] text-ink">Capabilities organised around outcomes.</h2>
      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <section key={group.id} aria-labelledby={`skill-group-${group.id}`} className="rounded-card border border-line bg-surface p-5 shadow-control">
            <h3 id={`skill-group-${group.id}`} className="font-mono text-xs font-medium tracking-[0.12em] text-accent uppercase">{group.name}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.capabilities.map((capability) => (
                <li key={capability} className="rounded-control border border-line bg-surface-subtle px-3 py-2 text-sm font-medium text-ink">{capability}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </article>
  )
}
