import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),
  model: function() {
    return Ember.Object.create({ identification: '', password: ''});
  },

  setupController: function(controller, model) {
    controller.set('credentials', model);
  },

  actions:{
    authenticate: function(credentials) {
      var _this = this;
      this.get('session').authenticate('authenticator:jwt', credentials).then(function() {
        _this.transitionTo('authors');
      });
    }
  }
});
