"use strict";
(self["webpackChunkangular_fundamentals"] = self["webpackChunkangular_fundamentals"] || []).push([["src_app_angular-pro_angular-pro_component_ts"],{

/***/ 9140:
/*!******************************************************!*\
  !*** ./src/app/angular-pro/angular-pro.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AngularProComponent: () => (/* binding */ AngularProComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-form/auth-form.component */ 5807);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5286);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 7389);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 7605);
/* harmony import */ var _auth_remember_auth_remember_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-remember/auth-remember.component */ 3543);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 177);







const _c0 = ["entry"];
const _c1 = ["tmpl"];
function AngularProComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const implicitVar_r2 = ctx.$implicit;
    const angularVar_r3 = ctx.angularVar;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", implicitVar_r2, " ", angularVar_r3, "\n");
  }
}
function AngularProComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "Angular Template Outlet");
  }
}
class AngularProComponent {
  constructor() {
    this.resolver = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ComponentFactoryResolver);
    this.rememberMe = false;
    this.subjectOne = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.observableOne = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Observable();
    this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  }
  ngOnInit() {
    this.rememberMe = false;
    this.subjectOne = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.observableOne = this.subjectOne.asObservable();
    this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.observableOne.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(r => console.log('Subject', r)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.unsubscribe$)).subscribe();
    this.subjectOne.next(1);
    // with takeUntil, unsubscribe$.next() can be called instead of calling subjectOne.complete()
    this.unsubscribe$.next();
    this.subjectOne.complete();
    this.subjectOne.next(2);
  }
  ngAfterContentInit() {
    setTimeout(() => {
      // dynamically create third component
      const authFormFactory = this.resolver.resolveComponentFactory(_auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_0__.AuthFormComponent);
      this.component = this.entry.createComponent(authFormFactory);
      this.component.instance.title = 'Dynamic';
      this.component.instance.showButton = true;
      this.component.instance.submitted.subscribe(this.createUser);
      this.entry.createComponent(authFormFactory, 0);
      this.entry.createEmbeddedView(this.tmpl, {
        $implicit: 'Angular',
        angularVar: 'Template'
      });
    });
  }
  createUser(user) {
    console.log('Create user', user);
  }
  rememberUser(remember) {
    this.rememberMe = remember;
  }
  loginUser(user) {
    console.log('Log in user', user, this.rememberMe);
  }
  destroyComponent() {
    this.component.destroy();
  }
  moveComponent() {
    this.entry.move(this.component.hostView, 0);
  }
  static {
    this.ɵfac = function AngularProComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AngularProComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AngularProComponent,
      selectors: [["angular-pro"]],
      viewQuery: function AngularProComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.entry = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.tmpl = _t.first);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 25,
      vars: 1,
      consts: [["entry", ""], ["tmpl", ""], ["tmpl2", ""], [3, "submitted"], ["type", "submit"], [3, "checked"], [3, "click"], [3, "ngTemplateOutlet"]],
      template: function AngularProComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "auth-form", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submitted", function AngularProComponent_Template_auth_form_submitted_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.createUser($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Create Account");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Join Us");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "auth-form", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submitted", function AngularProComponent_Template_auth_form_submitted_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.loginUser($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Login");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "auth-remember", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("checked", function AngularProComponent_Template_auth_remember_checked_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.rememberUser($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "auth-remember", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("checked", function AngularProComponent_Template_auth_remember_checked_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.rememberUser($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Login");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", null, 0)(14, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Dynamic Component");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AngularProComponent_Template_button_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.destroyComponent());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Destroy");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AngularProComponent_Template_button_click_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.moveComponent());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Move");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, AngularProComponent_ng_template_20_Template, 1, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](22, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, AngularProComponent_ng_template_23_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          const tmpl2_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", tmpl2_r4);
        }
      },
      dependencies: [_auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_0__.AuthFormComponent, _auth_remember_auth_remember_component__WEBPACK_IMPORTED_MODULE_1__.AuthRememberComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgTemplateOutlet],
      styles: ["button[_ngcontent-%COMP%] {\n  background: #3a4250;\n  padding: 4px 10px;\n  margin: 0 2px;\n  border-radius: 2px;\n}"]
    });
  }
}

/***/ }),

/***/ 5807:
/*!**************************************************************!*\
  !*** ./src/app/angular-pro/auth-form/auth-form.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthFormComponent: () => (/* binding */ AuthFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _auth_remember_auth_remember_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth-remember/auth-remember.component */ 3543);
/* harmony import */ var _auth_message_auth_message_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth-message/auth-message.component */ 6685);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 9417);






const _c0 = ["email"];
const _c1 = [[["h3"]], [["auth-remember"]], [["button"]]];
const _c2 = ["h3", "auth-remember", "button"];
function AuthFormComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class AuthFormComponent {
  constructor() {
    this.cd = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef);
    this.renderer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2);
    this.submitted = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.remember = new _auth_remember_auth_remember_component__WEBPACK_IMPORTED_MODULE_0__.AuthRememberComponent();
    this.remember2 = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.QueryList();
    this.message = new _auth_message_auth_message_component__WEBPACK_IMPORTED_MODULE_1__.AuthMessageComponent();
    this.message2 = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.QueryList();
    this.showMessage = false;
    this.title = '';
    this.showButton = false;
  }
  ngAfterContentInit() {
    if (this.remember) {
      this.remember.checked.subscribe(checked => {
        // for changing just one ContentChild
        // this.showMessage = checked;
      });
      this.remember2.forEach(item => {
        item.checked.subscribe(checked => {
          if (this.message) {
            // changing ViewChild(ren) should happen in ngAfterViewInit
            // this.message.days = 30;
          }
          this.showMessage = checked;
        });
      });
    }
  }
  ngAfterViewInit() {
    // Renderer2 methods are preferred to these as they are platform independent
    /* this.email.nativeElement.setAttribute("placeholder", "Enter your email address");
    this.email.nativeElement.classList.add("email");*/
    this.email.nativeElement.focus();
    this.renderer.setAttribute(this.email.nativeElement, 'placeholder', 'Enter your email address');
    this.renderer.addClass(this.email.nativeElement, 'email');
    // this is the closest way to focus on an element with Renderer2, but the original method works better
    // this.renderer.selectRootElement(".email").focus();
    if (this.message2) {
      // can use setTimeout to allow for setting message.days to 30, but it is better to include detectChanges()
      // afterwards instead
      /* setTimeout(() => {
      this.message2.forEach((message) => {
      message.days = 30;
      });
      });*/
      this.message2.forEach(message => {
        message.days = 30;
      });
      this.cd.detectChanges();
    }
  }
  onSubmit(value) {
    this.submitted.emit(value);
  }
  static {
    this.ɵfac = function AuthFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AuthFormComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AuthFormComponent,
      selectors: [["auth-form"]],
      contentQueries: function AuthFormComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _auth_remember_auth_remember_component__WEBPACK_IMPORTED_MODULE_0__.AuthRememberComponent, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _auth_remember_auth_remember_component__WEBPACK_IMPORTED_MODULE_0__.AuthRememberComponent, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.remember = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.remember2 = _t);
        }
      },
      viewQuery: function AuthFormComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_auth_message_auth_message_component__WEBPACK_IMPORTED_MODULE_1__.AuthMessageComponent, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_auth_message_auth_message_component__WEBPACK_IMPORTED_MODULE_1__.AuthMessageComponent, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.message = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.email = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.message2 = _t);
        }
      },
      outputs: {
        submitted: "submitted"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c2,
      decls: 17,
      vars: 6,
      consts: [["form", "ngForm"], ["email", ""], [3, "ngSubmit"], ["type", "email", "name", "email", "ngModel", ""], ["type", "password", "name", "password", "ngModel", ""], ["type", "submit"]],
      template: function AuthFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "form", 2, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AuthFormComponent_Template_form_ngSubmit_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            const form_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.onSubmit(form_r2.value));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 3, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Password ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](11, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "br")(13, "auth-message")(14, "auth-message");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](15, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, AuthFormComponent_Conditional_16_Template, 2, 0, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.title, " Email Address ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("display", ctx.showMessage ? "inherit" : "none");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("display", ctx.showMessage ? "inherit" : "none");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx.showButton ? 16 : -1);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _auth_message_auth_message_component__WEBPACK_IMPORTED_MODULE_1__.AuthMessageComponent],
      styles: [".email[_ngcontent-%COMP%] {\n  border-color: purple;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background: #3a4250;\n  padding: 4px 10px;\n  margin: 0 2px;\n  border-radius: 2px;\n}"]
    });
  }
}

/***/ }),

/***/ 6685:
/*!********************************************************************!*\
  !*** ./src/app/angular-pro/auth-message/auth-message.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthMessageComponent: () => (/* binding */ AuthMessageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7705);

class AuthMessageComponent {
  constructor() {
    this.days = 7;
  }
  static {
    this.ɵfac = function AuthMessageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AuthMessageComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AuthMessageComponent,
      selectors: [["auth-message"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 1,
      template: function AuthMessageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" You will be logged in for ", ctx.days, " days\n");
        }
      }
    });
  }
}

/***/ }),

/***/ 3543:
/*!**********************************************************************!*\
  !*** ./src/app/angular-pro/auth-remember/auth-remember.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthRememberComponent: () => (/* binding */ AuthRememberComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7705);


class AuthRememberComponent {
  constructor() {
    this.checked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  onChecked(value) {
    this.checked.emit(value);
  }
  static {
    this.ɵfac = function AuthRememberComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AuthRememberComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AuthRememberComponent,
      selectors: [["auth-remember"]],
      outputs: {
        checked: "checked"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 3,
      vars: 0,
      consts: [["type", "checkbox", 3, "change"]],
      template: function AuthRememberComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label")(1, "input", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AuthRememberComponent_Template_input_change_1_listener($event) {
            return ctx.onChecked($event.target.checked);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Keep me logged in\n");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }
    });
  }
}

/***/ })

}]);