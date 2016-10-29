export default Ember.HTMLBars.template((function() {
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
          "column": 65
        }
      },
      "moduleName": "bookstore-frontend/authors/edit/template.hbs"
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
      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
      dom.insertBoundary(fragment, 0);
      dom.insertBoundary(fragment, null);
      return morphs;
    },
    statements: [
      ["inline","author-form",[],["author",["subexpr","@mut",[["get","author",["loc",[null,[1,21],[1,27]]],0,0,0,0]],[],[],0,0],"errors",["subexpr","@mut",[["get","errors",["loc",[null,[1,35],[1,41]]],0,0,0,0]],[],[],0,0],"action","updateAuthor"],["loc",[null,[1,0],[1,65]]],0,0]
    ],
    locals: [],
    templates: []
  };
}()));