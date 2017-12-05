import localStorage from 'localStorage'

import {
  ID_TOKEN,
  PROFILE,
  setStoredAuthState,
  removeStoredAuthState,
  getStoredAuthState
} from '../auth'

const mockedStorage = {
  idToken: 'abc123BCA321',
  profile: {
    email: 'joeschmoe@example.com',
    name: 'Joe Schmoe'
  }
}

describe('auth', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  describe('setStoredAuthState', () => {
    it('should set localStorage with profile and idToken', () => {
      setStoredAuthState(mockedStorage.profile, mockedStorage.idToken)

      expect(localStorage.length).toEqual(2)
      expect(localStorage.getItem(ID_TOKEN)).toEqual(mockedStorage.idToken)
      expect(JSON.parse(localStorage.getItem(PROFILE))).toEqual(mockedStorage.profile)
    })
  })

  describe('removeStoredAuthState', () => {
    it('should remove auth state from localStorage', () => {
      localStorage.setItem(ID_TOKEN, mockedStorage.idToken)
      localStorage.setItem(PROFILE, JSON.stringify(mockedStorage.profile))
      expect(localStorage.length).toEqual(2)

      removeStoredAuthState()

      expect(localStorage.length).toEqual(0)
    })
  })

  describe('getStoredAuthState', () => {
    it('should get localStorage values for idToken and profile', () => {
      localStorage.setItem(ID_TOKEN, mockedStorage.idToken)
      localStorage.setItem(PROFILE, JSON.stringify(mockedStorage.profile))
      expect(localStorage.length).toEqual(2)

      const { idToken, profile } = getStoredAuthState()

      expect(idToken).toEqual(mockedStorage.idToken)
      expect(profile).toEqual(mockedStorage.profile)
    })
  })
})
