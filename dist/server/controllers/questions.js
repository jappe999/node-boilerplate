'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _controller = require('./controller');

var _controller2 = _interopRequireDefault(_controller);

var _questions = require('../models/questions.js');

var _questions2 = _interopRequireDefault(_questions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var QuestionsController = function (_Controller) {
  _inherits(QuestionsController, _Controller);

  function QuestionsController() {
    _classCallCheck(this, QuestionsController);

    return _possibleConstructorReturn(this, (QuestionsController.__proto__ || Object.getPrototypeOf(QuestionsController)).apply(this, arguments));
  }

  _createClass(QuestionsController, [{
    key: 'list',
    value: function list() {
      var _this2 = this;

      new _questions2.default().all().then(function (questions) {
        var options = Object.assign(_this2.options, { questions: questions });

        _this2.res.render('questions/index', options);
      }).catch(function (err) {
        console.error(err);
        _this2.error(500, 'Internal Server Error');
      });
    }
  }, {
    key: 'details',
    value: function details() {
      var _this3 = this;

      var id = this.req.params.id;
      new _questions2.default().find({ id: id }).then(function (question) {
        var options = Object.assign(_this3.options, question);

        _this3.res.render('questions/details', options);
      }).catch(function (err) {
        console.error(err);
        _this3.error(500, 'Internal Server Error');
      });
    }
  }]);

  return QuestionsController;
}(_controller2.default);

exports.default = QuestionsController;