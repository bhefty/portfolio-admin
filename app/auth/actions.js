import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from './constants'

export function loginRequest () {
  return {
    type: LOGIN_REQUEST
  }
}

export function loginSuccess (profile, accessToken, idToken, expiresIn) {
  return {
    type: LOGIN_SUCCESS,
    profile,
    accessToken,
    idToken,
    expiresIn
  }
}

export function loginFailure (error) {
  return {
    type: LOGIN_FAILURE,
    error
  }
}

export function logout () {
  return {
    type: LOGOUT
  }
}
