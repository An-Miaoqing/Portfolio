import { caseStudyEvidence } from '@/domain/methodology/careos-methodology'

export function CaseStudyReflection() {
  return (
    <article className="rounded-panel border border-line bg-accent p-6 text-white shadow-card sm:p-8">
      <p className="font-mono text-xs font-medium tracking-[0.14em] text-accent-soft uppercase">CareOS in context</p>
      <h2 className="mt-5 max-w-2xl text-3xl leading-[1.2] font-medium tracking-[-0.04em]">Evidence of a methodology—not only a software project.</h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70">
        The case study connects business understanding, system modelling, architecture and implementation into one continuous design process.
      </p>
      <ul className="mt-7 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {caseStudyEvidence.map((evidence) => (
          <li key={evidence.id} className="rounded-control border border-white/15 bg-white/8 px-4 py-3">
            <strong className="block text-sm font-medium">{evidence.name}</strong>
            <span className="mt-1 block font-mono text-[0.62rem] tracking-[0.08em] text-white/55 uppercase">{evidence.chapter}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}
