import { Component, OnInit, OnDestroy } from "@angular/core";
import { fromEvent, Observable, Subscription, of, range, from, interval, timer, Observer } from "rxjs";
import { map, pluck, mapTo, filter, reduce, take, scan, tap, first, takeWhile, takeUntil, distinctUntilChanged, distinctUntilKeyChanged } from "rxjs/operators";

@Component({
  selector: "rxjs-basics",
  templateUrl: "./rxjs-basics.component.html",
  styleUrls: ["./rxjs-basics.component.css"]
})
export class RxjsBasicsComponent implements OnInit, OnDestroy {
  amount: number;
  consoleString: string;
  counter: Subscription;
  eventSub: Subscription;
  observer: Observer<number|Event>;
  displayCount: boolean;
  displayMouse: boolean;
  displayKeys: boolean;
  displayText: boolean;
  theCountdown: string;
  keyup$ = fromEvent(document, "keyup");

  constructor() { }

  ngOnInit(): void {
    this.amount = 0;
    this.consoleString = "";
    this.counter = new Subscription();
    this.eventSub = new Subscription();
    this.observer = {
      next: val => console.log(this.consoleString, val),
      error: err => console.log("error", err),
      complete: () => console.log("complete")
    };
    this.displayCount = true;
    this.displayMouse = true;
    this.displayKeys = true;
    this.displayText = false;
    this.theCountdown = "10";
  }

  helloWorld(): void {
    const observable1 = new Observable(subscriber => {
      subscriber.next("Hello");
      subscriber.next("World");
      subscriber.complete();
    });

    console.log("before");
    this.consoleString = "helloWorld";
    observable1.subscribe(this.observer).unsubscribe();
    console.log("after");
  }

  setTimeout(): void {
    setTimeout(() => {
      console.log("timeout");
    }, 3000);
  }

  countOnce(): void {
    this.consoleString = "countOnce";
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
    this.counter = observable2.subscribe(this.observer);
  }

  intervalTimer(): void {
    this.consoleString = "intervalTimer";
    const timer$ = interval(1000);
    const timerSub = timer$.subscribe(this.observer);
    const timer2$ = timer(8000, 1000);
    const timerSub2 = timer2$.subscribe(console.log);
    setTimeout(() => {
      timerSub.unsubscribe();
      timerSub2.unsubscribe();
    }, 10000);
  }

  fetch(): void {
    const fetchedPromise = fetch("https://api.github.com/users/octocat");
    fetchedPromise.then(data => {
        console.log(data.json());
    });
  }

  ofSubscription(): void {
    this.consoleString = "ofSubscription";
    const source2$ = of(11, 12, 13, 14, 15);
    const sub = source2$.subscribe(this.observer);
    sub.unsubscribe();
  }

  range(): void {
    this.consoleString = "range";
    const source3$ = range(100, 5);
    source3$.subscribe(this.observer).unsubscribe();
  }

  from(): void {
    this.consoleString = "from";
    const source4$ = from([21, 22, 23, 24, 25]);
    source4$.subscribe(this.observer).unsubscribe();
  }
  
  ofPipe(): void {
    this.consoleString = "ofPipe";
    of(1, 2, 3, 4, 5).pipe(
      tap(value => console.log("before", value)),
      map(value => value * 10),
      tap({
        next: value => console.log("after", value),
        complete: () => console.log("done")
      })
    ).subscribe(this.observer).unsubscribe();
  }

  ofFilter(): void {
    this.consoleString = "ofFilter";
    of(30, 31, 32, 33, 34, 35).pipe(
      filter(value => value > 32)
    ).subscribe(this.observer).unsubscribe();
  }

  reducer(): void {
    this.consoleString = "reducer";
    const numbers = [1, 2, 3, 4, 5];
    const totalReducer = (accumulator, currentValue) => {
      return accumulator + currentValue;
    };
    const total = numbers.reduce(totalReducer);
    console.log(total);

    from(numbers).pipe(
      reduce(totalReducer)
    ).subscribe(this.observer).unsubscribe();

    const obs = interval(100).pipe(
      take(4),
      reduce(totalReducer)
    ).subscribe(this.observer);
    setTimeout(() => {
      obs.unsubscribe();
    }, 1000);
  }

  scan(): void {
    this.consoleString = "scan";
    from([1, 2, 3, 4, 5]).pipe(
      scan((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0)
    ).subscribe(this.observer).unsubscribe();

    interface UserInfo {
      name: string;
      loggedIn: boolean;
      token: string;
    }
    const user = [
      {name: "Brian", loggedIn: false, token: null},
      {name: "Brian", loggedIn: true, token: "abc"},
      {name: "Brian", loggedIn: true, token: "123"}
    ];
    
    const state$ = from(user).pipe(
      scan((accumulator, currentValue) => {
        return { ...accumulator, ...currentValue};
      }, {})
    );
    state$.subscribe(this.observer).unsubscribe();
    from(user).pipe(
      map((state: UserInfo) => state.name),
      distinctUntilChanged()
    ).subscribe(console.log).unsubscribe();

    from(user).pipe(
      distinctUntilKeyChanged("name"),
      map((state: UserInfo) => state.name)
    ).subscribe(console.log).unsubscribe();
  }

  take(): void {
    of(1, 2, 3, 4, 5).pipe(
      take(3)
    ).subscribe({
      next: console.log,
      complete: () => console.log("complete")
    });

    fromEvent(document, "click").pipe(
      map((event: MouseEvent) => ({
        x: event.clientX,
        y: event.clientY
      })),
      take(1)
    ).subscribe({
      next: console.log,
      complete: () => console.log("complete")
    });

    fromEvent(document, "click").pipe(
      map((event: MouseEvent) => ({
        x: event.clientX,
        y: event.clientY
      })),
      first(({y}) => y > 500)
    ).subscribe({
      next: console.log,
      complete: () => console.log("complete")
    });
    const randomNum = Math.floor(Math.random() * 1000);
    document.getElementById("take").style.top = randomNum + "px";
  }

  takeWhile(): void {
    fromEvent(document, "click").pipe(
      map((event: MouseEvent) => ({
        x: event.clientX,
        y: event.clientY
      })),
      takeWhile(({y}) => y <= 800, true)
    ).subscribe({
      next: console.log,
      complete: () => console.log("complete")
    });
  }

  takeUntil(): void {
    interval(1000).pipe(
      takeUntil(fromEvent(document, "keyup"))
    ).subscribe(console.log);
  }

  distinctUntilChanged(): void {
    of(1, 1, 2, 3).pipe(
      distinctUntilChanged()
    ).subscribe(console.log).unsubscribe();
  }

  keyCount(): void {
    this.displayCount = false;
    this.eventSub.add(this.keyup$.subscribe(observer1 => {
      this.amount++;
      console.log(observer1);
      console.log(this.amount, "keyCount");
    }));
  }

  mouseClickEvent(): void {
    this.displayMouse = false;
    this.consoleString = "mouseClickEvent";
    const source1$ = fromEvent(document, "click");
    const subOne = source1$.subscribe(this.observer);
    this.eventSub.add(source1$.subscribe(this.observer));
    setTimeout(() => {
      console.log("unsubscribing one click event");
      subOne.unsubscribe();
    }, 5000);
  }

  keyCodes(): void {
    this.displayKeys = false;
    const keyCodeMap$ = this.keyup$.pipe(
      map((event: KeyboardEvent) => event.code)
    );
    this.eventSub.add(keyCodeMap$.subscribe(console.log));

    const keyCodePluck$ = this.keyup$.pipe(
      pluck("code")
    );
    this.eventSub.add(keyCodePluck$.subscribe(console.log));

    const keyCodeMapTo$ = this.keyup$.pipe(
      mapTo("keyPressed")
    );
    this.eventSub.add(keyCodeMapTo$.subscribe(console.log));

    const enter$ = this.keyup$.pipe(
      filter((code: KeyboardEvent) => code.code === "Enter")
    );
    this.eventSub.add(enter$.subscribe(console.log));
  }

  scrollBar(): void {
    this.displayText = true;
    const scroll$ = fromEvent(document, "scroll");
    const progress$ = scroll$.pipe(
      map(() => {
        const { scrollTop, scrollHeight, clientHeight} = document.documentElement;
        return (scrollTop / (scrollHeight - clientHeight)) * 100;
      })
    );
    const progressBar = document.querySelector<Element>(".progress-bar");
    this.eventSub.add(progress$.subscribe(percent => {
      progressBar.setAttribute("style", "width: " + percent + "%");
    }));
  }

  restartEvents(): void {
    this.eventSub.unsubscribe();
    this.displayCount = true;
    this.displayMouse = true;
    this.displayKeys = true;
    this.displayText = false;
    this.eventSub = new Subscription();
  }

  countdown(): void {
    const abortButton = document.getElementById("abort");

    interval(1000).pipe(
      mapTo(-1),
      scan((accumulator, current) => {
        return accumulator + current;
      }, 10),
      takeWhile(value => value >= 0),
      takeUntil(fromEvent(abortButton, "click"))
    ).subscribe(value => {
      this.theCountdown = "" + value;
      if (!value) {
        this.theCountdown = "LIFTOFF";
      }
    });
  }

  ngOnDestroy(): void {
    this.counter.unsubscribe();
    this.eventSub.unsubscribe();
  }

}
