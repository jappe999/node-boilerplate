import session from 'express-session'

export function settings (app) {
  app.set('view engine', 'pug')

  app.set('title', 'Q&A App')

  app.set('trust proxy', 1)

  app.use(session({
    secret: 'my_secret_token',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))
}
