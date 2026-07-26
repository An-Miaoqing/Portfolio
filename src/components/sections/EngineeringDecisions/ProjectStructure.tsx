import { projectLayers } from '@/domain/engineering/careos-engineering'

export function ProjectStructure() {
  return (
    <div>
      <p className="font-mono text-sm font-medium tracking-[0.16em] text-accent uppercase">Project structure</p>
      <h2 className="mt-5 text-3xl leading-[1.2] font-medium tracking-[-0.04em] text-ink sm:text-4xl">
        Code follows responsibility.
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
        The project is organised by architectural role so interface concerns, business concepts and infrastructure can evolve independently.
      </p>

      <ol className="mt-7 grid gap-2" aria-label="CareOS project layers">
        {projectLayers.map((layer, index) => (
          <li key={layer.id} className="grid grid-cols-[auto_1fr] items-center gap-4">
            <span className="grid size-8 place-items-center rounded-full border border-line bg-surface font-mono text-[0.56rem] text-accent">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="rounded-control border border-line bg-surface px-4 py-3">
              <strong className="text-sm font-medium text-ink">{layer.name}</strong>
              <span className="ml-3 text-sm text-muted">{layer.purpose}</span>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
