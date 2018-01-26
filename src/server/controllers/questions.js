import Question from '../models/questions.js'

export default class QuestionsController {
  construct(req, res) {
    this.req = req
    this.res = res
  }

  list() {
    let questions = new Question()


  }

  details(id) {
    let question = new Question()


  }
}
