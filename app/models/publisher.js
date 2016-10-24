import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  price: DS.attr('number'),
  books: DS.hasMany('book', { async: true }),
  authors: DS.hasMany('author', { async: true })
});
