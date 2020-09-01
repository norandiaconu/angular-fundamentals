import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver,
  AfterContentInit } from "@angular/core";
import { AuthFormComponent } from "./auth-form/auth-form.component";
import { Subject, Observable, Subscription } from "rxjs";
import { tap, takeUntil } from "rxjs/operators";

interface User {
  email: string;
  password: string;
}

@Component({
  selector: "angular-pro",
  templateUrl: "./angular-pro.component.html",
  styleUrls: ["./angular-pro.component.scss"]
})
export class AngularProComponent implements OnInit, AfterContentInit {
  @ViewChild("entry", { read: ViewContainerRef }) entry: ViewContainerRef;
  rememberMe: boolean;
  subjectOne: Subject<number>;
  observableOne: Observable<number>;
  unsubscribe$: Subject<void>;

  constructor(
    private resolver: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
    this.rememberMe = false;
    this.subjectOne = new Subject<number>();
    this.observableOne = this.subjectOne.asObservable();
    this.unsubscribe$ = new Subject<void>();

    this.observableOne.pipe(
      tap(r => console.log("Subject", r)),
      takeUntil(this.unsubscribe$)
    ).subscribe();
    this.subjectOne.next(1);
    // with takeUntil, unsubscribe$.next() can be called instead of calling subjectOne.complete()
    this.unsubscribe$.next();
    this.subjectOne.complete();
    this.subjectOne.next(2);
  }

  ngAfterContentInit(): void {
    setTimeout(() => {
      // dynamically create third component
      const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
      const component = this.entry.createComponent(authFormFactory);
      component.instance.title = "Dynamic";
      component.instance.showButton = true;
      component.instance.submitted.subscribe(this.createUser);
    });
  }
  
  createUser(user: User): void {
    console.log("Create user", user);
  }

  rememberUser(remember: boolean): void {
    this.rememberMe = remember;
  }

  loginUser(user: User): void {
    console.log("Log in user", user, this.rememberMe);
  }

}
