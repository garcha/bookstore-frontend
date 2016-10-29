define('bookstore-frontend/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'bookstore-frontend/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _bookstoreFrontendConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_bookstoreFrontendConfigEnvironment['default'].APP.name, _bookstoreFrontendConfigEnvironment['default'].APP.version)
  };
});