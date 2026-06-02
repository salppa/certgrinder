import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { T } from './theme'
import { LangProvider } from './context/LangContext'
import AuthGuard       from './components/AuthGuard'
import LoginScreen     from './screens/LoginScreen'
import AuthCallback    from './screens/AuthCallback'
import Dashboard       from './screens/Dashboard'
import ModulePicker    from './screens/ModulePicker'
import EpisodeSelect   from './screens/EpisodeSelect'
import ReignsScreen    from './screens/ReignsScreen'
import EpisodeComplete from './screens/EpisodeComplete'
import GameOver        from './screens/GameOver'

export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: `linear-gradient(135deg, ${T.bgFrom} 0%, ${T.bgTo} 100%)`,
      fontFamily: T.font, color: T.text,
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'fixed', top: '-20%', right: '-10%', width: 600, height: 600, borderRadius: '50%', pointerEvents: 'none', background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)' }} />
      <div style={{ position: 'fixed', bottom: '-20%', left: '-10%', width: 500, height: 500, borderRadius: '50%', pointerEvents: 'none', background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)' }} />

      <LangProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login"                           element={<LoginScreen />} />
          <Route path="/callback"                        element={<AuthCallback />} />
          <Route path="/"                                element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard"                       element={<AuthGuard><Dashboard /></AuthGuard>} />
          <Route path="/modules"                         element={<AuthGuard><ModulePicker /></AuthGuard>} />
          <Route path="/episodes/:moduleId"              element={<AuthGuard><EpisodeSelect /></AuthGuard>} />
          <Route path="/reigns/:moduleId/:episodeId"     element={<AuthGuard><ReignsScreen /></AuthGuard>} />
          <Route path="/reigns/:moduleId"                element={<AuthGuard><ReignsScreen /></AuthGuard>} />
          <Route path="/complete/:moduleId/:episodeId"   element={<AuthGuard><EpisodeComplete /></AuthGuard>} />
          <Route path="/gameover/:moduleId"              element={<AuthGuard><GameOver /></AuthGuard>} />
        </Routes>
      </BrowserRouter>
      </LangProvider>
    </div>
  )
}
