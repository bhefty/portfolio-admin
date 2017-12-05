/**
 * app.js
 * This is the entry file for the application
 */
// Needed for redux-saga es6 generator support
import 'babel-polyfill'

// Import third party modules
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'

// Sanitize CSS and import Global Styles
import 'sanitize.css/sanitize.css'
import './global-styles'

// Load the favicon, the manifest.json file and the .htaccess file
/* eslint-disable import/no-unresolved, import/extensions, import/no-webpack-loader-syntax */
import '!file-loader?name=[name].[ext]!./favicon.ico'
import '!file-loader?name=[name].[ext]!./manifest.json'
import 'file-loader?name=[name].[ext]!./.htaccess'
/* eslint-enable import/no-unresolved, import/extensions */

// Import Redux store
import configureStore from './store'

// Import routes
import RouteConfig from './routes'

// Create Redux store with history
const history = createHistory()
const initialState = {}
const store = configureStore(initialState, history)

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <RouteConfig store={store} history={history} />
    </Provider>,
    document.getElementById('app')
  )
}
render()

if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install() // eslint-disable-line global-require
}
