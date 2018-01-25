'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.settings = settings;
function settings(app) {
  app.set('view engine', 'pug');

  app.set('title', 'My App');
}