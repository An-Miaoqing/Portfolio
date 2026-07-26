'use client'

import { motion } from 'framer-motion'

const ACCENT = '#176b4d'
const IDLE = '#bdc7c0'

type Point = { x: number; y: number }

function cubicPoint(t: number, p0: Point, p1: Point, p2: Point, p3: Point): Point {
  const mt = 1 - t
  return {
    x: mt ** 3 * p0.x + 3 * mt ** 2 * t * p1.x + 3 * mt * t ** 2 * p2.x + t ** 3 * p3.x,
    y: mt ** 3 * p0.y + 3 * mt ** 2 * t * p1.y + 3 * mt * t ** 2 * p2.y + t ** 3 * p3.y,
  }
}

// A gentle S-curve: leaves the app card vertically, bends through the middle,
// and arrives at the backend vertically — reads as an organic branch rather
// than a rigid diagonal line.
function fanCurve(x: number) {
  const p0 = { x, y: 0 }
  const p1 = { x, y: 30 }
  const p2 = { x: 50, y: 30 }
  const p3 = { x: 50, y: 60 }
  return { p0, p1, p2, p3 }
}

function fanPathD(x: number) {
  const { p0, p1, p2, p3 } = fanCurve(x)
  return `M ${p0.x} ${p0.y} C ${p1.x} ${p1.y}, ${p2.x} ${p2.y}, ${p3.x} ${p3.y}`
}

function fanSamplePoints(x: number) {
  const { p0, p1, p2, p3 } = fanCurve(x)
  return [0, 0.2, 0.4, 0.6, 0.8, 1].map((t) => cubicPoint(t, p0, p1, p2, p3))
}

type ConnectorProps = {
  active: boolean
  height?: number
  isPulsing: boolean
}

export function Connector({ active, height = 40, isPulsing }: ConnectorProps) {
  return (
    <div className="relative flex justify-center" style={{ height }}>
      <motion.span
        aria-hidden="true"
        animate={{
          backgroundColor: active ? ACCENT : IDLE,
          opacity: active ? 1 : 0.32,
        }}
        className="block w-px"
        initial={{ backgroundColor: IDLE, opacity: 0.32 }}
        style={{ height }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      />
      {isPulsing ? (
        <motion.span
          animate={{ opacity: [0, 1, 1, 0], y: height - 6 }}
          aria-hidden="true"
          className="absolute top-0 left-1/2 size-2 -translate-x-1/2 rounded-full"
          initial={{ opacity: 0, y: -2 }}
          style={{ background: ACCENT, boxShadow: `0 0 8px ${ACCENT}` }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
        />
      ) : null}
    </div>
  )
}

type ConnectorFanProps = {
  activeFlags: readonly boolean[]
  pulsingFlags: readonly boolean[]
}

export function ConnectorFan({ activeFlags, pulsingFlags }: ConnectorFanProps) {
  const xs = [12.5, 37.5, 62.5, 87.5]

  return (
    <svg
      aria-hidden="true"
      className="h-12 w-full sm:h-16"
      preserveAspectRatio="none"
      viewBox="0 0 100 60"
    >
      {xs.map((x, index) => (
        <motion.path
          animate={{
            opacity: activeFlags[index] ? 1 : 0.28,
            stroke: activeFlags[index] ? ACCENT : IDLE,
          }}
          d={fanPathD(x)}
          fill="none"
          initial={{ opacity: 0.28, stroke: IDLE }}
          key={x}
          strokeLinecap="round"
          strokeWidth={1.5}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
      ))}
      {xs.map((x, index) => {
        if (!pulsingFlags[index]) return null

        const points = fanSamplePoints(x)

        return (
          <motion.circle
            animate={{
              cx: points.map((point) => point.x),
              cy: points.map((point) => point.y),
              opacity: [0, 1, 1, 1, 1, 0],
            }}
            fill={ACCENT}
            initial={{ cx: points[0].x, cy: points[0].y, opacity: 0 }}
            key={`pulse-${x}`}
            r={2.2}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
          />
        )
      })}
    </svg>
  )
}
