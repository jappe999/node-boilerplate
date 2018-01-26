import QuestionsController from './controllers/questions'
import IndexController from './controllers/index'

export function routes (app) {
  let defaultOptions = { title: app.get('title') }

  app.get('/', (req, res) => {
    let controller = new IndexController(req, res, defaultOptions)
    controller.index()
  })

  // Crud for the questions.
  app.route('/questions')
  .get((req, res) => {
    res.render('questions/index', defaultOptions)
  })
  .post((req, res) => {
    res.redirect('/questions')
  })

  app.get('/questions/:id/details', (req, res) => {
    res.render('questions/index', defaultOptions)
  })


  // Register more routes here.
}
