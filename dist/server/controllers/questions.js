'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _questions = require('../models/questions.js');

var _questions2 = _interopRequireDefault(_questions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var QuestionsController = function () {
  function QuestionsController() {
    _classCallCheck(this, QuestionsController);
  }

  _createClass(QuestionsController, [{
    key: 'construct',
    value: function construct(req, res) {
      this.req = req;
      this.res = res;
    }
  }, {
    key: 'list',
    value: function list() {
      var questions = new _questions2.default();
    }
  }, {
    key: 'details',
    value: function details(id) {
      var question = new _questions2.default();
    }
  }]);

  return QuestionsController;
}();

exports.default = QuestionsController;