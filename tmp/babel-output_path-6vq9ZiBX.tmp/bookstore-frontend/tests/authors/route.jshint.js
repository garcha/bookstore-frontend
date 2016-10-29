define('bookstore-frontend/tests/authors/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | authors/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authors/route.js should pass jshint.');
  });
});