import Controller from './controller.js'

export default class IndexController extends Controller {
  index() {
    this.res.render('index', this.options)
  }
}
