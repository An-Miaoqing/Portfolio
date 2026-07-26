'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { detailReveal } from '@/components/motion/presets'
import { careOSDomains } from '@/domain/business-domains/careos-domains'
import type { CareOSApplication } from '@/domain/applications/application.types'

export function ApplicationPanel({ application }: { application: CareOSApplication }) {
  return (
    <div className="min-h-[32rem] lg:h-[clamp(16rem,30vh,20rem)] lg:min-h-0">
      <AnimatePresence mode="wait" initial={false}>
        <motion.article
          id="application-panel"
          key={application.id}
          role="tabpanel"
          aria-labelledby={`application-tab-${application.id}`}
          variants={detailReveal}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="h-full overflow-y-auto rounded-panel border border-line bg-surface shadow-card"
        >
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8 lg:p-6">
            <div>
              <div className="flex items-center gap-3">
                <span className="rounded-full border border-line bg-surface-subtle px-2 py-1 font-mono text-[0.6rem] font-medium tracking-[0.1em] text-accent uppercase">
                  {application.icon}
                </span>
                {application.planned && (
                  <span className="rounded-full border border-line-strong px-2 py-1 font-mono text-[0.56rem] tracking-[0.1em] text-muted uppercase">
                    Planned
                  </span>
                )}
              </div>
              <h3 className="mt-3 text-3xl leading-[1.15] font-medium tracking-[-0.04em] text-ink">
                {application.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{application.description}</p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div>
                  <p className="font-mono text-xs font-medium tracking-[0.14em] text-muted uppercase">Purpose</p>
                  <p className="mt-2 text-base font-medium text-ink">{application.purpose}</p>
                </div>
                <div>
                  <p className="font-mono text-xs font-medium tracking-[0.14em] text-muted uppercase">Primary users</p>
                  <p className="mt-2 text-base font-medium text-ink">{application.users.join(', ')}</p>
                </div>
              </div>

              <div className="mt-5 border-l-2 border-accent pl-4">
                <p className="font-mono text-xs font-medium tracking-[0.14em] text-muted uppercase">Business value</p>
                <p className="mt-2 text-sm leading-relaxed font-medium text-ink">{application.businessValue}</p>
              </div>
            </div>

            <div className="border-t border-line pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
              <p className="font-mono text-xs font-medium tracking-[0.14em] text-muted uppercase">Responsibilities</p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {application.responsibilities.map((responsibility) => (
                  <li key={responsibility} className="flex items-start gap-3 rounded-control border border-line bg-surface-subtle px-3 py-2 text-sm text-ink">
                    <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    {responsibility}
                  </li>
                ))}
              </ul>

              <div className="mt-5">
                <p className="font-mono text-xs font-medium tracking-[0.14em] text-muted uppercase">Related business domains</p>
                <div className="mt-3 flex flex-wrap gap-2" aria-label="Business domain participation">
                  {careOSDomains.map((domain) => {
                    const connected = application.businessDomainIds.includes(domain.id)
                    return (
                      <span key={domain.id} className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-opacity duration-(--duration-medium) ${connected ? 'border-accent bg-accent-soft text-accent-strong' : 'border-line bg-surface text-muted opacity-30'}`}>
                        {domain.name}
                      </span>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </motion.article>
      </AnimatePresence>
    </div>
  )
}
