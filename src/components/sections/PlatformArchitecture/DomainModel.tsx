'use client'

import { AnimatePresence, motion } from 'framer-motion'
import type { KeyboardEvent } from 'react'
import { useState } from 'react'
import { detailReveal, motionTransitions } from '@/components/motion/presets'
import { careOSBusinessEntities } from '@/domain/architecture/careos-architecture'

export function DomainModel({ onFocusEntity }: { onFocusEntity: (entityId: string) => void }) {
  const [activeEntityId, setActiveEntityId] = useState<string>(careOSBusinessEntities[0].id)
  const activeEntity = careOSBusinessEntities.find((entity) => entity.id === activeEntityId) ?? careOSBusinessEntities[0]

  const selectEntity = (entityId: string) => {
    setActiveEntityId(entityId)
    onFocusEntity(entityId)
  }

  const navigate = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const direction = event.key === 'ArrowDown' || event.key === 'ArrowRight'
      ? 1
      : event.key === 'ArrowUp' || event.key === 'ArrowLeft'
        ? -1
        : 0
    if (!direction) return
    event.preventDefault()
    const nextIndex = (index + direction + careOSBusinessEntities.length) % careOSBusinessEntities.length
    selectEntity(careOSBusinessEntities[nextIndex].id)
    event.currentTarget
      .closest<HTMLElement>('[data-entity-layout]')
      ?.querySelector<HTMLButtonElement>(`[data-entity-index="${nextIndex}"]`)
      ?.focus()
  }

  const renderEntity = (index: number) => {
    const entity = careOSBusinessEntities[index]
    const active = entity.id === activeEntityId
    return (
      <motion.button
        type="button"
        data-entity-index={index}
        aria-pressed={active}
        onClick={() => selectEntity(entity.id)}
        onKeyDown={(event) => navigate(event, index)}
        animate={{ opacity: active ? 1 : 0.42, scale: active ? 1.025 : 1 }}
        transition={motionTransitions.medium}
        className={`focus-ring relative z-10 min-h-16 w-full rounded-control border px-3 py-2 text-center text-sm font-medium transition-colors duration-(--duration-medium) ${active ? 'border-accent bg-accent-soft text-accent-strong shadow-control' : 'border-line bg-surface text-ink hover:border-line-strong'}`}
      >
        {entity.name}
      </motion.button>
    )
  }

  return (
    <div>
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <p className="font-mono text-sm font-medium tracking-[0.16em] text-accent uppercase">Shared domain model</p>
          <h2 className="mt-5 text-section font-medium text-balance tracking-[-0.048em] text-ink">
            Business entities remain connected.
          </h2>
        </div>
        <p className="max-w-2xl text-body-lg text-pretty text-muted lg:justify-self-end">
          CareOS connects organisational context, service delivery, workforce activity and financial outcomes through one shared business model.
        </p>
      </div>

      <div className="mt-10 rounded-panel border border-line bg-surface p-5 shadow-control sm:p-6">
        <div data-entity-layout="horizontal" className="hidden items-center lg:flex" role="group" aria-label="CareOS business entities">
          {careOSBusinessEntities.map((entity, index) => (
            <div key={entity.id} className="contents">
              <div className="w-[9.2%] min-w-0 shrink">{renderEntity(index)}</div>
              {index < careOSBusinessEntities.length - 1 && <span aria-hidden="true" className="h-px min-w-2 flex-1 bg-line-strong" />}
            </div>
          ))}
        </div>

        <div data-entity-layout="vertical" className="grid lg:hidden" role="group" aria-label="CareOS business entities">
          {careOSBusinessEntities.map((entity, index) => (
            <div key={entity.id}>
              {renderEntity(index)}
              {index < careOSBusinessEntities.length - 1 && <span aria-hidden="true" className="mx-auto block h-5 w-px bg-line-strong" />}
            </div>
          ))}
        </div>

        <div className="mt-6 min-h-20 border-t border-line pt-5">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={activeEntity.id} variants={detailReveal} initial="hidden" animate="visible" exit="exit" aria-live="polite">
              <p className="font-mono text-[0.58rem] tracking-[0.1em] text-muted uppercase">{activeEntity.name}</p>
              <p className="mt-2 text-base leading-relaxed text-ink">{activeEntity.description}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
