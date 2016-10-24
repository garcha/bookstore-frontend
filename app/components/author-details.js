import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteAuthor: function() {
      this.sendAction('action', this.get('author'));
    }
  }
});
