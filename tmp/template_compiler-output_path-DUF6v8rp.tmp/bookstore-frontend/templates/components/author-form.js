export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 7,
            "column": 4
          },
          "end": {
            "line": 9,
            "column": 4
          }
        },
        "moduleName": "bookstore-frontend/templates/components/author-form.hbs"
      },
      isEmpty: false,
      arity: 1,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("      ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("span");
        dom.setAttribute(el1,"class","help-block");
        var el2 = dom.createTextNode(" ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
        return morphs;
      },
      statements: [
        ["content","error.message",["loc",[null,[8,32],[8,49]]],0,0,0,0]
      ],
      locals: ["error"],
      templates: []
    };
  }());
  var child1 = (function() {
    return {
      meta: {
        "revision": "Ember@2.7.3",
        "loc": {
          "source": null,
          "start": {
            "line": 16,
            "column": 2
          },
          "end": {
            "line": 16,
            "column": 67
          }
        },
        "moduleName": "bookstore-frontend/templates/components/author-form.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("Cancel");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }());
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
          "line": 17,
          "column": 7
        }
      },
      "moduleName": "bookstore-frontend/templates/components/author-form.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("h2");
      var el2 = dom.createTextNode("Add new Author");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("form");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("label");
      dom.setAttribute(el3,"for","");
      var el4 = dom.createTextNode("Name");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment(" {{#each author.books as |book|}}\n      <label for=\"\">Book Title</label>\n      {{input class=\"form-control\" value=book.title name=\"book[title]\"}}\n    {{/each}} ");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("button");
      dom.setAttribute(el2,"class","btn btn-primary");
      dom.setAttribute(el2,"type","submit");
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [2]);
      var element1 = dom.childAt(element0, [1]);
      var morphs = new Array(6);
      morphs[0] = dom.createElementMorph(element0);
      morphs[1] = dom.createAttrMorph(element1, 'class');
      morphs[2] = dom.createMorphAt(element1,3,3);
      morphs[3] = dom.createMorphAt(element1,5,5);
      morphs[4] = dom.createMorphAt(dom.childAt(element0, [3]),0,0);
      morphs[5] = dom.createMorphAt(element0,5,5);
      return morphs;
    },
    statements: [
      ["element","action",["submit"],["on","submit"],["loc",[null,[3,6],[3,37]]],0,0],
      ["attribute","class",["concat",["form-group ",["subexpr","if",[["get","errors.title",["loc",[null,[4,30],[4,42]]],0,0,0,0],"has-error"],[],["loc",[null,[4,25],[4,56]]],0,0]],0,0,0,0,0],0,0,0,0],
      ["inline","input",[],["class","form-control","value",["subexpr","@mut",[["get","author.name",["loc",[null,[6,39],[6,50]]],0,0,0,0]],[],[],0,0],"focus-out","validateName"],["loc",[null,[6,4],[6,77]]],0,0],
      ["block","each",[["get","errors.name",["loc",[null,[7,12],[7,23]]],0,0,0,0]],[],0,null,["loc",[null,[7,4],[9,13]]]],
      ["content","buttonLabel",["loc",[null,[15,48],[15,63]]],0,0,0,0],
      ["block","link-to",["authors.author",["get","author",["loc",[null,[16,30],[16,36]]],0,0,0,0]],["class","btn btn-danger"],1,null,["loc",[null,[16,2],[16,79]]]]
    ],
    locals: [],
    templates: [child0, child1]
  };
}()));