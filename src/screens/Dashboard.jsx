import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { T } from '../theme'
import GlassCard from '../components/GlassCard'
import { useLang } from '../context/LangContext'

export default function Dashboard() {
  const navigate = useNavigate()
  const { t } = useLang()

  const stats = [
    { label: t.dashboard.activeModule,   value: 'TOGAF',          icon: '📚' },
    { label: t.dashboard.simResults,     value: '3 / 5 episodia', icon: '🎮' },
    { label: t.dashboard.practicedToday, value: '24 kysymystä',   icon: '⚡' },
  ]

  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '40px 24px' }}>
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 40 }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, margin: 0, color: T.text }}>CertGrinder</h1>
        <p style={{ color: T.textMuted, margin: '4px 0 0', fontSize: 14 }}>{t.dashboard.tagline}</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 32 }}
      >
        {stats.map((s, i) => (
          <GlassCard key={i} style={{ padding: '20px 24px' }}>
            <div style={{ fontSize: 22, marginBottom: 8 }}>{s.icon}</div>
            <div style={{ fontSize: 20, fontWeight: 700, color: T.text }}>{s.value}</div>
            <div style={{ fontSize: 12, color: T.textMuted, marginTop: 4 }}>{s.label}</div>
          </GlassCard>
        ))}
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 16 }}
      >
        <GlassCard hoverable onClick={() => navigate('/modules')} style={{ padding: 32 }}>
          <div style={{ fontSize: 32, marginBottom: 12 }}>📖</div>
          <h2 style={{ margin: '0 0 8px', fontSize: 20, fontWeight: 700 }}>{t.common.practice}</h2>
          <p style={{ margin: 0, color: T.textMuted, fontSize: 14 }}>{t.dashboard.practiceDesc}</p>
        </GlassCard>

        <GlassCard hoverable onClick={() => navigate('/episodes/togaf')} style={{ padding: 32, background: 'rgba(99,102,241,0.12)' }}>
          <div style={{ fontSize: 32, marginBottom: 12 }}>🎮</div>
          <h2 style={{ margin: '0 0 8px', fontSize: 20, fontWeight: 700 }}>{t.common.simulation}</h2>
          <p style={{ margin: 0, color: T.textMuted, fontSize: 14 }}>{t.dashboard.simDesc}</p>
        </GlassCard>
      </motion.div>
    </div>
  )
}
