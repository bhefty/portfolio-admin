import Auth0Lock from 'auth0-lock'
import { push } from 'react-router-redux'
import { call, put, take, fork, all } from 'redux-saga/effects'

import { removeStoredAuthState, setStoredAuthState } from 'utils/auth'
// import request from 'utils/request'

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from './constants'

import { loginSuccess, loginFailure } from './actions'

// Ignore since Auth0 handles tests, maybe add some unit tests in future
export function * loginRequestSaga () {
  const lock = new Auth0Lock(
    process.env.AUTH0_CLIENT_ID,
    process.env.AUTH0_DOMAIN,
    {
      oidcConformant: true,
      authclose: true,
      auth: {
        redirectUrl: process.env.AUTH0_CALLBACK_URL,
        responseType: 'token id_token',
        audience: `https://${process.env.AUTH0_DOMAIN}/userinfo`,
        params: {
          scope: 'openid'
        }
      },
      languageDictionary: { title: 'Portfolio Admin' }
    }
  )

  const showLock = () => {
    return new Promise((resolve, reject) => { // eslint-disable-line no-new
      lock.on('hide', () => reject('Lock closed')) // eslint-disable-line prefer-promise-reject-errors

      lock.on('authenticated', (authResult) => {
        lock.getUserInfo(authResult.accessToken, (error, profile) => {
          if (!error) {
            lock.hide()
            const {
              accessToken,
              idToken,
              expiresIn
            } = authResult
            resolve({ profile, accessToken, idToken, expiresIn })
          } else {
            console.log('ERROR logging in:', error)
          }
        })
      })

      lock.on('unrecoverable_error', (error) => {
        console.log('Unrecoverable error', error)
        lock.hide()
        reject(error)
      })

      lock.show()
    })
  }

  try {
    const { profile, accessToken, idToken, expiresIn } = yield call(showLock)
    console.log('login successful')
    yield put(loginSuccess(profile, accessToken, idToken, expiresIn))
    yield put(push('/dashboard'))
  } catch (error) {
    yield put(loginFailure(error))
    yield put(push('/'))
  }
}

export function * watchLoginRequest () {
  while (true) {
    yield take(LOGIN_REQUEST)
    yield call(loginRequestSaga)
  }
}

export function * watchLoginSuccess () {
  while (true) {
    const { profile, accessToken, idToken, expiresIn } = yield take(LOGIN_SUCCESS)
    setStoredAuthState(profile, accessToken, idToken, expiresIn)
  }
}

export function * watchLoginFailure () {
  while (true) {
    yield take(LOGIN_FAILURE)
    console.log('Failed????')
    removeStoredAuthState()
  }
}

export function * watchLogout () {
  while (true) {
    yield take(LOGOUT)
    removeStoredAuthState()

    yield put(push('/'))
  }
}

export default function * authSagas () {
  yield all([
    fork(watchLoginSuccess),
    fork(watchLoginRequest),
    fork(watchLoginFailure),
    fork(watchLogout)
  ])
}
