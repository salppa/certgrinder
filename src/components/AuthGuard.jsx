import React from 'react'
import { Navigate } from 'react-router-dom'
import { isAuthenticated } from '../lib/auth'

export default function AuthGuard({ children }) {
  if (!isAuthenticated()) return <Navigate to="/login" replace />
  return children
}
