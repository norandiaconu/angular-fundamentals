import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Passenger, Baggage } from "../passenger";

@Component({
  selector: "passenger-form",
  templateUrl: "./passenger-form.component.html",
  styleUrls: ["./passenger-form.component.css"]
})
export class PassengerFormComponent implements OnInit {
  @Input()
  detail: Passenger;

  @Output()
  update: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  baggage: Baggage[] = [{
    key: "none",
    value: "No baggage"
  },
  {
    key: "hand-only",
    value: "Hand baggage"
  },
  {
    key: "hold-only",
    value: "Hold baggage"
  },
  {
    key: "hand-hold",
    value: "Hand and hold baggage"
  }];

  constructor() { }

  toggleCheckIn(checkedIn: boolean): void {
    if (checkedIn) {
      this.detail.checkedInDate = Date.now();
    }
  }

  handleSubmit(passenger: Passenger, isValid: boolean): void {
    if (isValid) {
      this.update.emit(passenger);
    }
  }

  ngOnInit(): void {
  }

}
