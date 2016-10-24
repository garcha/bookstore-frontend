import Ember from 'ember';
import DS from 'ember-data';
import serverErrorsParser from '../../utils/server-errors-parser';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findRecord('author', params.author_id);
  },
  
  setupController: function(controller, model) {
    controller.set('author', model);
    controller.set('errors', DS.Errors.create());
  },
  
  actions: {
    updateAuthor: function(author) {
      var _this = this;
      var errors = _this.controllerFor('authors.edit').get('errors');
      author.save().then(function(author){
        _this.transitionTo('authors.author', author);
      }).catch(function(resp){
        serverErrorsParser(resp, errors);
      });
    } 
  }
});
