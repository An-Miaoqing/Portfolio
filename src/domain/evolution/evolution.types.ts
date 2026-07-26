export type EvolutionStatus = 'Implemented' | 'Planned' | 'Future' | 'Long-term' | 'Vision'

export type EvolutionPhase = {
  id: string
  name: string
  scopeLabel: string
  capabilities: readonly string[]
  status: EvolutionStatus
  foundation: string
}

export type MaturityLevel = {
  id: string
  name: string
  explanation: string
}

export type FeatureConnection = {
  label: string
  values: readonly string[]
}

export type EvolutionFeature = {
  id: string
  name: string
  description: string
  connections: readonly FeatureConnection[]
  outcome: string
}

export type ExpansionLayer = {
  id: string
  name: string
  items: readonly string[]
}

export type FutureIntegration = {
  id: string
  name: string
  purpose: string
}
