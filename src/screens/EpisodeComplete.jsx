import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { T, glass } from '../theme'
import MentorAvatar from '../components/MentorAvatar'
import { MODULES } from '../data/modules'
import { useLang } from '../context/LangContext'

export default function EpisodeComplete() {
  const { moduleId, episodeId } = useParams()
  const navigate = useNavigate()
  const { t } = useLang()
  const module = MODULES.find(m => m.id === moduleId) || MODULES[0]
  const epId = parseInt(episodeId || '1', 10)
  const isLast = epId >= 5

  return (
    <div style={{ maxWidth: 480, margin: '0 auto', padding: '60px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1,   opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200 }}
      >
        <MentorAvatar mentorId={module.mentor} mood="relieved" size={100} showName />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        style={{ ...glass, padding: 32, textAlign: 'center', width: '100%' }}
      >
        <div style={{ fontSize: 36, marginBottom: 12 }}>{isLast ? '🏆' : '🎉'}</div>
        <h2 style={{ margin: '0 0 12px', fontSize: 22, fontWeight: 700 }}>
          {isLast ? t.episodeComplete.allDone : t.episodeComplete.done(epId)}
        </h2>
        <p style={{ margin: '0 0 24px', color: T.textMuted, fontSize: 14, lineHeight: 1.6 }}>
          {isLast ? t.episodeComplete.allDoneDesc : t.episodeComplete.doneDesc(epId + 1)}
        </p>
        <div style={{ display: 'flex', gap: 12 }}>
          {!isLast && (
            <button
              onClick={() => navigate(`/reigns/${moduleId}/${epId + 1}`)}
              style={{ flex: 1, padding: '12px 20px', background: T.accent, color: '#fff', border: 'none', borderRadius: 12, fontSize: 14, fontWeight: 600, cursor: 'pointer' }}
            >
              {t.episodeComplete.nextEpisode(epId + 1)}
            </button>
          )}
          <button
            onClick={() => navigate(`/episodes/${moduleId}`)}
            style={{ flex: 1, padding: '12px 20px', background: 'rgba(0,0,0,0.05)', color: T.textMuted, border: '1px solid rgba(0,0,0,0.08)', borderRadius: 12, fontSize: 14, fontWeight: 600, cursor: 'pointer' }}
          >
            {t.common.episodes}
          </button>
        </div>
      </motion.div>
    </div>
  )
}
