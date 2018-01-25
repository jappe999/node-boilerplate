const express = require('express')

export default class WebServer {
  constructor (PORT = 3000) {
    this.app = express()

    // You can also change this later.
    this.PORT = PORT

    // Use this as the root of the webservice.
    this.app.use(express.static('public/'))
  }

  serve (PORT) {
    if (PORT) this.PORT = PORT

    return new Promise((resolve, reject) => {
      try {
        this.server = this.app.listen(this.PORT, () => {
          resolve()
        })
      } catch (e) {
        reject(e)
      }
    })
  }

  close () {
    return new Promise((resolve, reject) => {
      try {
        this.server.close(() => {
          resolve()
        })
      } catch (e) {
        reject(e)
      }
    })
  }
}
