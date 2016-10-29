define('bookstore-frontend/router', ['exports', 'ember', 'bookstore-frontend/config/environment'], function (exports, _ember, _bookstoreFrontendConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    //location: config.locationType,
    rootURL: ''
  });

  Router.map(function () {
    this.route('about');
    this.route('contact');
    this.route('books');
    this.route('publishers');
    // this.route('protected', function () {
    // });
    this.route('authors', function () {
      this.route('author', { path: ':author_id' });
      this.route('edit', { path: ':author_id/edit' });
      this.route('new');
    });
    this.route('login');
  });

  exports['default'] = Router;
});