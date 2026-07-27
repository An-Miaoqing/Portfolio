export type PlatformFlowStep = {
  id: string
  isPlanned?: boolean
  label: string
}

export const platformFlow: readonly PlatformFlowStep[] = [
  { id: 'website', label: 'Website' },
  { id: 'platform', label: 'CareOS Platform' },
  { id: 'management', label: 'Management Workspace' },
  { id: 'employee', label: 'Employee Workspace' },
  { id: 'client-portal', label: 'Client Portal', isPlanned: true },
]

export const sharedFoundations: readonly string[] = ['Business logic', 'Data', 'Workflows']
