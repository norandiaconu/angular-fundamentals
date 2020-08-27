import { Component, OnInit, EventEmitter, Output } from "@angular/core";

interface User {
  email: string;
  password: string;
}

@Component({
  selector: "auth-form",
  templateUrl: "./auth-form.component.html",
  styleUrls: ["./auth-form.component.scss"]
})
export class AuthFormComponent implements OnInit {
  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(value: User): void {
    this.submitted.emit(value);
  }
}
