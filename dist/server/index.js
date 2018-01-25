'use strict';

var _webserver = require('./webserver');

var _webserver2 = _interopRequireDefault(_webserver);

var _routes = require('./routes');

var _settings = require('./settings');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = 3000;

var webServer = new _webserver2.default();

// Initialize settings
(0, _settings.settings)(webServer.app);

// Initialize routes
(0, _routes.routes)(webServer.app);

webServer.serve(PORT).then(function () {
  console.info('Webservice listening at ' + PORT);

  // Stop webserver gracefully.
  process.on('SIGINT', function () {
    console.info('Stopping webservice...');

    webServer.close().then(function () {
      console.info('Webservice stopped gracefully.');

      process.exit(0);
    }).catch(function (err) {
      console.error(err);

      process.exit(1);
    });
  });
}).catch(function (err) {
  console.error(err);
});