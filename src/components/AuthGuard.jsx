import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { isAuthenticated } from '../lib/auth'
import { T } from '../theme'
import { useLang } from '../context/LangContext'

export default function AuthGuard({ children }) {
  const [status, setStatus] = useState('checking')
  const { t } = useLang()

  useEffect(() => {
    isAuthenticated().then(ok => setStatus(ok ? 'ok' : 'denied'))
  }, [])

  if (status === 'checking') return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <div style={{ color: T.textMuted, fontSize: 14 }}>{t.common.loading}</div>
    </div>
  )
  if (status === 'denied') return <Navigate to="/login" replace />
  return children
}
