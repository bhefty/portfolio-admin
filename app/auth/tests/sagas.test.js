import { take, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from '../constants'

import authSagas, {
  watchLoginSuccess,
  watchLoginRequest,
  watchLoginFailure,
  watchLogout
} from '../sagas'

describe('watchLoginSuccess', () => {
  const watchLoginSuccessSaga = watchLoginSuccess()

  it('should start task to watch for the LOGIN_SUCCESS action', () => {
    const takeDescriptor = watchLoginSuccessSaga.next().value
    expect(takeDescriptor).toEqual(take(LOGIN_SUCCESS))
  })
})

describe('watchLoginRequest', () => {
  const watchLoginRequestSaga = watchLoginRequest()

  it('should start task to watch for the LOGIN_REQUEST action', () => {
    const takeDescriptor = watchLoginRequestSaga.next().value
    expect(takeDescriptor).toEqual(take(LOGIN_REQUEST))

    const callDescriptor = watchLoginRequestSaga.next().value
    expect(callDescriptor).toMatchSnapshot()
  })
})

describe('watchLoginFailure', () => {
  const watchLoginFailureSaga = watchLoginFailure()

  it('should start task to watch for the LOGIN_FAILURE action', () => {
    const takeDescriptor = watchLoginFailureSaga.next().value
    expect(takeDescriptor).toEqual(take(LOGIN_FAILURE))
  })
})

describe('watchLogout', () => {
  const watchLogoutSaga = watchLogout()

  it('should start task to watch for the LOGOUT action', () => {
    const takeDescriptor = watchLogoutSaga.next().value
    expect(takeDescriptor).toEqual(take(LOGOUT))

    const putDescriptor = watchLogoutSaga.next().value
    expect(putDescriptor).toEqual(put(push('/')))
  })
})

describe('authSagas', function * () {
  it('should contain all watcher sagas', () => {
    const authSagasGenerator = authSagas()
    const allDescriptor = authSagasGenerator.next().value
    expect(allDescriptor.ALL[0].FORK.fn).toEqual(watchLoginSuccess)
    expect(allDescriptor.ALL[1].FORK.fn).toEqual(watchLoginRequest)
    expect(allDescriptor.ALL[2].FORK.fn).toEqual(watchLoginFailure)
    expect(allDescriptor.ALL[3].FORK.fn).toEqual(watchLogout)
  })
})
