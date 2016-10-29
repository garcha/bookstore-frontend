define('bookstore-frontend/app', ['exports', 'ember', 'bookstore-frontend/resolver', 'ember-load-initializers', 'bookstore-frontend/config/environment'], function (exports, _ember, _bookstoreFrontendResolver, _emberLoadInitializers, _bookstoreFrontendConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _bookstoreFrontendConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _bookstoreFrontendConfigEnvironment['default'].podModulePrefix,
    Resolver: _bookstoreFrontendResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _bookstoreFrontendConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});