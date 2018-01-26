import Controller from './controller'
import Question from '../models/questions.js'

export default class QuestionsController extends Controller {
  list() {
    new Question().all()
    .then(questions => {
      let options = Object.assign(this.options, { questions: questions })

      this.res.render('questions/index', options)
    }).catch(err => {
      console.error(err)
      this.error(500, 'Internal Server Error')
    })
  }

  update() {
    const id = this.req.params.question.id
    const updatedQuestion = this.req.params.question

    new Question().update({ id: id }, { $set: updatedQuestion })
    .then(question => {
      if (assert.equal(1, question.result.n)) {
        res.redirect(`/questions/${id}/details`)
      }
    }).catch(err => {
      console.error(err)
      this.error(500, 'Internal Server Error')
    })
  }

  details() {
    const id = this.req.params.id

    new Question().find({ id: id })
    .then(question => {
      let options = Object.assign(this.options, { question: question })

      this.res.render('questions/details', options)
    }).catch(err => {
      console.error(err)
      this.error(500, 'Internal Server Error')
    })
  }
}
