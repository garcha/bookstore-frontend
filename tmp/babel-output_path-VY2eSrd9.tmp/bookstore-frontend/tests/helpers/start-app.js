define('bookstore-frontend/tests/helpers/start-app', ['exports', 'ember', 'bookstore-frontend/app', 'bookstore-frontend/config/environment'], function (exports, _ember, _bookstoreFrontendApp, _bookstoreFrontendConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _bookstoreFrontendConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _bookstoreFrontendApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});