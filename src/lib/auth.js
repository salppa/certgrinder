const COGNITO_DOMAIN  = import.meta.env.VITE_COGNITO_DOMAIN
const CLIENT_ID       = import.meta.env.VITE_COGNITO_CLIENT_ID
const REDIRECT_URI    = `${window.location.origin}/callback`

// Tokens are stored in sessionStorage (tab-scoped) instead of localStorage
// to reduce XSS token-theft surface. Refresh token stays session-scoped too —
// users re-login when closing the tab, which is the acceptable trade-off.
const store = {
  get:    (k)    => sessionStorage.getItem(k),
  set:    (k, v) => sessionStorage.setItem(k, v),
  remove: (k)    => sessionStorage.removeItem(k),
}

function generateVerifier() {
  const arr = new Uint8Array(32)
  crypto.getRandomValues(arr)
  return btoa(String.fromCharCode(...arr)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')
}

async function codeChallenge(verifier) {
  const data   = new TextEncoder().encode(verifier)
  const digest = await crypto.subtle.digest('SHA-256', data)
  return btoa(String.fromCharCode(...new Uint8Array(digest))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')
}

export async function login() {
  const verifier = generateVerifier()
  const state    = generateVerifier()
  sessionStorage.setItem('pkce_verifier', verifier)
  sessionStorage.setItem('oauth_state',   state)
  const challenge = await codeChallenge(verifier)
  const params = new URLSearchParams({
    response_type:         'code',
    client_id:             CLIENT_ID,
    redirect_uri:          REDIRECT_URI,
    scope:                 'openid email profile',
    code_challenge:        challenge,
    code_challenge_method: 'S256',
    identity_provider:     'Google',
    state,
  })
  window.location.href = `${COGNITO_DOMAIN}/oauth2/authorize?${params}`
}

export async function exchangeCode(code) {
  const verifier = sessionStorage.getItem('pkce_verifier')
  const res = await fetch(`${COGNITO_DOMAIN}/oauth2/token`, {
    method:  'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body:    new URLSearchParams({
      grant_type:    'authorization_code',
      client_id:     CLIENT_ID,
      redirect_uri:  REDIRECT_URI,
      code,
      code_verifier: verifier,
    }),
  })
  if (!res.ok) throw new Error(`Token exchange failed: ${res.status}`)
  const tokens = await res.json()
  sessionStorage.removeItem('pkce_verifier')
  store.set('cg:id_token',     tokens.id_token)
  store.set('cg:access_token', tokens.access_token)
  if (tokens.refresh_token) store.set('cg:refresh_token', tokens.refresh_token)
  return tokens
}

export function getIdToken() {
  return store.get('cg:id_token')
}

export function getUserId() {
  const token = getIdToken()
  if (!token) return null
  try {
    return JSON.parse(atob(token.split('.')[1])).sub
  } catch {
    return null
  }
}

export async function refreshTokens() {
  const refreshToken = store.get('cg:refresh_token')
  if (!refreshToken) throw new Error('No refresh token')
  const res = await fetch(`${COGNITO_DOMAIN}/oauth2/token`, {
    method:  'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body:    new URLSearchParams({
      grant_type:    'refresh_token',
      client_id:     CLIENT_ID,
      refresh_token: refreshToken,
    }),
  })
  if (!res.ok) throw new Error(`Token refresh failed: ${res.status}`)
  const tokens = await res.json()
  store.set('cg:id_token',     tokens.id_token)
  store.set('cg:access_token', tokens.access_token)
  return tokens
}

export async function isAuthenticated() {
  const token = getIdToken()
  if (!token) return false
  try {
    const { exp } = JSON.parse(atob(token.split('.')[1]))
    if (Date.now() < exp * 1000) return true
    await refreshTokens()
    return true
  } catch {
    return false
  }
}

export function logout() {
  store.remove('cg:id_token')
  store.remove('cg:access_token')
  store.remove('cg:refresh_token')
  const params = new URLSearchParams({ client_id: CLIENT_ID, logout_uri: window.location.origin })
  window.location.href = `${COGNITO_DOMAIN}/logout?${params}`
}
