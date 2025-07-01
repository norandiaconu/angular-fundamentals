"use strict";
(self["webpackChunkangular_fundamentals"] = self["webpackChunkangular_fundamentals"] || []).push([["main"],{

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 9417);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7705);




const _c0 = () => ({
  exact: true
});
const _c1 = a0 => ({
  exact: a0
});
function AppComponent_Conditional_13_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br")(3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 27)(5, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u2022 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "404");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u2022 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Passengers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Searching for... ", ctx_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
  }
}
function AppComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "h1", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function AppComponent_Conditional_13_Template_input_input_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.handleInput($event));
    })("blur", function AppComponent_Conditional_13_Template_input_blur_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.handleBlur($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Conditional_13_Template_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.handleChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function AppComponent_Conditional_13_Template_input_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r1.title, $event) || (ctx_r1.title = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Conditional_13_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.handleClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Change Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 21, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Conditional_13_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const username_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.handleChange(username_r3.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Get Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function AppComponent_Conditional_13_Template_input_input_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.handleNameChange($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AppComponent_Conditional_13_Conditional_18_Template, 13, 3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br")(20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 23)(22, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.title + "!", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r1.title, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r1.numberOne + ctx_r1.numberTwo, " \u2022 ", ctx_r1.isHappy ? ":)" : ":(", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx_r1.name.length > 2 ? 18 : -1);
  }
}
function AppComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", item_r4.link)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, item_r4.exact));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r4.name, " ");
  }
}
class AppComponent {
  constructor() {
    this.numberOne = 1;
    this.numberTwo = 2;
    this.isHappy = true;
    this.logo = 'assets/logo.svg';
    this.name = '';
    this.display = false;
    this.nav = [{
      link: '/',
      name: 'Home',
      exact: true
    }, {
      link: '/oops',
      name: '404',
      exact: false
    }, {
      link: '/passengers',
      name: 'Passengers',
      exact: false
    }, {
      link: '/rxjs-basics',
      name: 'RxJS Basics',
      exact: false
    }, {
      link: '/rxjs-projects',
      name: 'RxJS Projects',
      exact: false
    }, {
      link: '/typescript-basics',
      name: 'TypeScript Basics',
      exact: false
    }, {
      link: '/angular-pro',
      name: 'Angular Pro',
      exact: false
    }];
    this.title = 'Ultimate Angular';
  }
  handleInput(event) {
    this.title = event.target.value;
  }
  handleBlur(event) {
    this.title = event.target.value;
    console.log(event);
  }
  handleClick() {
    this.title = 'Angular';
  }
  handleChange(value) {
    this.title = value;
    console.log(value);
  }
  handleNameChange(value) {
    this.name = value;
  }
  toggle() {
    this.display = !this.display;
  }
  static {
    this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 22,
      vars: 1,
      consts: [["username", ""], ["role", "banner", 1, "toolbar"], ["width", "40", "alt", "Angular Logo", "src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="], [1, "spacer"], [2, "cursor", "pointer", 3, "click"], ["aria-label", "Angular on twitter", "target", "_blank", "rel", "noopener noreferrer", "href", "https://twitter.com/angular", "title", "Twitter"], ["id", "twitter-logo", "height", "24", "data-name", "Logo", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 400 400"], ["width", "400", "height", "400", "fill", "none"], ["d", "M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23", "fill", "#fff"], [1, "progress-bar"], ["role", "main", 1, "content"], [1, "app"], ["aria-label", "nav2", 1, "nav"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions"], ["id", "clouds", "alt", "Gray Clouds Background", "xmlns", "http://www.w3.org/2000/svg", "width", "2611.084", "height", "485.677", "viewBox", "0 0 2611.084 485.677"], ["id", "Path_39", "data-name", "Path 39", "d", "M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z", "transform", "translate(142.69 -634.312)", "fill", "#eee"], [3, "innerHTML"], ["alt", "Angular", 2, "width", "100px", "height", "100px", 3, "src"], ["type", "text", 3, "input", "blur", "value"], ["type", "text", 3, "ngModelChange", "ngModel"], [3, "click"], ["type", "text"], ["type", "text", 3, "input", "value"], [1, "flexbox-container"], [1, "flexbox-item", "flexbox-item-1"], [1, "flexbox-item", "flexbox-item-2"], [1, "flexbox-item", "flexbox-item-3"], ["aria-label", "nav1", 1, "nav"], ["routerLink", "/", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "oops", "routerLinkActive", "active"], ["routerLink", "passengers", "routerLinkActive", "active"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Welcome");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_5_listener() {
            return ctx.toggle();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Toggle Display");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "rect", 7)(10, "path", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_Conditional_13_Template, 28, 10, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div")(16, "nav", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](17, AppComponent_For_18_Template, 2, 5, "a", 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "svg", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.display ? 13 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx.nav);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
      styles: [".app[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.nav[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  padding: 0 0 20px;\n  border-bottom: 1px solid white;\n  text-align: center;\n}\n\na[_ngcontent-%COMP%] {\n  background: #3a4250;\n  padding: 4px 10px;\n  margin: 0 2px;\n  border-radius: 2px;\n}\n\na.active[_ngcontent-%COMP%] {\n  background: purple;\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  height: 4px;\n  width: 0%;\n  background: purple;\n}\n\n.flexbox-container[_ngcontent-%COMP%] {\n  background-color: darkgrey;\n  height: 200px;\n  width: 500px;\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-items: center;\n  align-content: space-between;\n  flex-direction: row;\n}\n\n.flexbox-item[_ngcontent-%COMP%] {\n  width: 100px;\n  margin: 10px;\n  border: 3px solid purple;\n  background-color: gray;\n}\n\n.flexbox-item-1[_ngcontent-%COMP%] {\n  min-height: 50px;\n  flex-shrink: 1;\n  align-self: flex-end;\n  order: 2;\n}\n\n.flexbox-item-2[_ngcontent-%COMP%] {\n  min-height: 100px;\n  flex-grow: 3;\n  order: 3;\n}\n\n.flexbox-item-3[_ngcontent-%COMP%] {\n  min-height: 150px;\n  flex-grow: 1;\n  order: 1;\n}", "[_nghost-%COMP%] {\n        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji',\n            'Segoe UI Emoji', 'Segoe UI Symbol';\n        font-size: 14px;\n        color: #333;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n    }"]
    });
  }
}

/***/ }),

/***/ 2038:
/*!**********************************************************************************!*\
  !*** ./src/app/passenger-dashboard/passenger-count/passenger-count.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PassengerCountComponent: () => (/* binding */ PassengerCountComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7705);

class PassengerCountComponent {
  constructor() {
    this.items = [];
  }
  checkedInCount() {
    if (!this.items) {
      return 0;
    } else {
      return this.items.filter(passenger => passenger.checkedIn).length;
    }
  }
  static {
    this.ɵfac = function PassengerCountComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PassengerCountComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PassengerCountComponent,
      selectors: [["passenger-count"]],
      inputs: {
        items: "items"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 2,
      template: function PassengerCountComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Total checked in: ", ctx.checkedInCount(), " / ", ctx.items == null ? null : ctx.items.length, "\n");
        }
      }
    });
  }
}

/***/ }),

/***/ 7372:
/*!**********************************************************************!*\
  !*** ./src/app/passenger-dashboard/passenger-dashboard.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PassengerDashboardComponent: () => (/* binding */ PassengerDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _passenger_dashboard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./passenger-dashboard.service */ 9828);
/* harmony import */ var _passenger_count_passenger_count_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./passenger-count/passenger-count.component */ 2038);
/* harmony import */ var _passenger_detail_passenger_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./passenger-detail/passenger-detail.component */ 7884);






function PassengerDashboardComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const passenger_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](passenger_r1 == null ? null : passenger_r1.fullName);
  }
}
function PassengerDashboardComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "passenger-detail", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("edit", function PassengerDashboardComponent_For_6_Template_passenger_detail_edit_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.handleEdit($event));
    })("remove", function PassengerDashboardComponent_For_6_Template_passenger_detail_remove_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.handleRemove($event));
    })("view", function PassengerDashboardComponent_For_6_Template_passenger_detail_view_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.handleView($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const passenger_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("detail", passenger_r4);
  }
}
class PassengerDashboardComponent {
  constructor() {
    this.passengerDashboardService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_passenger_dashboard_service__WEBPACK_IMPORTED_MODULE_0__.PassengerDashboardService);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router);
    this.passengers = [];
    this.passenger0 = {
      id: 0,
      fullName: '',
      checkedIn: false,
      baggage: ''
    };
  }
  handleEdit(event) {
    this.passengerDashboardService.updatePassenger(event).subscribe(data => {
      if (data.id === event.id) {
        data = Object.assign({}, data, event);
        this.getAllPassengers();
      }
      return data;
    }, error => {
      console.error(error);
    });
  }
  handleRemove(event) {
    this.passengerDashboardService.deletePassenger(event).subscribe(data => {
      this.passengers = this.passengers.filter(passenger => passenger.id !== event.id);
    }, error => {
      console.error(error);
    });
  }
  getAllPassengers() {
    this.passengerDashboardService.getPassengers().subscribe(data => {
      // console.log(data);
      this.passengers = data;
      // console.log(this.passengers);
    }, error => {
      console.error(error);
    });
  }
  getThePassenger() {
    this.passengerDashboardService.getPassenger(1).subscribe(data => {
      this.passenger0 = data;
      // console.log(this.passenger0);
    }, error => {
      console.error(error);
    });
    return this.passenger0;
  }
  getThePassengerPromise() {
    this.passengerDashboardService.getPassengerPromise().then(data => {
      this.passenger0 = data;
      console.log(this.passenger0);
    });
    return this.passenger0;
  }
  handleView(event) {
    this.router.navigate(['/passengers', event.id]);
  }
  ngOnInit() {
    // this.getThePassenger();
    // this.getThePassengerPromise();
    this.getAllPassengers();
  }
  static {
    this.ɵfac = function PassengerDashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PassengerDashboardComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: PassengerDashboardComponent,
      selectors: [["passenger-dashboard"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 7,
      vars: 2,
      consts: [[3, "items"], [3, "detail"], [3, "edit", "remove", "view", "detail"]],
      template: function PassengerDashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "passenger-count", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterCreate"](3, PassengerDashboardComponent_For_4_Template, 2, 1, "div", null, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterCreate"](5, PassengerDashboardComponent_For_6_Template, 1, 1, "passenger-detail", 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.passenger0 == null ? null : ctx.passenger0.fullName, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", ctx.passengers);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeater"](ctx.passengers);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeater"](ctx.passengers);
        }
      },
      dependencies: [_passenger_count_passenger_count_component__WEBPACK_IMPORTED_MODULE_1__.PassengerCountComponent, _passenger_detail_passenger_detail_component__WEBPACK_IMPORTED_MODULE_2__.PassengerDetailComponent],
      styles: [".status[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  background: red;\n  display: block;\n  margin: 8px 10px 0 0;\n  float: left;\n  border-radius: 50%;\n}\n.status.checked-in[_ngcontent-%COMP%] {\n  background: green;\n}"]
    });
  }
}

/***/ }),

/***/ 7739:
/*!*******************************************************************!*\
  !*** ./src/app/passenger-dashboard/passenger-dashboard.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PassengerDashboardModule: () => (/* binding */ PassengerDashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 345);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 1626);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 9417);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _passenger_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./passenger-dashboard.component */ 7372);
/* harmony import */ var _passenger_count_passenger_count_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./passenger-count/passenger-count.component */ 2038);
/* harmony import */ var _passenger_detail_passenger_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./passenger-detail/passenger-detail.component */ 7884);
/* harmony import */ var _passenger_dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./passenger-dashboard.service */ 9828);
/* harmony import */ var _passenger_viewer_passenger_viewer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./passenger-viewer/passenger-viewer.component */ 3938);
/* harmony import */ var _passenger_form_passenger_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./passenger-form/passenger-form.component */ 6554);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7705);













const routes = [{
  path: 'passengers',
  children: [{
    path: '',
    component: _passenger_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.PassengerDashboardComponent
  }, {
    path: ':id',
    component: _passenger_viewer_passenger_viewer_component__WEBPACK_IMPORTED_MODULE_4__.PassengerViewerComponent
  }]
}];
class PassengerDashboardModule {
  static {
    this.ɵfac = function PassengerDashboardModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PassengerDashboardModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
      type: PassengerDashboardModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
      providers: [_passenger_dashboard_service__WEBPACK_IMPORTED_MODULE_3__.PassengerDashboardService, _passenger_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.PassengerDashboardComponent, _passenger_count_passenger_count_component__WEBPACK_IMPORTED_MODULE_1__.PassengerCountComponent, _passenger_detail_passenger_detail_component__WEBPACK_IMPORTED_MODULE_2__.PassengerDetailComponent, _passenger_viewer_passenger_viewer_component__WEBPACK_IMPORTED_MODULE_4__.PassengerViewerComponent, _passenger_form_passenger_form_component__WEBPACK_IMPORTED_MODULE_5__.PassengerFormComponent, _passenger_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.PassengerDashboardComponent, _passenger_viewer_passenger_viewer_component__WEBPACK_IMPORTED_MODULE_4__.PassengerViewerComponent, (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.withInterceptorsFromDi)())],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(routes)]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](PassengerDashboardModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
  });
})();

/***/ }),

/***/ 9828:
/*!********************************************************************!*\
  !*** ./src/app/passenger-dashboard/passenger-dashboard.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PassengerDashboardService: () => (/* binding */ PassengerDashboardService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1626);



let path = '';
class PassengerDashboardService {
  constructor() {
    this.httpClient = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient);
    if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.isDevMode)()) {
      path = 'http://localhost:3000/passengers';
    } else {
      path = 'https://my-json-server.typicode.com/norandiaconu/angular-fundamentals/passengers';
    }
  }
  getPassengers() {
    return this.httpClient.get(path);
  }
  getPassenger(id) {
    return this.httpClient.get(path + '/' + id);
  }
  getPassengerPromise() {
    return this.httpClient.get(path + '/1').toPromise();
  }
  updatePassenger(passenger) {
    return this.httpClient.put(path + '/' + passenger.id, passenger);
  }
  deletePassenger(passenger) {
    return this.httpClient.delete(path + '/' + passenger.id);
  }
  static {
    this.ɵfac = function PassengerDashboardService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PassengerDashboardService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PassengerDashboardService,
      factory: PassengerDashboardService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 7884:
/*!************************************************************************************!*\
  !*** ./src/app/passenger-dashboard/passenger-detail/passenger-detail.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PassengerDetailComponent: () => (/* binding */ PassengerDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 177);



function PassengerDetailComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "input", 3, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function PassengerDetailComponent_Conditional_2_Template_input_input_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const name_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onNameChange(name_r2.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r2.detail.fullName);
  }
}
function PassengerDetailComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.detail.fullName, " ");
  }
}
class PassengerDetailComponent {
  constructor() {
    this.detail = {
      id: 0,
      fullName: '',
      checkedIn: false,
      baggage: ''
    };
    this.editing = false;
    this.edit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.view = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  onNameChange(value) {
    this.detail.fullName = value;
  }
  toggleEdit() {
    if (this.editing) {
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }
  onRemove() {
    this.remove.emit(this.detail);
  }
  goToPassenger() {
    this.view.emit(this.detail);
  }
  ngOnChanges(changes) {
    if (changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
  }
  static {
    this.ɵfac = function PassengerDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PassengerDetailComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PassengerDetailComponent,
      selectors: [["passenger-detail"]],
      inputs: {
        detail: "detail"
      },
      outputs: {
        edit: "edit",
        remove: "remove",
        view: "view"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 16,
      vars: 12,
      consts: [["name", ""], [1, "status"], [3, "click"], ["type", "text", 3, "input", "value"]],
      template: function PassengerDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PassengerDetailComponent_Conditional_2_Template, 3, 1, "div")(3, PassengerDetailComponent_Conditional_3_Template, 2, 1, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "uppercase");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PassengerDetailComponent_Template_button_click_10_listener() {
            return ctx.toggleEdit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PassengerDetailComponent_Template_button_click_12_listener() {
            return ctx.onRemove();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Remove");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PassengerDetailComponent_Template_button_click_14_listener() {
            return ctx.goToPassenger();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Go To Passenger");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("checked-in", ctx.detail.checkedIn);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.editing ? 2 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](!ctx.editing ? 3 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Check in Date: ", ctx.detail.checkedInDate ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 7, ctx.detail.checkedInDate, "MMMM d, y")) : "Not checked in", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Children: ", (ctx.detail.children == null ? null : ctx.detail.children.length) || 0, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.editing ? "Done" : "Edit", " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe],
      styles: [".status[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  background: red;\n  display: block;\n  margin: 8px 10px 0 0;\n  float: left;\n  border-radius: 50%;\n}\n.status.checked-in[_ngcontent-%COMP%] {\n  background: green;\n}"]
    });
  }
}

/***/ }),

/***/ 6554:
/*!********************************************************************************!*\
  !*** ./src/app/passenger-dashboard/passenger-form/passenger-form.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PassengerFormComponent: () => (/* binding */ PassengerFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 9417);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 177);





function PassengerFormComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Passenger name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PassengerFormComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Passenger name length must be greater than 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PassengerFormComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Passenger id is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PassengerFormComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Check in date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.detail == null ? null : ctx_r2.detail.checkedInDate);
  }
}
function PassengerFormComponent_For_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r4.key)("selected", item_r4.key === (ctx_r2.detail == null ? null : ctx_r2.detail.baggage));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r4.value, " ");
  }
}
function PassengerFormComponent_For_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", item_r5.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r5.value, " ");
  }
}
class PassengerFormComponent {
  constructor() {
    this.detail = {
      id: 0,
      fullName: '',
      checkedIn: false,
      baggage: ''
    };
    this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.baggage = [{
      key: 'none',
      value: 'No baggage'
    }, {
      key: 'hand-only',
      value: 'Hand baggage'
    }, {
      key: 'hold-only',
      value: 'Hold baggage'
    }, {
      key: 'hand-hold',
      value: 'Hand and hold baggage'
    }];
  }
  toggleCheckedIn(checkedIn) {
    if (checkedIn) {
      this.detail.checkedInDate = Date.now();
    }
  }
  handleSubmit(passenger, isValid) {
    if (isValid) {
      this.update.emit(passenger);
    }
  }
  static {
    this.ɵfac = function PassengerFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PassengerFormComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PassengerFormComponent,
      selectors: [["passenger-form"]],
      inputs: {
        detail: "detail"
      },
      outputs: {
        update: "update"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 46,
      vars: 32,
      consts: [["form", "ngForm"], ["fullName", "ngModel"], ["id", "ngModel"], ["novalidate", "", 3, "ngSubmit"], ["type", "text", "name", "fullName", "required", "", "minlength", "2", 3, "ngModel"], [1, "error"], ["type", "number", "name", "id", "required", "", 3, "ngModel"], ["type", "radio", "name", "checkedIn", 3, "ngModelChange", "value", "ngModel"], ["type", "radio", "name", "checkedIn", 3, "value", "ngModel"], ["type", "checkbox", "name", "checkedIn", 3, "ngModelChange", "ngModel"], ["name", "baggage", 3, "ngModel"], [3, "value", "selected"], [3, "ngValue"], ["type", "submit", 3, "disabled"], ["type", "number", "name", "checkedInDate", 3, "ngModel"]],
      template: function PassengerFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 3, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PassengerFormComponent_Template_form_ngSubmit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            const form_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.handleSubmit(form_r2.value, form_r2.valid));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "json");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Passenger name: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "json");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PassengerFormComponent_Conditional_10_Template, 2, 0, "div", 5)(11, PassengerFormComponent_Conditional_11_Template, 2, 0, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Passenger ID: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 6, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "json");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, PassengerFormComponent_Conditional_18_Template, 2, 0, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div")(20, "label")(21, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PassengerFormComponent_Template_input_ngModelChange_21_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.toggleCheckedIn($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Yes ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " No ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label")(27, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PassengerFormComponent_Template_input_ngModelChange_27_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.toggleCheckedIn($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Toggle check in date ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, PassengerFormComponent_Conditional_29_Template, 3, 1, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Luggage: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "select", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](33, PassengerFormComponent_For_34_Template, 2, 3, "option", 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "select", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](36, PassengerFormComponent_For_37_Template, 2, 2, "option", 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "json");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "json");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "json");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Update passenger");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          const form_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
          const fullName_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
          const id_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 20, ctx.detail), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.detail == null ? null : ctx.detail.fullName);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 22, fullName_r6.errors), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"]((fullName_r6.errors == null ? null : fullName_r6.errors.required) && fullName_r6.dirty ? 10 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"]((fullName_r6.errors == null ? null : fullName_r6.errors.minlength) && fullName_r6.dirty ? 11 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.detail == null ? null : ctx.detail.id);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 24, id_r7.errors), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"]((id_r7.errors == null ? null : id_r7.errors.required) && id_r7.touched ? 18 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true)("ngModel", ctx.detail == null ? null : ctx.detail.checkedIn);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", false)("ngModel", ctx.detail == null ? null : ctx.detail.checkedIn);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.detail == null ? null : ctx.detail.checkedIn);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](form_r2.value.checkedIn ? 29 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.detail == null ? null : ctx.detail.baggage);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx.baggage);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.detail == null ? null : ctx.detail.baggage);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx.baggage);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 26, form_r2.value), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Valid: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 28, form_r2.valid), " \u2022 Invalid: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 30, form_r2.invalid), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", form_r2.invalid);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_2__.JsonPipe],
      styles: ["div[_ngcontent-%COMP%] {\n  margin: 0 0 20px;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: #da6969;\n  font-size: 10px;\n}"]
    });
  }
}

/***/ }),

/***/ 3938:
/*!************************************************************************************!*\
  !*** ./src/app/passenger-dashboard/passenger-viewer/passenger-viewer.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PassengerViewerComponent: () => (/* binding */ PassengerViewerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _passenger_dashboard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../passenger-dashboard.service */ 9828);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5006);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9090);
/* harmony import */ var _passenger_form_passenger_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../passenger-form/passenger-form.component */ 6554);






class PassengerViewerComponent {
  constructor() {
    this.passengerDashboardService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_passenger_dashboard_service__WEBPACK_IMPORTED_MODULE_0__.PassengerDashboardService);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router);
    this.route = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute);
    this.passenger = {
      id: 0,
      fullName: '',
      checkedIn: false,
      baggage: ''
    };
  }
  onUpdatePassenger(event) {
    console.log(event);
    this.passengerDashboardService.updatePassenger(event).subscribe(data => {
      this.passenger = Object.assign({}, this.passenger, event);
    });
  }
  goBack() {
    this.router.navigate(['/passengers']);
  }
  ngOnInit() {
    this.route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(data => data)).subscribe(data => {
      console.log(data);
    });
    this.route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(data => data), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(data => this.passengerDashboardService.getPassenger(data.id))).subscribe(data => this.passenger = data);
  }
  static {
    this.ɵfac = function PassengerViewerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PassengerViewerComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: PassengerViewerComponent,
      selectors: [["passenger-viewer"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 3,
      vars: 1,
      consts: [[3, "click"], [3, "update", "detail"]],
      template: function PassengerViewerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PassengerViewerComponent_Template_button_click_0_listener() {
            return ctx.goBack();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Go Back\n");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "passenger-form", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("update", function PassengerViewerComponent_Template_passenger_form_update_2_listener($event) {
            return ctx.onUpdatePassenger($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("detail", ctx.passenger);
        }
      },
      dependencies: [_passenger_form_passenger_form_component__WEBPACK_IMPORTED_MODULE_1__.PassengerFormComponent]
    });
  }
}

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environments/environment */ 5312);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 9417);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _app_passenger_dashboard_passenger_dashboard_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/passenger-dashboard/passenger-dashboard.module */ 7739);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.component */ 92);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 345);








const routes = [{
  path: '',
  redirectTo: 'passengers',
  pathMatch: 'full'
}, {
  path: 'rxjs-basics',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_rxjs__esm2015_internal_observable_dom_ajax_js-node_modules_rxjs__esm2015-52a764"), __webpack_require__.e("src_app_rxjs-basics_rxjs-basics_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./app/rxjs-basics/rxjs-basics.component */ 4008)).then(m => m.RxjsBasicsComponent)
}, {
  path: 'rxjs-projects',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_rxjs__esm2015_internal_observable_dom_ajax_js-node_modules_rxjs__esm2015-52a764"), __webpack_require__.e("src_app_rxjs-projects_rxjs-projects_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./app/rxjs-projects/rxjs-projects.component */ 4268)).then(m => m.RxjsProjectsComponent)
}, {
  path: 'typescript-basics',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_typescript-basics_typescript-basics_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./app/typescript-basics/typescript-basics.component */ 428)).then(m => m.TypescriptBasicsComponent)
}, {
  path: 'angular-pro',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_angular-pro_angular-pro_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./app/angular-pro/angular-pro.component */ 9140)).then(m => m.AngularProComponent)
}, {
  path: '**',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_not-found_not-found_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./app/not-found/not-found.component */ 1064)).then(m => m.NotFoundComponent)
}];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent, {
  providers: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.importProvidersFrom)(
  // Angular modules
  _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
  // Custom modules
  _app_passenger_dashboard_passenger_dashboard_module__WEBPACK_IMPORTED_MODULE_1__.PassengerDashboardModule), (0,_angular_router__WEBPACK_IMPORTED_MODULE_7__.provideRouter)(routes)]
}).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);