define('bookstore-frontend/initializers/load-bootstrap-config', ['exports', 'bookstore-frontend/config/environment', 'ember-bootstrap/config'], function (exports, _bookstoreFrontendConfigEnvironment, _emberBootstrapConfig) {
  exports.initialize = initialize;

  function initialize() /* container, application */{
    _emberBootstrapConfig['default'].load(_bookstoreFrontendConfigEnvironment['default']['ember-bootstrap'] || {});
  }

  exports['default'] = {
    name: 'load-bootstrap-config',
    initialize: initialize
  };
});