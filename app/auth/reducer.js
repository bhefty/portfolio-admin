import { fromJS } from 'immutable'

import { getStoredAuthState } from 'utils/auth'

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from './constants'

// Get any localStorage values to restore user authentication
// if they did not logout before time expires
const { isAuthenticated, profile } = getStoredAuthState()

const initialState = fromJS({
  isLoggingIn: false,
  accessToken: null,
  idToken: null,
  expiresIn: null,
  profile,
  error: null,
  isAuthenticated
})

function authReducer (state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return state
        .set('isLoggingIn', true)
    case LOGIN_SUCCESS:
      return state
        .set('isLoggingIn', false)
        .set('accessToken', action.accessToken)
        .set('idToken', action.idToken)
        .set('expiresIn', action.expiresIn)
        .set('profile', action.profile)
        .set('error', null)
        .set('isAuthenticated', true)
    case LOGIN_FAILURE:
      return state
        .set('isLoggingIn', false)
        .set('accessToken', null)
        .set('idToken', null)
        .set('expiresIn', null)
        .set('profile', null)
        .set('error', action.error)
        .set('isAuthenticated', false)
    case LOGOUT:
      return initialState
    default:
      return state
  }
}

export default authReducer
