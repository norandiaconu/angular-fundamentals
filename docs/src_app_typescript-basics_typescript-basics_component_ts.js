"use strict";
(self["webpackChunkangular_fundamentals"] = self["webpackChunkangular_fundamentals"] || []).push([["src_app_typescript-basics_typescript-basics_component_ts"],{

/***/ 428:
/*!******************************************************************!*\
  !*** ./src/app/typescript-basics/typescript-basics.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TypescriptBasicsComponent: () => (/* binding */ TypescriptBasicsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7705);

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
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
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
      styles: ["button[_ngcontent-%COMP%] {\n  background: #3a4250;\n  padding: 4px 10px;\n  margin: 0 2px;\n  border-radius: 2px;\n}\n\ndiv[_ngcontent-%COMP%] {\n  text-align: center;\n}"]
    });
  }
}

/***/ })

}]);