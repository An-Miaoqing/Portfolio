import type { ProductId } from './products'

export type DemoCredentials = {
  password: string
  username: string
}

export type DemoEntry = {
  buttonLabel: string
  credentials?: DemoCredentials
  demoUrl: string
  isPlanned?: boolean
  productId: ProductId
  qrLabel: string
  requiresLogin: boolean
}

export const demos: readonly DemoEntry[] = [
  {
    productId: 'website',
    requiresLogin: false,
    demoUrl: '#',
    buttonLabel: 'Open Demo',
    qrLabel: 'QR CODE',
  },
  {
    productId: 'management',
    requiresLogin: true,
    demoUrl: '#',
    buttonLabel: 'Launch Demo',
    qrLabel: 'QR CODE',
    credentials: { username: 'demo.manager', password: 'demo123' },
  },
  {
    productId: 'employee',
    requiresLogin: true,
    demoUrl: '#',
    buttonLabel: 'Launch Demo',
    qrLabel: 'QR CODE',
    credentials: { username: 'demo.employee', password: 'demo123' },
  },
  {
    productId: 'client-portal',
    requiresLogin: false,
    demoUrl: '#',
    buttonLabel: 'Coming Soon',
    qrLabel: 'QR CODE',
    isPlanned: true,
  },
] as const satisfies readonly DemoEntry[]
