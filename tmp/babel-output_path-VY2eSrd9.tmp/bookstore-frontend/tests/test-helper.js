define('bookstore-frontend/tests/test-helper', ['exports', 'bookstore-frontend/tests/helpers/resolver', 'ember-qunit'], function (exports, _bookstoreFrontendTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_bookstoreFrontendTestsHelpersResolver['default']);
});