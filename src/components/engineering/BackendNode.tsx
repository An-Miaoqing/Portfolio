'use client'

import { motion, useAnimate } from 'framer-motion'
import { useEffect } from 'react'

const BLOB_RADIUS = '42% 58% 54% 46% / 56% 44% 58% 42%'
const INNER_GLOW = 'inset 0 0 34px rgba(255, 255, 255, 0.08)'
const OUTER_GLOW_IDLE = '0 22px 55px rgba(139, 92, 246, 0.3), 0 0 70px rgba(139, 92, 246, 0.18)'
const OUTER_GLOW_ACTIVE = '0 32px 80px rgba(139, 92, 246, 0.5), 0 0 120px rgba(139, 92, 246, 0.32)'
const OUTER_GLOW_PEAK = '0 40px 96px rgba(139, 92, 246, 0.64), 0 0 160px rgba(139, 92, 246, 0.42)'
const SHADOW_IDLE = `${INNER_GLOW}, ${OUTER_GLOW_IDLE}`
const SHADOW_ACTIVE = `${INNER_GLOW}, ${OUTER_GLOW_ACTIVE}`
const SHADOW_PEAK = `${INNER_GLOW}, ${OUTER_GLOW_PEAK}`

// A resting heart rhythm — always present, low amplitude, single beat.
const IDLE_BEAT = [1, 1.016, 1]

// The reactive beat when energy actually arrives — stronger, single beat.
const ACTIVE_BEAT = [1, 1.045, 1]

// One slow, deliberate beat at the brightest ("all connected") moment.
const PEAK_BEAT = [1, 1.065, 1]

type BackendNodeProps = {
  isGlowing: boolean
  isPeak?: boolean
  isPulsing: boolean
}

export function BackendNode({ isGlowing, isPeak = false, isPulsing }: BackendNodeProps) {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    if (!isPulsing) return

    animate(
      scope.current,
      { scale: isPeak ? PEAK_BEAT : ACTIVE_BEAT },
      { duration: isPeak ? 1.1 : 0.6, ease: 'easeInOut' },
    )
  }, [animate, isPeak, isPulsing, scope])

  return (
    <div className="relative mx-auto" style={{ height: 168, width: 168 }}>
      {isPulsing ? (
        <motion.span
          animate={{ opacity: 0, scale: 1.7 }}
          aria-hidden="true"
          className="absolute inset-0"
          initial={{ opacity: 0.7, scale: 0.86 }}
          style={{
            background:
              'radial-gradient(circle, rgba(139, 92, 246, 0.45), rgba(236, 72, 153, 0.2) 55%, transparent 72%)',
            borderRadius: BLOB_RADIUS,
          }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        />
      ) : null}

      <motion.div
        animate={{ scale: IDLE_BEAT }}
        className="h-full w-full"
        transition={{
          duration: 1.8,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      >
        <motion.div
          animate={{ boxShadow: isPeak ? SHADOW_PEAK : isGlowing ? SHADOW_ACTIVE : SHADOW_IDLE }}
          aria-label="Enterprise Backend — the operational core of the platform"
          className="relative grid h-full w-full place-items-center text-center text-white"
          initial={{ boxShadow: SHADOW_IDLE }}
          ref={scope}
          role="img"
          style={{
            background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
            borderRadius: BLOB_RADIUS,
          }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <span className="font-mono text-[0.68rem] leading-snug font-medium tracking-[0.1em] uppercase">
            Enterprise
            <br />
            Backend
          </span>
        </motion.div>
      </motion.div>
    </div>
  )
}
