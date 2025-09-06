import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-4AKFZKT6.js";
import {
  NgTemplateOutlet
} from "./chunk-W6YNQVUQ.js";
import {
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver$1,
  Observable,
  Renderer2,
  Subject,
  ViewContainerRef,
  contentChild,
  contentChildren,
  inject,
  output,
  setClassMetadata,
  takeUntil,
  tap,
  viewChild,
  viewChildren,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuerySignal
} from "./chunk-MYTS3FNW.js";

// src/app/angular-pro/auth-remember/auth-remember.component.ts
var AuthRememberComponent = class _AuthRememberComponent {
  checked = output();
  onChecked(event) {
    const value = event.target.checked;
    this.checked.emit(value);
  }
  static \u0275fac = function AuthRememberComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthRememberComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuthRememberComponent, selectors: [["auth-remember"]], outputs: { checked: "checked" }, decls: 3, vars: 0, consts: [["type", "checkbox", 3, "change"]], template: function AuthRememberComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "label")(1, "input", 0);
      \u0275\u0275listener("change", function AuthRememberComponent_Template_input_change_1_listener($event) {
        return ctx.onChecked($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275text(2, " Keep me logged in\n");
      \u0275\u0275elementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthRememberComponent, [{
    type: Component,
    args: [{ selector: "auth-remember", standalone: true, template: '<label>\r\n    <input type="checkbox" (change)="onChecked($event)" />\r\n    Keep me logged in\r\n</label>\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuthRememberComponent, { className: "AuthRememberComponent", filePath: "src/app/angular-pro/auth-remember/auth-remember.component.ts", lineNumber: 9 });
})();

// src/app/angular-pro/auth-message/auth-message.component.ts
var AuthMessageComponent = class _AuthMessageComponent {
  days;
  constructor() {
    this.days = 7;
  }
  static \u0275fac = function AuthMessageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthMessageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuthMessageComponent, selectors: [["auth-message"]], decls: 2, vars: 1, template: function AuthMessageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div");
      \u0275\u0275text(1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" You will be logged in for ", ctx.days, " days\n");
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthMessageComponent, [{
    type: Component,
    args: [{ selector: "auth-message", standalone: true, template: "<div>\r\n    You will be logged in for {{ days }} days\r\n</div>\r\n" }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuthMessageComponent, { className: "AuthMessageComponent", filePath: "src/app/angular-pro/auth-message/auth-message.component.ts", lineNumber: 9 });
})();

// src/app/angular-pro/auth-form/auth-form.component.ts
var _c0 = ["email"];
var _c1 = [[["h3"]], [["auth-remember"]], [["button"]]];
var _c2 = ["h3", "auth-remember", "button"];
function AuthFormComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 5);
    \u0275\u0275text(1, "Submit");
    \u0275\u0275elementEnd();
  }
}
var AuthFormComponent = class _AuthFormComponent {
  cd = inject(ChangeDetectorRef);
  renderer = inject(Renderer2);
  submitted = output();
  remember = contentChild(AuthRememberComponent);
  remember2 = contentChildren(AuthRememberComponent);
  message = viewChild(AuthMessageComponent);
  message2 = viewChildren(AuthMessageComponent);
  email = viewChild.required("email");
  showMessage = false;
  title = "";
  showButton = false;
  ngAfterContentInit() {
    const remember = this.remember();
    if (remember) {
      remember.checked.subscribe((checked) => {
      });
      this.remember2().forEach((item) => {
        item.checked.subscribe((checked) => {
          if (this.message()) {
          }
          this.showMessage = checked;
        });
      });
    }
  }
  ngAfterViewInit() {
    this.email().nativeElement.focus();
    const email = this.email();
    this.renderer.setAttribute(email.nativeElement, "placeholder", "Enter your email address");
    this.renderer.addClass(email.nativeElement, "email");
    const message2 = this.message2();
    if (message2) {
      message2.forEach((message) => {
        message.days = 30;
      });
      this.cd.detectChanges();
    }
  }
  onSubmit(value) {
    this.submitted.emit(value);
  }
  static \u0275fac = function AuthFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuthFormComponent, selectors: [["auth-form"]], contentQueries: function AuthFormComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuerySignal(dirIndex, ctx.remember, AuthRememberComponent, 5);
      \u0275\u0275contentQuerySignal(dirIndex, ctx.remember2, AuthRememberComponent, 4);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance(2);
    }
  }, viewQuery: function AuthFormComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.message, AuthMessageComponent, 5);
      \u0275\u0275viewQuerySignal(ctx.message2, AuthMessageComponent, 5);
      \u0275\u0275viewQuerySignal(ctx.email, _c0, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance(3);
    }
  }, outputs: { submitted: "submitted" }, ngContentSelectors: _c2, decls: 17, vars: 6, consts: [["form", "ngForm"], ["email", ""], [3, "ngSubmit"], ["type", "email", "name", "email", "ngModel", ""], ["type", "password", "name", "password", "ngModel", ""], ["type", "submit"]], template: function AuthFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275projectionDef(_c1);
      \u0275\u0275elementStart(0, "div")(1, "form", 2, 0);
      \u0275\u0275listener("ngSubmit", function AuthFormComponent_Template_form_ngSubmit_1_listener() {
        \u0275\u0275restoreView(_r1);
        const form_r2 = \u0275\u0275reference(2);
        return \u0275\u0275resetView(ctx.onSubmit(form_r2.value));
      });
      \u0275\u0275projection(3);
      \u0275\u0275elementStart(4, "label");
      \u0275\u0275text(5);
      \u0275\u0275element(6, "input", 3, 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "label");
      \u0275\u0275text(9, " Password ");
      \u0275\u0275element(10, "input", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275projection(11, 1);
      \u0275\u0275element(12, "br")(13, "auth-message")(14, "auth-message");
      \u0275\u0275projection(15, 2);
      \u0275\u0275template(16, AuthFormComponent_Conditional_16_Template, 2, 0, "button", 5);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.title, " Email Address ");
      \u0275\u0275advance(8);
      \u0275\u0275styleProp("display", ctx.showMessage ? "inherit" : "none");
      \u0275\u0275advance();
      \u0275\u0275styleProp("display", ctx.showMessage ? "inherit" : "none");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showButton ? 16 : -1);
    }
  }, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, AuthMessageComponent], styles: ["\n\n.email[_ngcontent-%COMP%] {\n  border-color: purple;\n}\nbutton[_ngcontent-%COMP%] {\n  background: #3a4250;\n  padding: 4px 10px;\n  margin: 0 2px;\n  border-radius: 2px;\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthFormComponent, [{
    type: Component,
    args: [{ selector: "auth-form", imports: [FormsModule, AuthMessageComponent], template: `<div>
    <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
        <ng-content select="h3"></ng-content>
        <label>
            {{ title }} Email Address
            <input type="email" name="email" ngModel #email />
        </label>
        <label>
            Password
            <input type="password" name="password" ngModel />
        </label>
        <ng-content select="auth-remember"></ng-content>
        <br />
        <auth-message [style.display]="showMessage ? 'inherit' : 'none'"></auth-message>
        <auth-message [style.display]="showMessage ? 'inherit' : 'none'"></auth-message>
        <ng-content select="button"></ng-content>
        @if (showButton) {
            <button type="submit">Submit</button>
        }
    </form>
</div>
`, styles: ["/* src/app/angular-pro/auth-form/auth-form.component.scss */\n.email {\n  border-color: purple;\n}\nbutton {\n  background: #3a4250;\n  padding: 4px 10px;\n  margin: 0 2px;\n  border-radius: 2px;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuthFormComponent, { className: "AuthFormComponent", filePath: "src/app/angular-pro/auth-form/auth-form.component.ts", lineNumber: 30 });
})();

// src/app/angular-pro/angular-pro.component.ts
var _c02 = ["entry"];
var _c12 = ["tmpl"];
function AngularProComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const implicitVar_r2 = ctx.$implicit;
    const angularVar_r3 = ctx.angularVar;
    \u0275\u0275textInterpolate2(" ", implicitVar_r2, " ", angularVar_r3, "\n");
  }
}
function AngularProComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "Angular Template Outlet");
  }
}
var AngularProComponent = class _AngularProComponent {
  resolver = inject(ComponentFactoryResolver$1);
  entry = viewChild.required("entry", { read: ViewContainerRef });
  tmpl = viewChild.required("tmpl");
  rememberMe = false;
  subjectOne = new Subject();
  observableOne = new Observable();
  unsubscribe$ = new Subject();
  component;
  ngOnInit() {
    this.rememberMe = false;
    this.subjectOne = new Subject();
    this.observableOne = this.subjectOne.asObservable();
    this.unsubscribe$ = new Subject();
    this.observableOne.pipe(tap((r) => console.log("Subject", r)), takeUntil(this.unsubscribe$)).subscribe();
    this.subjectOne.next(1);
    this.unsubscribe$.next();
    this.subjectOne.complete();
    this.subjectOne.next(2);
  }
  ngAfterContentInit() {
    setTimeout(() => {
      const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
      this.component = this.entry().createComponent(authFormFactory);
      this.component.instance.title = "Dynamic";
      this.component.instance.showButton = true;
      this.component.instance.submitted.subscribe(this.createUser);
      this.entry().createComponent(authFormFactory, 0);
      this.entry().createEmbeddedView(this.tmpl(), {
        $implicit: "Angular",
        angularVar: "Template"
      });
    });
  }
  createUser(user) {
    console.log("Create user", user);
  }
  rememberUser(remember) {
    this.rememberMe = remember;
  }
  loginUser(user) {
    console.log("Log in user", user, this.rememberMe);
  }
  destroyComponent() {
    this.component.destroy();
  }
  moveComponent() {
    this.entry().move(this.component.hostView, 0);
  }
  static \u0275fac = function AngularProComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AngularProComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AngularProComponent, selectors: [["angular-pro"]], viewQuery: function AngularProComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.entry, _c02, 5, ViewContainerRef);
      \u0275\u0275viewQuerySignal(ctx.tmpl, _c12, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance(2);
    }
  }, decls: 25, vars: 1, consts: [["entry", ""], ["tmpl", ""], ["tmpl2", ""], [3, "submitted"], ["type", "submit"], [3, "checked"], [3, "click"], [3, "ngTemplateOutlet"]], template: function AngularProComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "auth-form", 3);
      \u0275\u0275listener("submitted", function AngularProComponent_Template_auth_form_submitted_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.createUser($event));
      });
      \u0275\u0275elementStart(1, "h3");
      \u0275\u0275text(2, "Create Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "button", 4);
      \u0275\u0275text(4, "Join Us");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "auth-form", 3);
      \u0275\u0275listener("submitted", function AngularProComponent_Template_auth_form_submitted_5_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.loginUser($event));
      });
      \u0275\u0275elementStart(6, "h3");
      \u0275\u0275text(7, "Login");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "auth-remember", 5);
      \u0275\u0275listener("checked", function AngularProComponent_Template_auth_remember_checked_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.rememberUser($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "auth-remember", 5);
      \u0275\u0275listener("checked", function AngularProComponent_Template_auth_remember_checked_9_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.rememberUser($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "button", 4);
      \u0275\u0275text(11, "Login");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", null, 0)(14, "h3");
      \u0275\u0275text(15, "Dynamic Component");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "button", 6);
      \u0275\u0275listener("click", function AngularProComponent_Template_button_click_16_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.destroyComponent());
      });
      \u0275\u0275text(17, "Destroy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "button", 6);
      \u0275\u0275listener("click", function AngularProComponent_Template_button_click_18_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.moveComponent());
      });
      \u0275\u0275text(19, "Move");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(20, AngularProComponent_ng_template_20_Template, 1, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementContainer(22, 7);
      \u0275\u0275template(23, AngularProComponent_ng_template_23_Template, 1, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const tmpl2_r4 = \u0275\u0275reference(24);
      \u0275\u0275advance(22);
      \u0275\u0275property("ngTemplateOutlet", tmpl2_r4);
    }
  }, dependencies: [AuthFormComponent, AuthRememberComponent, NgTemplateOutlet], styles: ["\n\nbutton[_ngcontent-%COMP%] {\n  background: #3a4250;\n  padding: 4px 10px;\n  margin: 0 2px;\n  border-radius: 2px;\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AngularProComponent, [{
    type: Component,
    args: [{ selector: "angular-pro", imports: [AuthFormComponent, AuthRememberComponent, NgTemplateOutlet], template: '<auth-form (submitted)="createUser($event)">\r\n    <h3>Create Account</h3>\r\n    <button type="submit">Join Us</button>\r\n</auth-form>\r\n<auth-form (submitted)="loginUser($event)">\r\n    <h3>Login</h3>\r\n    <auth-remember (checked)="rememberUser($event)" />\r\n    <auth-remember (checked)="rememberUser($event)" />\r\n    <button type="submit">Login</button>\r\n</auth-form>\r\n<div #entry>\r\n    <h3>Dynamic Component</h3>\r\n    <button (click)="destroyComponent()">Destroy</button>\r\n    <button (click)="moveComponent()">Move</button>\r\n</div>\r\n<ng-template #tmpl let-implicitVar let-angularVar="angularVar">\r\n    {{ implicitVar }} {{ angularVar }}\r\n</ng-template>\r\n<ng-container [ngTemplateOutlet]="tmpl2" />\r\n<ng-template #tmpl2>Angular Template Outlet</ng-template>\r\n', styles: ["/* src/app/angular-pro/angular-pro.component.scss */\nbutton {\n  background: #3a4250;\n  padding: 4px 10px;\n  margin: 0 2px;\n  border-radius: 2px;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AngularProComponent, { className: "AngularProComponent", filePath: "src/app/angular-pro/angular-pro.component.ts", lineNumber: 29 });
})();
export {
  AngularProComponent
};
