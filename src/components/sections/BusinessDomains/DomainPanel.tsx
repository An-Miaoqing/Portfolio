'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { detailReveal } from '@/components/motion/presets'
import type { BusinessDomain } from '@/domain/business-domains/domain.types'

export function DomainPanel({ domain }: { domain: BusinessDomain }) {
  return (
    <div className="min-h-[27rem]">
      <AnimatePresence mode="wait" initial={false}>
        <motion.article
          id="domain-explanation"
          key={domain.id}
          role="tabpanel"
          aria-labelledby={`domain-tab-${domain.id}`}
          variants={detailReveal}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="overflow-hidden rounded-panel border border-line bg-surface shadow-card"
        >
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="max-w-3xl">
              <p className="font-mono text-xs font-medium tracking-[0.14em] text-accent uppercase">Purpose</p>
              <h3 className="mt-4 text-3xl leading-[1.15] font-medium tracking-[-0.04em] text-ink">{domain.name}</h3>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">{domain.purpose}</p>
              <div className="mt-7 border-l-2 border-accent pl-5">
                <p className="font-mono text-xs font-medium tracking-[0.14em] text-muted uppercase">Business value</p>
                <p className="mt-3 max-w-2xl text-lg leading-relaxed font-medium text-ink">{domain.businessValue}</p>
              </div>
            </div>

            <div className="mt-10 border-t border-line pt-8">
              <p className="font-mono text-xs font-medium tracking-[0.14em] text-muted uppercase">Responsibilities</p>
              <div className="mt-5 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                {domain.responsibilityGroups.map((group) => (
                  <div key={group.title}>
                    <h4 className="text-sm font-medium text-ink">{group.title}</h4>
                    <ul className="mt-3 grid gap-2">
                      {group.items.map((responsibility) => (
                        <li key={responsibility} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                          <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.article>
      </AnimatePresence>
    </div>
  )
}
