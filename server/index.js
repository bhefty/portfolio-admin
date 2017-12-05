const express = require('express')
// const bodyParser = require('body-parser')
const logger = require('./logger')

const argv = require('minimist')(process.argv.slice(2))
const setup = require('./middlewares/frontendMiddleware')
const isDev = process.env.NODE_ENV !== 'production'
const ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false
const resolve = require('path').resolve
const app = express()

// For backend API: Add custom backend-specific middelware here
// app.use(bodyParser.json())
// app.use('/api', myApi)

// In production we pass these values instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/'
})

// Get the host and port number, use localhost and port 3000 otherwise
const customHost = argv.host || process.env.HOST
const host = customHost || null
const prettyHost = customHost || 'localhost'

const port = argv.port || process.env.PORT || 3000

// Start the app
app.listen(port, host, (err) => {
  if (err) {
    return logger.error(err.message)
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    ngrok.connect(port, (innerErr, url) => {
      if (innerErr) {
        return logger.error(innerErr)
      }

      logger.appStarted(port, prettyHost, url)
    })
  } else {
    logger.appStarted(port, prettyHost)
  }
})
