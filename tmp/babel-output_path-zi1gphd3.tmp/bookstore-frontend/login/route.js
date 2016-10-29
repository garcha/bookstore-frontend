define('bookstore-frontend/login/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    session: _ember['default'].inject.service('session'),
    model: function model() {
      return _ember['default'].Object.create({ identification: '', password: '' });
    },

    setupController: function setupController(controller, model) {
      controller.set('credentials', model);
    },

    actions: {
      authenticate: function authenticate(credentials) {
        var _this = this;
        this.get('session').authenticate('authenticator:jwt', credentials).then(function () {
          _this.transitionTo('authors');
        });
      }
    }
  });
});