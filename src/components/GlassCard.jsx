import React from 'react'
import { glass, T } from '../theme'

export default function GlassCard({ children, style, onClick, hoverable }) {
  const [hovered, setHovered] = React.useState(false)

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => hoverable && setHovered(true)}
      onMouseLeave={() => hoverable && setHovered(false)}
      style={{
        ...glass,
        padding: 24,
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        cursor: onClick ? 'pointer' : 'default',
        transform: hovered ? 'translateY(-2px)' : 'none',
        boxShadow: hovered ? `0 16px 48px ${T.accentGlow}` : glass.boxShadow,
        ...style,
      }}
    >
      {children}
    </div>
  )
}
