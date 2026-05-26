export const T = {
  // Background gradient
  bgFrom: '#F8FAFC',
  bgTo:   '#EFF6FF',

  // Glass surface
  glass:       'rgba(255,255,255,0.65)',
  glassBorder: 'rgba(255,255,255,0.40)',
  glassBlur:   'blur(12px)',
  glassShadow: '0 8px 32px rgba(37,99,235,0.08)',

  // Typography
  text:      '#1a202c',
  textMuted: '#6b7280',
  textDim:   '#374151',

  // Brand accent
  accent:      '#2563eb',
  accentLight: '#3b82f6',
  accentGlow:  'rgba(37,99,235,0.15)',

  // Resource meters
  r1: '#ef4444',  // Kustannus
  r2: '#3b82f6',  // Suorituskyky
  r3: '#8b5cf6',  // Compliance
  r4: '#10b981',  // Tiimin tyytyväisyys

  // Semantic colours
  green:    '#059669',
  greenBg:  'rgba(5,150,105,0.08)',
  red:      '#dc2626',
  redBg:    'rgba(220,38,38,0.08)',
  yellow:   '#d97706',
  yellowBg: 'rgba(217,119,6,0.08)',

  // Layout
  radius:   24,
  radiusSm: 12,
  radiusXs: 8,
  font: "'IBM Plex Sans', sans-serif",
}

export const glass = {
  background:           T.glass,
  backdropFilter:       T.glassBlur,
  WebkitBackdropFilter: T.glassBlur,
  border:               `1px solid ${T.glassBorder}`,
  borderRadius:         T.radius,
  boxShadow:            T.glassShadow,
}
