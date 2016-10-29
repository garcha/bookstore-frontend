import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    logout() {
      this.get('session').invalidate();
    }
  }
});


// var _this = this;
// this.get('session').authenticate('authenticator:jwt', credentials).then(function() {
//   _this.transitionTo('authors');
// });
