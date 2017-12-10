import localStorage from 'localStorage'
import MockDate from 'mockdate'

import {
  ACCESS_TOKEN,
  ID_TOKEN,
  EXPIRES_AT,
  PROFILE,
  setStoredAuthState,
  removeStoredAuthState,
  getStoredAuthState
} from '../auth'

const mockedStorage = {
  accessToken: '123abc',
  idToken: 'abc123ABC321',
  expiresIn: 7200,
  profile: {
    email: 'joeschmoe@example.com',
    name: 'Joe Schmoe'
  }
}
MockDate.set(new Date().getTime())
const expiresAt = JSON.stringify((mockedStorage.expiresIn * 1000) + new Date().getTime())

describe('auth', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  describe('setStoredAuthState', () => {
    it('should set localStorage with profile and idToken', () => {
      setStoredAuthState(mockedStorage.profile, mockedStorage.accessToken, mockedStorage.idToken, mockedStorage.expiresIn)

      expect(localStorage.length).toEqual(4)
      expect(localStorage.getItem(ACCESS_TOKEN)).toEqual(mockedStorage.accessToken)
      expect(localStorage.getItem(ID_TOKEN)).toEqual(mockedStorage.idToken)
      expect(localStorage.getItem(EXPIRES_AT)).toEqual(expiresAt)
      expect(JSON.parse(localStorage.getItem(PROFILE))).toEqual(mockedStorage.profile)
    })
  })

  describe('removeStoredAuthState', () => {
    it('should remove auth state from localStorage', () => {
      localStorage.setItem(ACCESS_TOKEN, mockedStorage.accessToken)
      localStorage.setItem(ID_TOKEN, mockedStorage.idToken)
      localStorage.setItem(EXPIRES_AT, expiresAt)
      localStorage.setItem(PROFILE, JSON.stringify(mockedStorage.profile))
      expect(localStorage.length).toEqual(4)

      removeStoredAuthState()

      expect(localStorage.length).toEqual(0)
    })
  })

  describe('getStoredAuthState', () => {
    it('should get localStorage values for isAuthenticated and profile', () => {
      localStorage.setItem(ACCESS_TOKEN, mockedStorage.accessToken)
      localStorage.setItem(ID_TOKEN, mockedStorage.idToken)
      localStorage.setItem(EXPIRES_AT, expiresAt)
      localStorage.setItem(PROFILE, JSON.stringify(mockedStorage.profile))
      expect(localStorage.length).toEqual(4)

      const { isAuthenticated, profile } = getStoredAuthState()

      expect(isAuthenticated).toBe(true)
      expect(profile).toEqual(mockedStorage.profile)
    })

    it('should return isAuthenticated as false if user has not already authenticated', () => {
      const { isAuthenticated } = getStoredAuthState()
      expect(isAuthenticated).toBe(false)
    })
  })
})
