import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin,{
  host: 'https://bookend-api648.herokuapp.com/',
  authorizer: 'authorizer:token'
});
