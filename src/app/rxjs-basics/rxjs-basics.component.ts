import { Component, OnInit, OnDestroy } from "@angular/core";
import { fromEvent, Observable, observable, Subscription, of, range } from "rxjs";

@Component({
  selector: "rxjs-basics",
  templateUrl: "./rxjs-basics.component.html",
  styleUrls: ["./rxjs-basics.component.css"]
})
export class RxjsBasicsComponent implements OnInit, OnDestroy {
  amount: number;
  initial: Subscription;
  keys: Subscription;
  counter: Subscription;
  multipleSub: Subscription;

  constructor() { }

  ngOnInit(): void {
    const observable1 = new Observable(subscriber => {
      subscriber.next("Hello");
      subscriber.next("World");
      subscriber.complete();
    });
    const observer = {
      next: val => console.log("next", val),
      error: err => console.log("error", err),
      complete: () => console.log("complete")
    };
    this.amount = 0;
    console.log("before");
    this.initial = observable1.subscribe(observer);
    console.log("after");

    // Count once
    const observable2 = new Observable(subscriber => {
      let count = 0;
      const id = setInterval(() => {
        subscriber.next(count);
        subscriber.complete();
        count++;
      }, 1000);

      return () => {
        console.log("cleanup method");
        clearInterval(id);
      };
    });
    this.counter = observable2.subscribe(observer);

    // Multiple unsubscribe
    this.multipleSub = new Subscription();
    this.multipleSub.add(this.initial);
    this.multipleSub.add(this.keys);

    setTimeout(() => {
      console.log("timeout");
    }, 3000);

    // fromEvent keyup
    const source$ = fromEvent(document, "keyup");
    this.keys = source$.subscribe(observer1 => {
      this.amount++;
      console.log(observer1);
      console.log(this.amount);
    });

    // fromEvent click
    const source1$ = fromEvent(document, "click");
    const subOne = source1$.subscribe(observer);
    const subTwo = source1$.subscribe(observer);
    setTimeout(() => {
      console.log("unsubscribing one click event");
      subOne.unsubscribe();
    }, 10000);

    // of
    const source2$ = of(11, 12, 13, 14, 15);
    const sub = source2$.subscribe(observer);
    sub.unsubscribe();

    // range
    const source3$ = range(100, 5);
    const sub1 = source3$.subscribe(observer);
    sub1.unsubscribe();
  }

  ngOnDestroy(): void {
    this.initial.unsubscribe();
    this.keys.unsubscribe();
    // this.counter.unsubscribe();
    this.multipleSub.unsubscribe();
  }

}
