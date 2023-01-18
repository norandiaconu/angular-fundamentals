import { Component, Input } from "@angular/core";

import { Passenger } from "../passenger";


@Component({
  selector: "passenger-count",
  templateUrl: "./passenger-count.component.html",
  styleUrls: ["./passenger-count.component.scss"]
})
export class PassengerCountComponent {
  @Input() items: Passenger[];

  constructor() { }

  checkedInCount(): number {
    if (!this.items) {
      return;
    } else {
      return this.items.filter((passenger: Passenger) => passenger.checkedIn).length;
    }
  }
}
