import { Component, OnInit } from "@angular/core";

import { PassengerDashboardService } from "../passenger-dashboard.service";
import { Passenger } from "../passenger";

@Component({
  selector: "passenger-viewer",
  templateUrl: "./passenger-viewer.component.html",
  styleUrls: ["./passenger-viewer.component.css"]
})
export class PassengerViewerComponent implements OnInit {
  passenger: Passenger;

  constructor(private passengerDashboardService: PassengerDashboardService) { }

  onUpdatePassenger(event: Passenger): void {
    console.log(event);
    this.passengerDashboardService.updatePassenger(event).subscribe((data: Passenger) => {
      this.passenger = Object.assign({}, this.passenger, event);
    });
  }

  ngOnInit(): void {
    this.passengerDashboardService.getPassenger(1).subscribe((data: Passenger) => {
      this.passenger = data;
    });
  }

}
