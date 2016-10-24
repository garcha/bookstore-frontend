import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  books: DS.hasMany('book'),
  publishers: DS.hasMany('publisher')
});
