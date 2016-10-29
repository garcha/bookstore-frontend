define('bookstore-frontend/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'bookstore-frontend/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _bookstoreFrontendConfigEnvironment) {

  var name = _bookstoreFrontendConfigEnvironment['default'].APP.name;
  var version = _bookstoreFrontendConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});