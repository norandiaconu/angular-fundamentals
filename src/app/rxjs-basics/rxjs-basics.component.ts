import { Component, OnInit, OnDestroy } from '@angular/core';
import {
    fromEvent,
    Observable,
    Subscription,
    of,
    range,
    from,
    interval,
    timer,
    Observer,
    asyncScheduler,
    EMPTY,
    concat,
    merge,
    combineLatest,
    forkJoin
} from 'rxjs';
import {
    map,
    pluck,
    mapTo,
    filter,
    reduce,
    take,
    scan,
    tap,
    first,
    takeWhile,
    takeUntil,
    distinctUntilChanged,
    distinctUntilKeyChanged,
    debounceTime,
    throttleTime,
    sampleTime,
    sample,
    auditTime,
    mergeAll,
    mergeMap,
    switchMap,
    concatMap,
    exhaustMap,
    catchError,
    startWith,
    endWith,
    delay,
    withLatestFrom
} from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Component({
    selector: 'rxjs-basics',
    templateUrl: './rxjs-basics.component.html',
    styleUrls: ['./rxjs-basics.component.scss'],
    imports: []
})
export class RxjsBasicsComponent implements OnInit, OnDestroy {
    protected amount = 0;
    protected displayCount = false;
    protected displayMouse = false;
    protected displayKeys = false;
    protected displayText = false;
    protected theCountdown = '';
    protected subscribed = false;

    private consoleString = '';
    private counter: Subscription = new Subscription();
    private eventSub: Subscription = new Subscription();
    private observer!: Observer<number | Event>;
    private keyup$ = fromEvent(document, 'keyup');
    private timeSub: Subscription = new Subscription();

    ngOnInit(): void {
        this.amount = 0;
        this.consoleString = '';
        this.counter = new Subscription();
        this.eventSub = new Subscription();
        this.observer = {
            next: (val) => console.log(this.consoleString, val),
            error: (err) => console.log('error', err),
            complete: () => console.log('complete')
        };
        this.displayCount = true;
        this.displayMouse = true;
        this.displayKeys = true;
        this.displayText = false;
        this.theCountdown = '10';
        this.subscribed = false;
    }

    protected helloWorld(): void {
        const observable1 = new Observable((subscriber) => {
            subscriber.next('Hello');
            subscriber.next('World');
            subscriber.complete();
        });

        console.log('before');
        this.consoleString = 'helloWorld';
        observable1.subscribe(this.observer as any).unsubscribe();
        console.log('after');
    }

    protected setTimeout(): void {
        setTimeout(() => {
            console.log('timeout');
        }, 3000);
    }

    protected countOnce(): void {
        this.consoleString = 'countOnce';
        const observable2 = new Observable((subscriber) => {
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
        this.counter = observable2.subscribe(this.observer as any);
    }

    protected intervalTimer(): void {
        this.consoleString = 'intervalTimer';
        const timer$ = interval(1000);
        const timerSub = timer$.subscribe(this.observer);
        const timer2$ = timer(8000, 1000);
        const timerSub2 = timer2$.subscribe(console.log);
        setTimeout(() => {
            timerSub.unsubscribe();
            timerSub2.unsubscribe();
        }, 10000);
    }

    protected fetch(): void {
        const fetchedPromise = fetch('https://api.github.com/users/octocat');
        fetchedPromise.then((data) => {
            console.log(data.json());
        });
    }

    protected ofSubscription(): void {
        this.consoleString = 'ofSubscription';
        const source2$ = of(11, 12, 13, 14, 15);
        const sub = source2$.subscribe(this.observer);
        sub.unsubscribe();
    }

    protected range(): void {
        this.consoleString = 'range';
        const source3$ = range(100, 5);
        source3$.subscribe(this.observer).unsubscribe();
    }

    protected from(): void {
        this.consoleString = 'from';
        const source4$ = from([21, 22, 23, 24, 25]);
        source4$.subscribe(this.observer).unsubscribe();
    }

    protected ofPipe(): void {
        this.consoleString = 'ofPipe';
        of(1, 2, 3, 4, 5)
            .pipe(
                tap((value) => console.log('before', value)),
                map((value) => value * 10),
                tap({
                    next: (value) => console.log('after', value),
                    complete: () => console.log('done')
                })
            )
            .subscribe(this.observer)
            .unsubscribe();
    }

    protected ofFilter(): void {
        this.consoleString = 'ofFilter';
        of(30, 31, 32, 33, 34, 35)
            .pipe(filter((value) => value > 32))
            .subscribe(this.observer)
            .unsubscribe();
    }

    protected reducer(): void {
        this.consoleString = 'reducer';
        const numbers = [1, 2, 3, 4, 5];
        const totalReducer = (accumulator: number, currentValue: number) => accumulator + currentValue;
        const total = numbers.reduce(totalReducer);
        console.log(total);

        from(numbers).pipe(reduce(totalReducer)).subscribe(this.observer).unsubscribe();

        const obs = interval(100).pipe(take(4), reduce(totalReducer)).subscribe(this.observer);
        setTimeout(() => {
            obs.unsubscribe();
        }, 1000);
    }

    protected scan(): void {
        this.consoleString = 'scan';
        from([1, 2, 3, 4, 5])
            .pipe(scan((accumulator, currentValue) => accumulator + currentValue, 0))
            .subscribe(this.observer)
            .unsubscribe();

        interface UserInfo {
            name: string;
            loggedIn: boolean;
            token: string;
        }
        const user = [
            { name: 'Brian', loggedIn: false, token: '' },
            { name: 'Brian', loggedIn: true, token: 'abc' },
            { name: 'Brian', loggedIn: true, token: '123' }
        ];

        const state$ = from(user).pipe(scan((accumulator, currentValue) => ({ ...accumulator, ...currentValue }), {}));
        state$.subscribe(this.observer as any).unsubscribe();
        from(user)
            .pipe(
                map((state: UserInfo) => state.name),
                distinctUntilChanged()
            )
            .subscribe(console.log)
            .unsubscribe();

        from(user)
            .pipe(
                distinctUntilKeyChanged('name'),
                map((state: UserInfo) => state.name)
            )
            .subscribe(console.log)
            .unsubscribe();
    }

    protected take(): void {
        of(1, 2, 3, 4, 5)
            .pipe(take(3))
            .subscribe({
                next: console.log,
                complete: () => console.log('complete')
            });

        fromEvent(document, 'click')
            .pipe(
                map((event: Event) => event as MouseEvent),
                map((event: MouseEvent) => ({
                    x: event.clientX,
                    y: event.clientY
                })),
                take(1)
            )
            .subscribe({
                next: console.log,
                complete: () => console.log('complete')
            });

        fromEvent(document, 'click')
            .pipe(
                map((event: Event) => event as MouseEvent),
                map((event: MouseEvent) => ({
                    x: event.clientX,
                    y: event.clientY
                })),
                first(({ y }) => y > 500)
            )
            .subscribe({
                next: console.log,
                complete: () => console.log('complete')
            });
        const randomNum = Math.floor(Math.random() * 1000);
        document.getElementById('take')!.style.top = randomNum + 'px';
    }

    protected takeWhile(): void {
        fromEvent(document, 'click')
            .pipe(
                map((event: Event) => event as MouseEvent),
                map((event: MouseEvent) => ({
                    x: event.clientX,
                    y: event.clientY
                })),
                takeWhile(({ y }) => y <= 800, true)
            )
            .subscribe({
                next: console.log,
                complete: () => console.log('complete')
            });
    }

    protected takeUntil(): void {
        interval(1000)
            .pipe(takeUntil(fromEvent(document, 'keyup')))
            .subscribe(console.log);
    }

    protected distinctUntilChanged(): void {
        of(1, 1, 2, 3).pipe(distinctUntilChanged()).subscribe(console.log).unsubscribe();
    }

    protected keyCount(): void {
        this.displayCount = false;
        this.eventSub.add(
            this.keyup$.subscribe((observer1) => {
                this.amount++;
                console.log(observer1);
                console.log(this.amount, 'keyCount');
            })
        );
    }

    protected mouseClickEvent(): void {
        this.displayMouse = false;
        this.consoleString = 'mouseClickEvent';
        const source1$ = fromEvent(document, 'click');
        const subOne = source1$.subscribe(this.observer);
        this.eventSub.add(source1$.subscribe(this.observer));
        setTimeout(() => {
            console.log('unsubscribing one click event');
            subOne.unsubscribe();
        }, 5000);
    }

    protected keyCodes(): void {
        this.displayKeys = false;
        const keyCodeMap$ = this.keyup$.pipe(
            map((event: Event) => event as KeyboardEvent),
            map((event: KeyboardEvent) => event.code)
        );
        this.eventSub.add(keyCodeMap$.subscribe(console.log));

        const keyCodePluck$ = this.keyup$.pipe(pluck('code'));
        this.eventSub.add(keyCodePluck$.subscribe(console.log));

        const keyCodeMapTo$ = this.keyup$.pipe(mapTo('keyPressed'));
        this.eventSub.add(keyCodeMapTo$.subscribe(console.log));

        const enter$ = this.keyup$.pipe(
            map((event: Event) => event as KeyboardEvent),
            filter((code: KeyboardEvent) => code.code === 'Enter')
        );
        this.eventSub.add(enter$.subscribe(console.log));
    }

    protected scrollBar(): void {
        if (this.subscribed === false) {
            this.displayText = true;
            const scroll$ = fromEvent(document, 'scroll');
            const progress$ = scroll$.pipe(
                // same as auditTime(30)
                throttleTime(30, asyncScheduler, {
                    leading: false,
                    trailing: true
                }),
                map(() => {
                    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
                    return (scrollTop / (scrollHeight - clientHeight)) * 100;
                })
            );
            const progressBar = document.querySelector<Element>('.progress-bar');
            this.eventSub.add(
                progress$.subscribe((percent) => {
                    progressBar!.setAttribute('style', 'width: ' + percent + '%');
                })
            );
        } else {
            this.eventSub.unsubscribe();
            this.displayText = false;
        }
        this.subscribed = !this.subscribed;
    }

    protected restartEvents(): void {
        this.eventSub.unsubscribe();
        this.displayCount = true;
        this.displayMouse = true;
        this.displayKeys = true;
        this.displayText = false;
        this.eventSub = new Subscription();
    }

    protected countdown(): void {
        const abortButton = document.getElementById('abort');

        interval(1000)
            .pipe(
                mapTo(-1),
                scan((accumulator, current) => accumulator + current, 10),
                takeWhile((value) => value >= 0),
                takeUntil(fromEvent(abortButton!, 'click'))
            )
            .subscribe((value) => {
                this.theCountdown = '' + value;
                if (!value) {
                    this.theCountdown = 'LIFTOFF';
                }
            });
    }

    protected debounceTime(): void {
        this.genericTime(debounceTime(1000));
    }

    protected throttleTime(): void {
        this.genericTime(throttleTime(1000));
    }

    protected sampleTime(): void {
        this.genericTime(sampleTime(1000));
    }

    protected sample(): void {
        this.genericTime(sample(interval(1000)));
    }

    protected auditTime(): void {
        this.genericTime(auditTime(1000));
    }

    protected ajax(): void {
        if (this.subscribed === false) {
            this.timeSub = fromEvent(document.getElementById('timeText')!, 'keyup')
                .pipe(
                    debounceTime(1000),
                    pluck('target', 'value'),
                    map((event) => ajax.getJSON('http://localhost:3000/passengers/' + event).pipe(catchError(() => EMPTY))),
                    mergeAll()
                )
                .subscribe(console.log);

            this.timeSub.add(
                fromEvent(document.getElementById('timeText')!, 'keyup')
                    .pipe(
                        debounceTime(1000),
                        pluck('target', 'value'),
                        mergeMap((event) => ajax.getJSON('https://api.github.com/users/' + event).pipe(catchError(() => EMPTY)))
                    )
                    .subscribe(console.log)
            );
        } else {
            this.timeSub.unsubscribe();
        }
        this.subscribed = !this.subscribed;
    }

    protected mergeMap(): void {
        if (this.subscribed === false) {
            this.timeSub = fromEvent(document, 'mousedown')
                .pipe(mergeMap(() => interval(1000).pipe(takeUntil(fromEvent(document, 'mouseup')))))
                .subscribe(console.log);

            this.timeSub.add(
                fromEvent(document, 'click')
                    .pipe(
                        map((event: Event) => event as MouseEvent),
                        map((event: MouseEvent) => ({
                            x: event.clientX,
                            y: event.clientY
                        }))
                    )
                    .pipe(
                        mergeMap((coords) =>
                            ajax.post('https://run.mocky.io/v3/4cd66c07-e46c-425d-94ec-a53724bdc1ec', coords).pipe(catchError(() => EMPTY))
                        )
                    )
                    .subscribe(console.log)
            );
        } else {
            this.timeSub.unsubscribe();
        }
        this.subscribed = !this.subscribed;
    }

    protected switchMap(): void {
        const baseUrl = 'https://api.openbrewerydb.org/breweries';
        const typeaheadBox = document.getElementById('typeahead');
        if (this.subscribed === false) {
            this.timeSub = fromEvent(document, 'click')
                .pipe(switchMap(() => interval(1000).pipe(take(10))))
                .subscribe(console.log);

            this.timeSub.add(
                fromEvent(document.getElementById('timeText')!, 'keyup')
                    .pipe(
                        debounceTime(1000),
                        pluck('target', 'value'),
                        distinctUntilChanged(),
                        map((searchTerm: unknown) => searchTerm as string),
                        switchMap((searchTerm: string) => ajax.getJSON(baseUrl + '?by_name=' + searchTerm).pipe(catchError(() => EMPTY)))
                    )
                    .subscribe((response: any) => {
                        typeaheadBox!.innerHTML = response.map((b: any) => b.name).join('<br>');
                    })
            );
        } else {
            this.timeSub.unsubscribe();
        }
        this.subscribed = !this.subscribed;
    }

    protected concatMap(): void {
        if (this.subscribed === false) {
            this.timeSub = fromEvent(document, 'click')
                .pipe(concatMap(() => interval(1000).pipe(take(3))))
                .subscribe(console.log);
        } else {
            this.timeSub.unsubscribe();
        }
        this.subscribed = !this.subscribed;
    }

    protected exhaustMap(): void {
        if (this.subscribed === false) {
            this.timeSub = fromEvent(document, 'click')
                .pipe(exhaustMap(() => interval(1000).pipe(take(3))))
                .subscribe(console.log);
        } else {
            this.timeSub.unsubscribe();
        }
        this.subscribed = !this.subscribed;
    }

    protected startWith(): void {
        if (this.subscribed === false) {
            const numbers = of(1, 2, 3);
            this.timeSub = numbers.pipe(startWith('a', 'b'), endWith('c', 'd')).subscribe(console.log);
        } else {
            this.timeSub.unsubscribe();
        }
        this.subscribed = !this.subscribed;
    }

    protected concat(): void {
        if (this.subscribed === false) {
            const interval$ = interval(1000);
            this.timeSub = concat(interval$.pipe(take(3)), interval$.pipe(take(2))).subscribe(console.log);
        } else {
            this.timeSub.unsubscribe();
        }
        this.subscribed = !this.subscribed;
    }

    protected merge(): void {
        if (this.subscribed === false) {
            this.timeSub = merge(fromEvent(document, 'keyup'), fromEvent(document, 'click')).subscribe(console.log);
        } else {
            this.timeSub.unsubscribe();
        }
        this.subscribed = !this.subscribed;
    }

    protected countdown2(): void {
        const startButton = document.getElementById('countdown2');
        const pauseButton = document.getElementById('abort2');

        merge(fromEvent(startButton!, 'click').pipe(mapTo(true)), fromEvent(pauseButton!, 'click').pipe(mapTo(false)))
            .pipe(
                switchMap((shouldStart) => (shouldStart ? interval(1000) : EMPTY)),
                mapTo(-1),
                scan((accumulator, current) => accumulator + current, 10),
                takeWhile((value) => value >= 0),
                startWith(10)
            )
            .subscribe((value) => {
                this.theCountdown = '' + value;
                if (!value) {
                    this.theCountdown = 'LIFTOFF';
                }
            });
        if (this.subscribed === false) {
            this.subscribed = true;
        }
    }

    protected combineLatest(): void {
        if (this.subscribed === false) {
            const firstElem = document.getElementById('first');
            const secondElem = document.getElementById('second');

            this.timeSub = combineLatest([fromEvent(document, 'keyup'), fromEvent(document, 'click')]).subscribe(console.log);

            const keyupAsValue = (elem: any) => fromEvent(elem, 'keyup').pipe(map((event: any) => event.target.valueAsNumber));
            this.timeSub = combineLatest([keyupAsValue(firstElem), keyupAsValue(secondElem)])
                .pipe(
                    filter(([firstNum, secondNum]) => !isNaN(firstNum) && !isNaN(secondNum)),
                    map(([firstOperand, secondOperand]) => firstOperand + secondOperand)
                )
                .subscribe(console.log);
        } else {
            this.timeSub.unsubscribe();
        }
        this.subscribed = !this.subscribed;
    }

    protected withLatestFrom(): void {
        if (this.subscribed === false) {
            this.timeSub = fromEvent(document, 'click')
                .pipe(withLatestFrom(interval(1000)))
                .subscribe(console.log);
        } else {
            this.timeSub.unsubscribe();
        }
        this.subscribed = !this.subscribed;
    }

    protected forkJoin(): void {
        if (this.subscribed === false) {
            this.timeSub = forkJoin({
                numbers: of(1, 2, 3),
                letters: of('a', 'b', 'c').pipe(delay(2000))
            }).subscribe(console.log);

            this.timeSub = forkJoin({
                user: ajax.getJSON('https://api.github.com/users/reactivex'),
                repo: ajax.getJSON('https://api.github.com/users/reactivex/repos')
            }).subscribe(console.log);
        } else {
            this.timeSub.unsubscribe();
        }
        this.subscribed = !this.subscribed;
    }

    private genericTime(style: any): void {
        if (this.subscribed === false) {
            this.timeSub = fromEvent(document, 'click')
                .pipe(
                    style,
                    map((event: MouseEvent) => ({
                        x: event.clientX,
                        y: event.clientY
                    }))
                )
                .subscribe(console.log);

            this.timeSub.add(
                fromEvent(document.getElementById('timeText')!, 'keyup')
                    .pipe(style, pluck('target', 'value'), distinctUntilChanged())
                    .subscribe(console.log)
            );
        } else {
            this.timeSub.unsubscribe();
        }
        this.subscribed = !this.subscribed;
    }

    ngOnDestroy(): void {
        this.counter.unsubscribe();
        this.eventSub.unsubscribe();
    }
}
