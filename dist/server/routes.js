'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = routes;

var _questions = require('./controllers/questions');

var _questions2 = _interopRequireDefault(_questions);

var _index = require('./controllers/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function routes(app) {
  var defaultOptions = { title: app.get('title') };

  app.get('/', function (req, res) {
    new _index2.default(req, res, defaultOptions).index();
  });

  // Crud for the questions.
  app.route('/questions').get(function (req, res) {
    new _questions2.default(req, res, defaultOptions).list();
  }).post(function (req, res) {
    new _questions2.default(req, res, defaultOptions).addNew();
  });

  app.get('/questions/:id/details', function (req, res) {
    new _questions2.default(req, res, defaultOptions).details();
  });

  // Register more routes here.
}