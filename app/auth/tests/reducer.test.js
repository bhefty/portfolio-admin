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
      idToken: null,
      profile: null,
      error: null
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
      idToken: 'abc123ABC321'
    }
    const expectedResult = state
      .set('isLoggingIn', false)
      .set('idToken', fixture.idToken)
      .set('profile', fixture.profile)
    expect(authReducer(state, loginSuccess(fixture.profile, fixture.idToken))).toEqual(expectedResult)
  })

  it('should handle the loginFailure action correctly', () => {
    const fixture = 'Error occurred'
    const expectedResult = state
      .set('isLoggingIn', false)
      .set('idToken', null)
      .set('profile', null)
      .set('error', fixture)
    expect(authReducer(state, loginFailure(fixture))).toEqual(expectedResult)
  })

  it('should handle the logout action correctly', () => {
    const expectedResult = state
    expect(authReducer(state, logout())).toEqual(expectedResult)
  })
})
