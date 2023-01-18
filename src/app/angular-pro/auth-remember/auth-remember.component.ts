import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "auth-remember",
  templateUrl: "./auth-remember.component.html",
  styleUrls: ["./auth-remember.component.scss"]
})
export class AuthRememberComponent {
  @Output() checked: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  onChecked(value: boolean): void {
    this.checked.emit(value);
  }

}
