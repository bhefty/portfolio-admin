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

export function loginSuccess (profile, idToken) {
  return {
    type: LOGIN_SUCCESS,
    profile,
    idToken
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
