import {
  Component,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
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

// src/app/typescript-basics/typescript-basics.component.ts
var TypescriptBasicsComponent = class _TypescriptBasicsComponent {
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
      name: "Pepperoni",
      price: 15,
      getName: function() {
        return this.name;
      }
    };
    const toppings = ["pepperoni"];
    function makeOrder(pizzaParam, toppingsParam) {
      return { pizzaParam, toppingsParam };
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
    console.log(addAll("Hello", 1, 2, 3));
  }
  concatArrays() {
    const toppings = ["bacon", "chili"];
    const newToppings = ["pepperoni"];
    const allToppings = [...toppings, ...newToppings];
    console.log(allToppings);
  }
  spreadOperator() {
    const pizza = { name: "Pepperoni" };
    const toppings = ["Pepperoni"];
    const spreadOrder = __spreadProps(__spreadValues({}, pizza), { toppings });
    console.log(spreadOrder);
  }
  destructure() {
    const pizza = {
      name: "Pepperoni",
      toppings: ["Pepperoni"]
    };
    function order({ name: pizzaName2, toppings: pizzaToppings }) {
      return { pizzaName: pizzaName2, pizzaToppings };
    }
    console.log(order(pizza));
    const { pizzaName } = order(pizza);
    console.log(pizzaName);
    const toppings = ["pepperoni", "bacon", "chili"];
    const [first, second, third] = toppings;
    console.log(first, second, third);
    function logToppings([first2, second2, third2]) {
      console.log(first2, second2, third2);
    }
    logToppings(toppings);
  }
  allowNull() {
    let coupon = "pizza";
    function removeCoupon() {
      coupon = null;
    }
    console.log(coupon);
    removeCoupon();
    console.log(coupon);
  }
  literalTypes() {
    let pizzaSize = "small";
    function selectSize(size) {
      pizzaSize = size;
    }
    console.log(pizzaSize);
    selectSize("large");
    console.log(pizzaSize);
  }
  functionTypes() {
    const sumOrder = (x, y) => x * y;
    const sum = sumOrder(25, 2);
    console.log(sum);
  }
  static {
    this.\u0275fac = function TypescriptBasicsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TypescriptBasicsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TypescriptBasicsComponent, selectors: [["typescript-basics"]], decls: 21, vars: 9, consts: [["title", "Parameters can be assigned a default value in case one is not passed in", 3, "click"], ["title", "Pass parameters to a function call", 3, "click"], ["title", "Add all the passed in parameters", 3, "click"], ["title", "Combine arrays", 3, "click"], ["title", "Spread operator", 3, "click"], ["title", "Destructure arrays and objects", 3, "click"], ["title", "Allow passing a string or null to a function", 3, "click"], ["title", "Only allow specific values to be passed in", 3, "click"], ["title", "Set function to a variable", 3, "click"]], template: function TypescriptBasicsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div")(1, "button", 0);
        \u0275\u0275listener("click", function TypescriptBasicsComponent_Template_button_click_1_listener() {
          return ctx.multiplier();
        });
        \u0275\u0275text(2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "button", 1);
        \u0275\u0275listener("click", function TypescriptBasicsComponent_Template_button_click_3_listener() {
          return ctx.createOrder();
        });
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "button", 2);
        \u0275\u0275listener("click", function TypescriptBasicsComponent_Template_button_click_5_listener() {
          return ctx.sumAll();
        });
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "button", 3);
        \u0275\u0275listener("click", function TypescriptBasicsComponent_Template_button_click_7_listener() {
          return ctx.concatArrays();
        });
        \u0275\u0275text(8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "button", 4);
        \u0275\u0275listener("click", function TypescriptBasicsComponent_Template_button_click_9_listener() {
          return ctx.spreadOperator();
        });
        \u0275\u0275text(10);
        \u0275\u0275elementEnd();
        \u0275\u0275element(11, "br")(12, "br");
        \u0275\u0275elementStart(13, "button", 5);
        \u0275\u0275listener("click", function TypescriptBasicsComponent_Template_button_click_13_listener() {
          return ctx.destructure();
        });
        \u0275\u0275text(14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "button", 6);
        \u0275\u0275listener("click", function TypescriptBasicsComponent_Template_button_click_15_listener() {
          return ctx.allowNull();
        });
        \u0275\u0275text(16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "button", 7);
        \u0275\u0275listener("click", function TypescriptBasicsComponent_Template_button_click_17_listener() {
          return ctx.literalTypes();
        });
        \u0275\u0275text(18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "button", 8);
        \u0275\u0275listener("click", function TypescriptBasicsComponent_Template_button_click_19_listener() {
          return ctx.functionTypes();
        });
        \u0275\u0275text(20);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.subscribed ? "Unsubscribe" : "Default Function Parameters", "");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.subscribed ? "Unsubscribe" : "Create Order", "");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.subscribed ? "Unsubscribe" : "Sum All", "");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.subscribed ? "Unsubscribe" : "Concat Arrays", "");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.subscribed ? "Unsubscribe" : "Spread Operator", "");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", ctx.subscribed ? "Unsubscribe" : "Destructure", "");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.subscribed ? "Unsubscribe" : "Allow Null", "");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.subscribed ? "Unsubscribe" : "Literal Types", "");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.subscribed ? "Unsubscribe" : "Function Types", "");
      }
    }, styles: ["\n\nbutton[_ngcontent-%COMP%] {\n  background: #3a4250;\n  padding: 4px 10px;\n  margin: 0 2px;\n  border-radius: 2px;\n}\ndiv[_ngcontent-%COMP%] {\n  text-align: center;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TypescriptBasicsComponent, [{
    type: Component,
    args: [{ selector: "typescript-basics", standalone: true, template: `<div>\r
    <button (click)="multiplier()"\r
        title="Parameters can be assigned a default value in case one is not passed in">\r
    {{ subscribed ? 'Unsubscribe' : 'Default Function Parameters'}}</button>\r
    <button (click)="createOrder()"\r
        title="Pass parameters to a function call">\r
    {{ subscribed ? 'Unsubscribe' : 'Create Order'}}</button>\r
    <button (click)="sumAll()"\r
        title="Add all the passed in parameters">\r
    {{ subscribed ? 'Unsubscribe' : 'Sum All'}}</button>\r
    <button (click)="concatArrays()"\r
        title="Combine arrays">\r
    {{ subscribed ? 'Unsubscribe' : 'Concat Arrays'}}</button>\r
    <button (click)="spreadOperator()"\r
        title="Spread operator">\r
    {{ subscribed ? 'Unsubscribe' : 'Spread Operator'}}</button>\r
    <br/><br/>\r
    <button (click)="destructure()"\r
        title="Destructure arrays and objects">\r
    {{ subscribed ? 'Unsubscribe' : 'Destructure'}}</button>\r
    <button (click)="allowNull()"\r
        title="Allow passing a string or null to a function">\r
    {{ subscribed ? 'Unsubscribe' : 'Allow Null'}}</button>\r
    <button (click)="literalTypes()"\r
        title="Only allow specific values to be passed in">\r
    {{ subscribed ? 'Unsubscribe' : 'Literal Types'}}</button>\r
    <button (click)="functionTypes()"\r
        title="Set function to a variable">\r
    {{ subscribed ? 'Unsubscribe' : 'Function Types'}}</button>\r
</div>\r
`, styles: ["/* src/app/typescript-basics/typescript-basics.component.scss */\nbutton {\n  background: #3a4250;\n  padding: 4px 10px;\n  margin: 0 2px;\n  border-radius: 2px;\n}\ndiv {\n  text-align: center;\n}\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TypescriptBasicsComponent, { className: "TypescriptBasicsComponent", filePath: "src/app/typescript-basics/typescript-basics.component.ts", lineNumber: 9 });
})();
export {
  TypescriptBasicsComponent
};
