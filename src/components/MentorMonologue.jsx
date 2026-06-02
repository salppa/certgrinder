import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { T, glass } from '../theme'
import MentorAvatar from './MentorAvatar'
import { useLang } from '../context/LangContext'

export default function MentorMonologue({ mentorId, text, onDismiss }) {
  const [visible, setVisible] = useState(true)
  const { lang } = useLang()

  const dismiss = () => {
    setVisible(false)
    setTimeout(onDismiss, 280)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={dismiss}
          style={{
            position: 'fixed', inset: 0, zIndex: 100,
            background: 'rgba(248,250,252,0.88)',
            backdropFilter: 'blur(8px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: 24,
          }}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1,   y: 0  }}
            exit={{   scale: 0.95, y: -8 }}
            transition={{ type: 'spring', stiffness: 280, damping: 22 }}
            onClick={e => e.stopPropagation()}
            style={{ maxWidth: 400, width: '100%' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
              <MentorAvatar mentorId={mentorId} mood="neutral" size={96} showName />
              <div style={{ ...glass, padding: '24px 28px', textAlign: 'center', width: '100%' }}>
                <p style={{ margin: '0 0 20px', fontSize: 15, lineHeight: 1.65, color: T.text }}>
                  {text}
                </p>
                <button
                  onClick={dismiss}
                  style={{
                    padding: '10px 28px',
                    background: T.accent, color: '#fff',
                    border: 'none', borderRadius: 12,
                    fontSize: 14, fontWeight: 600, cursor: 'pointer',
                  }}
                >
                  {lang === 'en' ? "Let's go →" : 'Aloitetaan →'}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
