import { fromJS } from 'immutable'

import authReducer from '../reducer'

import {
  loginRequest,
  loginSuccess,
  loginFailure,
  logout
} from '../actions'

describe('authReducer', () => {
  let state
  beforeEach(() => {
    state = fromJS({
      isLoggingIn: false,
      accessToken: null,
      idToken: null,
      expiresIn: null,
      profile: null,
      error: null,
      isAuthenticated: false
    })
  })

  it('should return the initial state', () => {
    const expectedResult = state
    expect(authReducer(undefined, {})).toEqual(expectedResult)
  })

  it('should handle the loginRequest action correctly', () => {
    const expectedResult = state.set('isLoggingIn', true)
    expect(authReducer(state, loginRequest())).toEqual(expectedResult)
  })

  it('should handle the loginSuccess action correctly', () => {
    const fixture = {
      profile: {
        email: 'test@ex.com',
        name: 'Bill Test'
      },
      accessToken: '123abc',
      idToken: 'abc123ABC321',
      expiresIn: 7200
    }
    const expectedResult = state
      .set('isLoggingIn', false)
      .set('accessToken', fixture.accessToken)
      .set('idToken', fixture.idToken)
      .set('expiresIn', fixture.expiresIn)
      .set('profile', fixture.profile)
      .set('isAuthenticated', true)
    expect(authReducer(state, loginSuccess(fixture.profile, fixture.accessToken, fixture.idToken, fixture.expiresIn))).toEqual(expectedResult)
  })

  it('should handle the loginFailure action correctly', () => {
    const fixture = 'Error occurred'
    const expectedResult = state
      .set('isLoggingIn', false)
      .set('accessToken', null)
      .set('idToken', null)
      .set('expiresIn', null)
      .set('profile', null)
      .set('error', fixture)
      .set('isAuthenticated', false)
    expect(authReducer(state, loginFailure(fixture))).toEqual(expectedResult)
  })

  it('should handle the logout action correctly', () => {
    const expectedResult = state
    expect(authReducer(state, logout())).toEqual(expectedResult)
  })
})
