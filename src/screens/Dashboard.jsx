import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { T, glass } from '../theme'
import GlassCard from '../components/GlassCard'

export default function Dashboard() {
  const navigate = useNavigate()

  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '40px 24px' }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ marginBottom: 40 }}
      >
        <h1 style={{ fontSize: 28, fontWeight: 700, margin: 0, color: T.text }}>CertGrinder</h1>
        <p style={{ color: T.textMuted, margin: '4px 0 0', fontSize: 14 }}>
          Sertifikaattivalmistelua pelillistettynä
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 32 }}
      >
        {[
          { label: 'Aktiivinen moduuli',   value: 'TOGAF',          icon: '📚' },
          { label: 'Simulaatiotulokset',    value: '3 / 5 episodia', icon: '🎮' },
          { label: 'Harjoiteltu tänään',   value: '24 kysymystä',   icon: '⚡' },
        ].map((s, i) => (
          <GlassCard key={i} style={{ padding: '20px 24px' }}>
            <div style={{ fontSize: 22, marginBottom: 8 }}>{s.icon}</div>
            <div style={{ fontSize: 20, fontWeight: 700, color: T.text }}>{s.value}</div>
            <div style={{ fontSize: 12, color: T.textMuted, marginTop: 4 }}>{s.label}</div>
          </GlassCard>
        ))}
      </motion.div>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 16 }}
      >
        <GlassCard hoverable onClick={() => navigate('/modules')} style={{ padding: 32 }}>
          <div style={{ fontSize: 32, marginBottom: 12 }}>📖</div>
          <h2 style={{ margin: '0 0 8px', fontSize: 20, fontWeight: 700 }}>Harjoittele</h2>
          <p style={{ margin: 0, color: T.textMuted, fontSize: 14 }}>
            Tenttikysymyksiä mukautuvan oppimisen algoritmilla
          </p>
        </GlassCard>

        <GlassCard
          hoverable
          onClick={() => navigate('/reigns/togaf')}
          style={{ padding: 32, background: 'rgba(99,102,241,0.12)' }}
        >
          <div style={{ fontSize: 32, marginBottom: 12 }}>🎮</div>
          <h2 style={{ margin: '0 0 8px', fontSize: 20, fontWeight: 700 }}>Simulaatio</h2>
          <p style={{ margin: 0, color: T.textMuted, fontSize: 14 }}>TOGAF kriisinhallinta</p>
        </GlassCard>
      </motion.div>
    </div>
  )
}
