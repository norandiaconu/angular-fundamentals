"use strict";
(self["webpackChunkangular_fundamentals"] = self["webpackChunkangular_fundamentals"] || []).push([["main"],{

/***/ 9140:
/*!******************************************************!*\
  !*** ./src/app/angular-pro/angular-pro.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AngularProComponent: () => (/* binding */ AngularProComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-form/auth-form.component */ 5807);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 3119);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 7498);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6000);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 7464);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _auth_remember_auth_remember_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-remember/auth-remember.component */ 3543);








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
  constructor(resolver) {
    this.resolver = resolver;
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
      return new (__ngFactoryType__ || AngularProComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ComponentFactoryResolver));
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
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgTemplateOutlet, _auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_0__.AuthFormComponent, _auth_remember_auth_remember_component__WEBPACK_IMPORTED_MODULE_1__.AuthRememberComponent],
      styles: ["button[_ngcontent-%COMP%] {\n  background: #3a4250;\n  padding: 4px 10px;\n  margin: 0 2px;\n  border-radius: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuZ3VsYXItcHJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNKIiwiZmlsZSI6ImFuZ3VsYXItcHJvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQ6ICMzYTQyNTA7XHJcbiAgICBwYWRkaW5nOiA0cHggMTBweDtcclxuICAgIG1hcmdpbjogMCAycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYW5ndWxhci1wcm8vYW5ndWxhci1wcm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFDQSw0Y0FBNGMiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDogIzNhNDI1MDtcclxuICAgIHBhZGRpbmc6IDRweCAxMHB4O1xyXG4gICAgbWFyZ2luOiAwIDJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _auth_remember_auth_remember_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth-remember/auth-remember.component */ 3543);
/* harmony import */ var _auth_message_auth_message_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth-message/auth-message.component */ 6685);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);







const _c0 = ["email"];
const _c1 = [[["h3"]], [["auth-remember"]], [["button"]]];
const _c2 = ["h3", "auth-remember", "button"];
function AuthFormComponent_button_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class AuthFormComponent {
  constructor(cd, renderer) {
    this.cd = cd;
    this.renderer = renderer;
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
      return new (__ngFactoryType__ || AuthFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2));
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
      ngContentSelectors: _c2,
      decls: 17,
      vars: 6,
      consts: [["form", "ngForm"], ["email", ""], [3, "ngSubmit"], ["type", "email", "name", "email", "ngModel", ""], ["type", "password", "name", "password", "ngModel", ""], ["type", "submit", 4, "ngIf"], ["type", "submit"]],
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
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, AuthFormComponent_button_16_Template, 2, 0, "button", 5);
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
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showButton);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _auth_message_auth_message_component__WEBPACK_IMPORTED_MODULE_1__.AuthMessageComponent],
      styles: [".email[_ngcontent-%COMP%] {\n  border-color: purple;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background: #3a4250;\n  padding: 4px 10px;\n  margin: 0 2px;\n  border-radius: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBRUoiLCJmaWxlIjoiYXV0aC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVtYWlsIHtcclxuICAgIGJvcmRlci1jb2xvcjogcHVycGxlO1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjM2E0MjUwO1xyXG4gICAgcGFkZGluZzogNHB4IDEwcHg7XHJcbiAgICBtYXJnaW46IDAgMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYW5ndWxhci1wcm8vYXV0aC1mb3JtL2F1dGgtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBRUo7QUFDQSxnaUJBQWdpQiIsInNvdXJjZXNDb250ZW50IjpbIi5lbWFpbCB7XHJcbiAgICBib3JkZXItY29sb3I6IHB1cnBsZTtcclxufVxyXG5idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDogIzNhNDI1MDtcclxuICAgIHBhZGRpbmc6IDRweCAxMHB4O1xyXG4gICAgbWFyZ2luOiAwIDJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

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
      },
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLW1lc3NhZ2UuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYW5ndWxhci1wcm8vYXV0aC1tZXNzYWdlL2F1dGgtbWVzc2FnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsNEtBQTRLIiwic291cmNlUm9vdCI6IiJ9 */"]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


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
      },
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLXJlbWVtYmVyLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYW5ndWxhci1wcm8vYXV0aC1yZW1lbWJlci9hdXRoLXJlbWVtYmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSw0S0FBNEsiLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);




const _c0 = () => ({
  exact: true
});
const _c1 = a0 => ({
  exact: a0
});
function AppComponent_div_13_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br")(3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 29)(5, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u2022 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "404");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u2022 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 32);
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
function AppComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "h1", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function AppComponent_div_13_Template_input_input_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.handleInput($event));
    })("blur", function AppComponent_div_13_Template_input_blur_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.handleBlur($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_div_13_Template_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.handleChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function AppComponent_div_13_Template_input_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r1.title, $event) || (ctx_r1.title = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_13_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.handleClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Change Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 22, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_13_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const username_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.handleChange(username_r3.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Get Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function AppComponent_div_13_Template_input_input_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.handleNameChange($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AppComponent_div_13_div_18_Template, 13, 3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br")(20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 25)(22, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 28);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.name.length > 2);
  }
}
function AppComponent_a_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 33);
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
      decls: 21,
      vars: 2,
      consts: [["username", ""], ["role", "banner", 1, "toolbar"], ["width", "40", "alt", "Angular Logo", "src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="], [1, "spacer"], [2, "cursor", "pointer", 3, "click"], ["aria-label", "Angular on twitter", "target", "_blank", "rel", "noopener noreferrer", "href", "https://twitter.com/angular", "title", "Twitter"], ["id", "twitter-logo", "height", "24", "data-name", "Logo", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 400 400"], ["width", "400", "height", "400", "fill", "none"], ["d", "M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23", "fill", "#fff"], [1, "progress-bar"], ["role", "main", 1, "content"], ["class", "app", 4, "ngIf"], ["aria-label", "nav2", 1, "nav"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions", 4, "ngFor", "ngForOf"], ["id", "clouds", "alt", "Gray Clouds Background", "xmlns", "http://www.w3.org/2000/svg", "width", "2611.084", "height", "485.677", "viewBox", "0 0 2611.084 485.677"], ["id", "Path_39", "data-name", "Path 39", "d", "M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z", "transform", "translate(142.69 -634.312)", "fill", "#eee"], [1, "app"], [3, "innerHTML"], ["alt", "Angular", 2, "width", "100px", "height", "100px", 3, "src"], ["type", "text", 3, "input", "blur", "value"], ["type", "text", 3, "ngModelChange", "ngModel"], [3, "click"], ["type", "text"], ["type", "text", 3, "input", "value"], [4, "ngIf"], [1, "flexbox-container"], [1, "flexbox-item", "flexbox-item-1"], [1, "flexbox-item", "flexbox-item-2"], [1, "flexbox-item", "flexbox-item-3"], ["aria-label", "nav1", 1, "nav"], ["routerLink", "/", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "oops", "routerLinkActive", "active"], ["routerLink", "passengers", "routerLinkActive", "active"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions"]],
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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_div_13_Template, 28, 10, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div")(16, "nav", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AppComponent_a_17_Template, 2, 5, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "svg", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.display);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.nav);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive],
      styles: [".app[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.nav[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  padding: 0 0 20px;\n  border-bottom: 1px solid white;\n  text-align: center;\n}\n\na[_ngcontent-%COMP%] {\n  background: #3a4250;\n  padding: 4px 10px;\n  margin: 0 2px;\n  border-radius: 2px;\n}\n\na.active[_ngcontent-%COMP%] {\n  background: purple;\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  height: 4px;\n  width: 0%;\n  background: purple;\n}\n\n.flexbox-container[_ngcontent-%COMP%] {\n  background-color: darkgrey;\n  height: 200px;\n  width: 500px;\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-items: center;\n  align-content: space-between;\n  flex-direction: row;\n}\n\n.flexbox-item[_ngcontent-%COMP%] {\n  width: 100px;\n  margin: 10px;\n  border: 3px solid purple;\n  background-color: gray;\n}\n\n.flexbox-item-1[_ngcontent-%COMP%] {\n  min-height: 50px;\n  flex-shrink: 1;\n  align-self: flex-end;\n  order: 2;\n}\n\n.flexbox-item-2[_ngcontent-%COMP%] {\n  min-height: 100px;\n  flex-grow: 3;\n  order: 3;\n}\n\n.flexbox-item-3[_ngcontent-%COMP%] {\n  min-height: 150px;\n  flex-grow: 1;\n  order: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUFBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUdKOztBQURBO0VBQ0ksa0JBQUE7QUFJSjs7QUFGQTtFQUNJLGVBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQUtKOztBQUhBO0VBQ0ksMEJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FBTUo7O0FBSkE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7QUFPSjs7QUFMQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsUUFBQTtBQVFKOztBQU5BO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtBQVNKOztBQVBBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtBQVVKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5uYXYge1xyXG4gICAgbWFyZ2luOiAwIDAgMTBweDtcclxuICAgIHBhZGRpbmc6IDAgMCAyMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmEge1xyXG4gICAgYmFja2dyb3VuZDogIzNhNDI1MDtcclxuICAgIHBhZGRpbmc6IDRweCAxMHB4O1xyXG4gICAgbWFyZ2luOiAwIDJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG5hLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBwdXJwbGU7XHJcbn1cclxuLnByb2dyZXNzLWJhciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIHdpZHRoOiAwJTtcclxuICAgIGJhY2tncm91bmQ6IHB1cnBsZTtcclxufVxyXG4uZmxleGJveC1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZXk7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuLmZsZXhib3gtaXRlbSB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCBwdXJwbGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG59XHJcbi5mbGV4Ym94LWl0ZW0tMSB7XHJcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgZmxleC1zaHJpbms6IDE7XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgIG9yZGVyOiAyO1xyXG59XHJcbi5mbGV4Ym94LWl0ZW0tMiB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICAgIGZsZXgtZ3JvdzogMztcclxuICAgIG9yZGVyOiAzOyBcclxufVxyXG4uZmxleGJveC1pdGVtLTMge1xyXG4gICAgbWluLWhlaWdodDogMTUwcHg7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBvcmRlcjogMTtcclxufVxyXG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjs7QUFDQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQUE7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBR0o7O0FBREE7RUFDSSxrQkFBQTtBQUlKOztBQUZBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBS0o7O0FBSEE7RUFDSSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QUFNSjs7QUFKQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtBQU9KOztBQUxBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxRQUFBO0FBUUo7O0FBTkE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0FBU0o7O0FBUEE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0FBVUo7QUFDQSxvZ0ZBQW9nRiIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5uYXYge1xyXG4gICAgbWFyZ2luOiAwIDAgMTBweDtcclxuICAgIHBhZGRpbmc6IDAgMCAyMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmEge1xyXG4gICAgYmFja2dyb3VuZDogIzNhNDI1MDtcclxuICAgIHBhZGRpbmc6IDRweCAxMHB4O1xyXG4gICAgbWFyZ2luOiAwIDJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG5hLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBwdXJwbGU7XHJcbn1cclxuLnByb2dyZXNzLWJhciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIHdpZHRoOiAwJTtcclxuICAgIGJhY2tncm91bmQ6IHB1cnBsZTtcclxufVxyXG4uZmxleGJveC1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZXk7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuLmZsZXhib3gtaXRlbSB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCBwdXJwbGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG59XHJcbi5mbGV4Ym94LWl0ZW0tMSB7XHJcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgZmxleC1zaHJpbms6IDE7XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgIG9yZGVyOiAyO1xyXG59XHJcbi5mbGV4Ym94LWl0ZW0tMiB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICAgIGZsZXgtZ3JvdzogMztcclxuICAgIG9yZGVyOiAzOyBcclxufVxyXG4uZmxleGJveC1pdGVtLTMge1xyXG4gICAgbWluLWhlaWdodDogMTUwcHg7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBvcmRlcjogMTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */", "[_nghost-%COMP%] {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }"]
    });
  }
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _passenger_dashboard_passenger_dashboard_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./passenger-dashboard/passenger-dashboard.module */ 7739);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ 3062);
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./not-found/not-found.component */ 1064);
/* harmony import */ var _rxjs_basics_rxjs_basics_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rxjs-basics/rxjs-basics.component */ 4008);
/* harmony import */ var _rxjs_projects_rxjs_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rxjs-projects/rxjs-projects.component */ 4268);
/* harmony import */ var _typescript_basics_typescript_basics_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./typescript-basics/typescript-basics.component */ 428);
/* harmony import */ var _angular_pro_auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./angular-pro/auth-form/auth-form.component */ 5807);
/* harmony import */ var _angular_pro_angular_pro_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./angular-pro/angular-pro.component */ 9140);
/* harmony import */ var _angular_pro_auth_remember_auth_remember_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./angular-pro/auth-remember/auth-remember.component */ 3543);
/* harmony import */ var _angular_pro_auth_message_auth_message_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./angular-pro/auth-message/auth-message.component */ 6685);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7580);
















const routes = [{
  path: "",
  redirectTo: "passengers",
  pathMatch: "full"
}, {
  path: "rxjs-basics",
  component: _rxjs_basics_rxjs_basics_component__WEBPACK_IMPORTED_MODULE_4__.RxjsBasicsComponent
}, {
  path: "rxjs-projects",
  component: _rxjs_projects_rxjs_projects_component__WEBPACK_IMPORTED_MODULE_5__.RxjsProjectsComponent
}, {
  path: "typescript-basics",
  component: _typescript_basics_typescript_basics_component__WEBPACK_IMPORTED_MODULE_6__.TypescriptBasicsComponent
}, {
  path: "angular-pro",
  component: _angular_pro_angular_pro_component__WEBPACK_IMPORTED_MODULE_8__.AngularProComponent
}, {
  path: "**",
  component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__.NotFoundComponent
}];
class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
      imports: [
      // Angular modules
      _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forRoot(routes, {}),
      // Custom modules
      _passenger_dashboard_passenger_dashboard_module__WEBPACK_IMPORTED_MODULE_1__.PassengerDashboardModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent, _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__.NotFoundComponent, _rxjs_basics_rxjs_basics_component__WEBPACK_IMPORTED_MODULE_4__.RxjsBasicsComponent, _rxjs_projects_rxjs_projects_component__WEBPACK_IMPORTED_MODULE_5__.RxjsProjectsComponent, _typescript_basics_typescript_basics_component__WEBPACK_IMPORTED_MODULE_6__.TypescriptBasicsComponent, _angular_pro_auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_7__.AuthFormComponent, _angular_pro_angular_pro_component__WEBPACK_IMPORTED_MODULE_8__.AngularProComponent, _angular_pro_auth_remember_auth_remember_component__WEBPACK_IMPORTED_MODULE_9__.AuthRememberComponent, _angular_pro_auth_message_auth_message_component__WEBPACK_IMPORTED_MODULE_10__.AuthMessageComponent],
    imports: [
    // Angular modules
    _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule,
    // Custom modules
    _passenger_dashboard_passenger_dashboard_module__WEBPACK_IMPORTED_MODULE_1__.PassengerDashboardModule]
  });
})();

/***/ }),

/***/ 3062:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class HomeComponent {
  static {
    this.ɵfac = function HomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HomeComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 2,
      vars: 0,
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "home works!");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdLQUFnSyIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 1064:
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotFoundComponent: () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);


class NotFoundComponent {
  static {
    this.ɵfac = function NotFoundComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NotFoundComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotFoundComponent,
      selectors: [["not-found"]],
      decls: 6,
      vars: 0,
      consts: [["routerLink", "/"]],
      template: function NotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Not found ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div")(4, "a", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Go Home");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxvS0FBb0siLCJzb3VyY2VSb290IjoiIn0= */"]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

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
      },
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXNzZW5nZXItY291bnQuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFzc2VuZ2VyLWRhc2hib2FyZC9wYXNzZW5nZXItY291bnQvcGFzc2VuZ2VyLWNvdW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnTEFBZ0wiLCJzb3VyY2VSb290IjoiIn0= */"]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _passenger_dashboard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./passenger-dashboard.service */ 9828);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _passenger_count_passenger_count_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./passenger-count/passenger-count.component */ 2038);
/* harmony import */ var _passenger_detail_passenger_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./passenger-detail/passenger-detail.component */ 7884);






function PassengerDashboardComponent_div_3_Template(rf, ctx) {
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
function PassengerDashboardComponent_passenger_detail_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "passenger-detail", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("edit", function PassengerDashboardComponent_passenger_detail_4_Template_passenger_detail_edit_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.handleEdit($event));
    })("remove", function PassengerDashboardComponent_passenger_detail_4_Template_passenger_detail_remove_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.handleRemove($event));
    })("view", function PassengerDashboardComponent_passenger_detail_4_Template_passenger_detail_view_0_listener($event) {
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
  constructor(passengerDashboardService, router) {
    this.passengerDashboardService = passengerDashboardService;
    this.router = router;
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
      return new (__ngFactoryType__ || PassengerDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_passenger_dashboard_service__WEBPACK_IMPORTED_MODULE_0__.PassengerDashboardService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: PassengerDashboardComponent,
      selectors: [["passenger-dashboard"]],
      decls: 5,
      vars: 4,
      consts: [[3, "items"], [4, "ngFor", "ngForOf"], [3, "detail", "edit", "remove", "view", 4, "ngFor", "ngForOf"], [3, "edit", "remove", "view", "detail"]],
      template: function PassengerDashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "passenger-count", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PassengerDashboardComponent_div_3_Template, 2, 1, "div", 1)(4, PassengerDashboardComponent_passenger_detail_4_Template, 1, 1, "passenger-detail", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.passenger0 == null ? null : ctx.passenger0.fullName, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", ctx.passengers);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.passengers);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.passengers);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _passenger_count_passenger_count_component__WEBPACK_IMPORTED_MODULE_1__.PassengerCountComponent, _passenger_detail_passenger_detail_component__WEBPACK_IMPORTED_MODULE_2__.PassengerDetailComponent],
      styles: [".status[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  background: red;\n  display: block;\n  margin: 8px 10px 0 0;\n  float: left;\n  border-radius: 50%;\n}\n.status.checked-in[_ngcontent-%COMP%] {\n  background: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc3Nlbmdlci1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUFJO0VBQ0ksaUJBQUE7QUFFUiIsImZpbGUiOiJwYXNzZW5nZXItZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXR1cyB7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIGJhY2tncm91bmQ6IHJlZDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiA4cHggMTBweCAwIDA7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICYuY2hlY2tlZC1pbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogZ3JlZW47XHJcbiAgICB9XHJcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFzc2VuZ2VyLWRhc2hib2FyZC9wYXNzZW5nZXItZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ0o7QUFBSTtFQUNJLGlCQUFBO0FBRVI7QUFDQSx3c0JBQXdzQiIsInNvdXJjZXNDb250ZW50IjpbIi5zdGF0dXMge1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogOHB4IDEwcHggMCAwO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAmLmNoZWNrZWQtaW4ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGdyZWVuO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _passenger_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./passenger-dashboard.component */ 7372);
/* harmony import */ var _passenger_count_passenger_count_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./passenger-count/passenger-count.component */ 2038);
/* harmony import */ var _passenger_detail_passenger_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./passenger-detail/passenger-detail.component */ 7884);
/* harmony import */ var _passenger_dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./passenger-dashboard.service */ 9828);
/* harmony import */ var _passenger_viewer_passenger_viewer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./passenger-viewer/passenger-viewer.component */ 3938);
/* harmony import */ var _passenger_form_passenger_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./passenger-form/passenger-form.component */ 6554);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);













const routes = [{
  path: "passengers",
  children: [{
    path: "",
    component: _passenger_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.PassengerDashboardComponent
  }, {
    path: ":id",
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
      providers: [_passenger_dashboard_service__WEBPACK_IMPORTED_MODULE_3__.PassengerDashboardService, (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.withInterceptorsFromDi)())],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(routes)]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](PassengerDashboardModule, {
    declarations: [_passenger_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.PassengerDashboardComponent, _passenger_count_passenger_count_component__WEBPACK_IMPORTED_MODULE_1__.PassengerCountComponent, _passenger_detail_passenger_detail_component__WEBPACK_IMPORTED_MODULE_2__.PassengerDetailComponent, _passenger_viewer_passenger_viewer_component__WEBPACK_IMPORTED_MODULE_4__.PassengerViewerComponent, _passenger_form_passenger_form_component__WEBPACK_IMPORTED_MODULE_5__.PassengerFormComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule],
    exports: [_passenger_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.PassengerDashboardComponent, _passenger_viewer_passenger_viewer_component__WEBPACK_IMPORTED_MODULE_4__.PassengerViewerComponent]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);



let path = '';
class PassengerDashboardService {
  constructor(httpClient) {
    this.httpClient = httpClient;
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
      return new (__ngFactoryType__ || PassengerDashboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);



function PassengerDetailComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "input", 4, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function PassengerDetailComponent_div_2_Template_input_input_1_listener() {
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
function PassengerDetailComponent_div_3_Template(rf, ctx) {
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
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 16,
      vars: 12,
      consts: [["name", ""], [1, "status"], [4, "ngIf"], [3, "click"], ["type", "text", 3, "input", "value"]],
      template: function PassengerDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PassengerDetailComponent_div_2_Template, 3, 1, "div", 2)(3, PassengerDetailComponent_div_3_Template, 2, 1, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "uppercase");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PassengerDetailComponent_Template_button_click_10_listener() {
            return ctx.toggleEdit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PassengerDetailComponent_Template_button_click_12_listener() {
            return ctx.onRemove();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Remove ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PassengerDetailComponent_Template_button_click_14_listener() {
            return ctx.goToPassenger();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Go To Passenger ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("checked-in", ctx.detail.checkedIn);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editing);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.editing);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Check in Date: ", ctx.detail.checkedInDate ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 7, ctx.detail.checkedInDate, "MMMM d, y")) : "Not checked in", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Children: ", (ctx.detail.children == null ? null : ctx.detail.children.length) || 0, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.editing ? "Done" : "Edit", " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe],
      styles: [".status[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  background: red;\n  display: block;\n  margin: 8px 10px 0 0;\n  float: left;\n  border-radius: 50%;\n}\n.status.checked-in[_ngcontent-%COMP%] {\n  background: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc3Nlbmdlci1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUFJO0VBQ0ksaUJBQUE7QUFFUiIsImZpbGUiOiJwYXNzZW5nZXItZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXR1cyB7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIGJhY2tncm91bmQ6IHJlZDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiA4cHggMTBweCAwIDA7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICYuY2hlY2tlZC1pbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogZ3JlZW47XHJcbiAgICB9XHJcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFzc2VuZ2VyLWRhc2hib2FyZC9wYXNzZW5nZXItZGV0YWlsL3Bhc3Nlbmdlci1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUFJO0VBQ0ksaUJBQUE7QUFFUjtBQUNBLGdzQkFBZ3NCIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXR1cyB7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIGJhY2tncm91bmQ6IHJlZDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiA4cHggMTBweCAwIDA7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICYuY2hlY2tlZC1pbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogZ3JlZW47XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);




function PassengerFormComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Passenger name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PassengerFormComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Passenger name length must be greater than 2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PassengerFormComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Passenger id is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PassengerFormComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Check in date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.detail == null ? null : ctx_r2.detail.checkedInDate);
  }
}
function PassengerFormComponent_option_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 17);
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
function PassengerFormComponent_option_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 18);
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
      decls: 44,
      vars: 34,
      consts: [["form", "ngForm"], ["fullName", "ngModel"], ["id", "ngModel"], ["novalidate", "", 3, "ngSubmit"], ["type", "text", "name", "fullName", "required", "", "minlength", "2", 3, "ngModel"], ["class", "error", 4, "ngIf"], ["type", "number", "name", "id", "required", "", 3, "ngModel"], ["type", "radio", "name", "checkedIn", 3, "ngModelChange", "value", "ngModel"], ["type", "radio", "name", "checkedIn", 3, "value", "ngModel"], ["type", "checkbox", "name", "checkedIn", 3, "ngModelChange", "ngModel"], [4, "ngIf"], ["name", "baggage", 3, "ngModel"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "submit", 3, "disabled"], [1, "error"], ["type", "number", "name", "checkedInDate", 3, "ngModel"], [3, "value", "selected"], [3, "ngValue"]],
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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PassengerFormComponent_div_10_Template, 2, 0, "div", 5)(11, PassengerFormComponent_div_11_Template, 2, 0, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Passenger ID: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 6, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "json");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, PassengerFormComponent_div_18_Template, 2, 0, "div", 5);
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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, PassengerFormComponent_div_29_Template, 3, 1, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Luggage: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "select", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, PassengerFormComponent_option_33_Template, 2, 3, "option", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "select", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, PassengerFormComponent_option_35_Template, 2, 2, "option", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "json");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "json");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "json");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Update passenger ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          const form_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
          const fullName_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
          const id_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 22, ctx.detail), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.detail == null ? null : ctx.detail.fullName);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 24, fullName_r6.errors), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (fullName_r6.errors == null ? null : fullName_r6.errors.required) && fullName_r6.dirty);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (fullName_r6.errors == null ? null : fullName_r6.errors.minlength) && fullName_r6.dirty);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.detail == null ? null : ctx.detail.id);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 26, id_r7.errors), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (id_r7.errors == null ? null : id_r7.errors.required) && id_r7.touched);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true)("ngModel", ctx.detail == null ? null : ctx.detail.checkedIn);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", false)("ngModel", ctx.detail == null ? null : ctx.detail.checkedIn);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.detail == null ? null : ctx.detail.checkedIn);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", form_r2.value.checkedIn);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.detail == null ? null : ctx.detail.baggage);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.baggage);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.detail == null ? null : ctx.detail.baggage);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.baggage);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 28, form_r2.value), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Valid: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](40, 30, form_r2.valid), " \u2022 Invalid: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](41, 32, form_r2.invalid), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", form_r2.invalid);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_1__.JsonPipe],
      styles: ["div[_ngcontent-%COMP%] {\n  margin: 0 0 20px;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: #da6969;\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc3Nlbmdlci1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFDQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBRUoiLCJmaWxlIjoicGFzc2VuZ2VyLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xyXG4gICAgbWFyZ2luOiAwIDAgMjBweDtcclxufVxyXG4uZXJyb3Ige1xyXG4gICAgY29sb3I6ICNkYTY5Njk7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFzc2VuZ2VyLWRhc2hib2FyZC9wYXNzZW5nZXItZm9ybS9wYXNzZW5nZXItZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUVKO0FBQ0EsNGJBQTRiIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcclxuICAgIG1hcmdpbjogMCAwIDIwcHg7XHJcbn1cclxuLmVycm9yIHtcclxuICAgIGNvbG9yOiAjZGE2OTY5O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 5443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1963);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _passenger_dashboard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../passenger-dashboard.service */ 9828);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _passenger_form_passenger_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../passenger-form/passenger-form.component */ 6554);





class PassengerViewerComponent {
  constructor(passengerDashboardService, router, route) {
    this.passengerDashboardService = passengerDashboardService;
    this.router = router;
    this.route = route;
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
    this.route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(data => data)).subscribe(data => {
      console.log(data);
    });
    this.route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(data => data), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(data => this.passengerDashboardService.getPassenger(data.id))).subscribe(data => this.passenger = data);
  }
  static {
    this.ɵfac = function PassengerViewerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PassengerViewerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_passenger_dashboard_service__WEBPACK_IMPORTED_MODULE_0__.PassengerDashboardService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: PassengerViewerComponent,
      selectors: [["passenger-viewer"]],
      decls: 3,
      vars: 1,
      consts: [[3, "click"], [3, "update", "detail"]],
      template: function PassengerViewerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PassengerViewerComponent_Template_button_click_0_listener() {
            return ctx.goBack();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Go Back\n");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "passenger-form", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("update", function PassengerViewerComponent_Template_passenger_form_update_2_listener($event) {
            return ctx.onUpdatePassenger($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("detail", ctx.passenger);
        }
      },
      dependencies: [_passenger_form_passenger_form_component__WEBPACK_IMPORTED_MODULE_1__.PassengerFormComponent],
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXNzZW5nZXItdmlld2VyLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFzc2VuZ2VyLWRhc2hib2FyZC9wYXNzZW5nZXItdmlld2VyL3Bhc3Nlbmdlci12aWV3ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdMQUFnTCIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 4008:
/*!******************************************************!*\
  !*** ./src/app/rxjs-basics/rxjs-basics.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RxjsBasicsComponent: () => (/* binding */ RxjsBasicsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2842);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 7557);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 7498);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6020);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6320);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 1536);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 3956);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 2561);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs */ 9573);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! rxjs */ 4380);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! rxjs */ 757);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! rxjs */ 7405);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! rxjs */ 8824);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! rxjs */ 8757);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 6000);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 5443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 8627);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 3159);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 3602);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 2508);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 6109);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 7504);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 7871);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 7989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 7464);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 9852);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 2614);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 3700);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs/operators */ 9803);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs/operators */ 3962);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! rxjs/operators */ 6687);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! rxjs/operators */ 1403);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! rxjs/operators */ 9314);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! rxjs/operators */ 9450);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! rxjs/operators */ 3107);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! rxjs/operators */ 1963);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! rxjs/operators */ 9003);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! rxjs/operators */ 1493);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! rxjs/operators */ 9273);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! rxjs/operators */ 852);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! rxjs/operators */ 9006);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! rxjs/operators */ 9494);
/* harmony import */ var rxjs_ajax__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! rxjs/ajax */ 2398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/common */ 316);





const _c0 = () => [];
function RxjsBasicsComponent_span_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span")(1, "button", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxjsBasicsComponent_span_57_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.keyCount());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Key Count");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u2022 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function RxjsBasicsComponent_span_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span")(1, "button", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxjsBasicsComponent_span_58_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.mouseClickEvent());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Mouse Event");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u2022 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function RxjsBasicsComponent_span_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span")(1, "button", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxjsBasicsComponent_span_59_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.keyCodes());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Key Codes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u2022 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function RxjsBasicsComponent_span_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span")(1, "button", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxjsBasicsComponent_span_60_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.scrollBar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u2022 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.subscribed ? "Unsubscribe" : "Scroll Bar");
  }
}
function RxjsBasicsComponent_div_63_br_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
  }
}
function RxjsBasicsComponent_div_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RxjsBasicsComponent_div_63_br_1_Template, 1, 0, "br", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0).constructor(100));
  }
}
class RxjsBasicsComponent {
  constructor() {
    this.amount = 0;
    this.consoleString = '';
    this.counter = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription();
    this.eventSub = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription();
    this.displayCount = false;
    this.displayMouse = false;
    this.displayKeys = false;
    this.displayText = false;
    this.theCountdown = '';
    this.keyup$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(document, 'keyup');
    this.subscribed = false;
    this.timeSub = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription();
  }
  ngOnInit() {
    this.amount = 0;
    this.consoleString = '';
    this.counter = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription();
    this.eventSub = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription();
    this.observer = {
      next: val => console.log(this.consoleString, val),
      error: err => console.log('error', err),
      complete: () => console.log('complete')
    };
    this.displayCount = true;
    this.displayMouse = true;
    this.displayKeys = true;
    this.displayText = false;
    this.theCountdown = '10';
    this.subscribed = false;
  }
  helloWorld() {
    const observable1 = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable(subscriber => {
      subscriber.next('Hello');
      subscriber.next('World');
      subscriber.complete();
    });
    console.log('before');
    this.consoleString = 'helloWorld';
    observable1.subscribe(this.observer).unsubscribe();
    console.log('after');
  }
  setTimeout() {
    setTimeout(() => {
      console.log('timeout');
    }, 3000);
  }
  countOnce() {
    this.consoleString = 'countOnce';
    const observable2 = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable(subscriber => {
      let count = 0;
      const id = setInterval(() => {
        subscriber.next(count);
        subscriber.complete();
        count++;
      }, 1000);
      return () => {
        console.log('cleanup method');
        clearInterval(id);
      };
    });
    this.counter = observable2.subscribe(this.observer);
  }
  intervalTimer() {
    this.consoleString = 'intervalTimer';
    const timer$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.interval)(1000);
    const timerSub = timer$.subscribe(this.observer);
    const timer2$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.timer)(8000, 1000);
    const timerSub2 = timer2$.subscribe(console.log);
    setTimeout(() => {
      timerSub.unsubscribe();
      timerSub2.unsubscribe();
    }, 10000);
  }
  fetch() {
    const fetchedPromise = fetch('https://api.github.com/users/octocat');
    fetchedPromise.then(data => {
      console.log(data.json());
    });
  }
  ofSubscription() {
    this.consoleString = 'ofSubscription';
    const source2$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(11, 12, 13, 14, 15);
    const sub = source2$.subscribe(this.observer);
    sub.unsubscribe();
  }
  range() {
    this.consoleString = 'range';
    const source3$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.range)(100, 5);
    source3$.subscribe(this.observer).unsubscribe();
  }
  from() {
    this.consoleString = 'from';
    const source4$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.from)([21, 22, 23, 24, 25]);
    source4$.subscribe(this.observer).unsubscribe();
  }
  ofPipe() {
    this.consoleString = 'ofPipe';
    (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(1, 2, 3, 4, 5).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(value => console.log('before', value)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(value => value * 10), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)({
      next: value => console.log('after', value),
      complete: () => console.log('done')
    })).subscribe(this.observer).unsubscribe();
  }
  ofFilter() {
    this.consoleString = 'ofFilter';
    (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(30, 31, 32, 33, 34, 35).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(value => value > 32)).subscribe(this.observer).unsubscribe();
  }
  reducer() {
    this.consoleString = 'reducer';
    const numbers = [1, 2, 3, 4, 5];
    const totalReducer = (accumulator, currentValue) => accumulator + currentValue;
    const total = numbers.reduce(totalReducer);
    console.log(total);
    (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.from)(numbers).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.reduce)(totalReducer)).subscribe(this.observer).unsubscribe();
    const obs = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.interval)(100).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(4), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.reduce)(totalReducer)).subscribe(this.observer);
    setTimeout(() => {
      obs.unsubscribe();
    }, 1000);
  }
  scan() {
    this.consoleString = 'scan';
    (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.from)([1, 2, 3, 4, 5]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.scan)((accumulator, currentValue) => accumulator + currentValue, 0)).subscribe(this.observer).unsubscribe();
    const user = [{
      name: 'Brian',
      loggedIn: false,
      token: ''
    }, {
      name: 'Brian',
      loggedIn: true,
      token: 'abc'
    }, {
      name: 'Brian',
      loggedIn: true,
      token: '123'
    }];
    const state$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.from)(user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.scan)((accumulator, currentValue) => ({
      ...accumulator,
      ...currentValue
    }), {}));
    state$.subscribe(this.observer).unsubscribe();
    (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.from)(user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(state => state.name), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.distinctUntilChanged)()).subscribe(console.log).unsubscribe();
    (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.from)(user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.distinctUntilKeyChanged)('name'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(state => state.name)).subscribe(console.log).unsubscribe();
  }
  take() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(1, 2, 3, 4, 5).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(3)).subscribe({
      next: console.log,
      complete: () => console.log('complete')
    });
    (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(document, 'click').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(event => event), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(event => ({
      x: event.clientX,
      y: event.clientY
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(1)).subscribe({
      next: console.log,
      complete: () => console.log('complete')
    });
    (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(document, 'click').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(event => event), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(event => ({
      x: event.clientX,
      y: event.clientY
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.first)(({
      y
    }) => y > 500)).subscribe({
      next: console.log,
      complete: () => console.log('complete')
    });
    const randomNum = Math.floor(Math.random() * 1000);
    document.getElementById('take').style.top = randomNum + 'px';
  }
  takeWhile() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(document, 'click').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(event => event), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(event => ({
      x: event.clientX,
      y: event.clientY
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.takeWhile)(({
      y
    }) => y <= 800, true)).subscribe({
      next: console.log,
      complete: () => console.log('complete')
    });
  }
  takeUntil() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.interval)(1000).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.takeUntil)((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(document, 'keyup'))).subscribe(console.log);
  }
  distinctUntilChanged() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(1, 1, 2, 3).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.distinctUntilChanged)()).subscribe(console.log).unsubscribe();
  }
  keyCount() {
    this.displayCount = false;
    this.eventSub.add(this.keyup$.subscribe(observer1 => {
      this.amount++;
      console.log(observer1);
      console.log(this.amount, 'keyCount');
    }));
  }
  mouseClickEvent() {
    this.displayMouse = false;
    this.consoleString = 'mouseClickEvent';
    const source1$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(document, 'click');
    const subOne = source1$.subscribe(this.observer);
    this.eventSub.add(source1$.subscribe(this.observer));
    setTimeout(() => {
      console.log('unsubscribing one click event');
      subOne.unsubscribe();
    }, 5000);
  }
  keyCodes() {
    this.displayKeys = false;
    const keyCodeMap$ = this.keyup$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(event => event), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(event => event.code));
    this.eventSub.add(keyCodeMap$.subscribe(console.log));
    const keyCodePluck$ = this.keyup$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.pluck)('code'));
    this.eventSub.add(keyCodePluck$.subscribe(console.log));
    const keyCodeMapTo$ = this.keyup$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.mapTo)('keyPressed'));
    this.eventSub.add(keyCodeMapTo$.subscribe(console.log));
    const enter$ = this.keyup$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(event => event), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(code => code.code === 'Enter'));
    this.eventSub.add(enter$.subscribe(console.log));
  }
  scrollBar() {
    if (this.subscribed === false) {
      this.displayText = true;
      const scroll$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(document, 'scroll');
      const progress$ = scroll$.pipe(
      // same as auditTime(30)
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.throttleTime)(30, rxjs__WEBPACK_IMPORTED_MODULE_23__.async, {
        leading: false,
        trailing: true
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(() => {
        const {
          scrollTop,
          scrollHeight,
          clientHeight
        } = document.documentElement;
        return scrollTop / (scrollHeight - clientHeight) * 100;
      }));
      const progressBar = document.querySelector('.progress-bar');
      this.eventSub.add(progress$.subscribe(percent => {
        progressBar.setAttribute('style', 'width: ' + percent + '%');
      }));
    } else {
      this.eventSub.unsubscribe();
      this.displayText = false;
    }
    this.subscribed = !this.subscribed;
  }
  restartEvents() {
    this.eventSub.unsubscribe();
    this.displayCount = true;
    this.displayMouse = true;
    this.displayKeys = true;
    this.displayText = false;
    this.eventSub = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription();
  }
  countdown() {
    const abortButton = document.getElementById('abort');
    (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.interval)(1000).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.mapTo)(-1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.scan)((accumulator, current) => accumulator + current, 10), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.takeWhile)(value => value >= 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.takeUntil)((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(abortButton, 'click'))).subscribe(value => {
      this.theCountdown = '' + value;
      if (!value) {
        this.theCountdown = 'LIFTOFF';
      }
    });
  }
  debounceTime() {
    this.genericTime((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.debounceTime)(1000));
  }
  throttleTime() {
    this.genericTime((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.throttleTime)(1000));
  }
  sampleTime() {
    this.genericTime((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.sampleTime)(1000));
  }
  sample() {
    this.genericTime((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.sample)((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.interval)(1000)));
  }
  auditTime() {
    this.genericTime((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_27__.auditTime)(1000));
  }
  genericTime(style) {
    if (this.subscribed === false) {
      this.timeSub = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(document, 'click').pipe(style, (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(event => ({
        x: event.clientX,
        y: event.clientY
      }))).subscribe(console.log);
      this.timeSub.add((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(document.getElementById('timeText'), 'keyup').pipe(style, (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.pluck)('target', 'value'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.distinctUntilChanged)()).subscribe(console.log));
    } else {
      this.timeSub.unsubscribe();
    }
    this.subscribed = !this.subscribed;
  }
  ajax() {
    if (this.subscribed === false) {
      this.timeSub = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(document.getElementById('timeText'), 'keyup').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.debounceTime)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.pluck)('target', 'value'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(event => rxjs_ajax__WEBPACK_IMPORTED_MODULE_28__.ajax.getJSON('http://localhost:3000/passengers/' + event).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.catchError)(() => rxjs__WEBPACK_IMPORTED_MODULE_30__.EMPTY))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_31__.mergeAll)()).subscribe(console.log);
      this.timeSub.add((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(document.getElementById('timeText'), 'keyup').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.debounceTime)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.pluck)('target', 'value'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_32__.mergeMap)(event => rxjs_ajax__WEBPACK_IMPORTED_MODULE_28__.ajax.getJSON('https://api.github.com/users/' + event).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.catchError)(() => rxjs__WEBPACK_IMPORTED_MODULE_30__.EMPTY)))).subscribe(console.log));
    } else {
      this.timeSub.unsubscribe();
    }
    this.subscribed = !this.subscribed;
  }
  mergeMap() {
    if (this.subscribed === false) {
      this.timeSub = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(document, 'mousedown').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_32__.mergeMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.interval)(1000).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.takeUntil)((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(document, 'mouseup'))))).subscribe(console.log);
      this.timeSub.add((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(document, 'click').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(event => event), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(event => ({
        x: event.clientX,
        y: event.clientY
      }))).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_32__.mergeMap)(coords => rxjs_ajax__WEBPACK_IMPORTED_MODULE_28__.ajax.post('https://run.mocky.io/v3/4cd66c07-e46c-425d-94ec-a53724bdc1ec', coords).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.catchError)(() => rxjs__WEBPACK_IMPORTED_MODULE_30__.EMPTY)))).subscribe(console.log));
    } else {
      this.timeSub.unsubscribe();
    }
    this.subscribed = !this.subscribed;
  }
  switchMap() {
    const baseUrl = 'https://api.openbrewerydb.org/breweries';
    const typeaheadBox = document.getElementById('typeahead');
    if (this.subscribed === false) {
      this.timeSub = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(document, 'click').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_33__.switchMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.interval)(1000).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(10)))).subscribe(console.log);
      this.timeSub.add((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(document.getElementById('timeText'), 'keyup').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.debounceTime)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.pluck)('target', 'value'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(searchTerm => searchTerm), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_33__.switchMap)(searchTerm => rxjs_ajax__WEBPACK_IMPORTED_MODULE_28__.ajax.getJSON(baseUrl + '?by_name=' + searchTerm).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.catchError)(() => rxjs__WEBPACK_IMPORTED_MODULE_30__.EMPTY)))).subscribe(response => {
        typeaheadBox.innerHTML = response.map(b => b.name).join('<br>');
      }));
    } else {
      this.timeSub.unsubscribe();
    }
    this.subscribed = !this.subscribed;
  }
  concatMap() {
    if (this.subscribed === false) {
      this.timeSub = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(document, 'click').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_34__.concatMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.interval)(1000).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(3)))).subscribe(console.log);
    } else {
      this.timeSub.unsubscribe();
    }
    this.subscribed = !this.subscribed;
  }
  exhaustMap() {
    if (this.subscribed === false) {
      this.timeSub = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(document, 'click').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_35__.exhaustMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.interval)(1000).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(3)))).subscribe(console.log);
    } else {
      this.timeSub.unsubscribe();
    }
    this.subscribed = !this.subscribed;
  }
  startWith() {
    if (this.subscribed === false) {
      const numbers = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(1, 2, 3);
      this.timeSub = numbers.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_36__.startWith)('a', 'b'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_37__.endWith)('c', 'd')).subscribe(console.log);
    } else {
      this.timeSub.unsubscribe();
    }
    this.subscribed = !this.subscribed;
  }
  concat() {
    if (this.subscribed === false) {
      const interval$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.interval)(1000);
      this.timeSub = (0,rxjs__WEBPACK_IMPORTED_MODULE_38__.concat)(interval$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(3)), interval$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(2))).subscribe(console.log);
    } else {
      this.timeSub.unsubscribe();
    }
    this.subscribed = !this.subscribed;
  }
  merge() {
    if (this.subscribed === false) {
      this.timeSub = (0,rxjs__WEBPACK_IMPORTED_MODULE_39__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(document, 'keyup'), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(document, 'click')).subscribe(console.log);
    } else {
      this.timeSub.unsubscribe();
    }
    this.subscribed = !this.subscribed;
  }
  countdown2() {
    const startButton = document.getElementById('countdown2');
    const pauseButton = document.getElementById('abort2');
    (0,rxjs__WEBPACK_IMPORTED_MODULE_39__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(startButton, 'click').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.mapTo)(true)), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(pauseButton, 'click').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.mapTo)(false))).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_33__.switchMap)(shouldStart => shouldStart ? (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.interval)(1000) : rxjs__WEBPACK_IMPORTED_MODULE_30__.EMPTY), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.mapTo)(-1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.scan)((accumulator, current) => accumulator + current, 10), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.takeWhile)(value => value >= 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_36__.startWith)(10)).subscribe(value => {
      this.theCountdown = '' + value;
      if (!value) {
        this.theCountdown = 'LIFTOFF';
      }
    });
    if (this.subscribed === false) {
      this.subscribed = true;
    }
  }
  combineLatest() {
    if (this.subscribed === false) {
      const firstElem = document.getElementById('first');
      const secondElem = document.getElementById('second');
      this.timeSub = (0,rxjs__WEBPACK_IMPORTED_MODULE_40__.combineLatest)([(0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(document, 'keyup'), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(document, 'click')]).subscribe(console.log);
      const keyupAsValue = elem => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(elem, 'keyup').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(event => event.target.valueAsNumber));
      this.timeSub = (0,rxjs__WEBPACK_IMPORTED_MODULE_40__.combineLatest)([keyupAsValue(firstElem), keyupAsValue(secondElem)]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(([firstNum, secondNum]) => !isNaN(firstNum) && !isNaN(secondNum)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(([firstOperand, secondOperand]) => firstOperand + secondOperand)).subscribe(console.log);
    } else {
      this.timeSub.unsubscribe();
    }
    this.subscribed = !this.subscribed;
  }
  withLatestFrom() {
    if (this.subscribed === false) {
      this.timeSub = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(document, 'click').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_41__.withLatestFrom)((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.interval)(1000))).subscribe(console.log);
    } else {
      this.timeSub.unsubscribe();
    }
    this.subscribed = !this.subscribed;
  }
  forkJoin() {
    if (this.subscribed === false) {
      this.timeSub = (0,rxjs__WEBPACK_IMPORTED_MODULE_42__.forkJoin)({
        numbers: (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(1, 2, 3),
        letters: (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)('a', 'b', 'c').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_43__.delay)(2000))
      }).subscribe(console.log);
      this.timeSub = (0,rxjs__WEBPACK_IMPORTED_MODULE_42__.forkJoin)({
        user: rxjs_ajax__WEBPACK_IMPORTED_MODULE_28__.ajax.getJSON('https://api.github.com/users/reactivex'),
        repo: rxjs_ajax__WEBPACK_IMPORTED_MODULE_28__.ajax.getJSON('https://api.github.com/users/reactivex/repos')
      }).subscribe(console.log);
    } else {
      this.timeSub.unsubscribe();
    }
    this.subscribed = !this.subscribed;
  }
  ngOnDestroy() {
    this.counter.unsubscribe();
    this.eventSub.unsubscribe();
  }
  static {
    this.ɵfac = function RxjsBasicsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || RxjsBasicsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RxjsBasicsComponent,
      selectors: [["rxjs-basics"]],
      decls: 136,
      vars: 25,
      consts: [[3, "click"], ["id", "take", 3, "click"], [4, "ngIf"], ["id", "abort"], ["id", "timeText"], ["title", "Get and return JSON api request responses", 3, "click"], ["title", "Start on each run", 3, "click"], ["title", "Restart on each run", 3, "click"], ["title", "Queue onto the end of each run", 3, "click"], ["title", "Complete current run, then allow a new one to start", 3, "click"], ["id", "typeahead"], ["title", "Start and end with specified values", 3, "click"], ["title", "Order events to run one after another", 3, "click"], ["title", "Include latest value from stream that is passed in", 3, "click"], ["title", "Combine latest values before emitting", 3, "click"], ["id", "countdown2", 3, "click"], ["id", "abort2"], ["title", "Emit latest values when all passed observables have fired at least once", 3, "click"], ["type", "number", "id", "first"], ["type", "number", "id", "second"], [4, "ngFor", "ngForOf"]],
      template: function RxjsBasicsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " General: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxjsBasicsComponent_Template_button_click_4_listener() {
            return ctx.helloWorld();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Hello World");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u2022 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxjsBasicsComponent_Template_button_click_7_listener() {
            return ctx.setTimeout();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Set Timeout");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u2022 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxjsBasicsComponent_Template_button_click_10_listener() {
            return ctx.countOnce();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Count Once");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u2022 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxjsBasicsComponent_Template_button_click_13_listener() {
            return ctx.intervalTimer();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Interval Timer");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \u2022 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxjsBasicsComponent_Template_button_click_16_listener() {
            return ctx.fetch();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Fetch");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br")(19, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Looping: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxjsBasicsComponent_Template_button_click_21_listener() {
            return ctx.ofSubscription();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Of Subscription");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " \u2022 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxjsBasicsComponent_Template_button_click_24_listener() {
            return ctx.range();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Range");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " \u2022 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxjsBasicsComponent_Template_button_click_27_listener() {
            return ctx.from();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "From");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " \u2022 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxjsBasicsComponent_Template_button_click_30_listener() {
            return ctx.ofPipe();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Of Pipe");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " \u2022 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxjsBasicsComponent_Template_button_click_33_listener() {
            return ctx.ofFilter();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Of Filter");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " \u2022 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxjsBasicsComponent_Template_button_click_36_listener() {
            return ctx.reducer();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Reducer");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " \u2022 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxjsBasicsComponent_Template_button_click_39_listener() {
            return ctx.scan();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Scan");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " \u2022 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxjsBasicsComponent_Template_button_click_42_listener() {
            return ctx.take();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Take");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br")(45, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxjsBasicsComponent_Template_button_click_46_listener() {
            return ctx.takeWhile();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Take While");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " \u2022 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxjsBasicsComponent_Template_button_click_49_listener() {
            return ctx.takeUntil();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Take Until");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " \u2022 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxjsBasicsComponent_Template_button_click_52_listener() {
            return ctx.distinctUntilChanged();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Distinct Until Changed");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br")(55, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Event: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, RxjsBasicsComponent_span_57_Template, 4, 0, "span", 2)(58, RxjsBasicsComponent_span_58_Template, 4, 0, "span", 2)(59, RxjsBasicsComponent_span_59_Template, 4, 0, "span", 2)(60, RxjsBasicsComponent_span_60_Template, 4, 1, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxjsBasicsComponent_Template_button_click_61_listener() {
            return ctx.restartEvents();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Restart Events");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, RxjsBasicsComponent_div_63_Template, 2, 2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br")(65, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxjsBasicsComponent_Template_button_click_66_listener() {
            return ctx.countdown();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Countdown");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Abort Mission");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "hr")(72, "input", 4)(73, "br")(74, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Rate Limiting: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "button", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxjsBasicsComponent_Template_button_click_76_listener() {
            return ctx.debounceTime();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " \u2022 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "button", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxjsBasicsComponent_Template_button_click_79_listener() {
            return ctx.throttleTime();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " \u2022 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "button", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxjsBasicsComponent_Template_button_click_82_listener() {
            return ctx.sampleTime();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " \u2022 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "button", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxjsBasicsComponent_Template_button_click_85_listener() {
            return ctx.sample();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " \u2022 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "button", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxjsBasicsComponent_Template_button_click_88_listener() {
            return ctx.auditTime();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "br")(91, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Transformation: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxjsBasicsComponent_Template_button_click_93_listener() {
            return ctx.ajax();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " \u2022 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxjsBasicsComponent_Template_button_click_96_listener() {
            return ctx.mergeMap();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " \u2022 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxjsBasicsComponent_Template_button_click_99_listener() {
            return ctx.switchMap();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " \u2022 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxjsBasicsComponent_Template_button_click_102_listener() {
            return ctx.concatMap();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " \u2022 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxjsBasicsComponent_Template_button_click_105_listener() {
            return ctx.exhaustMap();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "br")(108, "br")(109, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " Combination Operators: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxjsBasicsComponent_Template_button_click_111_listener() {
            return ctx.startWith();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxjsBasicsComponent_Template_button_click_113_listener() {
            return ctx.concat();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxjsBasicsComponent_Template_button_click_115_listener() {
            return ctx.merge();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxjsBasicsComponent_Template_button_click_117_listener() {
            return ctx.withLatestFrom();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxjsBasicsComponent_Template_button_click_119_listener() {
            return ctx.forkJoin();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "br")(122, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxjsBasicsComponent_Template_button_click_123_listener() {
            return ctx.countdown2();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Abort Mission");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "br")(129, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxjsBasicsComponent_Template_button_click_130_listener() {
            return ctx.combineLatest();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "input", 18)(133, "input", 19)(134, "br")(135, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Button presses: ", ctx.amount, "\n");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](56);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayCount);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayMouse);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayKeys);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayKeys);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayText);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.theCountdown, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.subscribed ? "Unsubscribe" : "Debounce Time");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.subscribed ? "Unsubscribe" : "Throttle Time");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.subscribed ? "Unsubscribe" : "Sample Time");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.subscribed ? "Unsubscribe" : "Sample");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.subscribed ? "Unsubscribe" : "Audit Time");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.subscribed ? "Unsubscribe" : "Ajax", "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.subscribed ? "Unsubscribe" : "Merge Map", "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.subscribed ? "Unsubscribe" : "Switch Map", "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.subscribed ? "Unsubscribe" : "Concat Map", "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.subscribed ? "Unsubscribe" : "Exhaust Map", "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.subscribed ? "Unsubscribe" : "Start With", "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.subscribed ? "Unsubscribe" : "Concat", "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.subscribed ? "Unsubscribe" : "Merge", "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.subscribed ? "Unsubscribe" : "With Latest From", "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.subscribed ? "Unsubscribe" : "Fork Join", "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.subscribed ? "Start" : "Countdown");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.theCountdown, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.subscribed ? "Unsubscribe" : "Combine Latest", "");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_44__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_44__.NgIf],
      styles: ["button[_ngcontent-%COMP%] {\n  background: #3a4250;\n  padding: 4px 10px;\n  margin: 0 2px;\n  border-radius: 2px;\n  min-width: 100px;\n}\n\ndiv[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n#take[_ngcontent-%COMP%] {\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ4anMtYmFzaWNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtBQUVKOztBQUFBO0VBQ0ksa0JBQUE7QUFHSiIsImZpbGUiOiJyeGpzLWJhc2ljcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjM2E0MjUwO1xyXG4gICAgcGFkZGluZzogNHB4IDEwcHg7XHJcbiAgICBtYXJnaW46IDAgMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgbWluLXdpZHRoOiAxMDBweDtcclxufVxyXG5kaXYge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiN0YWtlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcnhqcy1iYXNpY3Mvcnhqcy1iYXNpY3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0FBRUo7O0FBQUE7RUFDSSxrQkFBQTtBQUdKO0FBQ0EsNHFCQUE0cUIiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDogIzNhNDI1MDtcclxuICAgIHBhZGRpbmc6IDRweCAxMHB4O1xyXG4gICAgbWFyZ2luOiAwIDJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbn1cclxuZGl2IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4jdGFrZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 4268:
/*!**********************************************************!*\
  !*** ./src/app/rxjs-projects/rxjs-projects.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RxjsProjectsComponent: () => (/* binding */ RxjsProjectsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2842);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 7557);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6320);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 8824);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 1493);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 2590);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9852);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 7464);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 5443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 6000);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 8627);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 8690);
/* harmony import */ var rxjs_ajax__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/ajax */ 2398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 7580);




class RxjsProjectsComponent {
  constructor() {
    this.subscribed = false;
    this.timeSub = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subscription();
    this.polling = false;
  }
  ngOnInit() {
    this.subscribed = false;
    this.polling = false;
  }
  dogSub() {
    if (this.subscribed === false) {
      const dogImage = document.getElementById('dog');
      const dogVideo = document.getElementById('dogVid');
      this.timeSub = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(document.getElementById('dogStart'), 'click').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.exhaustMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.timer)(0, 5000).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMapTo)(rxjs_ajax__WEBPACK_IMPORTED_MODULE_5__.ajax.getJSON('https://random.dog/woof.json').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.pluck)('url'))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(document.getElementById('dogStop'), 'click'))))).subscribe(url => {
        if (url.includes('.mp4')) {
          dogVideo.src = url;
        } else {
          dogImage.src = url;
        }
      });
    } else {
      this.timeSub.unsubscribe();
    }
    this.subscribed = !this.subscribed;
  }
  dogStart() {
    if (this.polling === false) {
      this.polling = true;
    }
  }
  dogStop() {
    if (this.polling === true) {
      this.polling = false;
    }
  }
  calculateMortgage(interest, loanAmount, loanLength) {
    const calculatedInterest = interest / 1200;
    const total = loanAmount * calculatedInterest / (1 - Math.pow(1 / (1 + calculatedInterest), loanLength));
    return total.toFixed(2);
  }
  mortgageSub() {
    if (this.subscribed === false) {
      const loanAmount = document.getElementById('loanAmount');
      const interest = document.getElementById('interest');
      const loanLength = document.querySelectorAll('.loanLength');
      const expected = document.getElementById('expected');
      const createInputValueStream = elem => (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(elem, 'input').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(event => parseFloat(event.target.value)));
      const interest$ = createInputValueStream(interest);
      const loanLength$ = createInputValueStream(loanLength);
      const loanAmount$ = createInputValueStream(loanAmount);
      /* const observable = combineLatest([interest$, loanAmount$, loanLength$]).pipe(
      map(([interestTemp, loanAmountTemp, loanLengthTemp]) => {
      return this.calculateMortgage(interestTemp, loanAmountTemp, loanLengthTemp);
      }),
      tap(console.log),
      filter(mortgageAmount => !isNaN(Number(mortgageAmount))),
      share()
      );
      observable.subscribe(mortgageAmount => {
      expected.innerHTML = mortgageAmount;
      });
      observable.pipe(
      mergeMap(mortgageAmount => of(mortgageAmount).pipe(delay(1000)))
      ).subscribe();*/
      this.timeSub = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([interest$, loanAmount$, loanLength$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(([interestTemp, loanAmountTemp, loanLengthTemp]) => this.calculateMortgage(interestTemp, loanAmountTemp, loanLengthTemp)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(console.log), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(mortgageAmount => !isNaN(Number(mortgageAmount))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.share)()).subscribe(mortgageAmount => {
        expected.innerHTML = mortgageAmount;
      });
    } else {
      this.timeSub.unsubscribe();
    }
    this.subscribed = !this.subscribed;
  }
  static {
    this.ɵfac = function RxjsProjectsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || RxjsProjectsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
      type: RxjsProjectsComponent,
      selectors: [["rxjs-projects"]],
      decls: 39,
      vars: 3,
      consts: [["title", "Start dog subscription", "id", "dogSub", 3, "click"], ["title", "Start and stop dog polling", "id", "dogStart", 3, "click"], ["title", "Start and stop dog polling", "id", "dogStop", 3, "click"], ["id", "dog", "alt", "dog", "src", "https://random.dog/967eae80-8f34-490b-944c-4f6bd4697712.jpeg", 2, "height", "190px"], ["id", "dogVid", "alt", "dog", "src", "https://random.dog/c494d883-9a34-4d8d-b0b3-449069c30f23.mp4", "autoplay", "", "loop", "", 2, "height", "190px"], ["label", "English", "kind", "subtitles"], ["title", "Start mortgage subscription", "id", "mortgageSub", 3, "click"], ["for", "loanAmount"], ["type", "number", "name", "loanAmount", "id", "loanAmount"], ["for", "interest"], ["type", "number", "name", "interest", "id", "interest"], ["for", "loanLength"], ["type", "radio", "name", "loanLength", "value", "180", 1, "loanLength"], ["type", "radio", "name", "loanLength", "value", "360", 1, "loanLength"], ["id", "expected"]],
      template: function RxjsProjectsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](0, "Dog Polling:");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "button", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function RxjsProjectsComponent_Template_button_click_2_listener() {
            return ctx.dogSub();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "button", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function RxjsProjectsComponent_Template_button_click_4_listener() {
            return ctx.dogStart();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "Start Polling");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function RxjsProjectsComponent_Template_button_click_6_listener() {
            return ctx.dogStop();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7, "Stop Polling");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](9, "br")(10, "br")(11, "img", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "video", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](13, "track", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](14, "br")(15, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16, "\nMortgage Calculator:");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](17, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function RxjsProjectsComponent_Template_button_click_18_listener() {
            return ctx.mortgageSub();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](20, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "label", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](22, "Mortgage Amount ($)");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](23, "input", 8)(24, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](25, "label", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](26, "Interest Rate (%)");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](27, "input", 10)(28, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](29, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](30, "Mortgage Length");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](31, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](32, " 15 yr\n");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](33, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](34, " 30 yr\n");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](35, "br")(36, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](37, "\nYour expected monthly payment is:\n$");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](38, "strong", 14);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx.subscribed ? "Unsub" : "Dog Sub", "");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("\nPolling: ", ctx.polling, "\n");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx.subscribed ? "Unsub" : "Mortgage Sub", "");
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyeGpzLXByb2plY3RzLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcnhqcy1wcm9qZWN0cy9yeGpzLXByb2plY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSw0S0FBNEsiLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 428:
/*!******************************************************************!*\
  !*** ./src/app/typescript-basics/typescript-basics.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TypescriptBasicsComponent: () => (/* binding */ TypescriptBasicsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class TypescriptBasicsComponent {
  constructor() {
    this.subscribed = false;
  }
  multiplier() {
    function multiply(a, b = 5) {
      return a * b;
    }
    console.log(multiply(5, 10));
    console.log(multiply(5));
  }
  createOrder() {
    const pizza = {
      name: 'Pepperoni',
      price: 15,
      getName: function () {
        return this.name;
      }
    };
    const toppings = ['pepperoni'];
    function makeOrder(pizzaParam, toppingsParam) {
      return {
        pizzaParam,
        toppingsParam
      };
    }
    console.log(makeOrder(pizza, toppings));
    console.log(pizza.getName());
  }
  sumAll() {
    function addAll(message, ...arr) {
      console.log(message);
      console.log(arguments);
      return arr.reduce((prev, next) => prev + next);
    }
    console.log(addAll('Hello', 1, 2, 3));
  }
  concatArrays() {
    const toppings = ['bacon', 'chili'];
    const newToppings = ['pepperoni'];
    const allToppings = [...toppings, ...newToppings];
    console.log(allToppings);
  }
  spreadOperator() {
    const pizza = {
      name: 'Pepperoni'
    };
    const toppings = ['Pepperoni'];
    const spreadOrder = {
      ...pizza,
      toppings
    };
    console.log(spreadOrder);
  }
  destructure() {
    const pizza = {
      name: 'Pepperoni',
      toppings: ['Pepperoni']
    };
    function order({
      name: pizzaName,
      toppings: pizzaToppings
    }) {
      return {
        pizzaName,
        pizzaToppings
      };
    }
    console.log(order(pizza));
    const {
      pizzaName
    } = order(pizza);
    console.log(pizzaName);
    const toppings = ['pepperoni', 'bacon', 'chili'];
    const [first, second, third] = toppings;
    console.log(first, second, third);
    function logToppings([first, second, third]) {
      console.log(first, second, third);
    }
    logToppings(toppings);
  }
  allowNull() {
    let coupon = 'pizza';
    function removeCoupon() {
      coupon = null;
    }
    console.log(coupon);
    removeCoupon();
    console.log(coupon);
  }
  literalTypes() {
    let pizzaSize = 'small';
    function selectSize(size) {
      pizzaSize = size;
    }
    console.log(pizzaSize);
    selectSize('large');
    console.log(pizzaSize);
  }
  functionTypes() {
    const sumOrder = (x, y) => x * y;
    const sum = sumOrder(25, 2);
    console.log(sum);
  }
  static {
    this.ɵfac = function TypescriptBasicsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TypescriptBasicsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TypescriptBasicsComponent,
      selectors: [["typescript-basics"]],
      decls: 21,
      vars: 9,
      consts: [["title", "Parameters can be assigned a default value in case one is not passed in", 3, "click"], ["title", "Pass parameters to a function call", 3, "click"], ["title", "Add all the passed in parameters", 3, "click"], ["title", "Combine arrays", 3, "click"], ["title", "Spread operator", 3, "click"], ["title", "Destructure arrays and objects", 3, "click"], ["title", "Allow passing a string or null to a function", 3, "click"], ["title", "Only allow specific values to be passed in", 3, "click"], ["title", "Set function to a variable", 3, "click"]],
      template: function TypescriptBasicsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "button", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TypescriptBasicsComponent_Template_button_click_1_listener() {
            return ctx.multiplier();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TypescriptBasicsComponent_Template_button_click_3_listener() {
            return ctx.createOrder();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TypescriptBasicsComponent_Template_button_click_5_listener() {
            return ctx.sumAll();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TypescriptBasicsComponent_Template_button_click_7_listener() {
            return ctx.concatArrays();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TypescriptBasicsComponent_Template_button_click_9_listener() {
            return ctx.spreadOperator();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br")(12, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TypescriptBasicsComponent_Template_button_click_13_listener() {
            return ctx.destructure();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TypescriptBasicsComponent_Template_button_click_15_listener() {
            return ctx.allowNull();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TypescriptBasicsComponent_Template_button_click_17_listener() {
            return ctx.literalTypes();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TypescriptBasicsComponent_Template_button_click_19_listener() {
            return ctx.functionTypes();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.subscribed ? "Unsubscribe" : "Default Function Parameters", "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.subscribed ? "Unsubscribe" : "Create Order", "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.subscribed ? "Unsubscribe" : "Sum All", "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.subscribed ? "Unsubscribe" : "Concat Arrays", "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.subscribed ? "Unsubscribe" : "Spread Operator", "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.subscribed ? "Unsubscribe" : "Destructure", "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.subscribed ? "Unsubscribe" : "Allow Null", "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.subscribed ? "Unsubscribe" : "Literal Types", "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.subscribed ? "Unsubscribe" : "Function Types", "");
        }
      },
      styles: ["button[_ngcontent-%COMP%] {\n  background: #3a4250;\n  padding: 4px 10px;\n  margin: 0 2px;\n  border-radius: 2px;\n}\n\ndiv[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR5cGVzY3JpcHQtYmFzaWNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7QUFFSiIsImZpbGUiOiJ0eXBlc2NyaXB0LWJhc2ljcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjM2E0MjUwO1xyXG4gICAgcGFkZGluZzogNHB4IDEwcHg7XHJcbiAgICBtYXJnaW46IDAgMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcbmRpdiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdHlwZXNjcmlwdC1iYXNpY3MvdHlwZXNjcmlwdC1iYXNpY3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtBQUVKO0FBQ0Esb2pCQUFvakIiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDogIzNhNDI1MDtcclxuICAgIHBhZGRpbmc6IDRweCAxMHB4O1xyXG4gICAgbWFyZ2luOiAwIDJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG5kaXYge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 5312);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map