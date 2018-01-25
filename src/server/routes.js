export function routes (app) {
  app.get('/', (req, res) => {
    res.render('index', { title: app.get('title') })
  })

  // Register more routes here.
}
