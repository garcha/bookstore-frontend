define('bookstore-frontend/tests/helpers/resolver', ['exports', 'bookstore-frontend/resolver', 'bookstore-frontend/config/environment'], function (exports, _bookstoreFrontendResolver, _bookstoreFrontendConfigEnvironment) {

  var resolver = _bookstoreFrontendResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _bookstoreFrontendConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _bookstoreFrontendConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});