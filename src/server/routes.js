import QuestionsController from './controllers/questions'
import IndexController from './controllers/index'

export function routes (app) {
  let defaultOptions = { title: app.get('title') }

  app.get('/', (req, res) => { new IndexController(req, res, defaultOptions).index() })

  // Crud for the questions.
  app.route('/questions')
  .get((req, res) => { new QuestionsController(req, res, defaultOptions).list() })
  .put((req, res) => { new QuestionsController(req, res, defaultOptions).create() })
  .post((req, res) => { new QuestionsController(req, res, defaultOptions).update() })
  .delete((req, res) => { new QuestionsController(req, res, defaultOptions).delete() })

  app.get('/questions/:id/details', (req, res) => { new QuestionsController(req, res, defaultOptions).details() })

  // Register more routes here.
}
