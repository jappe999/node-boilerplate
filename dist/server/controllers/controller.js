"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controller = function Controller(req, res, options) {
  _classCallCheck(this, Controller);

  this.req = req;
  this.res = res;
  this.options = options;
};

exports.default = Controller;