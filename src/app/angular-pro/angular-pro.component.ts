import { Component, OnInit } from "@angular/core";

interface User {
  email: string;
  password: string;
}

@Component({
  selector: "angular-pro",
  templateUrl: "./angular-pro.component.html",
  styleUrls: ["./angular-pro.component.scss"]
})
export class AngularProComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  createUser(user: User): void {
    console.log("Create user", user);
  }

  loginUser(user: User): void {
    console.log("Log in user", user);
  }

}
