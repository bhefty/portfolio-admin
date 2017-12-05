import { fromJS } from 'immutable'
import { combineReducers } from 'redux-immutable'
import { LOCATION_CHANGE } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form/immutable'

// import globalReducer from 'containers/App/reducer'
import authReducer from 'auth/reducer'

const routeInitialState = fromJS({
  locationBeforeTransitions: null
})

function routeReducer (state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        locationBeforeTransitions: action.payload
      })
    default:
      return state
  }
}

// Creates main reducer with async loaded ones
export default function createReducer (asyncReducers) {
  return combineReducers({
    route: routeReducer,
    auth: authReducer,
    form: formReducer,
    // global: globalReducer,
    ...asyncReducers
  })
}
