define('bookstore-frontend/components/nav-bar', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    actions: {
      logout: function logout() {
        this.get('session').invalidate();
      }
    }
  });

  // var _this = this;
  // this.get('session').authenticate('authenticator:jwt', credentials).then(function() {
  //   _this.transitionTo('authors');
  // });
});