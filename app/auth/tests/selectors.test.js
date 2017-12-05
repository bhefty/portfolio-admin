import { fromJS } from 'immutable'

import {
  selectAuth,
  makeSelectIsLoggingIn,
  makeSelectIdToken,
  makeSelectProfile,
  makeSelectError
} from '../selectors'

describe('selectAuth', () => {
  it('should select the auth state', () => {
    const authState = fromJS({
      isLoggingIn: false,
      idToken: null,
      profile: null,
      error: null
    })
    const mockedState = fromJS({
      auth: authState
    })
    expect(selectAuth(mockedState)).toEqual(authState)
  })
})

describe('makeSelectIsLoggingIn', () => {
  const isLoggingInSelector = makeSelectIsLoggingIn()
  it('should select isLoggingIn', () => {
    const mockedState = fromJS({
      auth: {
        isLoggingIn: false
      }
    })
    expect(isLoggingInSelector(mockedState)).toEqual(false)
  })
})

describe('makeSelectIdToken', () => {
  const idTokenSelector = makeSelectIdToken()
  it('should select idToken', () => {
    const idToken = '123abc321ABC'
    const mockedState = fromJS({
      auth: {
        idToken
      }
    })
    expect(idTokenSelector(mockedState)).toEqual(idToken)
  })
})

describe('makeSelectProfile', () => {
  const profileSelector = makeSelectProfile()
  it('should select profile', () => {
    const profile = fromJS({
      email: 'test@example.com',
      name: 'Alan Test'
    })
    const mockedState = fromJS({
      auth: {
        profile
      }
    })
    expect(profileSelector(mockedState)).toEqual(profile)
  })
})

describe('makeSelectError', () => {
  const errorSelector = makeSelectError()
  it('should select error', () => {
    const error = 'Error occurred'
    const mockedState = fromJS({
      auth: {
        error
      }
    })
    expect(errorSelector(mockedState)).toEqual(error)
  })
})
