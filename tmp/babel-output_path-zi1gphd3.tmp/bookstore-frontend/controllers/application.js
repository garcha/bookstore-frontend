define('bookstore-frontend/controllers/application', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    session: _ember['default'].inject.service('session')

  });
});
// actions: {
//   invalidateSession() {
//     this.get('session').invalidate();
//   }
// }