import { getIdToken, getUserId } from './auth'

const API_BASE = import.meta.env.VITE_API_URL || ''

async function req(path, method = 'GET', body) {
  if (!API_BASE) return null
  const token = getIdToken()
  if (!token) return null
  try {
    const res = await fetch(`${API_BASE}${path}`, {
      method,
      headers: {
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`,
      },
      ...(body !== undefined ? { body: JSON.stringify(body) } : {}),
    })
    return res.ok ? res.json() : null
  } catch {
    return null
  }
}

export const api = {
  getProgress:  (moduleId)       => { const id = getUserId(); return id ? req(`/users/${id}/modules/${moduleId}/progress`) : null },
  setProgress:  (moduleId, data) => { const id = getUserId(); return id ? req(`/users/${id}/modules/${moduleId}/progress`, 'PUT', data) : null },
  getSympathy:  (moduleId)       => { const id = getUserId(); return id ? req(`/users/${id}/modules/${moduleId}/sympathy`) : null },
  setSympathy:  (moduleId, data) => { const id = getUserId(); return id ? req(`/users/${id}/modules/${moduleId}/sympathy`, 'PUT', data) : null },
}
