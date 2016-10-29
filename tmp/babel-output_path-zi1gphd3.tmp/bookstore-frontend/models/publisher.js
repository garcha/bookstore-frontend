define('bookstore-frontend/models/publisher', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    name: _emberData['default'].attr('string'),
    price: _emberData['default'].attr('number'),
    books: _emberData['default'].hasMany('book', { async: true }),
    authors: _emberData['default'].hasMany('author', { async: true })
  });
});