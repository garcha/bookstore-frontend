define('bookstore-frontend/adapters/application', ['exports', 'ember-data', 'ember-simple-auth/mixins/data-adapter-mixin'], function (exports, _emberData, _emberSimpleAuthMixinsDataAdapterMixin) {
  exports['default'] = _emberData['default'].JSONAPIAdapter.extend(_emberSimpleAuthMixinsDataAdapterMixin['default'], {
    host: 'http://localhost:3000',
    authorizer: 'authorizer:token'
  });
});