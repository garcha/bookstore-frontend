define('bookstore-frontend/components/login-form', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    actions: {
      submit: function submit() {
        this.sendAction('action', this.get('credentials'));
      }
    }
  });
});