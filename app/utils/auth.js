let localStorage

// If testing, use local storage polyfill
if (global.process && process.env.NODE_ENV === 'test') {
  localStorage = require('localStorage')
} else {
  // If not use the browser one
  localStorage = global.window.localStorage
}

export const ACCESS_TOKEN = 'access_token'
export const ID_TOKEN = 'id_token'
export const EXPIRES_AT = 'expires_at'
export const PROFILE = 'profile'

export const setStoredAuthState = (profile, accessToken, idToken, expiresIn) => {
  const expiresAt = JSON.stringify((expiresIn * 1000) + new Date().getTime())
  localStorage.setItem(ACCESS_TOKEN, accessToken)
  localStorage.setItem(ID_TOKEN, idToken)
  localStorage.setItem(EXPIRES_AT, expiresAt)
  localStorage.setItem(PROFILE, JSON.stringify(profile))
}

export const removeStoredAuthState = () => {
  localStorage.removeItem(ACCESS_TOKEN)
  localStorage.removeItem(ID_TOKEN)
  localStorage.removeItem(EXPIRES_AT)
  localStorage.removeItem(PROFILE)
}

export const getStoredAuthState = () => {
  try {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'))
    console.log('Expires at:', expiresAt)
    const isAuthenticated = new Date().getTime() < expiresAt
    console.log('isAuthed', isAuthenticated)
    const profile = JSON.parse(localStorage.getItem(PROFILE))

    return { isAuthenticated, profile }
  } catch (err) {
    removeStoredAuthState()
    return {}
  }
}
