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
          "line": 8,
          "column": 0
        }
      },
      "moduleName": "bookstore-frontend/application/template.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","container-fluid");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [0]);
      var morphs = new Array(4);
      morphs[0] = dom.createMorphAt(element0,1,1);
      morphs[1] = dom.createMorphAt(element0,3,3);
      morphs[2] = dom.createMorphAt(element0,5,5);
      morphs[3] = dom.createMorphAt(element0,7,7);
      return morphs;
    },
    statements: [
      ["inline","log",[["get","session",["loc",[null,[2,8],[2,15]]],0,0,0,0]],[],["loc",[null,[2,2],[2,17]]],0,0],
      ["inline","log",[["get","sessionStorage",["loc",[null,[3,8],[3,22]]],0,0,0,0]],[],["loc",[null,[3,2],[3,24]]],0,0],
      ["inline","nav-bar",[],["session",["subexpr","@mut",[["get","session",["loc",[null,[4,20],[4,27]]],0,0,0,0]],[],[],0,0]],["loc",[null,[4,2],[4,29]]],0,0],
      ["content","outlet",["loc",[null,[6,2],[6,12]]],0,0,0,0]
    ],
    locals: [],
    templates: []
  };
}()));