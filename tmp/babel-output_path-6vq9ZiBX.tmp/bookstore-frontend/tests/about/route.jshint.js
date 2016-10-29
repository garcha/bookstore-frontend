define('bookstore-frontend/tests/about/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | about/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'about/route.js should pass jshint.');
  });
});