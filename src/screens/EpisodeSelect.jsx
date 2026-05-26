import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { T, glass } from '../theme'
import MentorAvatar from '../components/MentorAvatar'
import { MODULES } from '../data/modules'
import { useProgress } from '../hooks/useProgress'

const EP_TITLES = {
  togaf: [
    'Arkkitehtuuristrategia',
    'Liiketoiminta-arkkitehtuuri',
    'Tietojärjestelmäarkkitehtuuri',
    'Teknologia-arkkitehtuuri',
    'Hallinto ja migraatio',
  ],
}

export default function EpisodeSelect() {
  const { moduleId } = useParams()
  const navigate = useNavigate()
  const module = MODULES.find(m => m.id === moduleId) || MODULES[0]
  const { progress, isLocked } = useProgress(moduleId)
  const titles = EP_TITLES[moduleId] || Array.from({ length: 5 }, (_, i) => `Episodi ${i + 1}`)

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: '40px 24px' }}>
      <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 32 }}>
        <button
          onClick={() => navigate('/modules')}
          style={{ background: 'none', border: 'none', color: T.accent, cursor: 'pointer', padding: 0, fontSize: 14, marginBottom: 16 }}
        >
          ← Takaisin
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <MentorAvatar mentorId={module.mentor} size={56} />
          <div>
            <h1 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 2px' }}>{module.name}</h1>
            <p style={{ margin: 0, color: T.textMuted, fontSize: 13 }}>Valitse episodi</p>
          </div>
        </div>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {titles.map((title, i) => {
          const epId = i + 1
          const locked    = isLocked(epId)
          const completed = progress.completed.includes(epId)

          return (
            <motion.div
              key={epId}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0  }}
              transition={{ delay: i * 0.06 }}
            >
              <div
                onClick={() => !locked && navigate(`/reigns/${moduleId}/${epId}`)}
                style={{
                  ...glass, padding: '14px 18px',
                  display: 'flex', alignItems: 'center', gap: 14,
                  cursor: locked ? 'not-allowed' : 'pointer',
                  opacity: locked ? 0.45 : 1,
                }}
              >
                <div style={{
                  width: 36, height: 36, borderRadius: '50%', flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: completed ? 16 : 13, fontWeight: 700,
                  background: completed ? T.greenBg : locked ? 'rgba(0,0,0,0.05)' : T.accentGlow,
                  border: `2px solid ${completed ? T.green : locked ? 'transparent' : T.accent}`,
                  color: completed ? T.green : locked ? T.textMuted : T.accent,
                }}>
                  {completed ? '✓' : locked ? '🔒' : epId}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>Episodi {epId}</div>
                  <div style={{ fontSize: 12, color: T.textMuted, marginTop: 2 }}>{title}</div>
                </div>
                {!locked && !completed && <span style={{ fontSize: 12, color: T.accent, fontWeight: 600 }}>Pelaa →</span>}
                {completed          && <span style={{ fontSize: 12, color: T.green,  fontWeight: 600 }}>Suoritettu</span>}
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
