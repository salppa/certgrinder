import React from 'react'
import { T } from '../theme'

const MENTOR_CONFIG = {
  'cloud-architect':  { name: 'Cloud-arkkitehti',        color: '#3b82f6' },
  'ea-strategist':    { name: 'EA-Strategi',             color: '#8b5cf6' },
  'itsm-consultant':  { name: 'ITSM-konsultti',          color: '#10b981' },
  'ai-compliance':    { name: 'AI-Compliance',           color: '#f59e0b' },
  'chef':             { name: 'Kokki',                   color: '#ef4444' },
  'teacher':          { name: 'Suomalainen opettaja',    color: '#6366f1' },
}

const MOOD_FALLBACK = {
  neutral:  '🧑‍💼',
  worried:  '😰',
  angry:    '😤',
  relieved: '😌',
}

export default function MentorAvatar({ mentorId = 'teacher', mood = 'neutral', size = 80, showName }) {
  const config = MENTOR_CONFIG[mentorId] || MENTOR_CONFIG['teacher']
  const [imgError, setImgError] = React.useState(false)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
      <div style={{
        width: size, height: size,
        borderRadius: '50%',
        border: `3px solid ${config.color}`,
        overflow: 'hidden',
        background: `${config.color}20`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: size * 0.42,
        boxShadow: `0 0 24px ${config.color}40`,
        flexShrink: 0,
      }}>
        {imgError ? (
          MOOD_FALLBACK[mood]
        ) : (
          <img
            src={`/assets/mentors/${mentorId}-${mood}.png`}
            alt={config.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={() => setImgError(true)}
          />
        )}
      </div>
      {showName && (
        <span style={{ fontSize: 11, color: T.textMuted, fontWeight: 500 }}>{config.name}</span>
      )}
    </div>
  )
}
