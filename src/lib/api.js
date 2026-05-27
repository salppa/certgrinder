const API_BASE = import.meta.env.VITE_API_URL || ''

// userId: localStorage UUID — vaihdetaan Cognito sub:iin tuotannossa
function getUserId() {
  let id = localStorage.getItem('cg:userId')
  if (!id) {
    id = crypto.randomUUID()
    localStorage.setItem('cg:userId', id)
  }
  return id
}

async function req(path, method = 'GET', body) {
  if (!API_BASE) return null
  try {
    const res = await fetch(`${API_BASE}${path}`, {
      method,
      headers: { 'Content-Type': 'application/json' },
      ...(body !== undefined ? { body: JSON.stringify(body) } : {}),
    })
    return res.ok ? res.json() : null
  } catch {
    return null
  }
}

const userId = getUserId()

export const api = {
  getProgress:  (moduleId)       => req(`/users/${userId}/modules/${moduleId}/progress`),
  setProgress:  (moduleId, data) => req(`/users/${userId}/modules/${moduleId}/progress`, 'PUT', data),
  getSympathy:  (moduleId)       => req(`/users/${userId}/modules/${moduleId}/sympathy`),
  setSympathy:  (moduleId, data) => req(`/users/${userId}/modules/${moduleId}/sympathy`, 'PUT', data),
}
