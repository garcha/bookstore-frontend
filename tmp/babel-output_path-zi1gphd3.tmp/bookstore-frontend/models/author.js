define('bookstore-frontend/models/author', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    name: _emberData['default'].attr('string'),
    books: _emberData['default'].hasMany('book'),
    publishers: _emberData['default'].hasMany('publisher')
  });
});