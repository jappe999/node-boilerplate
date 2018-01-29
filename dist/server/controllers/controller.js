'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controller = function () {
  function Controller(req, res, options) {
    _classCallCheck(this, Controller);

    this.req = req;
    this.res = res;
    this.options = Object.assign(options, { userId: this.req.session._id });
  }

  _createClass(Controller, [{
    key: 'verifyUser',
    value: function verifyUser() {
      // Nope. Not secure.
      if (this.req.session._id) {
        return this.req.session._id !== '';
      } else {
        return false;
      }
    }
  }, {
    key: 'error',
    value: function error(errorCode, errorMessage) {
      this.res.status(errorCode).send(errorMessage);
    }
  }]);

  return Controller;
}();

exports.default = Controller;