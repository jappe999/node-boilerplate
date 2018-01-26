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
    var controller = new _index2.default(req, res, defaultOptions);
    controller.index();
  });

  // Crud for the questions.
  app.route('/questions').get(function (req, res) {
    res.render('questions/index', defaultOptions);
  }).post(function (req, res) {
    res.redirect('/questions');
  });

  app.get('/questions/:id/details', function (req, res) {
    res.render('questions/index', defaultOptions);
  });

  // Register more routes here.
}