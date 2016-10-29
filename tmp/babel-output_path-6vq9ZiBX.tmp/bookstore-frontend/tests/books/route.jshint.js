define('bookstore-frontend/tests/books/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | books/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'books/route.js should pass jshint.');
  });
});