import Ember from 'ember';
import DS from 'ember-data';
import serverErrorsParser from '../../utils/server-errors-parser';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('author');
  },
  
  setupController: function(controller, model) {
    controller.set('author', model);
    controller.set('errors', DS.Errors.create());
  },

  // actions: {
  //   createAuthor(params) {
  //     this.store.createRecord('author', {
  //       name: params.name
  //     }).save();
  //   }
  // }
  
  actions: {
    createAuthor: function(author){
      //console.log(author);
      var _this = this;
      var errors = _this.controllerFor('authors.new').get('errors');
      author.save().then(function(author){
        _this.transitionTo('authors.author', author);
      }).catch(function(resp){
        serverErrorsParser(resp, errors);
      });
    }
  }
});
