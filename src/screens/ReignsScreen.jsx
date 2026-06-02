import React, { useState, useCallback, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { T, glass } from '../theme'
import ResourceMeter    from '../components/ResourceMeter'
import MentorAvatar     from '../components/MentorAvatar'
import MentorMonologue  from '../components/MentorMonologue'
import { MODULES }      from '../data/modules'
import { useProgress, useSympathy } from '../hooks/useProgress'
import { useLang } from '../context/LangContext'

async function loadScenarios(moduleId) {
  try {
    const m = await import(`../data/scenarios/${moduleId}.js`)
    return m.default
  } catch {
    return null
  }
}

const FALLBACK = [
  {
    id: 'f1', episode: 1,
    text: 'Ei skenaarioita tälle moduulille. Lisää scenarios.js tiedosto.',
    left:  { label: 'Takaisin', deltas: { r1: 0, r2: 0, r3: 0, r4: 0 }, consequence: '' },
    right: { label: 'Etusivu',  deltas: { r1: 0, r2: 0, r3: 0, r4: 0 }, consequence: '' },
  },
]

const DRAG = 30
const DECIDE = 120

export default function ReignsScreen() {
  const { moduleId, episodeId } = useParams()
  const navigate = useNavigate()
  const module = MODULES.find(m => m.id === moduleId) || MODULES[0]
  const epId = parseInt(episodeId || '1', 10)

  const [episode,      setEpisode]      = useState(null)
  const [showMonologue,setShowMonologue] = useState(true)
  const [resources,    setResources]    = useState({ r1: 50, r2: 50, r3: 50, r4: 50 })
  const [cardIndex,    setCardIndex]    = useState(0)
  const [mentorMood,   setMentorMood]   = useState('neutral')
  const [previewSide,  setPreviewSide]  = useState(null)

  const { completeEpisode } = useProgress(moduleId)
  const { updateSympathy }  = useSympathy(moduleId)
  const { t } = useLang()

  const x      = useMotionValue(0)
  const rotate = useTransform(x, [-200, 200], [-15, 15])
  const fadeOp = useTransform(x, [-200, 0, 200], [0.7, 1, 0.7])

  useEffect(() => {
    loadScenarios(moduleId).then(data => {
      const ep = data?.episodes?.find(e => e.id === epId) || data?.episodes?.[0] || null
      setEpisode(ep)
    })
  }, [moduleId, epId])

  const cards = episode?.scenarios || FALLBACK
  const card  = cards[cardIndex % cards.length]

  const handleDrag = useCallback((_, info) => {
    const dx = info.offset.x
    if (Math.abs(dx) > DRAG) {
      setPreviewSide(dx > 0 ? 'right' : 'left')
      if (Math.abs(dx) > DECIDE * 0.7) setMentorMood('worried')
    } else {
      setPreviewSide(null)
      setMentorMood('neutral')
    }
  }, [])

  const handleDecision = useCallback((side) => {
    const deltas = card[side].deltas
    let gameOver = false
    const next = {}
    for (const k of ['r1', 'r2', 'r3', 'r4']) {
      next[k] = Math.max(0, Math.min(100, resources[k] + (deltas[k] || 0)))
      if (next[k] <= 0 || next[k] >= 100) gameOver = true
    }
    setResources(next)
    setPreviewSide(null)
    const net = Object.values(deltas).reduce((a, b) => a + b, 0)
    updateSympathy(Math.sign(net) * 5)

    if (gameOver) {
      setMentorMood('angry')
      setTimeout(() => navigate(`/gameover/${moduleId}`), 600)
    } else if (cardIndex + 1 >= cards.length) {
      setMentorMood('relieved')
      completeEpisode(epId)
      setTimeout(() => navigate(`/complete/${moduleId}/${epId}`), 600)
    } else {
      setMentorMood('relieved')
      setTimeout(() => { setCardIndex(i => i + 1); setMentorMood('neutral') }, 400)
    }
  }, [card, resources, cardIndex, cards.length, epId, moduleId, navigate, completeEpisode, updateSympathy])

  const handleDragEnd = useCallback((_, info) => {
    const dx = info.offset.x
    if      (dx >  DECIDE) handleDecision('right')
    else if (dx < -DECIDE) handleDecision('left')
    else { setPreviewSide(null); setMentorMood('neutral') }
  }, [handleDecision])

  if (!episode) return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <span style={{ color: T.textMuted, fontSize: 14 }}>{t.common.loading}</span>
    </div>
  )

  return (
    <div style={{ maxWidth: 480, margin: '0 auto', padding: '24px 16px', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {showMonologue && (
        <MentorMonologue
          mentorId={module.mentor}
          text={episode.monologue}
          onDismiss={() => setShowMonologue(false)}
        />
      )}

      <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} style={{ ...glass, padding: '14px 18px', marginBottom: 20 }}>
        <div style={{ display: 'flex', gap: 12 }}>
          {['r1', 'r2', 'r3', 'r4'].map(id => (
            <ResourceMeter key={id} id={id} value={resources[id]}
              delta={previewSide ? card[previewSide].deltas[id] : undefined}
              pulsing={!!previewSide} />
          ))}
        </div>
      </motion.div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
        <MentorAvatar mentorId={module.mentor} mood={mentorMood} size={56} />
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: T.text }}>{episode.title}</div>
          <div style={{ fontSize: 11, color: T.textMuted, marginTop: 2 }}>{cardIndex + 1} / {cards.length}</div>
        </div>
        <button
          onClick={() => navigate(`/episodes/${moduleId}`)}
          style={{ marginLeft: 'auto', background: 'none', border: 'none', color: T.textMuted, cursor: 'pointer', fontSize: 12 }}
        >
          {t.common.exit}
        </button>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 8px', marginBottom: 8 }}>
        <motion.span animate={{ opacity: previewSide === 'left'  ? 1 : 0.3, x: previewSide === 'left'  ? -4 : 0 }} style={{ fontSize: 12, color: T.red,   fontWeight: 600 }}>← {card.left.label}</motion.span>
        <motion.span animate={{ opacity: previewSide === 'right' ? 1 : 0.3, x: previewSide === 'right' ? 4  : 0 }} style={{ fontSize: 12, color: T.green, fontWeight: 600 }}>{card.right.label} →</motion.span>
      </div>

      <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
        <motion.div drag="x" dragConstraints={{ left: -300, right: 300 }}
          style={{ x, rotate, opacity: fadeOp, width: '100%' }}
          onDrag={handleDrag} onDragEnd={handleDragEnd} whileTap={{ cursor: 'grabbing' }}
        >
          <div style={{ ...glass, padding: 32, textAlign: 'center', cursor: 'grab', userSelect: 'none', minHeight: 180, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: T.text, margin: 0 }}>{card.text}</p>
          </div>
        </motion.div>
      </div>

      {previewSide && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          style={{ ...glass, padding: '12px 16px', marginTop: 16, borderColor: previewSide === 'right' ? T.green + '60' : T.red + '60' }}
        >
          <p style={{ margin: 0, fontSize: 13, color: T.textMuted }}>
            {previewSide === 'right' ? '→ ' : '← '}{card[previewSide].consequence}
          </p>
        </motion.div>
      )}

      <div style={{ textAlign: 'center', marginTop: 16 }}>
        <span style={{ fontSize: 11, color: T.textMuted }}>{t.episodes.episode(epId)} · {episode.title}</span>
      </div>
    </div>
  )
}
