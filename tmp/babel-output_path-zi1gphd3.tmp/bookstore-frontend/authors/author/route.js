define('bookstore-frontend/authors/author/route', ['exports', 'ember', 'ember-simple-auth/mixins/authenticated-route-mixin'], function (exports, _ember, _emberSimpleAuthMixinsAuthenticatedRouteMixin) {
  exports['default'] = _ember['default'].Route.extend(_emberSimpleAuthMixinsAuthenticatedRouteMixin['default'], {
    model: function model(params) {
      return this.get('store').findRecord('author', params.author_id);
    },

    actions: {
      deleteAuthor: function deleteAuthor(book) {
        var _this = this;
        book.destroyRecord().then(function () {
          _this.transitionTo('authors');
        });
      }
    }
  });
});