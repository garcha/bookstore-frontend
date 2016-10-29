define("bookstore-frontend/utils/server-errors-parser", ["exports"], function (exports) {
  exports["default"] = function (resp, errors) {
    resp.errors.forEach(function (error) {
      var attribute = error.source;
      errors.add(attribute, error.detail);
    });
  };
});