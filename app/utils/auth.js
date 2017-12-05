let localStorage

// If testing, use local storage polyfill
/* istanbul ignore next */
if (global.process && process.env.NODE_ENV === 'test') {
  localStorage = require('localStorage')
} else {
  // If not use the browser one
  localStorage = global.window.localStorage
}

export const ID_TOKEN = 'id_token'
export const PROFILE = 'profile'

export const setStoredAuthState = (profile, idToken) => {
  localStorage.setItem(ID_TOKEN, idToken)
  localStorage.setItem(PROFILE, JSON.stringify(profile))
}

export const removeStoredAuthState = () => {
  localStorage.removeItem(ID_TOKEN)
  localStorage.removeItem(PROFILE)
}

export const getStoredAuthState = () => {
  try {
    const idToken = localStorage.getItem(ID_TOKEN)
    const profile = JSON.parse(localStorage.getItem(PROFILE))

    return { idToken, profile }
  } catch (err) {
    /* istanbul ignore next */
    removeStoredAuthState()
    /* istanbul ignore next */
    return {}
  }
}
