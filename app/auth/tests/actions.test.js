import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from '../constants'

import {
  loginRequest,
  loginSuccess,
  loginFailure,
  logout
} from '../actions'

describe('Auth Actions', () => {
  describe('loginRequest', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOGIN_REQUEST
      }
      expect(loginRequest()).toEqual(expectedResult)
    })
  })

  describe('loginSuccess', () => {
    it('should return the correct type and the passed profile and idToken', () => {
      const fixture = {
        profile: {
          email: 'test@ex.com',
          name: 'Bill Test'
        },
        idToken: 'abc123ABC321'
      }
      const expectedResult = {
        type: LOGIN_SUCCESS,
        profile: fixture.profile,
        idToken: fixture.idToken
      }
      expect(loginSuccess(fixture.profile, fixture.idToken)).toEqual(expectedResult)
    })
  })

  describe('loginFailure', () => {
    it('should return the correct type and passed error', () => {
      const fixture = 'Error occurred'
      const expectedResult = {
        type: LOGIN_FAILURE,
        error: fixture
      }
      expect(loginFailure(fixture)).toEqual(expectedResult)
    })
  })

  describe('logout', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOGOUT
      }
      expect(logout()).toEqual(expectedResult)
    })
  })
})
