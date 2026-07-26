const platformLayers = [
  'Applications',
  'Shared Platform',
  'Business Domains',
  'Operational Workflow',
  'Shared Database',
] as const

export function PlatformModel() {
  return (
    <article className="h-full rounded-panel border border-line bg-surface p-6 shadow-control sm:p-8">
      <p className="font-mono text-xs font-medium tracking-[0.14em] text-accent uppercase">Shared platform model</p>
      <ol className="mt-5 grid gap-1" aria-label="Conceptual CareOS platform model">
        {platformLayers.map((layer, index) => (
          <li key={layer} className="flex flex-col items-center">
            <span className={`w-full rounded-control border px-4 py-2 text-center text-sm font-medium ${index === 1 ? 'border-accent bg-accent-soft text-accent-strong' : 'border-line bg-surface-subtle text-ink'}`}>
              {layer}
            </span>
            {index < platformLayers.length - 1 && <span aria-hidden="true" className="text-sm leading-4 text-line-strong">↓</span>}
          </li>
        ))}
      </ol>
    </article>
  )
}
