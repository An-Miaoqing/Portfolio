'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { type ApplicationId, applicationModel, platformApiModel } from '@/domain/engineering/api-model'
import { businessEntityModel } from '@/domain/engineering/entity-model'
import { serviceModel } from '@/domain/engineering/service-model'
import { Connector } from './Connector'

type ApiGatewayDiagramProps = {
  onSelect: (id: ApplicationId) => void
  selectedId: ApplicationId
}

function Chip({ isActive, label }: { isActive: boolean; label: string }) {
  return (
    <span
      className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors duration-500 ${
        isActive ? 'border-accent/50 bg-[#e4f1eb] text-accent' : 'border-line bg-surface-subtle text-muted'
      }`}
      style={{ opacity: isActive ? 1 : 0.5 }}
    >
      {label}
    </span>
  )
}

function Band({ children, label }: { children: ReactNode; label: string }) {
  return (
    <div className="w-full rounded-card border border-line bg-surface-subtle/40 p-4">
      <p className="font-mono text-[0.6rem] font-medium tracking-[0.14em] text-muted uppercase">{label}</p>
      <div className="mt-2 flex flex-wrap gap-1.5">{children}</div>
    </div>
  )
}

export function ApiGatewayDiagram({ onSelect, selectedId }: ApiGatewayDiagramProps) {
  const selectedApp = applicationModel.find((app) => app.id === selectedId)!
  const activeApiIds = new Set(selectedApp.usesApis)
  const activeServiceIds = new Set(selectedApp.businessServices)

  const activeEntityIds = new Set<string>()
  serviceModel
    .filter((service) => activeServiceIds.has(service.id))
    .forEach((service) => {
      service.reads.forEach((id) => activeEntityIds.add(id))
      service.updates.forEach((id) => activeEntityIds.add(id))
    })
  const activeEntities = businessEntityModel.filter((entity) => activeEntityIds.has(entity.id))

  return (
    <div className="flex flex-col items-center gap-0">
      <div aria-label="Choose an application" className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4" role="group">
        {applicationModel.map((app) => {
          const isActive = app.id === selectedId
          return (
            <motion.button
              aria-pressed={isActive}
              className={`focus-ring flex flex-col items-start gap-1.5 rounded-card border bg-surface p-3.5 text-left transition-colors duration-500 ${
                isActive ? 'border-accent' : 'border-line hover:border-line-strong'
              }`}
              key={app.id}
              onClick={() => onSelect(app.id)}
              style={{
                boxShadow: isActive ? '0 0 0 1px #176b4d, 0 14px 30px rgba(23, 107, 77, 0.18)' : undefined,
              }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              type="button"
              whileHover={{ y: -3 }}
              whileTap={{ y: 0 }}
            >
              <span className={`text-sm font-medium ${isActive ? 'text-accent' : 'text-ink'}`}>{app.name}</span>
              {app.isPlanned ? (
                <span className="rounded-full border border-line bg-surface-subtle px-2 py-0.5 font-mono text-[0.55rem] font-medium tracking-[0.1em] text-muted uppercase">
                  Planned
                </span>
              ) : null}
            </motion.button>
          )
        })}
      </div>

      <Connector active height={26} isPulsing key={`connector-apps-${selectedId}`} />

      <Band label="Platform APIs">
        {platformApiModel.map((api) => (
          <Chip isActive={activeApiIds.has(api.id)} key={api.id} label={api.name} />
        ))}
      </Band>

      <Connector active height={26} isPulsing key={`connector-apis-${selectedId}`} />

      <Band label="Business Services">
        {serviceModel.map((service) => (
          <Chip isActive={activeServiceIds.has(service.id)} key={service.id} label={service.name} />
        ))}
      </Band>

      <Connector active height={26} isPulsing key={`connector-services-${selectedId}`} />

      <Band label="Business Entities">
        <motion.div
          animate={{ opacity: 1 }}
          className="flex flex-wrap gap-1.5"
          initial={{ opacity: 0 }}
          key={selectedId}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          {activeEntities.map((entity) => (
            <Chip isActive key={entity.id} label={entity.name} />
          ))}
        </motion.div>
      </Band>

      <Connector active height={26} isPulsing key={`connector-entities-${selectedId}`} />

      <div className="w-full max-w-[10rem] rounded-card border border-line bg-ink/5 py-2.5 text-center">
        <p className="font-mono text-[0.6rem] font-medium tracking-[0.14em] text-muted uppercase">Database</p>
      </div>
    </div>
  )
}
