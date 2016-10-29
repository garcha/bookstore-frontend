import Ember from 'ember';

import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin,{
  model(params) {
    return this.get('store').findRecord('author', params.author_id);
  },

  actions: {
    deleteAuthor: function(book){
      var _this = this;
      book.destroyRecord().then(function() {
        _this.transitionTo('authors');
      });
    }
  }
});
