import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { T, glass } from '../theme'
import MentorAvatar from '../components/MentorAvatar'
import { MODULES } from '../data/modules'
import { useLang } from '../context/LangContext'

export default function GameOver() {
  const { moduleId } = useParams()
  const navigate = useNavigate()
  const { t } = useLang()
  const module = MODULES.find(m => m.id === moduleId) || MODULES[0]

  return (
    <div style={{
      maxWidth: 480, margin: '0 auto', padding: '60px 24px',
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24,
    }}>
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1,   opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200 }}
      >
        <MentorAvatar mentorId={module.mentor} mood="worried" size={100} showName />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        style={{ ...glass, padding: 32, textAlign: 'center', width: '100%' }}
      >
        <h2 style={{ margin: '0 0 12px', fontSize: 22, fontWeight: 700 }}>{t.gameOver.title}</h2>
        <p style={{ margin: '0 0 16px', color: T.textMuted, fontSize: 14, lineHeight: 1.6 }}>
          {t.gameOver.desc1}
        </p>
        <p style={{ margin: '0 0 28px', color: T.text, fontSize: 14, lineHeight: 1.6 }}>
          {t.gameOver.desc2}
        </p>

        <div style={{ display: 'flex', gap: 12 }}>
          <button
            onClick={() => navigate(`/reigns/${moduleId}`)}
            style={{ flex: 1, padding: '12px 20px', background: T.accent, color: '#fff', border: 'none', borderRadius: 12, fontSize: 14, fontWeight: 600, cursor: 'pointer' }}
          >
            {t.common.playAgain}
          </button>
          <button
            onClick={() => navigate('/dashboard')}
            style={{ flex: 1, padding: '12px 20px', background: 'rgba(0,0,0,0.05)', color: T.textMuted, border: '1px solid rgba(0,0,0,0.08)', borderRadius: 12, fontSize: 14, fontWeight: 600, cursor: 'pointer' }}
          >
            {t.common.home}
          </button>
        </div>
      </motion.div>
    </div>
  )
}
