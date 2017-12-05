import { fromJS } from 'immutable'

import { getStoredAuthState } from 'utils/auth'

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from './constants'

// Get values of idToken and profile if they are stored
// in localStorage, else set to null. This will allow
// user to stay logged in if the session has not expired.
const { idToken, profile } = getStoredAuthState()

const initialState = fromJS({
  isLoggingIn: false,
  idToken,
  profile,
  error: null
})

function authReducer (state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return state
        .set('isLoggingIn', true)
    case LOGIN_SUCCESS:
      return state
        .set('isLoggingIn', false)
        .set('idToken', action.idToken)
        .set('profile', action.profile)
    case LOGIN_FAILURE:
      return state
        .set('isLoggingIn', false)
        .set('idToken', null)
        .set('profile', null)
        .set('error', action.error)
    case LOGOUT:
      return initialState
    default:
      return state
  }
}

export default authReducer
