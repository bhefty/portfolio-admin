import { createSelector } from 'reselect'

const selectAuth = state => state.get('auth')

const makeSelectIsLoggingIn = () => createSelector(
  selectAuth,
  (authState) => authState.get('isLoggingIn')
)

const makeSelectIdToken = () => createSelector(
  selectAuth,
  (authState) => authState.get('idToken')
)

const makeSelectProfile = () => createSelector(
  selectAuth,
  (authState) => authState.get('profile')
)

const makeSelectError = () => createSelector(
  selectAuth,
  (authState) => authState.get('error')
)

const makeSelectIsAuthenticated = () => createSelector(
  selectAuth,
  (authState) => authState.get('isAuthenticated')
)

export {
  selectAuth,
  makeSelectIsLoggingIn,
  makeSelectIdToken,
  makeSelectProfile,
  makeSelectError,
  makeSelectIsAuthenticated
}
