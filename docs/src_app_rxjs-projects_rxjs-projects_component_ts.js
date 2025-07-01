"use strict";
(self["webpackChunkangular_fundamentals"] = self["webpackChunkangular_fundamentals"] || []).push([["src_app_rxjs-projects_rxjs-projects_component_ts"],{

/***/ 4268:
/*!**********************************************************!*\
  !*** ./src/app/rxjs-projects/rxjs-projects.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RxjsProjectsComponent: () => (/* binding */ RxjsProjectsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 1805);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 3586);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6651);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 9776);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 46);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5703);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8721);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 7605);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 5006);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 8841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 8728);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 667);
/* harmony import */ var rxjs_ajax__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/ajax */ 6259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 7705);




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
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵStandaloneFeature"]],
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
      }
    });
  }
}

/***/ }),

/***/ 4206:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/multicast.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MulticastOperator: () => (/* binding */ MulticastOperator),
/* harmony export */   multicast: () => (/* binding */ multicast)
/* harmony export */ });
/* harmony import */ var _observable_ConnectableObservable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/ConnectableObservable */ 4725);

function multicast(subjectOrSubjectFactory, selector) {
  return function multicastOperatorFunction(source) {
    let subjectFactory;
    if (typeof subjectOrSubjectFactory === 'function') {
      subjectFactory = subjectOrSubjectFactory;
    } else {
      subjectFactory = function subjectFactory() {
        return subjectOrSubjectFactory;
      };
    }
    if (typeof selector === 'function') {
      return source.lift(new MulticastOperator(subjectFactory, selector));
    }
    const connectable = Object.create(source, _observable_ConnectableObservable__WEBPACK_IMPORTED_MODULE_0__.connectableObservableDescriptor);
    connectable.source = source;
    connectable.subjectFactory = subjectFactory;
    return connectable;
  };
}
class MulticastOperator {
  constructor(subjectFactory, selector) {
    this.subjectFactory = subjectFactory;
    this.selector = selector;
  }
  call(subscriber, source) {
    const {
      selector
    } = this;
    const subject = this.subjectFactory();
    const subscription = selector(subject).subscribe(subscriber);
    subscription.add(source.subscribe(subject));
    return subscription;
  }
}
//# sourceMappingURL=multicast.js.map

/***/ }),

/***/ 667:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/share.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   share: () => (/* binding */ share)
/* harmony export */ });
/* harmony import */ var _multicast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./multicast */ 4206);
/* harmony import */ var _refCount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./refCount */ 3110);
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subject */ 5286);



function shareSubjectFactory() {
  return new _Subject__WEBPACK_IMPORTED_MODULE_0__.Subject();
}
function share() {
  return source => (0,_refCount__WEBPACK_IMPORTED_MODULE_1__.refCount)()((0,_multicast__WEBPACK_IMPORTED_MODULE_2__.multicast)(shareSubjectFactory)(source));
}
//# sourceMappingURL=share.js.map

/***/ }),

/***/ 5703:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/switchMapTo.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   switchMapTo: () => (/* binding */ switchMapTo)
/* harmony export */ });
/* harmony import */ var _switchMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./switchMap */ 9090);

function switchMapTo(innerObservable, resultSelector) {
  return resultSelector ? (0,_switchMap__WEBPACK_IMPORTED_MODULE_0__.switchMap)(() => innerObservable, resultSelector) : (0,_switchMap__WEBPACK_IMPORTED_MODULE_0__.switchMap)(() => innerObservable);
}
//# sourceMappingURL=switchMapTo.js.map

/***/ })

}]);