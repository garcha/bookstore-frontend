import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin,{
  host: 'http://localhost:3000',
  authorizer: 'authorizer:token'
});

// export default DS.RESTAdapter.extend({
//     host: 'http://jazz.caplinked.com'
// });
