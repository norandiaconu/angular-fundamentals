import {
  ajax
} from "./chunk-2VWJROXG.js";
import {
  Component,
  EMPTY,
  Observable,
  Subscription,
  __spreadValues,
  async,
  auditTime,
  catchError,
  combineLatest,
  concat,
  concatMap,
  debounceTime,
  delay,
  distinctUntilChanged,
  distinctUntilKeyChanged,
  endWith,
  exhaustMap,
  filter,
  first,
  forkJoin,
  from,
  fromEvent,
  interval,
  map,
  mapTo,
  merge,
  mergeAll,
  mergeMap,
  of,
  pluck,
  range,
  reduce,
  sample,
  sampleTime,
  scan,
  setClassMetadata,
  startWith,
  switchMap,
  take,
  takeUntil,
  takeWhile,
  tap,
  throttleTime,
  timer,
  withLatestFrom,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-CKONHHS2.js";

// src/app/rxjs-basics/rxjs-basics.component.ts
var _c0 = () => [];
function RxjsBasicsComponent_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span")(1, "button", 0);
    \u0275\u0275listener("click", function RxjsBasicsComponent_Conditional_57_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.keyCount());
    });
    \u0275\u0275text(2, "Key Count");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " \u2022 ");
    \u0275\u0275elementEnd();
  }
}
function RxjsBasicsComponent_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span")(1, "button", 0);
    \u0275\u0275listener("click", function RxjsBasicsComponent_Conditional_58_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.mouseClickEvent());
    });
    \u0275\u0275text(2, "Mouse Event");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " \u2022 ");
    \u0275\u0275elementEnd();
  }
}
function RxjsBasicsComponent_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span")(1, "button", 0);
    \u0275\u0275listener("click", function RxjsBasicsComponent_Conditional_59_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.keyCodes());
    });
    \u0275\u0275text(2, "Key Codes");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " \u2022 ");
    \u0275\u0275elementEnd();
  }
}
function RxjsBasicsComponent_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span")(1, "button", 0);
    \u0275\u0275listener("click", function RxjsBasicsComponent_Conditional_60_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.scrollBar());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " \u2022 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.subscribed ? "Unsubscribe" : "Scroll Bar");
  }
}
function RxjsBasicsComponent_Conditional_63_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "br");
  }
}
function RxjsBasicsComponent_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275repeaterCreate(1, RxjsBasicsComponent_Conditional_63_For_2_Template, 1, 0, "br", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0).constructor(100));
  }
}
var RxjsBasicsComponent = class _RxjsBasicsComponent {
  constructor() {
    this.amount = 0;
    this.consoleString = "";
    this.counter = new Subscription();
    this.eventSub = new Subscription();
    this.displayCount = false;
    this.displayMouse = false;
    this.displayKeys = false;
    this.displayText = false;
    this.theCountdown = "";
    this.keyup$ = fromEvent(document, "keyup");
    this.subscribed = false;
    this.timeSub = new Subscription();
  }
  ngOnInit() {
    this.amount = 0;
    this.consoleString = "";
    this.counter = new Subscription();
    this.eventSub = new Subscription();
    this.observer = {
      next: (val) => console.log(this.consoleString, val),
      error: (err) => console.log("error", err),
      complete: () => console.log("complete")
    };
    this.displayCount = true;
    this.displayMouse = true;
    this.displayKeys = true;
    this.displayText = false;
    this.theCountdown = "10";
    this.subscribed = false;
  }
  helloWorld() {
    const observable1 = new Observable((subscriber) => {
      subscriber.next("Hello");
      subscriber.next("World");
      subscriber.complete();
    });
    console.log("before");
    this.consoleString = "helloWorld";
    observable1.subscribe(this.observer).unsubscribe();
    console.log("after");
  }
  setTimeout() {
    setTimeout(() => {
      console.log("timeout");
    }, 3e3);
  }
  countOnce() {
    this.consoleString = "countOnce";
    const observable2 = new Observable((subscriber) => {
      let count = 0;
      const id = setInterval(() => {
        subscriber.next(count);
        subscriber.complete();
        count++;
      }, 1e3);
      return () => {
        console.log("cleanup method");
        clearInterval(id);
      };
    });
    this.counter = observable2.subscribe(this.observer);
  }
  intervalTimer() {
    this.consoleString = "intervalTimer";
    const timer$ = interval(1e3);
    const timerSub = timer$.subscribe(this.observer);
    const timer2$ = timer(8e3, 1e3);
    const timerSub2 = timer2$.subscribe(console.log);
    setTimeout(() => {
      timerSub.unsubscribe();
      timerSub2.unsubscribe();
    }, 1e4);
  }
  fetch() {
    const fetchedPromise = fetch("https://api.github.com/users/octocat");
    fetchedPromise.then((data) => {
      console.log(data.json());
    });
  }
  ofSubscription() {
    this.consoleString = "ofSubscription";
    const source2$ = of(11, 12, 13, 14, 15);
    const sub = source2$.subscribe(this.observer);
    sub.unsubscribe();
  }
  range() {
    this.consoleString = "range";
    const source3$ = range(100, 5);
    source3$.subscribe(this.observer).unsubscribe();
  }
  from() {
    this.consoleString = "from";
    const source4$ = from([21, 22, 23, 24, 25]);
    source4$.subscribe(this.observer).unsubscribe();
  }
  ofPipe() {
    this.consoleString = "ofPipe";
    of(1, 2, 3, 4, 5).pipe(tap((value) => console.log("before", value)), map((value) => value * 10), tap({
      next: (value) => console.log("after", value),
      complete: () => console.log("done")
    })).subscribe(this.observer).unsubscribe();
  }
  ofFilter() {
    this.consoleString = "ofFilter";
    of(30, 31, 32, 33, 34, 35).pipe(filter((value) => value > 32)).subscribe(this.observer).unsubscribe();
  }
  reducer() {
    this.consoleString = "reducer";
    const numbers = [1, 2, 3, 4, 5];
    const totalReducer = (accumulator, currentValue) => accumulator + currentValue;
    const total = numbers.reduce(totalReducer);
    console.log(total);
    from(numbers).pipe(reduce(totalReducer)).subscribe(this.observer).unsubscribe();
    const obs = interval(100).pipe(take(4), reduce(totalReducer)).subscribe(this.observer);
    setTimeout(() => {
      obs.unsubscribe();
    }, 1e3);
  }
  scan() {
    this.consoleString = "scan";
    from([1, 2, 3, 4, 5]).pipe(scan((accumulator, currentValue) => accumulator + currentValue, 0)).subscribe(this.observer).unsubscribe();
    const user = [
      { name: "Brian", loggedIn: false, token: "" },
      { name: "Brian", loggedIn: true, token: "abc" },
      { name: "Brian", loggedIn: true, token: "123" }
    ];
    const state$ = from(user).pipe(scan((accumulator, currentValue) => __spreadValues(__spreadValues({}, accumulator), currentValue), {}));
    state$.subscribe(this.observer).unsubscribe();
    from(user).pipe(map((state) => state.name), distinctUntilChanged()).subscribe(console.log).unsubscribe();
    from(user).pipe(distinctUntilKeyChanged("name"), map((state) => state.name)).subscribe(console.log).unsubscribe();
  }
  take() {
    of(1, 2, 3, 4, 5).pipe(take(3)).subscribe({
      next: console.log,
      complete: () => console.log("complete")
    });
    fromEvent(document, "click").pipe(map((event) => event), map((event) => ({
      x: event.clientX,
      y: event.clientY
    })), take(1)).subscribe({
      next: console.log,
      complete: () => console.log("complete")
    });
    fromEvent(document, "click").pipe(map((event) => event), map((event) => ({
      x: event.clientX,
      y: event.clientY
    })), first(({ y }) => y > 500)).subscribe({
      next: console.log,
      complete: () => console.log("complete")
    });
    const randomNum = Math.floor(Math.random() * 1e3);
    document.getElementById("take").style.top = randomNum + "px";
  }
  takeWhile() {
    fromEvent(document, "click").pipe(map((event) => event), map((event) => ({
      x: event.clientX,
      y: event.clientY
    })), takeWhile(({ y }) => y <= 800, true)).subscribe({
      next: console.log,
      complete: () => console.log("complete")
    });
  }
  takeUntil() {
    interval(1e3).pipe(takeUntil(fromEvent(document, "keyup"))).subscribe(console.log);
  }
  distinctUntilChanged() {
    of(1, 1, 2, 3).pipe(distinctUntilChanged()).subscribe(console.log).unsubscribe();
  }
  keyCount() {
    this.displayCount = false;
    this.eventSub.add(this.keyup$.subscribe((observer1) => {
      this.amount++;
      console.log(observer1);
      console.log(this.amount, "keyCount");
    }));
  }
  mouseClickEvent() {
    this.displayMouse = false;
    this.consoleString = "mouseClickEvent";
    const source1$ = fromEvent(document, "click");
    const subOne = source1$.subscribe(this.observer);
    this.eventSub.add(source1$.subscribe(this.observer));
    setTimeout(() => {
      console.log("unsubscribing one click event");
      subOne.unsubscribe();
    }, 5e3);
  }
  keyCodes() {
    this.displayKeys = false;
    const keyCodeMap$ = this.keyup$.pipe(map((event) => event), map((event) => event.code));
    this.eventSub.add(keyCodeMap$.subscribe(console.log));
    const keyCodePluck$ = this.keyup$.pipe(pluck("code"));
    this.eventSub.add(keyCodePluck$.subscribe(console.log));
    const keyCodeMapTo$ = this.keyup$.pipe(mapTo("keyPressed"));
    this.eventSub.add(keyCodeMapTo$.subscribe(console.log));
    const enter$ = this.keyup$.pipe(map((event) => event), filter((code) => code.code === "Enter"));
    this.eventSub.add(enter$.subscribe(console.log));
  }
  scrollBar() {
    if (this.subscribed === false) {
      this.displayText = true;
      const scroll$ = fromEvent(document, "scroll");
      const progress$ = scroll$.pipe(
        // same as auditTime(30)
        throttleTime(30, async, {
          leading: false,
          trailing: true
        }),
        map(() => {
          const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
          return scrollTop / (scrollHeight - clientHeight) * 100;
        })
      );
      const progressBar = document.querySelector(".progress-bar");
      this.eventSub.add(progress$.subscribe((percent) => {
        progressBar.setAttribute("style", "width: " + percent + "%");
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
    this.eventSub = new Subscription();
  }
  countdown() {
    const abortButton = document.getElementById("abort");
    interval(1e3).pipe(mapTo(-1), scan((accumulator, current) => accumulator + current, 10), takeWhile((value) => value >= 0), takeUntil(fromEvent(abortButton, "click"))).subscribe((value) => {
      this.theCountdown = "" + value;
      if (!value) {
        this.theCountdown = "LIFTOFF";
      }
    });
  }
  debounceTime() {
    this.genericTime(debounceTime(1e3));
  }
  throttleTime() {
    this.genericTime(throttleTime(1e3));
  }
  sampleTime() {
    this.genericTime(sampleTime(1e3));
  }
  sample() {
    this.genericTime(sample(interval(1e3)));
  }
  auditTime() {
    this.genericTime(auditTime(1e3));
  }
  genericTime(style) {
    if (this.subscribed === false) {
      this.timeSub = fromEvent(document, "click").pipe(style, map((event) => ({
        x: event.clientX,
        y: event.clientY
      }))).subscribe(console.log);
      this.timeSub.add(fromEvent(document.getElementById("timeText"), "keyup").pipe(style, pluck("target", "value"), distinctUntilChanged()).subscribe(console.log));
    } else {
      this.timeSub.unsubscribe();
    }
    this.subscribed = !this.subscribed;
  }
  ajax() {
    if (this.subscribed === false) {
      this.timeSub = fromEvent(document.getElementById("timeText"), "keyup").pipe(debounceTime(1e3), pluck("target", "value"), map((event) => ajax.getJSON("http://localhost:3000/passengers/" + event).pipe(catchError(() => EMPTY))), mergeAll()).subscribe(console.log);
      this.timeSub.add(fromEvent(document.getElementById("timeText"), "keyup").pipe(debounceTime(1e3), pluck("target", "value"), mergeMap((event) => ajax.getJSON("https://api.github.com/users/" + event).pipe(catchError(() => EMPTY)))).subscribe(console.log));
    } else {
      this.timeSub.unsubscribe();
    }
    this.subscribed = !this.subscribed;
  }
  mergeMap() {
    if (this.subscribed === false) {
      this.timeSub = fromEvent(document, "mousedown").pipe(mergeMap(() => interval(1e3).pipe(takeUntil(fromEvent(document, "mouseup"))))).subscribe(console.log);
      this.timeSub.add(fromEvent(document, "click").pipe(map((event) => event), map((event) => ({
        x: event.clientX,
        y: event.clientY
      }))).pipe(mergeMap((coords) => ajax.post("https://run.mocky.io/v3/4cd66c07-e46c-425d-94ec-a53724bdc1ec", coords).pipe(catchError(() => EMPTY)))).subscribe(console.log));
    } else {
      this.timeSub.unsubscribe();
    }
    this.subscribed = !this.subscribed;
  }
  switchMap() {
    const baseUrl = "https://api.openbrewerydb.org/breweries";
    const typeaheadBox = document.getElementById("typeahead");
    if (this.subscribed === false) {
      this.timeSub = fromEvent(document, "click").pipe(switchMap(() => interval(1e3).pipe(take(10)))).subscribe(console.log);
      this.timeSub.add(fromEvent(document.getElementById("timeText"), "keyup").pipe(debounceTime(1e3), pluck("target", "value"), distinctUntilChanged(), map((searchTerm) => searchTerm), switchMap((searchTerm) => ajax.getJSON(baseUrl + "?by_name=" + searchTerm).pipe(catchError(() => EMPTY)))).subscribe((response) => {
        typeaheadBox.innerHTML = response.map((b) => b.name).join("<br>");
      }));
    } else {
      this.timeSub.unsubscribe();
    }
    this.subscribed = !this.subscribed;
  }
  concatMap() {
    if (this.subscribed === false) {
      this.timeSub = fromEvent(document, "click").pipe(concatMap(() => interval(1e3).pipe(take(3)))).subscribe(console.log);
    } else {
      this.timeSub.unsubscribe();
    }
    this.subscribed = !this.subscribed;
  }
  exhaustMap() {
    if (this.subscribed === false) {
      this.timeSub = fromEvent(document, "click").pipe(exhaustMap(() => interval(1e3).pipe(take(3)))).subscribe(console.log);
    } else {
      this.timeSub.unsubscribe();
    }
    this.subscribed = !this.subscribed;
  }
  startWith() {
    if (this.subscribed === false) {
      const numbers = of(1, 2, 3);
      this.timeSub = numbers.pipe(startWith("a", "b"), endWith("c", "d")).subscribe(console.log);
    } else {
      this.timeSub.unsubscribe();
    }
    this.subscribed = !this.subscribed;
  }
  concat() {
    if (this.subscribed === false) {
      const interval$ = interval(1e3);
      this.timeSub = concat(interval$.pipe(take(3)), interval$.pipe(take(2))).subscribe(console.log);
    } else {
      this.timeSub.unsubscribe();
    }
    this.subscribed = !this.subscribed;
  }
  merge() {
    if (this.subscribed === false) {
      this.timeSub = merge(fromEvent(document, "keyup"), fromEvent(document, "click")).subscribe(console.log);
    } else {
      this.timeSub.unsubscribe();
    }
    this.subscribed = !this.subscribed;
  }
  countdown2() {
    const startButton = document.getElementById("countdown2");
    const pauseButton = document.getElementById("abort2");
    merge(fromEvent(startButton, "click").pipe(mapTo(true)), fromEvent(pauseButton, "click").pipe(mapTo(false))).pipe(switchMap((shouldStart) => shouldStart ? interval(1e3) : EMPTY), mapTo(-1), scan((accumulator, current) => accumulator + current, 10), takeWhile((value) => value >= 0), startWith(10)).subscribe((value) => {
      this.theCountdown = "" + value;
      if (!value) {
        this.theCountdown = "LIFTOFF";
      }
    });
    if (this.subscribed === false) {
      this.subscribed = true;
    }
  }
  combineLatest() {
    if (this.subscribed === false) {
      const firstElem = document.getElementById("first");
      const secondElem = document.getElementById("second");
      this.timeSub = combineLatest([fromEvent(document, "keyup"), fromEvent(document, "click")]).subscribe(console.log);
      const keyupAsValue = (elem) => fromEvent(elem, "keyup").pipe(map((event) => event.target.valueAsNumber));
      this.timeSub = combineLatest([keyupAsValue(firstElem), keyupAsValue(secondElem)]).pipe(filter(([firstNum, secondNum]) => !isNaN(firstNum) && !isNaN(secondNum)), map(([firstOperand, secondOperand]) => firstOperand + secondOperand)).subscribe(console.log);
    } else {
      this.timeSub.unsubscribe();
    }
    this.subscribed = !this.subscribed;
  }
  withLatestFrom() {
    if (this.subscribed === false) {
      this.timeSub = fromEvent(document, "click").pipe(withLatestFrom(interval(1e3))).subscribe(console.log);
    } else {
      this.timeSub.unsubscribe();
    }
    this.subscribed = !this.subscribed;
  }
  forkJoin() {
    if (this.subscribed === false) {
      this.timeSub = forkJoin({
        numbers: of(1, 2, 3),
        letters: of("a", "b", "c").pipe(delay(2e3))
      }).subscribe(console.log);
      this.timeSub = forkJoin({
        user: ajax.getJSON("https://api.github.com/users/reactivex"),
        repo: ajax.getJSON("https://api.github.com/users/reactivex/repos")
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
    this.\u0275fac = function RxjsBasicsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RxjsBasicsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RxjsBasicsComponent, selectors: [["rxjs-basics"]], decls: 136, vars: 25, consts: [[3, "click"], ["id", "take", 3, "click"], ["id", "abort"], ["id", "timeText"], ["title", "Get and return JSON api request responses", 3, "click"], ["title", "Start on each run", 3, "click"], ["title", "Restart on each run", 3, "click"], ["title", "Queue onto the end of each run", 3, "click"], ["title", "Complete current run, then allow a new one to start", 3, "click"], ["id", "typeahead"], ["title", "Start and end with specified values", 3, "click"], ["title", "Order events to run one after another", 3, "click"], ["title", "Include latest value from stream that is passed in", 3, "click"], ["title", "Combine latest values before emitting", 3, "click"], ["id", "countdown2", 3, "click"], ["id", "abort2"], ["title", "Emit latest values when all passed observables have fired at least once", 3, "click"], ["type", "number", "id", "first"], ["type", "number", "id", "second"]], template: function RxjsBasicsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div");
        \u0275\u0275text(1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div");
        \u0275\u0275text(3, " General: ");
        \u0275\u0275elementStart(4, "button", 0);
        \u0275\u0275listener("click", function RxjsBasicsComponent_Template_button_click_4_listener() {
          return ctx.helloWorld();
        });
        \u0275\u0275text(5, "Hello World");
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, " \u2022 ");
        \u0275\u0275elementStart(7, "button", 0);
        \u0275\u0275listener("click", function RxjsBasicsComponent_Template_button_click_7_listener() {
          return ctx.setTimeout();
        });
        \u0275\u0275text(8, "Set Timeout");
        \u0275\u0275elementEnd();
        \u0275\u0275text(9, " \u2022 ");
        \u0275\u0275elementStart(10, "button", 0);
        \u0275\u0275listener("click", function RxjsBasicsComponent_Template_button_click_10_listener() {
          return ctx.countOnce();
        });
        \u0275\u0275text(11, "Count Once");
        \u0275\u0275elementEnd();
        \u0275\u0275text(12, " \u2022 ");
        \u0275\u0275elementStart(13, "button", 0);
        \u0275\u0275listener("click", function RxjsBasicsComponent_Template_button_click_13_listener() {
          return ctx.intervalTimer();
        });
        \u0275\u0275text(14, "Interval Timer");
        \u0275\u0275elementEnd();
        \u0275\u0275text(15, " \u2022 ");
        \u0275\u0275elementStart(16, "button", 0);
        \u0275\u0275listener("click", function RxjsBasicsComponent_Template_button_click_16_listener() {
          return ctx.fetch();
        });
        \u0275\u0275text(17, "Fetch");
        \u0275\u0275elementEnd();
        \u0275\u0275element(18, "br")(19, "br");
        \u0275\u0275text(20, "Looping: ");
        \u0275\u0275elementStart(21, "button", 0);
        \u0275\u0275listener("click", function RxjsBasicsComponent_Template_button_click_21_listener() {
          return ctx.ofSubscription();
        });
        \u0275\u0275text(22, "Of Subscription");
        \u0275\u0275elementEnd();
        \u0275\u0275text(23, " \u2022 ");
        \u0275\u0275elementStart(24, "button", 0);
        \u0275\u0275listener("click", function RxjsBasicsComponent_Template_button_click_24_listener() {
          return ctx.range();
        });
        \u0275\u0275text(25, "Range");
        \u0275\u0275elementEnd();
        \u0275\u0275text(26, " \u2022 ");
        \u0275\u0275elementStart(27, "button", 0);
        \u0275\u0275listener("click", function RxjsBasicsComponent_Template_button_click_27_listener() {
          return ctx.from();
        });
        \u0275\u0275text(28, "From");
        \u0275\u0275elementEnd();
        \u0275\u0275text(29, " \u2022 ");
        \u0275\u0275elementStart(30, "button", 0);
        \u0275\u0275listener("click", function RxjsBasicsComponent_Template_button_click_30_listener() {
          return ctx.ofPipe();
        });
        \u0275\u0275text(31, "Of Pipe");
        \u0275\u0275elementEnd();
        \u0275\u0275text(32, " \u2022 ");
        \u0275\u0275elementStart(33, "button", 0);
        \u0275\u0275listener("click", function RxjsBasicsComponent_Template_button_click_33_listener() {
          return ctx.ofFilter();
        });
        \u0275\u0275text(34, "Of Filter");
        \u0275\u0275elementEnd();
        \u0275\u0275text(35, " \u2022 ");
        \u0275\u0275elementStart(36, "button", 0);
        \u0275\u0275listener("click", function RxjsBasicsComponent_Template_button_click_36_listener() {
          return ctx.reducer();
        });
        \u0275\u0275text(37, "Reducer");
        \u0275\u0275elementEnd();
        \u0275\u0275text(38, " \u2022 ");
        \u0275\u0275elementStart(39, "button", 0);
        \u0275\u0275listener("click", function RxjsBasicsComponent_Template_button_click_39_listener() {
          return ctx.scan();
        });
        \u0275\u0275text(40, "Scan");
        \u0275\u0275elementEnd();
        \u0275\u0275text(41, " \u2022 ");
        \u0275\u0275elementStart(42, "button", 1);
        \u0275\u0275listener("click", function RxjsBasicsComponent_Template_button_click_42_listener() {
          return ctx.take();
        });
        \u0275\u0275text(43, "Take");
        \u0275\u0275elementEnd();
        \u0275\u0275element(44, "br")(45, "br");
        \u0275\u0275elementStart(46, "button", 0);
        \u0275\u0275listener("click", function RxjsBasicsComponent_Template_button_click_46_listener() {
          return ctx.takeWhile();
        });
        \u0275\u0275text(47, "Take While");
        \u0275\u0275elementEnd();
        \u0275\u0275text(48, " \u2022 ");
        \u0275\u0275elementStart(49, "button", 0);
        \u0275\u0275listener("click", function RxjsBasicsComponent_Template_button_click_49_listener() {
          return ctx.takeUntil();
        });
        \u0275\u0275text(50, "Take Until");
        \u0275\u0275elementEnd();
        \u0275\u0275text(51, " \u2022 ");
        \u0275\u0275elementStart(52, "button", 0);
        \u0275\u0275listener("click", function RxjsBasicsComponent_Template_button_click_52_listener() {
          return ctx.distinctUntilChanged();
        });
        \u0275\u0275text(53, "Distinct Until Changed");
        \u0275\u0275elementEnd();
        \u0275\u0275element(54, "br")(55, "br");
        \u0275\u0275text(56, "Event: ");
        \u0275\u0275template(57, RxjsBasicsComponent_Conditional_57_Template, 4, 0, "span")(58, RxjsBasicsComponent_Conditional_58_Template, 4, 0, "span")(59, RxjsBasicsComponent_Conditional_59_Template, 4, 0, "span")(60, RxjsBasicsComponent_Conditional_60_Template, 4, 1, "span");
        \u0275\u0275elementStart(61, "button", 0);
        \u0275\u0275listener("click", function RxjsBasicsComponent_Template_button_click_61_listener() {
          return ctx.restartEvents();
        });
        \u0275\u0275text(62, "Restart Events");
        \u0275\u0275elementEnd();
        \u0275\u0275template(63, RxjsBasicsComponent_Conditional_63_Template, 3, 1, "div");
        \u0275\u0275element(64, "br")(65, "br");
        \u0275\u0275elementStart(66, "button", 0);
        \u0275\u0275listener("click", function RxjsBasicsComponent_Template_button_click_66_listener() {
          return ctx.countdown();
        });
        \u0275\u0275text(67, "Countdown");
        \u0275\u0275elementEnd();
        \u0275\u0275text(68);
        \u0275\u0275elementStart(69, "button", 2);
        \u0275\u0275text(70, "Abort Mission");
        \u0275\u0275elementEnd();
        \u0275\u0275element(71, "hr")(72, "input", 3)(73, "br")(74, "br");
        \u0275\u0275text(75, "Rate Limiting: ");
        \u0275\u0275elementStart(76, "button", 0);
        \u0275\u0275listener("click", function RxjsBasicsComponent_Template_button_click_76_listener() {
          return ctx.debounceTime();
        });
        \u0275\u0275text(77);
        \u0275\u0275elementEnd();
        \u0275\u0275text(78, " \u2022 ");
        \u0275\u0275elementStart(79, "button", 0);
        \u0275\u0275listener("click", function RxjsBasicsComponent_Template_button_click_79_listener() {
          return ctx.throttleTime();
        });
        \u0275\u0275text(80);
        \u0275\u0275elementEnd();
        \u0275\u0275text(81, " \u2022 ");
        \u0275\u0275elementStart(82, "button", 0);
        \u0275\u0275listener("click", function RxjsBasicsComponent_Template_button_click_82_listener() {
          return ctx.sampleTime();
        });
        \u0275\u0275text(83);
        \u0275\u0275elementEnd();
        \u0275\u0275text(84, " \u2022 ");
        \u0275\u0275elementStart(85, "button", 0);
        \u0275\u0275listener("click", function RxjsBasicsComponent_Template_button_click_85_listener() {
          return ctx.sample();
        });
        \u0275\u0275text(86);
        \u0275\u0275elementEnd();
        \u0275\u0275text(87, " \u2022 ");
        \u0275\u0275elementStart(88, "button", 0);
        \u0275\u0275listener("click", function RxjsBasicsComponent_Template_button_click_88_listener() {
          return ctx.auditTime();
        });
        \u0275\u0275text(89);
        \u0275\u0275elementEnd();
        \u0275\u0275element(90, "br")(91, "br");
        \u0275\u0275text(92, "Transformation: ");
        \u0275\u0275elementStart(93, "button", 4);
        \u0275\u0275listener("click", function RxjsBasicsComponent_Template_button_click_93_listener() {
          return ctx.ajax();
        });
        \u0275\u0275text(94);
        \u0275\u0275elementEnd();
        \u0275\u0275text(95, " \u2022 ");
        \u0275\u0275elementStart(96, "button", 5);
        \u0275\u0275listener("click", function RxjsBasicsComponent_Template_button_click_96_listener() {
          return ctx.mergeMap();
        });
        \u0275\u0275text(97);
        \u0275\u0275elementEnd();
        \u0275\u0275text(98, " \u2022 ");
        \u0275\u0275elementStart(99, "button", 6);
        \u0275\u0275listener("click", function RxjsBasicsComponent_Template_button_click_99_listener() {
          return ctx.switchMap();
        });
        \u0275\u0275text(100);
        \u0275\u0275elementEnd();
        \u0275\u0275text(101, " \u2022 ");
        \u0275\u0275elementStart(102, "button", 7);
        \u0275\u0275listener("click", function RxjsBasicsComponent_Template_button_click_102_listener() {
          return ctx.concatMap();
        });
        \u0275\u0275text(103);
        \u0275\u0275elementEnd();
        \u0275\u0275text(104, " \u2022 ");
        \u0275\u0275elementStart(105, "button", 8);
        \u0275\u0275listener("click", function RxjsBasicsComponent_Template_button_click_105_listener() {
          return ctx.exhaustMap();
        });
        \u0275\u0275text(106);
        \u0275\u0275elementEnd();
        \u0275\u0275element(107, "br")(108, "br")(109, "div", 9);
        \u0275\u0275text(110, " Combination Operators: ");
        \u0275\u0275elementStart(111, "button", 10);
        \u0275\u0275listener("click", function RxjsBasicsComponent_Template_button_click_111_listener() {
          return ctx.startWith();
        });
        \u0275\u0275text(112);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(113, "button", 11);
        \u0275\u0275listener("click", function RxjsBasicsComponent_Template_button_click_113_listener() {
          return ctx.concat();
        });
        \u0275\u0275text(114);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(115, "button", 10);
        \u0275\u0275listener("click", function RxjsBasicsComponent_Template_button_click_115_listener() {
          return ctx.merge();
        });
        \u0275\u0275text(116);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(117, "button", 12);
        \u0275\u0275listener("click", function RxjsBasicsComponent_Template_button_click_117_listener() {
          return ctx.withLatestFrom();
        });
        \u0275\u0275text(118);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(119, "button", 13);
        \u0275\u0275listener("click", function RxjsBasicsComponent_Template_button_click_119_listener() {
          return ctx.forkJoin();
        });
        \u0275\u0275text(120);
        \u0275\u0275elementEnd();
        \u0275\u0275element(121, "br")(122, "br");
        \u0275\u0275elementStart(123, "button", 14);
        \u0275\u0275listener("click", function RxjsBasicsComponent_Template_button_click_123_listener() {
          return ctx.countdown2();
        });
        \u0275\u0275text(124);
        \u0275\u0275elementEnd();
        \u0275\u0275text(125);
        \u0275\u0275elementStart(126, "button", 15);
        \u0275\u0275text(127, "Abort Mission");
        \u0275\u0275elementEnd();
        \u0275\u0275element(128, "br")(129, "br");
        \u0275\u0275elementStart(130, "button", 16);
        \u0275\u0275listener("click", function RxjsBasicsComponent_Template_button_click_130_listener() {
          return ctx.combineLatest();
        });
        \u0275\u0275text(131);
        \u0275\u0275elementEnd();
        \u0275\u0275element(132, "input", 17)(133, "input", 18)(134, "br")(135, "br");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1("Button presses: ", ctx.amount, "");
        \u0275\u0275advance(56);
        \u0275\u0275conditional(ctx.displayCount ? 57 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.displayMouse ? 58 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.displayKeys ? 59 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.displayKeys ? 60 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.displayText ? 63 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", ctx.theCountdown, " ");
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.subscribed ? "Unsubscribe" : "Debounce Time");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.subscribed ? "Unsubscribe" : "Throttle Time");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.subscribed ? "Unsubscribe" : "Sample Time");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.subscribed ? "Unsubscribe" : "Sample");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.subscribed ? "Unsubscribe" : "Audit Time");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", ctx.subscribed ? "Unsubscribe" : "Ajax", " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.subscribed ? "Unsubscribe" : "Merge Map", " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.subscribed ? "Unsubscribe" : "Switch Map", " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.subscribed ? "Unsubscribe" : "Concat Map", " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.subscribed ? "Unsubscribe" : "Exhaust Map", " ");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", ctx.subscribed ? "Unsubscribe" : "Start With", " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.subscribed ? "Unsubscribe" : "Concat", " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.subscribed ? "Unsubscribe" : "Merge", " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.subscribed ? "Unsubscribe" : "With Latest From", " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.subscribed ? "Unsubscribe" : "Fork Join", " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.subscribed ? "Start" : "Countdown");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.theCountdown, " ");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", ctx.subscribed ? "Unsubscribe" : "Combine Latest", " ");
      }
    }, styles: ["\n\nbutton[_ngcontent-%COMP%] {\n  background: #3a4250;\n  padding: 4px 10px;\n  margin: 0 2px;\n  border-radius: 2px;\n  min-width: 100px;\n}\ndiv[_ngcontent-%COMP%] {\n  text-align: center;\n}\n#take[_ngcontent-%COMP%] {\n  position: absolute;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RxjsBasicsComponent, [{
    type: Component,
    args: [{ selector: "rxjs-basics", imports: [], template: `<div>Button presses: {{ amount }}</div>
<div>
    General:
    <button (click)="helloWorld()">Hello World</button> &bull; <button (click)="setTimeout()">Set Timeout</button> &bull;
    <button (click)="countOnce()">Count Once</button> &bull; <button (click)="intervalTimer()">Interval Timer</button> &bull;
    <button (click)="fetch()">Fetch</button>
    <br /><br />Looping: <button (click)="ofSubscription()">Of Subscription</button> &bull; <button (click)="range()">Range</button> &bull;
    <button (click)="from()">From</button> &bull; <button (click)="ofPipe()">Of Pipe</button> &bull;
    <button (click)="ofFilter()">Of Filter</button> &bull; <button (click)="reducer()">Reducer</button> &bull;
    <button (click)="scan()">Scan</button> &bull;
    <button (click)="take()" id="take">Take</button>
    <br /><br />
    <button (click)="takeWhile()">Take While</button> &bull; <button (click)="takeUntil()">Take Until</button> &bull;
    <button (click)="distinctUntilChanged()">Distinct Until Changed</button>
    <br /><br />Event: @if (displayCount) {
    <span> <button (click)="keyCount()">Key Count</button> &bull; </span>
    } @if (displayMouse) {
    <span> <button (click)="mouseClickEvent()">Mouse Event</button> &bull; </span>
    } @if (displayKeys) {
    <span> <button (click)="keyCodes()">Key Codes</button> &bull; </span>
    } @if (displayKeys) {
    <span>
        <button (click)="scrollBar()">{{ subscribed ? 'Unsubscribe' : 'Scroll Bar' }}</button> &bull;
    </span>
    }
    <button (click)="restartEvents()">Restart Events</button>
    @if (displayText) {
    <div>
        @for (i of [].constructor(100); track i) {
        <br />
        }
    </div>
    }
    <br /><br />
    <button (click)="countdown()">Countdown</button> {{ theCountdown }}
    <button id="abort">Abort Mission</button>
    <hr />
    <input id="timeText" />
    <br /><br />Rate Limiting: <button (click)="debounceTime()">{{ subscribed ? 'Unsubscribe' : 'Debounce Time' }}</button> &bull;
    <button (click)="throttleTime()">{{ subscribed ? 'Unsubscribe' : 'Throttle Time' }}</button> &bull;
    <button (click)="sampleTime()">{{ subscribed ? 'Unsubscribe' : 'Sample Time' }}</button> &bull;
    <button (click)="sample()">{{ subscribed ? 'Unsubscribe' : 'Sample' }}</button> &bull;
    <button (click)="auditTime()">{{ subscribed ? 'Unsubscribe' : 'Audit Time' }}</button>
    <br /><br />Transformation:
    <button (click)="ajax()" title="Get and return JSON api request responses">
        {{ subscribed ? 'Unsubscribe' : 'Ajax' }}
    </button>
    &bull;
    <button (click)="mergeMap()" title="Start on each run">
        {{ subscribed ? 'Unsubscribe' : 'Merge Map' }}
    </button>
    &bull;
    <button (click)="switchMap()" title="Restart on each run">
        {{ subscribed ? 'Unsubscribe' : 'Switch Map' }}
    </button>
    &bull;
    <button (click)="concatMap()" title="Queue onto the end of each run">
        {{ subscribed ? 'Unsubscribe' : 'Concat Map' }}
    </button>
    &bull;
    <button (click)="exhaustMap()" title="Complete current run, then allow a new one to start">
        {{ subscribed ? 'Unsubscribe' : 'Exhaust Map' }}
    </button>
    <br /><br />
    <div id="typeahead"></div>
    Combination Operators:
    <button (click)="startWith()" title="Start and end with specified values">
        {{ subscribed ? 'Unsubscribe' : 'Start With' }}
    </button>
    <button (click)="concat()" title="Order events to run one after another">
        {{ subscribed ? 'Unsubscribe' : 'Concat' }}
    </button>
    <button (click)="merge()" title="Start and end with specified values">
        {{ subscribed ? 'Unsubscribe' : 'Merge' }}
    </button>
    <button (click)="withLatestFrom()" title="Include latest value from stream that is passed in">
        {{ subscribed ? 'Unsubscribe' : 'With Latest From' }}
    </button>
    <button (click)="forkJoin()" title="Combine latest values before emitting">
        {{ subscribed ? 'Unsubscribe' : 'Fork Join' }}
    </button>
    <br /><br />
    <button id="countdown2" (click)="countdown2()">{{ subscribed ? 'Start' : 'Countdown' }}</button> {{ theCountdown }}
    <button id="abort2">Abort Mission</button>
    <br /><br />
    <button (click)="combineLatest()" title="Emit latest values when all passed observables have fired at least once">
        {{ subscribed ? 'Unsubscribe' : 'Combine Latest' }}
    </button>
    <input type="number" id="first" />
    <input type="number" id="second" />
    <br /><br />
</div>
`, styles: ["/* src/app/rxjs-basics/rxjs-basics.component.scss */\nbutton {\n  background: #3a4250;\n  padding: 4px 10px;\n  margin: 0 2px;\n  border-radius: 2px;\n  min-width: 100px;\n}\ndiv {\n  text-align: center;\n}\n#take {\n  position: absolute;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RxjsBasicsComponent, { className: "RxjsBasicsComponent", filePath: "src/app/rxjs-basics/rxjs-basics.component.ts", lineNumber: 58 });
})();
export {
  RxjsBasicsComponent
};
