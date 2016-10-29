define('bookstore-frontend/authors/new/route', ['exports', 'ember', 'ember-data', 'bookstore-frontend/utils/server-errors-parser', 'ember-simple-auth/mixins/authenticated-route-mixin'], function (exports, _ember, _emberData, _bookstoreFrontendUtilsServerErrorsParser, _emberSimpleAuthMixinsAuthenticatedRouteMixin) {
  exports['default'] = _ember['default'].Route.extend(_emberSimpleAuthMixinsAuthenticatedRouteMixin['default'], {
    model: function model() {
      return this.store.createRecord('author');
    },

    setupController: function setupController(controller, model) {
      controller.set('author', model);
      controller.set('errors', _emberData['default'].Errors.create());
    },

    // actions: {
    //   createAuthor(params) {
    //     this.store.createRecord('author', {
    //       name: params.name
    //     }).save();
    //   }
    // }

    actions: {
      createAuthor: function createAuthor(author) {
        //console.log(author);
        var _this = this;
        var errors = _this.controllerFor('authors.new').get('errors');
        author.save().then(function (author) {
          _this.transitionTo('authors.author', author);
        })['catch'](function (resp) {
          (0, _bookstoreFrontendUtilsServerErrorsParser['default'])(resp, errors);
        });
      }
    }
  });
});