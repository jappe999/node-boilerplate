export default class Controller {
  /**
   * Handles the request and response.
   * This also sets the default values for the pug templates.
   */
  constructor(req, res, options) {
    this.req = req
    this.res = res
    this.options = Object.assign(options, { userId: this.req.session._id })

  }

  verifyUser() {
    // Nope. Not secure.
    if (this.req.session._id) {
      return this.req.session._id !== ''
    } else {
      return false
    }
  }

  error(errorCode, errorMessage) {
    this.res.status(errorCode).send(errorMessage)
  }
}
