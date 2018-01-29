'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = routes;

var _index = require('./controllers/index');

var _index2 = _interopRequireDefault(_index);

var _auth = require('./controllers/auth');

var _auth2 = _interopRequireDefault(_auth);

var _questions = require('./controllers/questions');

var _questions2 = _interopRequireDefault(_questions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Register routes
function routes(app) {
  var defaultOptions = { title: app.get('title') };

  app.get('/', function (req, res) {
    new _index2.default(req, res, defaultOptions).index();
  });

  app.get('/register', function (req, res) {
    new _auth2.default(req, res, defaultOptions).registerForm();
  });
  app.post('/register', function (req, res) {
    new _auth2.default(req, res, defaultOptions).register();
  });
  app.get('/login', function (req, res) {
    new _auth2.default(req, res, defaultOptions).loginForm();
  });
  app.post('/login', function (req, res) {
    new _auth2.default(req, res, defaultOptions).login();
  });

  app.get('/questions', function (req, res) {
    new _questions2.default(req, res, defaultOptions).index();
  });
  app.get('/questions/:id/details', function (req, res) {
    new _questions2.default(req, res, defaultOptions).details();
  });

  app.get('/api/users', function (req, res) {
    new _auth2.default(req, res, defaultOptions).getAll();
  });
  app.get('/api/users/:id', function (req, res) {
    new _auth2.default(req, res, defaultOptions).getOne();
  });

  // Crud for the questions.
  app.route('/api/questions').get(function (req, res) {
    new _questions2.default(req, res, defaultOptions).list();
  }).put(function (req, res) {
    new _questions2.default(req, res, defaultOptions).create();
  }).post(function (req, res) {
    new _questions2.default(req, res, defaultOptions).update();
  }).delete(function (req, res) {
    new _questions2.default(req, res, defaultOptions).delete();
  });

  app.post('/api/questions/:id/upvote', function (req, res) {
    new _questions2.default(req, res, defaultOptions).upvote();
  });
  app.post('/api/questions/:id/downvote', function (req, res) {
    new _questions2.default(req, res, defaultOptions).downvote();
  });

  app.put('/api/questions/:id/comments/add', function (req, res) {
    new _questions2.default(req, res, defaultOptions).addComment();
  });

  // Register more routes here.
}