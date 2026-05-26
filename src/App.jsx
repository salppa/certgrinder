import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { T } from './theme'
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

      <BrowserRouter>
        <Routes>
          <Route path="/"                                element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard"                       element={<Dashboard />} />
          <Route path="/modules"                         element={<ModulePicker />} />
          <Route path="/episodes/:moduleId"              element={<EpisodeSelect />} />
          <Route path="/reigns/:moduleId/:episodeId"     element={<ReignsScreen />} />
          <Route path="/reigns/:moduleId"                element={<ReignsScreen />} />
          <Route path="/complete/:moduleId/:episodeId"   element={<EpisodeComplete />} />
          <Route path="/gameover/:moduleId"              element={<GameOver />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
