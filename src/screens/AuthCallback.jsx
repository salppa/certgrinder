import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { exchangeCode } from '../lib/auth'
import { T } from '../theme'

export default function AuthCallback() {
  const navigate = useNavigate()
  const [error, setError] = useState(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const code = params.get('code')
    const err  = params.get('error')
    if (err)   { setError(err); return }
    if (!code) { setError('Ei auth-koodia URL:ssa'); return }
    exchangeCode(code)
      .then(() => navigate('/dashboard', { replace: true }))
      .catch(e  => setError(e.message))
  }, [navigate])

  if (error) return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <div style={{ ...{}, padding: 24, textAlign: 'center' }}>
        <div style={{ color: T.red, fontSize: 14, marginBottom: 16 }}>
          Kirjautuminen epäonnistui: {error}
        </div>
        <button
          onClick={() => navigate('/login', { replace: true })}
          style={{ fontSize: 13, color: T.textMuted, background: 'none', border: 'none', cursor: 'pointer' }}
        >
          Yritä uudelleen
        </button>
      </div>
    </div>
  )

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <div style={{ color: T.textMuted, fontSize: 14 }}>Kirjaudutaan...</div>
    </div>
  )
}
