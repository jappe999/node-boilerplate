import Controller from './controller'
import Question from '../models/question'
import assert from 'assert'

export default class QuestionsController extends Controller {
  /**
   * Handles the request and response.
   * This also sets the default values for the pug templates.
   */
  constructor(req, res, options) {
    super(req, res, options)

    if (!this.verifyUser()) {
      res.redirect('/login')
    }
  }

  /**
   *
   */
  index() {
    this.res.render('questions/index', this.options)
  }

  vote(id, number) {
    new Question().update({ _id: id }, { $inc: { upvotes: number } })
    .then(question => {
      this.res.send(assert.equal(1, question.result.n))
    }).catch(err => {
      console.error(err)
      this.error(500, 'Internal Server Error')
    })
  }

  // upvote post
  upvote() {
    this.vote(this.req.params.id, 1)
  }

  downvote() {
    this.vote(this.req.params.id, -1)
  }

  // add a comment
  addComment() {
    const id = this.req.params.id
    const question = this.req.body.question

    new Question().update({ _id: id }, { question: question })
    .then(result => {
      this.res.send(result)
    }).catch(err => {
      console.error(err)
      this.error(500, 'Internal Server Error')
    })
  }

  list() {
    new Question().all()
    .then(questions => {
      this.res.send(questions)
    }).catch(err => {
      console.error(err)
      this.error(500, 'Internal Server Error')
    })
  }

  create() {
    const question = {
      question: this.req.body.question,
      upvotes: 0,
      downvotes: 0,
      answers: []
    }

    new Question().insert([ question ])
    .then(result => {
      assert.equal(1, result.result.n)
      assert.equal(1, result.ops.length)

      this.res.send(result)
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
        this.res.redirect(`/questions/${id}/details`)
      }
    }).catch(err => {
      console.error(err)
      this.error(500, 'Internal Server Error')
    })
  }

  delete() {
    const id = this.req.params.question.id

    new Question().delete({ _id: id })
    .then(result => {
      assert.equal(err, null)
      assert.equal(1, result.result.n)

      this.res.send(true)
    }).catch(err => {
      console.error(err)
      this.error(500, 'Internal Server Error')
    })
  }
}
