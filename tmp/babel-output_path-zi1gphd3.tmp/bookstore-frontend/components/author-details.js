define('bookstore-frontend/components/author-details', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    actions: {
      deleteAuthor: function deleteAuthor() {
        this.sendAction('action', this.get('author'));
      }
    }
  });
});