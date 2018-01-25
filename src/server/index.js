import WebServer from './webserver'
import { routes } from './routes'
import { settings } from './settings'

const PORT = 3000

let webServer = new WebServer();

// Initialize settings
settings(webServer.app)

// Initialize routes
routes(webServer.app)

webServer.serve(PORT).then(() => {
  console.info(`Webservice listening at ${PORT}`)

  // Stop webserver gracefully.
  process.on('SIGINT', function () {
    console.info('Stopping webservice...')

    webServer.close().then(() => {
      console.info('Webservice stopped gracefully.')

      process.exit(0)
    }).catch(err => {
      console.error(err)

      process.exit(1)
    })
  })
}).catch(err => {
  console.error(err)
})
