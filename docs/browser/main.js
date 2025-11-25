import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MinLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RadioControlValueAccessor,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-4AKFZKT6.js";
import {
  ActivatedRoute,
  BrowserModule,
  HttpClient,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  bootstrapApplication,
  provideHttpClient,
  provideRouter,
  withInterceptorsFromDi
} from "./chunk-3QJ5RLCB.js";
import {
  CommonModule,
  DatePipe,
  JsonPipe,
  UpperCasePipe
} from "./chunk-W6YNQVUQ.js";
import {
  Component,
  Injectable,
  NgModule,
  enableProdMode,
  importProvidersFrom,
  inject,
  input,
  isDevMode,
  map,
  output,
  setClassMetadata,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-MYTS3FNW.js";

// src/environments/environment.ts
var environment = {
  production: false
};

// src/app/passenger-dashboard/passenger-dashboard.service.ts
var path = "";
var PassengerDashboardService = class _PassengerDashboardService {
  httpClient = inject(HttpClient);
  constructor() {
    if (isDevMode()) {
      path = "http://localhost:3000/passengers";
    } else {
      path = "https://my-json-server.typicode.com/norandiaconu/angular-fundamentals/passengers";
    }
  }
  getPassengers() {
    return this.httpClient.get(path);
  }
  getPassenger(id) {
    return this.httpClient.get(path + "/" + id);
  }
  getPassengerPromise() {
    return this.httpClient.get(path + "/1").toPromise();
  }
  updatePassenger(passenger) {
    return this.httpClient.put(path + "/" + passenger.id, passenger);
  }
  deletePassenger(passenger) {
    return this.httpClient.delete(path + "/" + passenger.id);
  }
  static \u0275fac = function PassengerDashboardService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PassengerDashboardService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PassengerDashboardService, factory: _PassengerDashboardService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PassengerDashboardService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/passenger-dashboard/passenger-count/passenger-count.component.ts
var PassengerCountComponent = class _PassengerCountComponent {
  items = input([]);
  checkedInCount() {
    const items = this.items();
    if (!items) {
      return 0;
    } else {
      return items.filter((passenger) => passenger.checkedIn).length;
    }
  }
  static \u0275fac = function PassengerCountComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PassengerCountComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PassengerCountComponent, selectors: [["passenger-count"]], inputs: { items: [1, "items"] }, decls: 2, vars: 2, template: function PassengerCountComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div");
      \u0275\u0275text(1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate2("Total checked in: ", ctx.checkedInCount(), " / ", ctx.items().length, "");
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PassengerCountComponent, [{
    type: Component,
    args: [{ selector: "passenger-count", template: "<div>Total checked in: {{ checkedInCount() }} / {{ items().length }}</div>\r\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PassengerCountComponent, { className: "PassengerCountComponent", filePath: "src/app/passenger-dashboard/passenger-count/passenger-count.component.ts", lineNumber: 9 });
})();

// src/app/passenger-dashboard/passenger-detail/passenger-detail.component.ts
function PassengerDetailComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "input", 3, 0);
    \u0275\u0275listener("input", function PassengerDetailComponent_Conditional_2_Template_input_input_1_listener() {
      \u0275\u0275restoreView(_r1);
      const name_r2 = \u0275\u0275reference(2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onNameChange(name_r2.value));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r2.detail().fullName);
  }
}
function PassengerDetailComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.detail().fullName, " ");
  }
}
var PassengerDetailComponent = class _PassengerDetailComponent {
  detail = input({
    id: 0,
    fullName: "",
    checkedIn: false,
    baggage: ""
  });
  editing = false;
  edit = output();
  remove = output();
  view = output();
  onNameChange(value) {
    this.detail().fullName = value;
  }
  toggleEdit() {
    if (this.editing) {
      this.edit.emit(this.detail());
    }
    this.editing = !this.editing;
  }
  onRemove() {
    this.remove.emit(this.detail());
  }
  goToPassenger() {
    this.view.emit(this.detail());
  }
  static \u0275fac = function PassengerDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PassengerDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PassengerDetailComponent, selectors: [["passenger-detail"]], inputs: { detail: [1, "detail"] }, outputs: { edit: "edit", remove: "remove", view: "view" }, decls: 16, vars: 12, consts: [["name", ""], [1, "status"], [3, "click"], ["type", "text", 3, "input", "value"]], template: function PassengerDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div");
      \u0275\u0275element(1, "span", 1);
      \u0275\u0275template(2, PassengerDetailComponent_Conditional_2_Template, 3, 1, "div")(3, PassengerDetailComponent_Conditional_3_Template, 2, 1, "div");
      \u0275\u0275elementStart(4, "p");
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "date");
      \u0275\u0275pipe(7, "uppercase");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p");
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "button", 2);
      \u0275\u0275listener("click", function PassengerDetailComponent_Template_button_click_10_listener() {
        return ctx.toggleEdit();
      });
      \u0275\u0275text(11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "button", 2);
      \u0275\u0275listener("click", function PassengerDetailComponent_Template_button_click_12_listener() {
        return ctx.onRemove();
      });
      \u0275\u0275text(13, "Remove");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "button", 2);
      \u0275\u0275listener("click", function PassengerDetailComponent_Template_button_click_14_listener() {
        return ctx.goToPassenger();
      });
      \u0275\u0275text(15, "Go To Passenger");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_4_0;
      \u0275\u0275advance();
      \u0275\u0275classProp("checked-in", ctx.detail().checkedIn);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.editing ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.editing ? 3 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" Check in Date: ", ctx.detail().checkedInDate ? \u0275\u0275pipeBind1(7, 10, \u0275\u0275pipeBind2(6, 7, ctx.detail().checkedInDate, "MMMM d, y")) : "Not checked in", " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("Children: ", ((tmp_4_0 = ctx.detail().children) == null ? null : tmp_4_0.length) || 0, "");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.editing ? "Done" : "Edit", " ");
    }
  }, dependencies: [UpperCasePipe, DatePipe], styles: ["\n\n.status[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  background: red;\n  display: block;\n  margin: 8px 10px 0 0;\n  float: left;\n  border-radius: 50%;\n}\n.status.checked-in[_ngcontent-%COMP%] {\n  background: green;\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PassengerDetailComponent, [{
    type: Component,
    args: [{ selector: "passenger-detail", imports: [UpperCasePipe, DatePipe], template: `<div>\r
    <span class="status" [class.checked-in]="detail().checkedIn"> </span>\r
    @if (editing) {\r
    <div>\r
        <input type="text" [value]="detail().fullName" (input)="onNameChange(name.value)" #name />\r
    </div>\r
    } @if (!editing) {\r
    <div>\r
        {{ detail().fullName }}\r
    </div>\r
    }\r
    <p>\r
        Check in Date:\r
        {{ detail().checkedInDate ? (detail().checkedInDate | date : 'MMMM d, y' | uppercase) : 'Not checked in' }}\r
    </p>\r
    <p>Children: {{ detail().children?.length || 0 }}</p>\r
    <button (click)="toggleEdit()">\r
        {{ editing ? 'Done' : 'Edit' }}\r
    </button>\r
    <button (click)="onRemove()">Remove</button>\r
    <button (click)="goToPassenger()">Go To Passenger</button>\r
</div>\r
`, styles: ["/* src/app/passenger-dashboard/passenger-detail/passenger-detail.component.scss */\n.status {\n  width: 10px;\n  height: 10px;\n  background: red;\n  display: block;\n  margin: 8px 10px 0 0;\n  float: left;\n  border-radius: 50%;\n}\n.status.checked-in {\n  background: green;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PassengerDetailComponent, { className: "PassengerDetailComponent", filePath: "src/app/passenger-dashboard/passenger-detail/passenger-detail.component.ts", lineNumber: 11 });
})();

// src/app/passenger-dashboard/passenger-dashboard.component.ts
function PassengerDashboardComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const passenger_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(passenger_r1 == null ? null : passenger_r1.fullName);
  }
}
function PassengerDashboardComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "passenger-detail", 2);
    \u0275\u0275listener("edit", function PassengerDashboardComponent_For_7_Template_passenger_detail_edit_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleEdit($event));
    })("remove", function PassengerDashboardComponent_For_7_Template_passenger_detail_remove_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleRemove($event));
    })("view", function PassengerDashboardComponent_For_7_Template_passenger_detail_view_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleView($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const passenger_r4 = ctx.$implicit;
    \u0275\u0275property("detail", passenger_r4);
  }
}
var PassengerDashboardComponent = class _PassengerDashboardComponent {
  passengers = [];
  passenger0 = {
    id: 0,
    fullName: "",
    checkedIn: false,
    baggage: ""
  };
  passengerDashboardService = inject(PassengerDashboardService);
  router = inject(Router);
  handleEdit(event) {
    this.passengerDashboardService.updatePassenger(event).subscribe((data) => {
      if (data.id === event.id) {
        data = Object.assign({}, data, event);
        this.getAllPassengers();
      }
      return data;
    }, (error) => {
      console.error(error);
    });
  }
  handleRemove(event) {
    this.passengerDashboardService.deletePassenger(event).subscribe((data) => {
      this.passengers = this.passengers.filter((passenger) => passenger.id !== event.id);
    }, (error) => {
      console.error(error);
    });
  }
  getAllPassengers() {
    this.passengerDashboardService.getPassengers().subscribe((data) => {
      this.passengers = data;
    }, (error) => {
      console.error(error);
    });
  }
  getThePassenger() {
    this.passengerDashboardService.getPassenger(1).subscribe((data) => {
      this.passenger0 = data;
    }, (error) => {
      console.error(error);
    });
    return this.passenger0;
  }
  getThePassengerPromise() {
    this.passengerDashboardService.getPassengerPromise().then((data) => {
      this.passenger0 = data;
      console.log(this.passenger0);
    });
    return this.passenger0;
  }
  handleView(event) {
    this.router.navigate(["/passengers", event.id]);
  }
  ngOnInit() {
    this.getAllPassengers();
  }
  static \u0275fac = function PassengerDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PassengerDashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PassengerDashboardComponent, selectors: [["passenger-dashboard"]], decls: 8, vars: 2, consts: [[3, "items"], [3, "detail"], [3, "edit", "remove", "view", "detail"]], template: function PassengerDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div")(1, "div");
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "passenger-count", 0);
      \u0275\u0275repeaterCreate(4, PassengerDashboardComponent_For_5_Template, 2, 1, "div", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275repeaterCreate(6, PassengerDashboardComponent_For_7_Template, 1, 1, "passenger-detail", 1, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.passenger0.fullName);
      \u0275\u0275advance();
      \u0275\u0275property("items", ctx.passengers);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.passengers);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.passengers);
    }
  }, dependencies: [PassengerCountComponent, PassengerDetailComponent], styles: ["\n\n.status[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  background: red;\n  display: block;\n  margin: 8px 10px 0 0;\n  float: left;\n  border-radius: 50%;\n}\n.status.checked-in[_ngcontent-%COMP%] {\n  background: green;\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PassengerDashboardComponent, [{
    type: Component,
    args: [{ selector: "passenger-dashboard", imports: [PassengerCountComponent, PassengerDetailComponent], template: '<div>\n    <div>{{ passenger0.fullName }}</div>\n    <passenger-count [items]="passengers"> </passenger-count>\n    @for (passenger of passengers; track passenger) {\n        <div>{{ passenger?.fullName }}</div>\n    }\n    @for (passenger of passengers; track passenger) {\n        <passenger-detail [detail]="passenger" (edit)="handleEdit($event)" (remove)="handleRemove($event)" (view)="handleView($event)">\n        </passenger-detail>\n    }\n</div>\n', styles: ["/* src/app/passenger-dashboard/passenger-dashboard.component.scss */\n.status {\n  width: 10px;\n  height: 10px;\n  background: red;\n  display: block;\n  margin: 8px 10px 0 0;\n  float: left;\n  border-radius: 50%;\n}\n.status.checked-in {\n  background: green;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PassengerDashboardComponent, { className: "PassengerDashboardComponent", filePath: "src/app/passenger-dashboard/passenger-dashboard.component.ts", lineNumber: 15 });
})();

// src/app/passenger-dashboard/passenger-form/passenger-form.component.ts
function PassengerFormComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1, "Passenger name is required");
    \u0275\u0275elementEnd();
  }
}
function PassengerFormComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1, "Passenger name length must be greater than 2");
    \u0275\u0275elementEnd();
  }
}
function PassengerFormComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1, "Passenger id is required");
    \u0275\u0275elementEnd();
  }
}
function PassengerFormComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, " Check in date: ");
    \u0275\u0275element(2, "input", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r2.detail().checkedInDate);
  }
}
function PassengerFormComponent_For_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("value", item_r4.key)("selected", item_r4.key === ctx_r2.detail().baggage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r4.value, " ");
  }
}
function PassengerFormComponent_For_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275property("ngValue", item_r5.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r5.value, " ");
  }
}
var PassengerFormComponent = class _PassengerFormComponent {
  detail = input({
    id: 0,
    fullName: "",
    checkedIn: false,
    baggage: ""
  });
  update = output();
  baggage = [
    {
      key: "none",
      value: "No baggage"
    },
    {
      key: "hand-only",
      value: "Hand baggage"
    },
    {
      key: "hold-only",
      value: "Hold baggage"
    },
    {
      key: "hand-hold",
      value: "Hand and hold baggage"
    }
  ];
  toggleCheckedIn(checkedIn) {
    if (checkedIn) {
      this.detail().checkedInDate = Date.now();
    }
  }
  handleSubmit(passenger, isValid) {
    if (isValid) {
      this.update.emit(passenger);
    }
  }
  static \u0275fac = function PassengerFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PassengerFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PassengerFormComponent, selectors: [["passenger-form"]], inputs: { detail: [1, "detail"] }, outputs: { update: "update" }, decls: 46, vars: 32, consts: [["form", "ngForm"], ["fullName", "ngModel"], ["id", "ngModel"], ["novalidate", "", 3, "ngSubmit"], ["type", "text", "name", "fullName", "required", "", "minlength", "2", 3, "ngModel"], [1, "error"], ["type", "number", "name", "id", "required", "", 3, "ngModel"], ["type", "radio", "name", "checkedIn", 3, "ngModelChange", "value", "ngModel"], ["type", "radio", "name", "checkedIn", 3, "value", "ngModel"], ["type", "checkbox", "name", "checkedIn", 3, "ngModelChange", "ngModel"], ["name", "baggage", 3, "ngModel"], [3, "value", "selected"], [3, "ngValue"], ["type", "submit", 3, "disabled"], ["type", "number", "name", "checkedInDate", 3, "ngModel"]], template: function PassengerFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "form", 3, 0);
      \u0275\u0275listener("ngSubmit", function PassengerFormComponent_Template_form_ngSubmit_0_listener() {
        \u0275\u0275restoreView(_r1);
        const form_r2 = \u0275\u0275reference(1);
        return \u0275\u0275resetView(ctx.handleSubmit(form_r2.value, form_r2.valid));
      });
      \u0275\u0275text(2);
      \u0275\u0275pipe(3, "json");
      \u0275\u0275elementStart(4, "div");
      \u0275\u0275text(5, " Passenger name: ");
      \u0275\u0275element(6, "input", 4, 1);
      \u0275\u0275text(8);
      \u0275\u0275pipe(9, "json");
      \u0275\u0275template(10, PassengerFormComponent_Conditional_10_Template, 2, 0, "div", 5)(11, PassengerFormComponent_Conditional_11_Template, 2, 0, "div", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div");
      \u0275\u0275text(13, " Passenger ID: ");
      \u0275\u0275element(14, "input", 6, 2);
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "json");
      \u0275\u0275template(18, PassengerFormComponent_Conditional_18_Template, 2, 0, "div", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div")(20, "label")(21, "input", 7);
      \u0275\u0275listener("ngModelChange", function PassengerFormComponent_Template_input_ngModelChange_21_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.toggleCheckedIn($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275text(22, " Yes ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "label");
      \u0275\u0275element(24, "input", 8);
      \u0275\u0275text(25, " No ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "label")(27, "input", 9);
      \u0275\u0275listener("ngModelChange", function PassengerFormComponent_Template_input_ngModelChange_27_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.toggleCheckedIn($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275text(28, " Toggle check in date ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(29, PassengerFormComponent_Conditional_29_Template, 3, 1, "div");
      \u0275\u0275elementStart(30, "div");
      \u0275\u0275text(31, " Luggage: ");
      \u0275\u0275elementStart(32, "select", 10);
      \u0275\u0275repeaterCreate(33, PassengerFormComponent_For_34_Template, 2, 3, "option", 11, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "select", 10);
      \u0275\u0275repeaterCreate(36, PassengerFormComponent_For_37_Template, 2, 2, "option", 12, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(38);
      \u0275\u0275pipe(39, "json");
      \u0275\u0275elementStart(40, "div");
      \u0275\u0275text(41);
      \u0275\u0275pipe(42, "json");
      \u0275\u0275pipe(43, "json");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "button", 13);
      \u0275\u0275text(45, "Update passenger");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      const form_r2 = \u0275\u0275reference(1);
      const fullName_r6 = \u0275\u0275reference(7);
      const id_r7 = \u0275\u0275reference(15);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 20, ctx.detail()), " ");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngModel", ctx.detail().fullName);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 22, fullName_r6.errors), " ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional((fullName_r6.errors == null ? null : fullName_r6.errors.required) && fullName_r6.dirty ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((fullName_r6.errors == null ? null : fullName_r6.errors.minlength) && fullName_r6.dirty ? 11 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngModel", ctx.detail().id);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 24, id_r7.errors), " ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional((id_r7.errors == null ? null : id_r7.errors.required) && id_r7.touched ? 18 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275property("value", true)("ngModel", ctx.detail().checkedIn);
      \u0275\u0275advance(3);
      \u0275\u0275property("value", false)("ngModel", ctx.detail().checkedIn);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngModel", ctx.detail().checkedIn);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(form_r2.value.checkedIn ? 29 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngModel", ctx.detail().baggage);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.baggage);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngModel", ctx.detail().baggage);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.baggage);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(39, 26, form_r2.value), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("Valid: ", \u0275\u0275pipeBind1(42, 28, form_r2.valid), " \u2022 Invalid: ", \u0275\u0275pipeBind1(43, 30, form_r2.invalid), "");
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", form_r2.invalid);
    }
  }, dependencies: [FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, NgModel, NgForm, JsonPipe], styles: ["\n\ndiv[_ngcontent-%COMP%] {\n  margin: 0 0 20px;\n}\n.error[_ngcontent-%COMP%] {\n  color: #da6969;\n  font-size: 10px;\n}"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PassengerFormComponent, [{
    type: Component,
    args: [{ selector: "passenger-form", imports: [FormsModule, JsonPipe], template: '<form (ngSubmit)="handleSubmit(form.value, form.valid)" #form="ngForm" novalidate>\r\n    {{ detail() | json }}\r\n    <div>\r\n        Passenger name:\r\n        <input type="text" name="fullName" required minlength="2" #fullName="ngModel" [ngModel]="detail().fullName" />\r\n        {{ fullName.errors | json }}\r\n        @if (fullName.errors?.required && fullName.dirty) {\r\n            <div class="error">Passenger name is required</div>\r\n        }\r\n        @if (fullName.errors?.minlength && fullName.dirty) {\r\n            <div class="error">Passenger name length must be greater than 2</div>\r\n        }\r\n    </div>\r\n    <div>\r\n        Passenger ID:\r\n        <input type="number" name="id" required #id="ngModel" [ngModel]="detail().id" />\r\n        {{ id.errors | json }}\r\n        @if (id.errors?.required && id.touched) {\r\n            <div class="error">Passenger id is required</div>\r\n        }\r\n    </div>\r\n    <div>\r\n        <label>\r\n            <input type="radio" [value]="true" name="checkedIn" [ngModel]="detail().checkedIn" (ngModelChange)="toggleCheckedIn($event)" />\r\n            Yes\r\n        </label>\r\n        <label>\r\n            <input type="radio" [value]="false" name="checkedIn" [ngModel]="detail().checkedIn" />\r\n            No\r\n        </label>\r\n        <label>\r\n            <input type="checkbox" name="checkedIn" [ngModel]="detail().checkedIn" (ngModelChange)="toggleCheckedIn($event)" />\r\n        </label>\r\n        Toggle check in date\r\n    </div>\r\n    @if (form.value.checkedIn) {\r\n        <div>\r\n            Check in date:\r\n            <input type="number" name="checkedInDate" [ngModel]="detail().checkedInDate" />\r\n        </div>\r\n    }\r\n\r\n    <div>\r\n        Luggage:\r\n        <select name="baggage" [ngModel]="detail().baggage">\r\n            @for (item of baggage; track item) {\r\n                <option [value]="item.key" [selected]="item.key === detail().baggage">\r\n                    {{ item.value }}\r\n                </option>\r\n            }\r\n        </select>\r\n        <select name="baggage" [ngModel]="detail().baggage">\r\n            @for (item of baggage; track item) {\r\n                <option [ngValue]="item.key">\r\n                    {{ item.value }}\r\n                </option>\r\n            }\r\n        </select>\r\n    </div>\r\n    {{ form.value | json }}\r\n    <div>Valid: {{ form.valid | json }} &bull; Invalid: {{ form.invalid | json }}</div>\r\n    <button type="submit" [disabled]="form.invalid">Update passenger</button>\r\n</form>\r\n', styles: ["/* src/app/passenger-dashboard/passenger-form/passenger-form.component.scss */\ndiv {\n  margin: 0 0 20px;\n}\n.error {\n  color: #da6969;\n  font-size: 10px;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PassengerFormComponent, { className: "PassengerFormComponent", filePath: "src/app/passenger-dashboard/passenger-form/passenger-form.component.ts", lineNumber: 12 });
})();

// src/app/passenger-dashboard/passenger-viewer/passenger-viewer.component.ts
var PassengerViewerComponent = class _PassengerViewerComponent {
  passenger = {
    id: 0,
    fullName: "",
    checkedIn: false,
    baggage: ""
  };
  passengerDashboardService = inject(PassengerDashboardService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  onUpdatePassenger(event) {
    console.log(event);
    this.passengerDashboardService.updatePassenger(event).subscribe((data) => {
      this.passenger = Object.assign({}, this.passenger, event);
    });
  }
  goBack() {
    this.router.navigate(["/passengers"]);
  }
  ngOnInit() {
    this.route.params.pipe(map((data) => data)).subscribe((data) => {
      console.log(data);
    });
    this.route.params.pipe(map((data) => data), switchMap((data) => this.passengerDashboardService.getPassenger(data.id))).subscribe((data) => this.passenger = data);
  }
  static \u0275fac = function PassengerViewerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PassengerViewerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PassengerViewerComponent, selectors: [["passenger-viewer"]], decls: 3, vars: 1, consts: [[3, "click"], [3, "update", "detail"]], template: function PassengerViewerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "button", 0);
      \u0275\u0275listener("click", function PassengerViewerComponent_Template_button_click_0_listener() {
        return ctx.goBack();
      });
      \u0275\u0275text(1, " Go Back\n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "passenger-form", 1);
      \u0275\u0275listener("update", function PassengerViewerComponent_Template_passenger_form_update_2_listener($event) {
        return ctx.onUpdatePassenger($event);
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("detail", ctx.passenger);
    }
  }, dependencies: [PassengerFormComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PassengerViewerComponent, [{
    type: Component,
    args: [{ selector: "passenger-viewer", imports: [PassengerFormComponent], template: '<button (click)="goBack()">\r\n    Go Back\r\n</button>\r\n<passenger-form [detail]="passenger"\r\n    (update)="onUpdatePassenger($event)" />\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PassengerViewerComponent, { className: "PassengerViewerComponent", filePath: "src/app/passenger-dashboard/passenger-viewer/passenger-viewer.component.ts", lineNumber: 14 });
})();

// src/app/passenger-dashboard/passenger-dashboard.module.ts
var routes = [
  {
    path: "passengers",
    children: [
      { path: "", component: PassengerDashboardComponent },
      { path: ":id", component: PassengerViewerComponent }
    ]
  }
];
var PassengerDashboardModule = class _PassengerDashboardModule {
  static \u0275fac = function PassengerDashboardModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PassengerDashboardModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PassengerDashboardModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [
    PassengerDashboardService,
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent,
    PassengerViewerComponent,
    PassengerFormComponent,
    PassengerDashboardComponent,
    PassengerViewerComponent,
    provideHttpClient(withInterceptorsFromDi())
  ], imports: [CommonModule, BrowserModule, FormsModule, RouterModule.forChild(routes)] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PassengerDashboardModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      exports: [],
      imports: [CommonModule, BrowserModule, FormsModule, RouterModule.forChild(routes)],
      providers: [
        PassengerDashboardService,
        PassengerDashboardComponent,
        PassengerCountComponent,
        PassengerDetailComponent,
        PassengerViewerComponent,
        PassengerFormComponent,
        PassengerDashboardComponent,
        PassengerViewerComponent,
        provideHttpClient(withInterceptorsFromDi())
      ]
    }]
  }], null, null);
})();

// src/app/app.component.ts
var _c0 = () => ({ exact: true });
var _c1 = (a0) => ({ exact: a0 });
function AppComponent_Conditional_13_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275element(2, "br")(3, "br");
    \u0275\u0275elementStart(4, "nav", 27)(5, "a", 28);
    \u0275\u0275text(6, "Home");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " \u2022 ");
    \u0275\u0275elementStart(8, "a", 29);
    \u0275\u0275text(9, "404");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " \u2022 ");
    \u0275\u0275elementStart(11, "a", 30);
    \u0275\u0275text(12, "Passengers");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Searching for... ", ctx_r1.name, " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(2, _c0));
  }
}
function AppComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275element(2, "h1", 16);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div");
    \u0275\u0275element(6, "img", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 18);
    \u0275\u0275listener("input", function AppComponent_Conditional_13_Template_input_input_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleInput($event));
    })("blur", function AppComponent_Conditional_13_Template_input_blur_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleBlur($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 19);
    \u0275\u0275listener("ngModelChange", function AppComponent_Conditional_13_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function AppComponent_Conditional_13_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.title, $event) || (ctx_r1.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 20);
    \u0275\u0275listener("click", function AppComponent_Conditional_13_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleClick());
    });
    \u0275\u0275text(11, "Change Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div");
    \u0275\u0275element(13, "input", 21, 0);
    \u0275\u0275elementStart(15, "button", 20);
    \u0275\u0275listener("click", function AppComponent_Conditional_13_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const username_r3 = \u0275\u0275reference(14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleChange(username_r3.value));
    });
    \u0275\u0275text(16, "Get Value");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "input", 22);
    \u0275\u0275listener("input", function AppComponent_Conditional_13_Template_input_input_17_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleNameChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, AppComponent_Conditional_13_Conditional_18_Template, 13, 3, "div");
    \u0275\u0275element(19, "br")(20, "br");
    \u0275\u0275elementStart(21, "div", 23)(22, "div", 24);
    \u0275\u0275text(23, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 25);
    \u0275\u0275text(25, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 26);
    \u0275\u0275text(27, "3");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.title + "!", " ");
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r1.title, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.numberOne + ctx_r1.numberTwo, " \u2022 ", ctx_r1.isHappy ? ":)" : ":(", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r1.logo, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.title);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.title);
    \u0275\u0275advance(8);
    \u0275\u0275property("value", ctx_r1.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.name.length > 2 ? 18 : -1);
  }
}
function AppComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r4.link)("routerLinkActiveOptions", \u0275\u0275pureFunction1(3, _c1, item_r4.exact));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r4.name, " ");
  }
}
var AppComponent = class _AppComponent {
  title;
  numberOne = 1;
  numberTwo = 2;
  isHappy = true;
  logo = "assets/logo.svg";
  name = "";
  display = false;
  nav = [
    {
      link: "/",
      name: "Home",
      exact: true
    },
    {
      link: "/oops",
      name: "404",
      exact: false
    },
    {
      link: "/passengers",
      name: "Passengers",
      exact: false
    },
    {
      link: "/rxjs-basics",
      name: "RxJS Basics",
      exact: false
    },
    {
      link: "/rxjs-projects",
      name: "RxJS Projects",
      exact: false
    },
    {
      link: "/typescript-basics",
      name: "TypeScript Basics",
      exact: false
    },
    {
      link: "/angular-pro",
      name: "Angular Pro",
      exact: false
    }
  ];
  constructor() {
    this.title = "Ultimate Angular";
  }
  handleInput(event) {
    this.title = event.target.value;
  }
  handleBlur(event) {
    this.title = event.target.value;
    console.log(event);
  }
  handleClick() {
    this.title = "Angular";
  }
  handleChange(value) {
    this.title = value;
    console.log(value);
  }
  handleNameChange(event) {
    const value = event.target.value;
    this.name = value;
  }
  toggle() {
    this.display = !this.display;
  }
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 22, vars: 1, consts: [["username", ""], ["role", "banner", 1, "toolbar"], ["width", "40", "alt", "Angular Logo", "src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="], [1, "spacer"], [2, "cursor", "pointer", 3, "click"], ["aria-label", "Angular on twitter", "target", "_blank", "rel", "noopener noreferrer", "href", "https://twitter.com/angular", "title", "Twitter"], ["id", "twitter-logo", "height", "24", "data-name", "Logo", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 400 400"], ["width", "400", "height", "400", "fill", "none"], ["d", "M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23", "fill", "#fff"], [1, "progress-bar"], ["role", "main", 1, "content"], [1, "app"], ["aria-label", "nav2", 1, "nav"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions"], ["id", "clouds", "alt", "Gray Clouds Background", "xmlns", "http://www.w3.org/2000/svg", "width", "2611.084", "height", "485.677", "viewBox", "0 0 2611.084 485.677"], ["id", "Path_39", "data-name", "Path 39", "d", "M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z", "transform", "translate(142.69 -634.312)", "fill", "#eee"], [3, "innerHTML"], ["alt", "Angular", 2, "width", "100px", "height", "100px", 3, "src"], ["type", "text", 3, "input", "blur", "value"], ["type", "text", 3, "ngModelChange", "ngModel"], [3, "click"], ["type", "text"], ["type", "text", 3, "input", "value"], [1, "flexbox-container"], [1, "flexbox-item", "flexbox-item-1"], [1, "flexbox-item", "flexbox-item-2"], [1, "flexbox-item", "flexbox-item-3"], ["aria-label", "nav1", 1, "nav"], ["routerLink", "/", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "oops", "routerLinkActive", "active"], ["routerLink", "passengers", "routerLinkActive", "active"]], template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275element(1, "img", 2);
      \u0275\u0275elementStart(2, "span");
      \u0275\u0275text(3, "Welcome");
      \u0275\u0275elementEnd();
      \u0275\u0275element(4, "div", 3);
      \u0275\u0275elementStart(5, "a", 4);
      \u0275\u0275listener("click", function AppComponent_Template_a_click_5_listener() {
        return ctx.toggle();
      });
      \u0275\u0275text(6, "Toggle Display");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "a", 5);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(8, "svg", 6);
      \u0275\u0275element(9, "rect", 7)(10, "path", 8);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(11, "div", 9);
      \u0275\u0275elementStart(12, "div", 10);
      \u0275\u0275template(13, AppComponent_Conditional_13_Template, 28, 10, "div", 11);
      \u0275\u0275element(14, "br");
      \u0275\u0275elementStart(15, "div")(16, "nav", 12);
      \u0275\u0275repeaterCreate(17, AppComponent_For_18_Template, 2, 5, "a", 13, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275element(19, "router-outlet");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(20, "svg", 14);
      \u0275\u0275element(21, "path", 15);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275conditional(ctx.display ? 13 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.nav);
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterLink, RouterLinkActive, RouterOutlet], styles: ["\n\n.app[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.nav[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  padding: 0 0 20px;\n  border-bottom: 1px solid white;\n  text-align: center;\n}\na[_ngcontent-%COMP%] {\n  background: #3a4250;\n  padding: 4px 10px;\n  margin: 0 2px;\n  border-radius: 2px;\n}\na.active[_ngcontent-%COMP%] {\n  background: purple;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  height: 4px;\n  width: 0%;\n  background: purple;\n}\n.flexbox-container[_ngcontent-%COMP%] {\n  background-color: darkgrey;\n  height: 200px;\n  width: 500px;\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-items: center;\n  align-content: space-between;\n  flex-direction: row;\n}\n.flexbox-item[_ngcontent-%COMP%] {\n  width: 100px;\n  margin: 10px;\n  border: 3px solid purple;\n  background-color: gray;\n}\n.flexbox-item-1[_ngcontent-%COMP%] {\n  min-height: 50px;\n  flex-shrink: 1;\n  align-self: flex-end;\n  order: 2;\n}\n.flexbox-item-2[_ngcontent-%COMP%] {\n  min-height: 100px;\n  flex-grow: 3;\n  order: 3;\n}\n.flexbox-item-3[_ngcontent-%COMP%] {\n  min-height: 150px;\n  flex-grow: 1;\n  order: 1;\n}", '\n\n[_nghost-%COMP%] {\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    Helvetica,\n    Arial,\n    sans-serif,\n    "Apple Color Emoji",\n    "Segoe UI Emoji",\n    "Segoe UI Symbol";\n  font-size: 14px;\n  color: #333;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", imports: [FormsModule, RouterLink, RouterLinkActive, RouterOutlet], template: '<style>\n    :host {\n        font-family:\n            -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",\n            "Segoe UI Symbol";\n        font-size: 14px;\n        color: #333;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n    }\n</style>\n\n<!-- Toolbar -->\n<div class="toolbar" role="banner">\n    <img\n        width="40"\n        alt="Angular Logo"\n        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="\n    />\n    <span>Welcome</span>\n    <div class="spacer"></div>\n    <a (click)="toggle()" style="cursor: pointer">Toggle Display</a>\n    <a aria-label="Angular on twitter" target="_blank" rel="noopener noreferrer" href="https://twitter.com/angular" title="Twitter">\n        <svg id="twitter-logo" height="24" data-name="Logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">\n            <rect width="400" height="400" fill="none" />\n            <path\n                d="M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"\n                fill="#fff"\n            />\n        </svg>\n    </a>\n</div>\n\n<div class="progress-bar"></div>\n<div class="content" role="main">\n    @if (display) {\n        <div class="app">\n            {{ title + "!" }}\n            <h1 [innerHTML]="title"></h1>\n            <div>\n                {{ numberOne + numberTwo }} &bull;\n                {{ isHappy ? ":)" : ":(" }}\n            </div>\n            <div>\n                <img [src]="logo" alt="Angular" style="width: 100px; height: 100px" />\n            </div>\n            <input type="text" [value]="title" (input)="handleInput($event)" (blur)="handleBlur($event)" />\n            <input type="text" [ngModel]="title" (ngModelChange)="handleChange($event)" />\n            <input type="text" [(ngModel)]="title" />\n            <button (click)="handleClick()">Change Name</button>\n            <div>\n                <input type="text" #username />\n                <button (click)="handleChange(username.value)">Get Value</button>\n            </div>\n            <input type="text" [value]="name" (input)="handleNameChange($event)" />\n            @if (name.length > 2) {\n                <div>\n                    Searching for... {{ name }} <br /><br />\n                    <nav class="nav" aria-label="nav1">\n                        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a> &bull;\n                        <a routerLink="oops" routerLinkActive="active">404</a> &bull;\n                        <a routerLink="passengers" routerLinkActive="active">Passengers</a>\n                    </nav>\n                </div>\n            }\n            <br /><br />\n            <div class="flexbox-container">\n                <div class="flexbox-item flexbox-item-1">1</div>\n                <div class="flexbox-item flexbox-item-2">2</div>\n                <div class="flexbox-item flexbox-item-3">3</div>\n            </div>\n        </div>\n    }\n    <br />\n    <!-- <passenger-dashboard>/passenger-dashboard> -->\n    <!-- <passenger-viewer>/passenger-viewer> -->\n\n    <div>\n        <nav class="nav" aria-label="nav2">\n            @for (item of nav; track item) {\n                <a [routerLink]="item.link" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: item.exact }">\n                    {{ item.name }}\n                </a>\n            }\n        </nav>\n        <router-outlet></router-outlet>\n    </div>\n\n    <svg\n        id="clouds"\n        alt="Gray Clouds Background"\n        xmlns="http://www.w3.org/2000/svg"\n        width="2611.084"\n        height="485.677"\n        viewBox="0 0 2611.084 485.677"\n    >\n        <path\n            id="Path_39"\n            data-name="Path 39"\n            d="M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z"\n            transform="translate(142.69 -634.312)"\n            fill="#eee"\n        />\n    </svg>\n</div>\n', styles: ["/* src/app/app.component.scss */\n.app {\n  text-align: center;\n}\n.nav {\n  margin: 0 0 10px;\n  padding: 0 0 20px;\n  border-bottom: 1px solid white;\n  text-align: center;\n}\na {\n  background: #3a4250;\n  padding: 4px 10px;\n  margin: 0 2px;\n  border-radius: 2px;\n}\na.active {\n  background: purple;\n}\n.progress-bar {\n  position: fixed;\n  top: 0;\n  height: 4px;\n  width: 0%;\n  background: purple;\n}\n.flexbox-container {\n  background-color: darkgrey;\n  height: 200px;\n  width: 500px;\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-items: center;\n  align-content: space-between;\n  flex-direction: row;\n}\n.flexbox-item {\n  width: 100px;\n  margin: 10px;\n  border: 3px solid purple;\n  background-color: gray;\n}\n.flexbox-item-1 {\n  min-height: 50px;\n  flex-shrink: 1;\n  align-self: flex-end;\n  order: 2;\n}\n.flexbox-item-2 {\n  min-height: 100px;\n  flex-grow: 3;\n  order: 3;\n}\n.flexbox-item-3 {\n  min-height: 150px;\n  flex-grow: 1;\n  order: 1;\n}\n", '/* angular:styles/component:css;1d42c09bc0f26f6b96a87892cd5267ec2d5b7a0a524ede90f4645667aa0053b9;C:\\Users\\NORAN\\Documents\\GitHub\\angular-fundamentals\\src\\app\\app.component.html */\n:host {\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    Helvetica,\n    Arial,\n    sans-serif,\n    "Apple Color Emoji",\n    "Segoe UI Emoji",\n    "Segoe UI Symbol";\n  font-size: 14px;\n  color: #333;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 18 });
})();

// src/main.ts
var routes2 = [
  { path: "", redirectTo: "passengers", pathMatch: "full" },
  { path: "rxjs-basics", loadComponent: () => import("./rxjs-basics.component-GE5GOIET.js").then((m) => m.RxjsBasicsComponent) },
  {
    path: "rxjs-projects",
    loadComponent: () => import("./rxjs-projects.component-NGK54BL2.js").then((m) => m.RxjsProjectsComponent)
  },
  {
    path: "typescript-basics",
    loadComponent: () => import("./typescript-basics.component-IZ2ACOFU.js").then((m) => m.TypescriptBasicsComponent)
  },
  { path: "angular-pro", loadComponent: () => import("./angular-pro.component-MXUNFNXR.js").then((m) => m.AngularProComponent) },
  { path: "**", loadComponent: () => import("./not-found.component-4U2YY2IR.js").then((m) => m.NotFoundComponent) }
];
if (environment.production) {
  enableProdMode();
}
bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      // Angular modules
      CommonModule,
      FormsModule,
      // Custom modules
      PassengerDashboardModule
    ),
    provideRouter(routes2)
  ]
}).catch((err) => console.error(err));
