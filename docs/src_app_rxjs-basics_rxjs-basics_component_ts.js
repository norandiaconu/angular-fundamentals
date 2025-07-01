"use strict";
(self["webpackChunkangular_fundamentals"] = self["webpackChunkangular_fundamentals"] || []).push([["src_app_rxjs-basics_rxjs-basics_component_ts"],{

/***/ 4008:
/*!******************************************************!*\
  !*** ./src/app/rxjs-basics/rxjs-basics.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RxjsBasicsComponent: () => (/* binding */ RxjsBasicsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 1805);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 3586);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 7389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9601);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6651);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 4421);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 7579);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 8160);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs */ 1080);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! rxjs */ 1235);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! rxjs */ 708);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! rxjs */ 4670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! rxjs */ 9776);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! rxjs */ 696);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 8841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 5006);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 8728);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 184);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 9493);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 5019);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 522);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 1713);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 4046);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 1604);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 7605);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 8721);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 8979);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 5015);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs/operators */ 3020);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs/operators */ 821);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! rxjs/operators */ 4120);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! rxjs/operators */ 8542);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! rxjs/operators */ 3921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! rxjs/operators */ 6201);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! rxjs/operators */ 8456);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! rxjs/operators */ 9090);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! rxjs/operators */ 3574);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! rxjs/operators */ 46);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! rxjs/operators */ 3176);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! rxjs/operators */ 5349);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! rxjs/operators */ 7421);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! rxjs/operators */ 9611);
/* harmony import */ var rxjs_ajax__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! rxjs/ajax */ 6259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7705);




const _c0 = () => [];
function RxjsBasicsComponent_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span")(1, "button", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxjsBasicsComponent_Conditional_57_Template_button_click_1_listener() {
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
function RxjsBasicsComponent_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span")(1, "button", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxjsBasicsComponent_Conditional_58_Template_button_click_1_listener() {
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
function RxjsBasicsComponent_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span")(1, "button", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxjsBasicsComponent_Conditional_59_Template_button_click_1_listener() {
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
function RxjsBasicsComponent_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span")(1, "button", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxjsBasicsComponent_Conditional_60_Template_button_click_1_listener() {
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
function RxjsBasicsComponent_Conditional_63_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
  }
}
function RxjsBasicsComponent_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](1, RxjsBasicsComponent_Conditional_63_For_2_Template, 1, 0, "br", null, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](0, _c0).constructor(100));
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
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 136,
      vars: 25,
      consts: [[3, "click"], ["id", "take", 3, "click"], ["id", "abort"], ["id", "timeText"], ["title", "Get and return JSON api request responses", 3, "click"], ["title", "Start on each run", 3, "click"], ["title", "Restart on each run", 3, "click"], ["title", "Queue onto the end of each run", 3, "click"], ["title", "Complete current run, then allow a new one to start", 3, "click"], ["id", "typeahead"], ["title", "Start and end with specified values", 3, "click"], ["title", "Order events to run one after another", 3, "click"], ["title", "Include latest value from stream that is passed in", 3, "click"], ["title", "Combine latest values before emitting", 3, "click"], ["id", "countdown2", 3, "click"], ["id", "abort2"], ["title", "Emit latest values when all passed observables have fired at least once", 3, "click"], ["type", "number", "id", "first"], ["type", "number", "id", "second"]],
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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, RxjsBasicsComponent_Conditional_57_Template, 4, 0, "span")(58, RxjsBasicsComponent_Conditional_58_Template, 4, 0, "span")(59, RxjsBasicsComponent_Conditional_59_Template, 4, 0, "span")(60, RxjsBasicsComponent_Conditional_60_Template, 4, 1, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxjsBasicsComponent_Template_button_click_61_listener() {
            return ctx.restartEvents();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Restart Events");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, RxjsBasicsComponent_Conditional_63_Template, 3, 1, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br")(65, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxjsBasicsComponent_Template_button_click_66_listener() {
            return ctx.countdown();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Countdown");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Abort Mission");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "hr")(72, "input", 3)(73, "br")(74, "br");
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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxjsBasicsComponent_Template_button_click_93_listener() {
            return ctx.ajax();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " \u2022 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxjsBasicsComponent_Template_button_click_96_listener() {
            return ctx.mergeMap();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " \u2022 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxjsBasicsComponent_Template_button_click_99_listener() {
            return ctx.switchMap();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " \u2022 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxjsBasicsComponent_Template_button_click_102_listener() {
            return ctx.concatMap();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " \u2022 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxjsBasicsComponent_Template_button_click_105_listener() {
            return ctx.exhaustMap();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "br")(108, "br")(109, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " Combination Operators: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxjsBasicsComponent_Template_button_click_111_listener() {
            return ctx.startWith();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxjsBasicsComponent_Template_button_click_113_listener() {
            return ctx.concat();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxjsBasicsComponent_Template_button_click_115_listener() {
            return ctx.merge();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxjsBasicsComponent_Template_button_click_117_listener() {
            return ctx.withLatestFrom();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxjsBasicsComponent_Template_button_click_119_listener() {
            return ctx.forkJoin();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "br")(122, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxjsBasicsComponent_Template_button_click_123_listener() {
            return ctx.countdown2();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Abort Mission");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "br")(129, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RxjsBasicsComponent_Template_button_click_130_listener() {
            return ctx.combineLatest();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "input", 17)(133, "input", 18)(134, "br")(135, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Button presses: ", ctx.amount, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](56);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.displayCount ? 57 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.displayMouse ? 58 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.displayKeys ? 59 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.displayKeys ? 60 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.displayText ? 63 : -1);
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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.subscribed ? "Unsubscribe" : "Ajax", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.subscribed ? "Unsubscribe" : "Merge Map", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.subscribed ? "Unsubscribe" : "Switch Map", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.subscribed ? "Unsubscribe" : "Concat Map", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.subscribed ? "Unsubscribe" : "Exhaust Map", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.subscribed ? "Unsubscribe" : "Start With", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.subscribed ? "Unsubscribe" : "Concat", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.subscribed ? "Unsubscribe" : "Merge", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.subscribed ? "Unsubscribe" : "With Latest From", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.subscribed ? "Unsubscribe" : "Fork Join", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.subscribed ? "Start" : "Countdown");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.theCountdown, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.subscribed ? "Unsubscribe" : "Combine Latest", " ");
        }
      },
      styles: ["button[_ngcontent-%COMP%] {\n  background: #3a4250;\n  padding: 4px 10px;\n  margin: 0 2px;\n  border-radius: 2px;\n  min-width: 100px;\n}\n\ndiv[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n#take[_ngcontent-%COMP%] {\n  position: absolute;\n}"]
    });
  }
}

/***/ }),

/***/ 2351:
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/Notification.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Notification: () => (/* binding */ Notification),
/* harmony export */   NotificationKind: () => (/* binding */ NotificationKind)
/* harmony export */ });
/* harmony import */ var _observable_empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observable/empty */ 1235);
/* harmony import */ var _observable_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observable/of */ 4421);
/* harmony import */ var _observable_throwError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observable/throwError */ 4526);



var NotificationKind;
(function (NotificationKind) {
  NotificationKind["NEXT"] = "N";
  NotificationKind["ERROR"] = "E";
  NotificationKind["COMPLETE"] = "C";
})(NotificationKind || (NotificationKind = {}));
class Notification {
  constructor(kind, value, error) {
    this.kind = kind;
    this.value = value;
    this.error = error;
    this.hasValue = kind === 'N';
  }
  observe(observer) {
    switch (this.kind) {
      case 'N':
        return observer.next && observer.next(this.value);
      case 'E':
        return observer.error && observer.error(this.error);
      case 'C':
        return observer.complete && observer.complete();
    }
  }
  do(next, error, complete) {
    const kind = this.kind;
    switch (kind) {
      case 'N':
        return next && next(this.value);
      case 'E':
        return error && error(this.error);
      case 'C':
        return complete && complete();
    }
  }
  accept(nextOrObserver, error, complete) {
    if (nextOrObserver && typeof nextOrObserver.next === 'function') {
      return this.observe(nextOrObserver);
    } else {
      return this.do(nextOrObserver, error, complete);
    }
  }
  toObservable() {
    const kind = this.kind;
    switch (kind) {
      case 'N':
        return (0,_observable_of__WEBPACK_IMPORTED_MODULE_0__.of)(this.value);
      case 'E':
        return (0,_observable_throwError__WEBPACK_IMPORTED_MODULE_1__.throwError)(this.error);
      case 'C':
        return (0,_observable_empty__WEBPACK_IMPORTED_MODULE_2__.empty)();
    }
    throw new Error('unexpected notification kind value');
  }
  static createNext(value) {
    if (typeof value !== 'undefined') {
      return new Notification('N', value);
    }
    return Notification.undefinedValueNotification;
  }
  static createError(err) {
    return new Notification('E', undefined, err);
  }
  static createComplete() {
    return Notification.completeNotification;
  }
}
Notification.completeNotification = new Notification('C');
Notification.undefinedValueNotification = new Notification('N', undefined);
//# sourceMappingURL=Notification.js.map

/***/ }),

/***/ 9601:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/interval.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   interval: () => (/* binding */ interval)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observable */ 7389);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 1080);
/* harmony import */ var _util_isNumeric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isNumeric */ 9132);



function interval(period = 0, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async) {
  if (!(0,_util_isNumeric__WEBPACK_IMPORTED_MODULE_1__.isNumeric)(period) || period < 0) {
    period = 0;
  }
  if (!scheduler || typeof scheduler.schedule !== 'function') {
    scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async;
  }
  return new _Observable__WEBPACK_IMPORTED_MODULE_2__.Observable(subscriber => {
    subscriber.add(scheduler.schedule(dispatch, period, {
      subscriber,
      counter: 0,
      period
    }));
    return subscriber;
  });
}
function dispatch(state) {
  const {
    subscriber,
    counter,
    period
  } = state;
  subscriber.next(counter);
  this.schedule({
    subscriber,
    counter: counter + 1,
    period
  }, period);
}
//# sourceMappingURL=interval.js.map

/***/ }),

/***/ 4670:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/merge.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   merge: () => (/* binding */ merge)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Observable */ 7389);
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isScheduler */ 2234);
/* harmony import */ var _operators_mergeAll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operators/mergeAll */ 6201);
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fromArray */ 4279);




function merge(...observables) {
  let concurrent = Number.POSITIVE_INFINITY;
  let scheduler = null;
  let last = observables[observables.length - 1];
  if ((0,_util_isScheduler__WEBPACK_IMPORTED_MODULE_0__.isScheduler)(last)) {
    scheduler = observables.pop();
    if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
      concurrent = observables.pop();
    }
  } else if (typeof last === 'number') {
    concurrent = observables.pop();
  }
  if (scheduler === null && observables.length === 1 && observables[0] instanceof _Observable__WEBPACK_IMPORTED_MODULE_1__.Observable) {
    return observables[0];
  }
  return (0,_operators_mergeAll__WEBPACK_IMPORTED_MODULE_2__.mergeAll)(concurrent)((0,_fromArray__WEBPACK_IMPORTED_MODULE_3__.fromArray)(observables, scheduler));
}
//# sourceMappingURL=merge.js.map

/***/ }),

/***/ 7579:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/range.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dispatch: () => (/* binding */ dispatch),
/* harmony export */   range: () => (/* binding */ range)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ 7389);

function range(start = 0, count, scheduler) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    if (count === undefined) {
      count = start;
      start = 0;
    }
    let index = 0;
    let current = start;
    if (scheduler) {
      return scheduler.schedule(dispatch, 0, {
        index,
        count,
        start,
        subscriber
      });
    } else {
      do {
        if (index++ >= count) {
          subscriber.complete();
          break;
        }
        subscriber.next(current++);
        if (subscriber.closed) {
          break;
        }
      } while (true);
    }
    return undefined;
  });
}
function dispatch(state) {
  const {
    start,
    index,
    count,
    subscriber
  } = state;
  if (index >= count) {
    subscriber.complete();
    return;
  }
  subscriber.next(start);
  if (subscriber.closed) {
    return;
  }
  state.index = index + 1;
  state.start = start + 1;
  this.schedule(state);
}
//# sourceMappingURL=range.js.map

/***/ }),

/***/ 8667:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/audit.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   audit: () => (/* binding */ audit)
/* harmony export */ });
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../OuterSubscriber */ 611);
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/subscribeToResult */ 8787);


function audit(durationSelector) {
  return function auditOperatorFunction(source) {
    return source.lift(new AuditOperator(durationSelector));
  };
}
class AuditOperator {
  constructor(durationSelector) {
    this.durationSelector = durationSelector;
  }
  call(subscriber, source) {
    return source.subscribe(new AuditSubscriber(subscriber, this.durationSelector));
  }
}
class AuditSubscriber extends _OuterSubscriber__WEBPACK_IMPORTED_MODULE_0__.OuterSubscriber {
  constructor(destination, durationSelector) {
    super(destination);
    this.durationSelector = durationSelector;
    this.hasValue = false;
  }
  _next(value) {
    this.value = value;
    this.hasValue = true;
    if (!this.throttled) {
      let duration;
      try {
        const {
          durationSelector
        } = this;
        duration = durationSelector(value);
      } catch (err) {
        return this.destination.error(err);
      }
      const innerSubscription = (0,_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__.subscribeToResult)(this, duration);
      if (!innerSubscription || innerSubscription.closed) {
        this.clearThrottle();
      } else {
        this.add(this.throttled = innerSubscription);
      }
    }
  }
  clearThrottle() {
    const {
      value,
      hasValue,
      throttled
    } = this;
    if (throttled) {
      this.remove(throttled);
      this.throttled = null;
      throttled.unsubscribe();
    }
    if (hasValue) {
      this.value = null;
      this.hasValue = false;
      this.destination.next(value);
    }
  }
  notifyNext(outerValue, innerValue, outerIndex, innerIndex) {
    this.clearThrottle();
  }
  notifyComplete() {
    this.clearThrottle();
  }
}
//# sourceMappingURL=audit.js.map

/***/ }),

/***/ 8542:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/auditTime.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   auditTime: () => (/* binding */ auditTime)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 1080);
/* harmony import */ var _audit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audit */ 8667);
/* harmony import */ var _observable_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/timer */ 6651);



function auditTime(duration, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async) {
  return (0,_audit__WEBPACK_IMPORTED_MODULE_1__.audit)(() => (0,_observable_timer__WEBPACK_IMPORTED_MODULE_2__.timer)(duration, scheduler));
}
//# sourceMappingURL=auditTime.js.map

/***/ }),

/***/ 3020:
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/debounceTime.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   debounceTime: () => (/* binding */ debounceTime)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscriber */ 762);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 1080);


function debounceTime(dueTime, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async) {
  return source => source.lift(new DebounceTimeOperator(dueTime, scheduler));
}
class DebounceTimeOperator {
  constructor(dueTime, scheduler) {
    this.dueTime = dueTime;
    this.scheduler = scheduler;
  }
  call(subscriber, source) {
    return source.subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
  }
}
class DebounceTimeSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_1__.Subscriber {
  constructor(destination, dueTime, scheduler) {
    super(destination);
    this.dueTime = dueTime;
    this.scheduler = scheduler;
    this.debouncedSubscription = null;
    this.lastValue = null;
    this.hasValue = false;
  }
  _next(value) {
    this.clearDebounce();
    this.lastValue = value;
    this.hasValue = true;
    this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
  }
  _complete() {
    this.debouncedNext();
    this.destination.complete();
  }
  debouncedNext() {
    this.clearDebounce();
    if (this.hasValue) {
      const {
        lastValue
      } = this;
      this.lastValue = null;
      this.hasValue = false;
      this.destination.next(lastValue);
    }
  }
  clearDebounce() {
    const debouncedSubscription = this.debouncedSubscription;
    if (debouncedSubscription !== null) {
      this.remove(debouncedSubscription);
      debouncedSubscription.unsubscribe();
      this.debouncedSubscription = null;
    }
  }
}
function dispatchNext(subscriber) {
  subscriber.debouncedNext();
}
//# sourceMappingURL=debounceTime.js.map

/***/ }),

/***/ 9611:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/delay.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   delay: () => (/* binding */ delay)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 1080);
/* harmony import */ var _util_isDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isDate */ 2551);
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Subscriber */ 762);
/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Notification */ 2351);




function delay(delay, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async) {
  const absoluteDelay = (0,_util_isDate__WEBPACK_IMPORTED_MODULE_1__.isDate)(delay);
  const delayFor = absoluteDelay ? +delay - scheduler.now() : Math.abs(delay);
  return source => source.lift(new DelayOperator(delayFor, scheduler));
}
class DelayOperator {
  constructor(delay, scheduler) {
    this.delay = delay;
    this.scheduler = scheduler;
  }
  call(subscriber, source) {
    return source.subscribe(new DelaySubscriber(subscriber, this.delay, this.scheduler));
  }
}
class DelaySubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_2__.Subscriber {
  constructor(destination, delay, scheduler) {
    super(destination);
    this.delay = delay;
    this.scheduler = scheduler;
    this.queue = [];
    this.active = false;
    this.errored = false;
  }
  static dispatch(state) {
    const source = state.source;
    const queue = source.queue;
    const scheduler = state.scheduler;
    const destination = state.destination;
    while (queue.length > 0 && queue[0].time - scheduler.now() <= 0) {
      queue.shift().notification.observe(destination);
    }
    if (queue.length > 0) {
      const delay = Math.max(0, queue[0].time - scheduler.now());
      this.schedule(state, delay);
    } else {
      this.unsubscribe();
      source.active = false;
    }
  }
  _schedule(scheduler) {
    this.active = true;
    const destination = this.destination;
    destination.add(scheduler.schedule(DelaySubscriber.dispatch, this.delay, {
      source: this,
      destination: this.destination,
      scheduler: scheduler
    }));
  }
  scheduleNotification(notification) {
    if (this.errored === true) {
      return;
    }
    const scheduler = this.scheduler;
    const message = new DelayMessage(scheduler.now() + this.delay, notification);
    this.queue.push(message);
    if (this.active === false) {
      this._schedule(scheduler);
    }
  }
  _next(value) {
    this.scheduleNotification(_Notification__WEBPACK_IMPORTED_MODULE_3__.Notification.createNext(value));
  }
  _error(err) {
    this.errored = true;
    this.queue = [];
    this.destination.error(err);
    this.unsubscribe();
  }
  _complete() {
    this.scheduleNotification(_Notification__WEBPACK_IMPORTED_MODULE_3__.Notification.createComplete());
    this.unsubscribe();
  }
}
class DelayMessage {
  constructor(time, notification) {
    this.time = time;
    this.notification = notification;
  }
}
//# sourceMappingURL=delay.js.map

/***/ }),

/***/ 522:
/*!*******************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/distinctUntilChanged.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   distinctUntilChanged: () => (/* binding */ distinctUntilChanged)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ 762);

function distinctUntilChanged(compare, keySelector) {
  return source => source.lift(new DistinctUntilChangedOperator(compare, keySelector));
}
class DistinctUntilChangedOperator {
  constructor(compare, keySelector) {
    this.compare = compare;
    this.keySelector = keySelector;
  }
  call(subscriber, source) {
    return source.subscribe(new DistinctUntilChangedSubscriber(subscriber, this.compare, this.keySelector));
  }
}
class DistinctUntilChangedSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber {
  constructor(destination, compare, keySelector) {
    super(destination);
    this.keySelector = keySelector;
    this.hasKey = false;
    if (typeof compare === 'function') {
      this.compare = compare;
    }
  }
  compare(x, y) {
    return x === y;
  }
  _next(value) {
    let key;
    try {
      const {
        keySelector
      } = this;
      key = keySelector ? keySelector(value) : value;
    } catch (err) {
      return this.destination.error(err);
    }
    let result = false;
    if (this.hasKey) {
      try {
        const {
          compare
        } = this;
        result = compare(this.key, key);
      } catch (err) {
        return this.destination.error(err);
      }
    } else {
      this.hasKey = true;
    }
    if (!result) {
      this.key = key;
      this.destination.next(value);
    }
  }
}
//# sourceMappingURL=distinctUntilChanged.js.map

/***/ }),

/***/ 1713:
/*!**********************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/distinctUntilKeyChanged.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   distinctUntilKeyChanged: () => (/* binding */ distinctUntilKeyChanged)
/* harmony export */ });
/* harmony import */ var _distinctUntilChanged__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./distinctUntilChanged */ 522);

function distinctUntilKeyChanged(key, compare) {
  return (0,_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_0__.distinctUntilChanged)((x, y) => compare ? compare(x[key], y[key]) : x[key] === y[key]);
}
//# sourceMappingURL=distinctUntilKeyChanged.js.map

/***/ }),

/***/ 5349:
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/endWith.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   endWith: () => (/* binding */ endWith)
/* harmony export */ });
/* harmony import */ var _observable_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/concat */ 708);
/* harmony import */ var _observable_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observable/of */ 4421);


function endWith(...array) {
  return source => (0,_observable_concat__WEBPACK_IMPORTED_MODULE_0__.concat)(source, (0,_observable_of__WEBPACK_IMPORTED_MODULE_1__.of)(...array));
}
//# sourceMappingURL=endWith.js.map

/***/ }),

/***/ 184:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/reduce.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reduce: () => (/* binding */ reduce)
/* harmony export */ });
/* harmony import */ var _scan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scan */ 5019);
/* harmony import */ var _takeLast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./takeLast */ 8257);
/* harmony import */ var _defaultIfEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defaultIfEmpty */ 7849);
/* harmony import */ var _util_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/pipe */ 8167);




function reduce(accumulator, seed) {
  if (arguments.length >= 2) {
    return function reduceOperatorFunctionWithSeed(source) {
      return (0,_util_pipe__WEBPACK_IMPORTED_MODULE_0__.pipe)((0,_scan__WEBPACK_IMPORTED_MODULE_1__.scan)(accumulator, seed), (0,_takeLast__WEBPACK_IMPORTED_MODULE_2__.takeLast)(1), (0,_defaultIfEmpty__WEBPACK_IMPORTED_MODULE_3__.defaultIfEmpty)(seed))(source);
    };
  }
  return function reduceOperatorFunction(source) {
    return (0,_util_pipe__WEBPACK_IMPORTED_MODULE_0__.pipe)((0,_scan__WEBPACK_IMPORTED_MODULE_1__.scan)((acc, value, index) => accumulator(acc, value, index + 1)), (0,_takeLast__WEBPACK_IMPORTED_MODULE_2__.takeLast)(1))(source);
  };
}
//# sourceMappingURL=reduce.js.map

/***/ }),

/***/ 4120:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/sample.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sample: () => (/* binding */ sample)
/* harmony export */ });
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../OuterSubscriber */ 611);
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/subscribeToResult */ 8787);


function sample(notifier) {
  return source => source.lift(new SampleOperator(notifier));
}
class SampleOperator {
  constructor(notifier) {
    this.notifier = notifier;
  }
  call(subscriber, source) {
    const sampleSubscriber = new SampleSubscriber(subscriber);
    const subscription = source.subscribe(sampleSubscriber);
    subscription.add((0,_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_0__.subscribeToResult)(sampleSubscriber, this.notifier));
    return subscription;
  }
}
class SampleSubscriber extends _OuterSubscriber__WEBPACK_IMPORTED_MODULE_1__.OuterSubscriber {
  constructor() {
    super(...arguments);
    this.hasValue = false;
  }
  _next(value) {
    this.value = value;
    this.hasValue = true;
  }
  notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.emitValue();
  }
  notifyComplete() {
    this.emitValue();
  }
  emitValue() {
    if (this.hasValue) {
      this.hasValue = false;
      this.destination.next(this.value);
    }
  }
}
//# sourceMappingURL=sample.js.map

/***/ }),

/***/ 821:
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/sampleTime.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sampleTime: () => (/* binding */ sampleTime)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscriber */ 762);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 1080);


function sampleTime(period, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async) {
  return source => source.lift(new SampleTimeOperator(period, scheduler));
}
class SampleTimeOperator {
  constructor(period, scheduler) {
    this.period = period;
    this.scheduler = scheduler;
  }
  call(subscriber, source) {
    return source.subscribe(new SampleTimeSubscriber(subscriber, this.period, this.scheduler));
  }
}
class SampleTimeSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_1__.Subscriber {
  constructor(destination, period, scheduler) {
    super(destination);
    this.period = period;
    this.scheduler = scheduler;
    this.hasValue = false;
    this.add(scheduler.schedule(dispatchNotification, period, {
      subscriber: this,
      period
    }));
  }
  _next(value) {
    this.lastValue = value;
    this.hasValue = true;
  }
  notifyNext() {
    if (this.hasValue) {
      this.hasValue = false;
      this.destination.next(this.lastValue);
    }
  }
}
function dispatchNotification(state) {
  let {
    subscriber,
    period
  } = state;
  subscriber.notifyNext();
  this.schedule(state, period);
}
//# sourceMappingURL=sampleTime.js.map

/***/ }),

/***/ 1604:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/takeWhile.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   takeWhile: () => (/* binding */ takeWhile)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ 762);

function takeWhile(predicate, inclusive = false) {
  return source => source.lift(new TakeWhileOperator(predicate, inclusive));
}
class TakeWhileOperator {
  constructor(predicate, inclusive) {
    this.predicate = predicate;
    this.inclusive = inclusive;
  }
  call(subscriber, source) {
    return source.subscribe(new TakeWhileSubscriber(subscriber, this.predicate, this.inclusive));
  }
}
class TakeWhileSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber {
  constructor(destination, predicate, inclusive) {
    super(destination);
    this.predicate = predicate;
    this.inclusive = inclusive;
    this.index = 0;
  }
  _next(value) {
    const destination = this.destination;
    let result;
    try {
      result = this.predicate(value, this.index++);
    } catch (err) {
      destination.error(err);
      return;
    }
    this.nextOrComplete(value, result);
  }
  nextOrComplete(value, predicateResult) {
    const destination = this.destination;
    if (Boolean(predicateResult)) {
      destination.next(value);
    } else {
      if (this.inclusive) {
        destination.next(value);
      }
      destination.complete();
    }
  }
}
//# sourceMappingURL=takeWhile.js.map

/***/ }),

/***/ 9250:
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/throttle.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultThrottleConfig: () => (/* binding */ defaultThrottleConfig),
/* harmony export */   throttle: () => (/* binding */ throttle)
/* harmony export */ });
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../OuterSubscriber */ 611);
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/subscribeToResult */ 8787);


const defaultThrottleConfig = {
  leading: true,
  trailing: false
};
function throttle(durationSelector, config = defaultThrottleConfig) {
  return source => source.lift(new ThrottleOperator(durationSelector, config.leading, config.trailing));
}
class ThrottleOperator {
  constructor(durationSelector, leading, trailing) {
    this.durationSelector = durationSelector;
    this.leading = leading;
    this.trailing = trailing;
  }
  call(subscriber, source) {
    return source.subscribe(new ThrottleSubscriber(subscriber, this.durationSelector, this.leading, this.trailing));
  }
}
class ThrottleSubscriber extends _OuterSubscriber__WEBPACK_IMPORTED_MODULE_0__.OuterSubscriber {
  constructor(destination, durationSelector, _leading, _trailing) {
    super(destination);
    this.destination = destination;
    this.durationSelector = durationSelector;
    this._leading = _leading;
    this._trailing = _trailing;
    this._hasValue = false;
  }
  _next(value) {
    this._hasValue = true;
    this._sendValue = value;
    if (!this._throttled) {
      if (this._leading) {
        this.send();
      } else {
        this.throttle(value);
      }
    }
  }
  send() {
    const {
      _hasValue,
      _sendValue
    } = this;
    if (_hasValue) {
      this.destination.next(_sendValue);
      this.throttle(_sendValue);
    }
    this._hasValue = false;
    this._sendValue = null;
  }
  throttle(value) {
    const duration = this.tryDurationSelector(value);
    if (!!duration) {
      this.add(this._throttled = (0,_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__.subscribeToResult)(this, duration));
    }
  }
  tryDurationSelector(value) {
    try {
      return this.durationSelector(value);
    } catch (err) {
      this.destination.error(err);
      return null;
    }
  }
  throttlingDone() {
    const {
      _throttled,
      _trailing
    } = this;
    if (_throttled) {
      _throttled.unsubscribe();
    }
    this._throttled = null;
    if (_trailing) {
      this.send();
    }
  }
  notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.throttlingDone();
  }
  notifyComplete() {
    this.throttlingDone();
  }
}
//# sourceMappingURL=throttle.js.map

/***/ }),

/***/ 5015:
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/throttleTime.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   throttleTime: () => (/* binding */ throttleTime)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Subscriber */ 762);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 1080);
/* harmony import */ var _throttle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./throttle */ 9250);



function throttleTime(duration, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async, config = _throttle__WEBPACK_IMPORTED_MODULE_1__.defaultThrottleConfig) {
  return source => source.lift(new ThrottleTimeOperator(duration, scheduler, config.leading, config.trailing));
}
class ThrottleTimeOperator {
  constructor(duration, scheduler, leading, trailing) {
    this.duration = duration;
    this.scheduler = scheduler;
    this.leading = leading;
    this.trailing = trailing;
  }
  call(subscriber, source) {
    return source.subscribe(new ThrottleTimeSubscriber(subscriber, this.duration, this.scheduler, this.leading, this.trailing));
  }
}
class ThrottleTimeSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_2__.Subscriber {
  constructor(destination, duration, scheduler, leading, trailing) {
    super(destination);
    this.duration = duration;
    this.scheduler = scheduler;
    this.leading = leading;
    this.trailing = trailing;
    this._hasTrailingValue = false;
    this._trailingValue = null;
  }
  _next(value) {
    if (this.throttled) {
      if (this.trailing) {
        this._trailingValue = value;
        this._hasTrailingValue = true;
      }
    } else {
      this.add(this.throttled = this.scheduler.schedule(dispatchNext, this.duration, {
        subscriber: this
      }));
      if (this.leading) {
        this.destination.next(value);
      } else if (this.trailing) {
        this._trailingValue = value;
        this._hasTrailingValue = true;
      }
    }
  }
  _complete() {
    if (this._hasTrailingValue) {
      this.destination.next(this._trailingValue);
      this.destination.complete();
    } else {
      this.destination.complete();
    }
  }
  clearThrottle() {
    const throttled = this.throttled;
    if (throttled) {
      if (this.trailing && this._hasTrailingValue) {
        this.destination.next(this._trailingValue);
        this._trailingValue = null;
        this._hasTrailingValue = false;
      }
      throttled.unsubscribe();
      this.remove(throttled);
      this.throttled = null;
    }
  }
}
function dispatchNext(arg) {
  const {
    subscriber
  } = arg;
  subscriber.clearThrottle();
}
//# sourceMappingURL=throttleTime.js.map

/***/ }),

/***/ 7421:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/withLatestFrom.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   withLatestFrom: () => (/* binding */ withLatestFrom)
/* harmony export */ });
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../OuterSubscriber */ 611);
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/subscribeToResult */ 8787);


function withLatestFrom(...args) {
  return source => {
    let project;
    if (typeof args[args.length - 1] === 'function') {
      project = args.pop();
    }
    const observables = args;
    return source.lift(new WithLatestFromOperator(observables, project));
  };
}
class WithLatestFromOperator {
  constructor(observables, project) {
    this.observables = observables;
    this.project = project;
  }
  call(subscriber, source) {
    return source.subscribe(new WithLatestFromSubscriber(subscriber, this.observables, this.project));
  }
}
class WithLatestFromSubscriber extends _OuterSubscriber__WEBPACK_IMPORTED_MODULE_0__.OuterSubscriber {
  constructor(destination, observables, project) {
    super(destination);
    this.observables = observables;
    this.project = project;
    this.toRespond = [];
    const len = observables.length;
    this.values = new Array(len);
    for (let i = 0; i < len; i++) {
      this.toRespond.push(i);
    }
    for (let i = 0; i < len; i++) {
      let observable = observables[i];
      this.add((0,_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__.subscribeToResult)(this, observable, observable, i));
    }
  }
  notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.values[outerIndex] = innerValue;
    const toRespond = this.toRespond;
    if (toRespond.length > 0) {
      const found = toRespond.indexOf(outerIndex);
      if (found !== -1) {
        toRespond.splice(found, 1);
      }
    }
  }
  notifyComplete() {}
  _next(value) {
    if (this.toRespond.length === 0) {
      const args = [value, ...this.values];
      if (this.project) {
        this._tryProject(args);
      } else {
        this.destination.next(args);
      }
    }
  }
  _tryProject(args) {
    let result;
    try {
      result = this.project.apply(this, args);
    } catch (err) {
      this.destination.error(err);
      return;
    }
    this.destination.next(result);
  }
}
//# sourceMappingURL=withLatestFrom.js.map

/***/ }),

/***/ 2551:
/*!************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/isDate.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isDate: () => (/* binding */ isDate)
/* harmony export */ });
function isDate(value) {
  return value instanceof Date && !isNaN(+value);
}
//# sourceMappingURL=isDate.js.map

/***/ })

}]);