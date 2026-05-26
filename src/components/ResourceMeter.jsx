import React from 'react'
import { motion } from 'framer-motion'
import { T } from '../theme'

const METER_CONFIG = {
  r1: { label: 'Kustannus',    color: T.r1, icon: '💰' },
  r2: { label: 'Suorituskyky', color: T.r2, icon: '⚡' },
  r3: { label: 'Compliance',   color: T.r3, icon: '🛡️' },
  r4: { label: 'Tiimi',        color: T.r4, icon: '👥' },
}

export default function ResourceMeter({ id, value, delta, pulsing }) {
  const config = METER_CONFIG[id]
  const display = Math.max(0, Math.min(100, value + (delta || 0)))
  const isDanger = display <= 15 || display >= 85

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 1 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 10, color: T.textMuted }}>{config.icon}</span>
        <span style={{ fontSize: 10, fontWeight: 700, color: isDanger ? T.red : T.textMuted }}>
          {Math.round(display)}
        </span>
      </div>

      <div style={{ height: 6, borderRadius: 3, background: 'rgba(0,0,0,0.08)', overflow: 'hidden' }}>
        <motion.div
          animate={{
            width: `${display}%`,
            boxShadow: pulsing ? `0 0 8px ${config.color}` : '0 0 0px transparent',
          }}
          transition={{ duration: pulsing ? 0.12 : 0.4, ease: 'easeOut' }}
          style={{
            height: '100%',
            background: isDanger
              ? `linear-gradient(90deg, ${T.red}, ${T.yellow})`
              : config.color,
            borderRadius: 3,
          }}
        />
      </div>

      {delta !== undefined && delta !== 0 && pulsing && (
        <motion.span
          initial={{ opacity: 0, y: 2 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: 9, fontWeight: 700, color: delta > 0 ? T.green : T.red, textAlign: 'center' }}
        >
          {delta > 0 ? '+' : ''}{delta}
        </motion.span>
      )}
    </div>
  )
}
