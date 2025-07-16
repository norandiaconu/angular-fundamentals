import {
  ajax
} from "./chunk-2VWJROXG.js";
import {
  Component,
  Subscription,
  combineLatest,
  exhaustMap,
  filter,
  fromEvent,
  map,
  pluck,
  setClassMetadata,
  share,
  switchMapTo,
  takeUntil,
  tap,
  timer,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-CKONHHS2.js";

// src/app/rxjs-projects/rxjs-projects.component.ts
var RxjsProjectsComponent = class _RxjsProjectsComponent {
  constructor() {
    this.subscribed = false;
    this.timeSub = new Subscription();
    this.polling = false;
  }
  ngOnInit() {
    this.subscribed = false;
    this.polling = false;
  }
  dogSub() {
    if (this.subscribed === false) {
      const dogImage = document.getElementById("dog");
      const dogVideo = document.getElementById("dogVid");
      this.timeSub = fromEvent(document.getElementById("dogStart"), "click").pipe(exhaustMap(() => timer(0, 5e3).pipe(switchMapTo(ajax.getJSON("https://random.dog/woof.json").pipe(pluck("url"))), takeUntil(fromEvent(document.getElementById("dogStop"), "click"))))).subscribe((url) => {
        if (url.includes(".mp4")) {
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
      const loanAmount = document.getElementById("loanAmount");
      const interest = document.getElementById("interest");
      const loanLength = document.querySelectorAll(".loanLength");
      const expected = document.getElementById("expected");
      const createInputValueStream = (elem) => fromEvent(elem, "input").pipe(map((event) => parseFloat(event.target.value)));
      const interest$ = createInputValueStream(interest);
      const loanLength$ = createInputValueStream(loanLength);
      const loanAmount$ = createInputValueStream(loanAmount);
      this.timeSub = combineLatest([interest$, loanAmount$, loanLength$]).pipe(map(([interestTemp, loanAmountTemp, loanLengthTemp]) => this.calculateMortgage(interestTemp, loanAmountTemp, loanLengthTemp)), tap(console.log), filter((mortgageAmount) => !isNaN(Number(mortgageAmount))), share()).subscribe((mortgageAmount) => {
        expected.innerHTML = mortgageAmount;
      });
    } else {
      this.timeSub.unsubscribe();
    }
    this.subscribed = !this.subscribed;
  }
  static {
    this.\u0275fac = function RxjsProjectsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RxjsProjectsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RxjsProjectsComponent, selectors: [["rxjs-projects"]], decls: 39, vars: 3, consts: [["title", "Start dog subscription", "id", "dogSub", 3, "click"], ["title", "Start and stop dog polling", "id", "dogStart", 3, "click"], ["title", "Start and stop dog polling", "id", "dogStop", 3, "click"], ["id", "dog", "alt", "dog", "src", "https://random.dog/967eae80-8f34-490b-944c-4f6bd4697712.jpeg", 2, "height", "190px"], ["id", "dogVid", "alt", "dog", "src", "https://random.dog/c494d883-9a34-4d8d-b0b3-449069c30f23.mp4", "autoplay", "", "loop", "", 2, "height", "190px"], ["label", "English", "kind", "subtitles"], ["title", "Start mortgage subscription", "id", "mortgageSub", 3, "click"], ["for", "loanAmount"], ["type", "number", "name", "loanAmount", "id", "loanAmount"], ["for", "interest"], ["type", "number", "name", "interest", "id", "interest"], ["for", "loanLength"], ["type", "radio", "name", "loanLength", "value", "180", 1, "loanLength"], ["type", "radio", "name", "loanLength", "value", "360", 1, "loanLength"], ["id", "expected"]], template: function RxjsProjectsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275text(0, "Dog Polling:");
        \u0275\u0275element(1, "br");
        \u0275\u0275elementStart(2, "button", 0);
        \u0275\u0275listener("click", function RxjsProjectsComponent_Template_button_click_2_listener() {
          return ctx.dogSub();
        });
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 1);
        \u0275\u0275listener("click", function RxjsProjectsComponent_Template_button_click_4_listener() {
          return ctx.dogStart();
        });
        \u0275\u0275text(5, "Start Polling");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "button", 2);
        \u0275\u0275listener("click", function RxjsProjectsComponent_Template_button_click_6_listener() {
          return ctx.dogStop();
        });
        \u0275\u0275text(7, "Stop Polling");
        \u0275\u0275elementEnd();
        \u0275\u0275text(8);
        \u0275\u0275element(9, "br")(10, "br")(11, "img", 3);
        \u0275\u0275elementStart(12, "video", 4);
        \u0275\u0275element(13, "track", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275element(14, "br")(15, "br");
        \u0275\u0275text(16, "\nMortgage Calculator:");
        \u0275\u0275element(17, "br");
        \u0275\u0275elementStart(18, "button", 6);
        \u0275\u0275listener("click", function RxjsProjectsComponent_Template_button_click_18_listener() {
          return ctx.mortgageSub();
        });
        \u0275\u0275text(19);
        \u0275\u0275elementEnd();
        \u0275\u0275element(20, "br");
        \u0275\u0275elementStart(21, "label", 7);
        \u0275\u0275text(22, "Mortgage Amount ($)");
        \u0275\u0275elementEnd();
        \u0275\u0275element(23, "input", 8)(24, "br");
        \u0275\u0275elementStart(25, "label", 9);
        \u0275\u0275text(26, "Interest Rate (%)");
        \u0275\u0275elementEnd();
        \u0275\u0275element(27, "input", 10)(28, "br");
        \u0275\u0275elementStart(29, "label", 11);
        \u0275\u0275text(30, "Mortgage Length");
        \u0275\u0275elementEnd();
        \u0275\u0275element(31, "input", 12);
        \u0275\u0275text(32, " 15 yr\n");
        \u0275\u0275element(33, "input", 13);
        \u0275\u0275text(34, " 30 yr\n");
        \u0275\u0275element(35, "br")(36, "br");
        \u0275\u0275text(37, "\nYour expected monthly payment is:\n$");
        \u0275\u0275element(38, "strong", 14);
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.subscribed ? "Unsub" : "Dog Sub", "");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("\nPolling: ", ctx.polling, "\n");
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate1(" ", ctx.subscribed ? "Unsub" : "Mortgage Sub", "");
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RxjsProjectsComponent, [{
    type: Component,
    args: [{ selector: "rxjs-projects", standalone: true, template: `Dog Polling:<br/>\r
<button (click)="dogSub()" title="Start dog subscription" id="dogSub">\r
    {{ subscribed ? 'Unsub' : 'Dog Sub'}}</button>\r
<button (click)="dogStart()" title="Start and stop dog polling" id="dogStart">Start Polling</button>\r
<button (click)="dogStop()" title="Start and stop dog polling" id="dogStop">Stop Polling</button>\r
Polling: {{ polling }}\r
<br/><br/>\r
<img id="dog" alt="dog" style="height: 190px"\r
    src="https://random.dog/967eae80-8f34-490b-944c-4f6bd4697712.jpeg"/>\r
<video id="dogVid" alt="dog" style="height: 190px"\r
    src="https://random.dog/c494d883-9a34-4d8d-b0b3-449069c30f23.mp4" autoplay loop>\r
    <track label="English" kind="subtitles">\r
</video>\r
<br/><br/>\r
Mortgage Calculator:<br/>\r
<button (click)="mortgageSub()" title="Start mortgage subscription" id="mortgageSub">\r
    {{ subscribed ? 'Unsub' : 'Mortgage Sub'}}</button>\r
<br/>\r
<label for="loanAmount">Mortgage Amount ($)</label>\r
<input type="number" name="loanAmount" id="loanAmount">\r
<br/>\r
<label for="interest">Interest Rate (%)</label>\r
<input type="number" name="interest" id="interest">\r
<br/>\r
<label for="loanLength">Mortgage Length</label>\r
<input type="radio" name="loanLength" class="loanLength" value="180"> 15 yr\r
<input type="radio" name="loanLength" class="loanLength" value="360"> 30 yr\r
<br/><br/>\r
Your expected monthly payment is:\r
$<strong id="expected"></strong>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RxjsProjectsComponent, { className: "RxjsProjectsComponent", filePath: "src/app/rxjs-projects/rxjs-projects.component.ts", lineNumber: 12 });
})();
export {
  RxjsProjectsComponent
};
