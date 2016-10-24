import Ember from 'ember';

export default Ember.Route.extend({
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
