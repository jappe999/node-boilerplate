'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mongodb = require('mongodb');

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Database = function () {
  function Database(dbName) {
    _classCallCheck(this, Database);

    this.url = 'mongodb://mongodb.dev:27018';

    this.dbName = dbName ? dbName : 'test';

    this.db = null;
    this.client = null;

    this.callback = function () {};
  }

  _createClass(Database, [{
    key: 'connect',
    value: function connect(callback) {
      var _this = this;

      _mongodb.MongoClient.connect(this.url, function (err, client) {
        _assert2.default.equal(null, err);

        var db = client.db(_this.dbName);

        // Callback is defined as parameter of this method.
        callback(db, function () {
          console.log(client);
          client.close();
        });
      });
    }
  }]);

  return Database;
}();

exports.default = Database;