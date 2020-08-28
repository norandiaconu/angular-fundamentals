import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver,
  AfterContentInit } from "@angular/core";
import { AuthFormComponent } from "./auth-form/auth-form.component";

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

  constructor(
    private resolver: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
    this.rememberMe = false;
  }

  ngAfterContentInit(): void {
    setTimeout(() => {
      const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
      this.entry.createComponent(authFormFactory);
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
