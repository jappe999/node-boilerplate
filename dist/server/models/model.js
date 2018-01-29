'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _database = require('../helpers/database.js');

var _database2 = _interopRequireDefault(_database);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Model = function () {
  function Model() {
    _classCallCheck(this, Model);

    this.db = new _database2.default();
    this.collectionName = '';
  }

  _createClass(Model, [{
    key: 'all',
    value: function all() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        try {
          _this.db.connect(function (db, callback) {
            db.collection(_this.collectionName).find({}).toArray(function (err, results) {
              _assert2.default.equal(err, null);

              resolve(results);
            });
          });
        } catch (e) {
          reject(e);
        }
      });
    }
  }, {
    key: 'find',
    value: function find(query) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        try {
          _this2.db.connect(function (db, callback) {
            db.collection(_this2.collectionName).find({}).toArray(function (err, results) {
              _assert2.default.equal(err, null);

              resolve(results);
            });
          });
        } catch (e) {
          reject(e);
        }
      });
    }
  }, {
    key: 'collection',
    value: function collection() {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        try {
          _this3.db.connect(function (db, callback) {
            var collection = db.collection(_this3.collectionName);

            resolve(collection);
          });
        } catch (e) {
          reject(e);
        }
      });
    }
  }, {
    key: 'insert',
    value: function insert(items) {
      var _this4 = this;

      return new Promise(function (resolve, reject) {
        try {
          _this4.db.connect(function (db, callback) {
            db.collection(_this4.collectionName).insertMany(items, function (err, results) {
              _assert2.default.equal(err, null);

              resolve(results);
            });
          });
        } catch (e) {
          reject(e);
        }
      });
    }
  }, {
    key: 'update',
    value: function update(selectOn, newItem) {
      var _this5 = this;

      return new Promise(function (resolve, reject) {
        try {
          _this5.db.connect(function (db, callback) {
            db.collection(_this5.collectionName).updateOne(selectOn, newItem, function (err, result) {
              _assert2.default.equal(err, null);

              resolve(result);
            });
          });
        } catch (e) {
          reject(e);
        }
      });
    }
  }, {
    key: 'delete',
    value: function _delete(item) {
      var _this6 = this;

      return new Promise(function (resolve, reject) {
        try {
          _this6.db.connect(function (db, callback) {
            db.collection(_this6.collectionName).deleteOne(item, function (err, result) {
              _assert2.default.equal(err, null);

              resolve(result);
            });
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