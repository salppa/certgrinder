import React from 'react'
import { motion } from 'framer-motion'
import { T } from '../theme'
import { useLang } from '../context/LangContext'

const METER_CONFIG = {
  r1: { fi: 'Kustannus',    en: 'Cost',        color: T.r1, icon: '💰' },
  r2: { fi: 'Suorituskyky', en: 'Performance', color: T.r2, icon: '⚡' },
  r3: { fi: 'Compliance',   en: 'Compliance',  color: T.r3, icon: '🛡️' },
  r4: { fi: 'Tiimi',        en: 'Team',        color: T.r4, icon: '👥' },
}

export default function ResourceMeter({ id, value, delta, pulsing }) {
  const config  = METER_CONFIG[id]
  const { lang } = useLang()
  const label   = config[lang] || config.fi
  const display = Math.max(0, Math.min(100, value + (delta || 0)))
  const isDanger = display <= 15 || display >= 85

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 3, flex: 1 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 12 }}>{config.icon}</span>
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
          transition={{ duration: 0.35, ease: 'easeOut' }}
          style={{
            height: '100%',
            background: isDanger
              ? `linear-gradient(90deg, ${T.red}, ${T.yellow})`
              : config.color,
            borderRadius: 3,
          }}
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', minHeight: 14 }}>
        <span style={{ fontSize: 9, color: T.textMuted }}>{label}</span>
        <span style={{
          fontSize: 9, fontWeight: 700,
          color: delta > 0 ? T.green : T.red,
          visibility: (delta !== undefined && delta !== 0 && pulsing) ? 'visible' : 'hidden',
        }}>
          {delta > 0 ? '+' : ''}{delta}
        </span>
      </div>
    </div>
  )
}
