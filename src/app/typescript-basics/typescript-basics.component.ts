import { Component } from '@angular/core';

@Component({
    selector: 'typescript-basics',
    templateUrl: './typescript-basics.component.html',
    styleUrls: ['./typescript-basics.component.scss']
})
export class TypescriptBasicsComponent {
    protected subscribed = false;

    protected multiplier(): void {
        function multiply(a: number, b: number = 5): number {
            return a * b;
        }

        console.log(multiply(5, 10));
        console.log(multiply(5));
    }

    protected createOrder(): void {
        const pizza = {
            name: 'Pepperoni',
            price: 15,
            getName: function (): string {
                return this.name;
            }
        };
        const toppings = ['pepperoni'];

        function makeOrder(pizzaParam: any, toppingsParam: Array<string>): any {
            return { pizzaParam, toppingsParam };
        }

        console.log(makeOrder(pizza, toppings));
        console.log(pizza.getName());
    }

    protected sumAll(): void {
        function addAll(message: string, ...arr: Array<number>): number {
            console.log(message);
            console.log(arguments);
            return arr.reduce((prev, next) => prev + next);
        }

        console.log(addAll('Hello', 1, 2, 3));
    }

    protected concatArrays(): void {
        const toppings = ['bacon', 'chili'];
        const newToppings = ['pepperoni'];
        const allToppings = [...toppings, ...newToppings];

        console.log(allToppings);
    }

    protected spreadOperator(): void {
        const pizza = { name: 'Pepperoni' };
        const toppings = ['Pepperoni'];
        const spreadOrder = { ...pizza, toppings };

        console.log(spreadOrder);
    }

    protected destructure(): void {
        const pizza = {
            name: 'Pepperoni',
            toppings: ['Pepperoni']
        };

        function order({ name: pizzaName, toppings: pizzaToppings }: any): any {
            return { pizzaName, pizzaToppings };
        }
        console.log(order(pizza));
        const { pizzaName } = order(pizza);
        console.log(pizzaName);

        const toppings = ['pepperoni', 'bacon', 'chili'];
        const [first, second, third] = toppings;
        console.log(first, second, third);

        function logToppings([first, second, third]: string[]): void {
            console.log(first, second, third);
        }
        logToppings(toppings);
    }

    protected allowNull(): void {
        let coupon: string | null = 'pizza';
        function removeCoupon(): void {
            coupon = null;
        }
        console.log(coupon);
        removeCoupon();
        console.log(coupon);
    }

    protected literalTypes(): void {
        let pizzaSize = 'small';
        function selectSize(size: 'small' | 'medium' | 'large'): void {
            pizzaSize = size;
        }
        console.log(pizzaSize);
        selectSize('large');
        console.log(pizzaSize);
    }

    protected functionTypes(): void {
        const sumOrder: (price: number, quantity: number) => number = (x, y) => x * y;
        const sum = sumOrder(25, 2);
        console.log(sum);
    }
}
