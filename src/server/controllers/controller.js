export default class Controller {
  constructor(req, res, options) {
    this.req = req
    this.res = res
    this.options = options
  }

  error(errorCode, errorMessage) {
    this.res.status(errorCode).send(errorMessage)
  }
}
