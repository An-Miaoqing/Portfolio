'use client'

import { motion } from 'framer-motion'
import { revealGroup, revealItem } from '@/components/motion/presets'
import { authoritativeBackendExamples } from '@/domain/architecture/careos-architecture'

export function AuthoritativeBackend() {
  return (
    <div>
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <p className="font-mono text-sm font-medium tracking-[0.16em] text-accent uppercase">Authority</p>
          <h2 className="mt-5 text-section font-medium text-balance tracking-[-0.048em] text-ink">
            The backend owns business truth.
          </h2>
        </div>
        <p className="max-w-2xl text-body-lg text-pretty text-muted lg:justify-self-end">
          Interfaces request actions. The backend validates context, applies business rules and returns the authoritative result.
        </p>
      </div>

      <motion.div
        variants={revealGroup}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-10 grid gap-5 lg:grid-cols-3"
      >
        {authoritativeBackendExamples.map((example, index) => (
          <motion.article key={example.id} variants={revealItem} className="rounded-panel border border-line bg-canvas p-5 shadow-control sm:p-6">
            <div className="flex items-center justify-between gap-4">
              <span className="font-mono text-[0.6rem] tracking-[0.1em] text-muted uppercase">Example {index + 1}</span>
              <span aria-hidden="true" className="grid size-7 place-items-center rounded-full border border-line font-mono text-[0.55rem] text-accent">{String(index + 1).padStart(2, '0')}</span>
            </div>
            <h3 className="mt-5 text-xl leading-[1.2] font-medium tracking-[-0.03em] text-ink">{example.title}</h3>

            {example.actors && (
              <div className="mt-4 flex flex-wrap gap-2">
                {example.actors.map((actor) => (
                  <span key={actor} className="rounded-full border border-line bg-surface px-2.5 py-1 text-xs text-muted">{actor}</span>
                ))}
              </div>
            )}

            <div className="mt-5 rounded-control border border-line bg-surface px-4 py-3">
              <p className="font-mono text-[0.56rem] tracking-[0.1em] text-muted uppercase">Frontend requests</p>
              <p className="mt-2 text-sm font-medium text-ink">{example.request}</p>
            </div>

            <div className="mt-4">
              <p className="font-mono text-[0.56rem] tracking-[0.1em] text-accent uppercase">
                Backend {example.id === 'booking-creation' ? 'guarantees' : example.id === 'invoice-generation' ? 'decides' : 'validates'}
              </p>
              <ul className="mt-3 grid gap-2">
                {example.decisions.map((decision) => (
                  <li key={decision} className="flex items-start gap-2 text-sm text-muted">
                    <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                    {decision}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-5 border-t border-line pt-4 text-sm leading-relaxed font-medium text-ink">{example.result}</p>
          </motion.article>
        ))}
      </motion.div>
    </div>
  )
}
