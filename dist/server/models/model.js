'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _database = require('../helpers/database.js');

var _database2 = _interopRequireDefault(_database);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Model = function () {
  function Model() {
    _classCallCheck(this, Model);

    this.db = new _database2.default();

    this.collection = this.db.collection(this.collectionName);
  }

  _createClass(Model, [{
    key: 'all',
    value: function all() {
      this.collection;
    }
  }, {
    key: 'insert',
    value: function insert(items) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        try {
          _this.collection.insertMany(items, function (err, result) {
            assert.equal(err, null);
            resolve();
          });
        } catch (e) {
          reject(e);
        }
      });
    }
  }]);

  return Model;
}();

exports.default = Model;