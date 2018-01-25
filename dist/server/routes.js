'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = routes;
function routes(app) {
  app.get('/', function (req, res) {
    res.render('index', { title: app.get('title') });
  });
}