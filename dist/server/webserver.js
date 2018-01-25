'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var express = require('express');

var WebServer = function () {
  function WebServer() {
    var PORT = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;

    _classCallCheck(this, WebServer);

    this.app = express();

    // You can also change this later.
    this.PORT = PORT;

    // Use this as the root of the webservice.
    this.app.use(express.static('public/'));
  }

  _createClass(WebServer, [{
    key: 'serve',
    value: function serve(PORT) {
      var _this = this;

      // Set port if necessary.
      if (PORT) this.PORT = PORT;

      return new Promise(function (resolve, reject) {
        try {
          _this.server = _this.app.listen(_this.PORT, function () {
            resolve();
          });
        } catch (e) {
          reject(e);
        }
      });
    }
  }, {
    key: 'close',
    value: function close() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        try {
          _this2.server.close(function () {
            resolve();
          });
        } catch (e) {
          reject(e);
        }
      });
    }
  }]);

  return WebServer;
}();

exports.default = WebServer;