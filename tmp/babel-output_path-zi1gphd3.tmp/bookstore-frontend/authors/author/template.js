define("bookstore-frontend/authors/author/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 53
          }
        },
        "moduleName": "bookstore-frontend/authors/author/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "author-details", [], ["author", ["subexpr", "@mut", [["get", "model", ["loc", [null, [1, 24], [1, 29]]], 0, 0, 0, 0]], [], [], 0, 0], "action", "deleteAuthor"], ["loc", [null, [1, 0], [1, 53]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});