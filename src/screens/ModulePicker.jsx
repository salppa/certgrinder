import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { T } from '../theme'
import GlassCard from '../components/GlassCard'
import MentorAvatar from '../components/MentorAvatar'
import { MODULES } from '../data/modules'

export default function ModulePicker() {
  const navigate = useNavigate()

  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '40px 24px' }}>
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 32 }}>
        <button
          onClick={() => navigate('/dashboard')}
          style={{ background: 'none', border: 'none', color: T.accent, cursor: 'pointer', padding: 0, fontSize: 14, marginBottom: 16 }}
        >
          ← Takaisin
        </button>
        <h1 style={{ fontSize: 24, fontWeight: 700, margin: 0 }}>Valitse moduuli</h1>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
        {MODULES.map((mod, i) => (
          <motion.div
            key={mod.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
          >
            <GlassCard style={{ padding: 24 }}>
              {mod.badge && (
                <span style={{
                  display: 'inline-block', padding: '2px 10px',
                  borderRadius: 20, fontSize: 10, fontWeight: 700,
                  background: `${mod.color}20`, color: mod.color, marginBottom: 12,
                }}>
                  {mod.badge}
                </span>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h3 style={{ margin: '0 0 4px', fontSize: 18, fontWeight: 700 }}>{mod.name}</h3>
                  <p style={{ margin: '0 0 8px', fontSize: 12, color: T.textMuted }}>{mod.domain}</p>
                  <p style={{ margin: 0, fontSize: 12, color: T.textMuted }}>{mod.questionCount} kysymystä</p>
                </div>
                <MentorAvatar mentorId={mod.mentor} size={52} />
              </div>

              <div style={{ display: 'flex', gap: 8, marginTop: 20 }}>
                <button style={{
                  flex: 1, padding: '10px 16px',
                  background: T.accent, color: '#fff',
                  border: 'none', borderRadius: 12, fontSize: 13, fontWeight: 600, cursor: 'pointer',
                }}>
                  Harjoittele
                </button>
                {mod.hasScenarios && (
                  <button
                    onClick={() => navigate(`/reigns/${mod.id}`)}
                    style={{
                      flex: 1, padding: '10px 16px',
                      background: `${mod.color}15`, color: mod.color,
                      border: `1px solid ${mod.color}40`,
                      borderRadius: 12, fontSize: 13, fontWeight: 600, cursor: 'pointer',
                    }}
                  >
                    🎮 Simulaatio
                  </button>
                )}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
