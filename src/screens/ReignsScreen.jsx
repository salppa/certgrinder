import React, { useState, useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { T, glass } from '../theme'
import ResourceMeter from '../components/ResourceMeter'
import MentorAvatar from '../components/MentorAvatar'
import { MODULES } from '../data/modules'

// Placeholder scenarios — replaced by scenarios.js per module in Phase 4
const PLACEHOLDER_SCENARIOS = [
  {
    id: 1, episode: 1,
    text: 'Arkkitehtuuritiimi ehdottaa siirtymistä mikropalveluihin. Budjetti ylittyy 30 %. Hyväksytäänkö muutos?',
    left:  { label: 'Hylätään',    deltas: { r1: +15, r2: -20, r3: +5,  r4: -10 }, consequence: 'Budjetti säilyy, mutta tekninen velka kasvaa' },
    right: { label: 'Hyväksytään', deltas: { r1: -20, r2: +25, r3: -5,  r4: +15 }, consequence: 'Suorituskyky paranee merkittävästi' },
  },
  {
    id: 2, episode: 1,
    text: 'Tietoturva-auditointi löysi kriittisen haavoittuvuuden. Korjaus vie 2 viikkoa ja pysäyttää kehityksen.',
    left:  { label: 'Lykätään',     deltas: { r1: +5,  r2: +10, r3: -30, r4: -5  }, consequence: 'Compliance-riski kasvaa vakavasti' },
    right: { label: 'Korjataan nyt', deltas: { r1: -10, r2: -10, r3: +25, r4: +10 }, consequence: 'Compliance vahvistuu, tiimi arvostaa päätöstä' },
  },
  {
    id: 3, episode: 1,
    text: 'Johtoryhmä haluaa leikata IT-budjetista 20 %. Vaihtoehto: ulkoistaa osa operaatioista.',
    left:  { label: 'Hyväksy leikkaus', deltas: { r1: +20, r2: -15, r3: -10, r4: -20 }, consequence: 'Tiimin moraali romahtaa' },
    right: { label: 'Ehdota ulkoistusta', deltas: { r1: +10, r2: -5,  r3: -15, r4: -10 }, consequence: 'Kompromissi, mutta compliance-riskit kasvavat' },
  },
]

const DRAG_THRESHOLD   = 30
const DECIDE_THRESHOLD = 120

export default function ReignsScreen() {
  const { moduleId } = useParams()
  const navigate = useNavigate()
  const module = MODULES.find(m => m.id === moduleId) || MODULES[0]

  const [resources,      setResources]      = useState({ r1: 50, r2: 50, r3: 50, r4: 50 })
  const [cardIndex,      setCardIndex]      = useState(0)
  const [mentorMood,     setMentorMood]     = useState('neutral')
  const [showMonologue,  setShowMonologue]  = useState(true)
  const [previewSide,    setPreviewSide]    = useState(null)

  const x       = useMotionValue(0)
  const rotate  = useTransform(x, [-200, 200], [-15, 15])
  const opacity = useTransform(x, [-200, 0, 200], [0.7, 1, 0.7])

  const card = PLACEHOLDER_SCENARIOS[cardIndex % PLACEHOLDER_SCENARIOS.length]

  const handleDrag = useCallback((_, info) => {
    const dx = info.offset.x
    if (Math.abs(dx) > DRAG_THRESHOLD) {
      setPreviewSide(dx > 0 ? 'right' : 'left')
      if (Math.abs(dx) > DECIDE_THRESHOLD * 0.7) setMentorMood('worried')
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
    setMentorMood(gameOver ? 'angry' : 'relieved')
    if (gameOver) {
      setTimeout(() => navigate(`/gameover/${moduleId}`), 600)
    } else {
      setTimeout(() => { setCardIndex(i => i + 1); setMentorMood('neutral') }, 400)
    }
  }, [card, moduleId, navigate, resources])

  const handleDragEnd = useCallback((_, info) => {
    const dx = info.offset.x
    if      (dx >  DECIDE_THRESHOLD) handleDecision('right')
    else if (dx < -DECIDE_THRESHOLD) handleDecision('left')
    else { setPreviewSide(null); setMentorMood('neutral') }
  }, [handleDecision])

  return (
    <div style={{
      maxWidth: 480, margin: '0 auto', padding: '24px 16px',
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
    }}>

      {/* Resource meters */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ ...glass, padding: '14px 18px', marginBottom: 20 }}
      >
        <div style={{ display: 'flex', gap: 12 }}>
          {['r1', 'r2', 'r3', 'r4'].map(id => (
            <ResourceMeter
              key={id} id={id}
              value={resources[id]}
              delta={previewSide ? card[previewSide].deltas[id] : undefined}
              pulsing={!!previewSide}
            />
          ))}
        </div>
      </motion.div>

      {/* Mentor row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 24 }}
      >
        <MentorAvatar mentorId={module.mentor} mood={mentorMood} size={64} />
        {showMonologue && (
          <motion.div
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => setShowMonologue(false)}
            style={{
              ...glass, padding: '12px 16px', fontSize: 13,
              color: T.text, flex: 1, cursor: 'pointer', lineHeight: 1.5,
            }}
          >
            Tervetuloa. Edessäsi on vaikeita päätöksiä. Jokainen valinta vaikuttaa
            organisaatiosi tulevaisuuteen. Oletko valmis?
            <span style={{ fontSize: 10, color: T.textMuted, display: 'block', marginTop: 6 }}>
              Klikkaa jatkaaksesi →
            </span>
          </motion.div>
        )}
      </motion.div>

      {/* Swipe hints */}
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 8px', marginBottom: 8 }}>
        <motion.span
          animate={{ opacity: previewSide === 'left'  ? 1 : 0.3, x: previewSide === 'left'  ? -4 : 0 }}
          style={{ fontSize: 12, color: T.red,   fontWeight: 600 }}
        >
          ← {card.left.label}
        </motion.span>
        <motion.span
          animate={{ opacity: previewSide === 'right' ? 1 : 0.3, x: previewSide === 'right' ? 4 : 0 }}
          style={{ fontSize: 12, color: T.green, fontWeight: 600 }}
        >
          {card.right.label} →
        </motion.span>
      </div>

      {/* Swipeable card */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
        <motion.div
          drag="x"
          dragConstraints={{ left: -300, right: 300 }}
          style={{ x, rotate, opacity, width: '100%' }}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          whileTap={{ cursor: 'grabbing' }}
        >
          <div style={{
            ...glass, padding: 32,
            textAlign: 'center', cursor: 'grab',
            userSelect: 'none', minHeight: 180,
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
          }}>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: T.text, margin: 0 }}>
              {card.text}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Consequence preview */}
      {previewSide && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            ...glass, padding: '12px 16px', marginTop: 16,
            borderColor: previewSide === 'right' ? T.green + '60' : T.red + '60',
          }}
        >
          <p style={{ margin: 0, fontSize: 13, color: T.textMuted }}>
            {previewSide === 'right' ? '→ ' : '← '}
            {card[previewSide].consequence}
          </p>
        </motion.div>
      )}

      {/* Episode indicator */}
      <div style={{ textAlign: 'center', marginTop: 16 }}>
        <span style={{ fontSize: 11, color: T.textMuted }}>
          Episodi {card.episode} · Skenaario {(cardIndex % PLACEHOLDER_SCENARIOS.length) + 1}
        </span>
      </div>
    </div>
  )
}
