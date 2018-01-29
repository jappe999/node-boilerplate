'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _controller = require('./controller');

var _controller2 = _interopRequireDefault(_controller);

var _question = require('../models/question');

var _question2 = _interopRequireDefault(_question);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var QuestionsController = function (_Controller) {
  _inherits(QuestionsController, _Controller);

  function QuestionsController(req, res, options) {
    _classCallCheck(this, QuestionsController);

    return _possibleConstructorReturn(this, (QuestionsController.__proto__ || Object.getPrototypeOf(QuestionsController)).call(this, req, res, options));

    // if (!this.verifyUser()) {
    //   res.redirect('/login')
    // }
  }

  _createClass(QuestionsController, [{
    key: 'index',
    value: function index() {
      this.res.render('questions/index', this.options);
    }
  }, {
    key: 'vote',
    value: function vote(id, number) {
      var _this2 = this;

      new _question2.default().update({ _id: id }, { $inc: { upvotes: number } }).then(function (question) {
        _this2.res.send(_assert2.default.equal(1, question.result.n));
      }).catch(function (err) {
        console.error(err);
        _this2.error(500, 'Internal Server Error');
      });
    }

    // upvote post

  }, {
    key: 'upvote',
    value: function upvote() {
      this.vote(this.req.params.id, 1);
    }
  }, {
    key: 'downvote',
    value: function downvote() {
      this.vote(this.req.params.id, -1);
    }

    // add a comment

  }, {
    key: 'addComment',
    value: function addComment() {
      var _this3 = this;

      var id = this.req.params.id;
      var question = this.req.body.question;

      new _question2.default().update({ _id: id }, { question: question }).then(function (result) {
        _this3.res.send(result);
      }).catch(function (err) {
        console.error(err);
        _this3.error(500, 'Internal Server Error');
      });
    }
  }, {
    key: 'list',
    value: function list() {
      var _this4 = this;

      new _question2.default().all().then(function (questions) {
        _this4.res.send(questions);
      }).catch(function (err) {
        console.error(err);
        _this4.error(500, 'Internal Server Error');
      });
    }
  }, {
    key: 'create',
    value: function create() {
      var _this5 = this;

      var question = {
        question: this.req.body.question,
        upvotes: 0,
        downvotes: 0,
        answers: []
      };

      new _question2.default().insert([question]).then(function (result) {
        _assert2.default.equal(1, result.result.n);
        _assert2.default.equal(1, result.ops.length);

        _this5.res.send(result);
      }).catch(function (err) {
        console.error(err);
        _this5.error(500, 'Internal Server Error');
      });
    }
  }, {
    key: 'update',
    value: function update() {
      var _this6 = this;

      var id = this.req.params.question.id;
      var updatedQuestion = this.req.params.question;

      new _question2.default().update({ id: id }, { $set: updatedQuestion }).then(function (question) {
        if (_assert2.default.equal(1, question.result.n)) {
          _this6.res.redirect('/questions/' + id + '/details');
        }
      }).catch(function (err) {
        console.error(err);
        _this6.error(500, 'Internal Server Error');
      });
    }
  }, {
    key: 'delete',
    value: function _delete() {
      var _this7 = this;

      var id = this.req.params.question.id;

      new _question2.default().delete({ _id: id }).then(function (result) {
        _assert2.default.equal(err, null);
        _assert2.default.equal(1, result.result.n);

        _this7.res.send(true);
      }).catch(function (err) {
        console.error(err);
        _this7.error(500, 'Internal Server Error');
      });
    }
  }]);

  return QuestionsController;
}(_controller2.default);

exports.default = QuestionsController;