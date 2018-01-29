import IndexController from './controllers/index'
import AuthController from './controllers/auth'
import QuestionsController from './controllers/questions'

// Register routes
export function routes (app) {
  let defaultOptions = { title: app.get('title') }

  app.get('/', (req, res) => { new IndexController(req, res, defaultOptions).index() })


  app.get('/register', (req, res) => { new AuthController(req, res, defaultOptions).registerForm() })
  app.post('/register', (req, res) => { new AuthController(req, res, defaultOptions).register() })
  app.get('/login', (req, res) => { new AuthController(req, res, defaultOptions).loginForm() })
  app.post('/login', (req, res) => { new AuthController(req, res, defaultOptions).login() })

  app.get('/questions', (req, res) => { new QuestionsController(req, res, defaultOptions).index() })
  app.get('/questions/:id/details', (req, res) => { new QuestionsController(req, res, defaultOptions).details() })

  app.get('/api/users', (req, res) => { new AuthController(req, res, defaultOptions).getAll() })
  app.get('/api/users/:id', (req, res) => { new AuthController(req, res, defaultOptions).getOne() })

  // Crud for the questions.
  app.route('/api/questions')
  .get((req, res) => { new QuestionsController(req, res, defaultOptions).list() })
  .put((req, res) => { new QuestionsController(req, res, defaultOptions).create() })
  .post((req, res) => { new QuestionsController(req, res, defaultOptions).update() })
  .delete((req, res) => { new QuestionsController(req, res, defaultOptions).delete() })

  app.post('/api/questions/:id/upvote', (req, res) => { new QuestionsController(req, res, defaultOptions).upvote() })
  app.post('/api/questions/:id/downvote', (req, res) => { new QuestionsController(req, res, defaultOptions).downvote() })

  app.put('/api/questions/:id/comments/add', (req, res) => { new QuestionsController(req, res, defaultOptions).addComment() })

  // Register more routes here.
}
