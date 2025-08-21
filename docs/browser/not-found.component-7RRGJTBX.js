import {
  RouterLink
} from "./chunk-3QJ5RLCB.js";
import "./chunk-W6YNQVUQ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-MYTS3FNW.js";

// src/app/not-found/not-found.component.ts
var NotFoundComponent = class _NotFoundComponent {
  static {
    this.\u0275fac = function NotFoundComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NotFoundComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotFoundComponent, selectors: [["not-found"]], decls: 6, vars: 0, consts: [["routerLink", "/"]], template: function NotFoundComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div");
        \u0275\u0275text(1, " Not found ");
        \u0275\u0275element(2, "br");
        \u0275\u0275elementStart(3, "div")(4, "a", 0);
        \u0275\u0275text(5, "Go Home");
        \u0275\u0275elementEnd()()();
      }
    }, dependencies: [RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotFoundComponent, [{
    type: Component,
    args: [{ selector: "not-found", imports: [RouterLink], template: '<div>\r\n    Not found <br />\r\n    <div>\r\n        <a routerLink="/">Go Home</a>\r\n    </div>\r\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotFoundComponent, { className: "NotFoundComponent", filePath: "src/app/not-found/not-found.component.ts", lineNumber: 10 });
})();
export {
  NotFoundComponent
};
