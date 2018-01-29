'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bcryptjs = require('bcryptjs');

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _controller = require('./controller.js');

var _controller2 = _interopRequireDefault(_controller);

var _user = require('../models/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AuthController = function (_Controller) {
  _inherits(AuthController, _Controller);

  function AuthController() {
    _classCallCheck(this, AuthController);

    return _possibleConstructorReturn(this, (AuthController.__proto__ || Object.getPrototypeOf(AuthController)).apply(this, arguments));
  }

  _createClass(AuthController, [{
    key: 'getAll',
    value: function getAll() {
      var _this2 = this;

      new _user2.default().all().then(function (response) {
        _this2.res.send(response);
      });
    }

    // Get one user

  }, {
    key: 'getOne',
    value: function getOne() {
      var userId = this.req.params.id;

      new _user2.default().find({ id: userId });
    }

    // Get Login form

  }, {
    key: 'loginForm',
    value: function loginForm() {
      this.res.render('auth/login', this.options);
    }

    // Log the user in

  }, {
    key: 'login',
    value: function login() {
      var _this3 = this;

      var user = this.req.params.user;

      new _user2.default().find({
        name: user.name,
        email: user.email
      }).then(function (result) {
        _this3.res.session._id = Math.random().toString(36).substring(7);

        _this3.res.redirect('/questions');
      }).catch(function (err) {
        console.error(err);

        _this3.res.redirect('/login');
      });
    }

    // Get registration form

  }, {
    key: 'registerForm',
    value: function registerForm() {
      this.res.render('auth/register', this.options);
    }
  }, {
    key: 'register',
    value: function register() {
      var _this4 = this;

      var user = this.req.body;

      // Generate salt with a length of 10 characters.
      user.password = _bcryptjs2.default.hashSync(user.password, 10);

      new _user2.default().insert([user]).then(function (result) {
        _assert2.default.equal(1, result.result.n);
        _assert2.default.equal(1, result.ops.length);

        _this4.res.session._id = Math.random().toString(36).substring(7);

        _this4.res.redirect('/questions');
      }).catch(function (err) {
        console.error(err);

        _this4.res.redirect('/login');
      });
    }
  }]);

  return AuthController;
}(_controller2.default);

exports.default = AuthController;