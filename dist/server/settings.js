'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.settings = settings;

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function settings(app) {
  app.set('view engine', 'pug');

  app.set('title', 'Q&A App');

  app.set('trust proxy', 1);

  app.use((0, _expressSession2.default)({
    secret: 'my_secret_token',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }));
}