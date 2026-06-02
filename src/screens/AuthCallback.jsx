import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { exchangeCode } from '../lib/auth'
import { T } from '../theme'
import { useLang } from '../context/LangContext'

export default function AuthCallback() {
  const navigate = useNavigate()
  const [error, setError] = useState(null)
  const { t } = useLang()

  useEffect(() => {
    const params   = new URLSearchParams(window.location.search)
    const code     = params.get('code')
    const err      = params.get('error')
    const errDesc  = params.get('error_description')
    const state    = params.get('state')

    if (err) { setError(errDesc || err); return }
    if (!code) { setError(t.auth.noCode); return }

    const savedState = sessionStorage.getItem('oauth_state')
    sessionStorage.removeItem('oauth_state')
    if (savedState && state !== savedState) {
      setError(t.auth.badState)
      return
    }

    exchangeCode(code)
      .then(() => navigate('/dashboard', { replace: true }))
      .catch(e  => setError(e.message))
  }, [navigate, t])

  if (error) return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <div style={{ padding: 24, textAlign: 'center' }}>
        <div style={{ color: T.red, fontSize: 14, marginBottom: 16 }}>
          {t.auth.failed(error)}
        </div>
        <button
          onClick={() => navigate('/login', { replace: true })}
          style={{ fontSize: 13, color: T.textMuted, background: 'none', border: 'none', cursor: 'pointer' }}
        >
          {t.auth.tryAgain}
        </button>
      </div>
    </div>
  )

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <div style={{ color: T.textMuted, fontSize: 14 }}>{t.auth.loading}</div>
    </div>
  )
}
