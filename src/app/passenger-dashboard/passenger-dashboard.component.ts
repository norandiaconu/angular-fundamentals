import { Component, OnInit } from '@angular/core';

import { Passenger } from './passenger-dashboard.module';
import { PassengerDashboardService } from './passenger-dashboard.service';

@Component({
  selector: 'passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.css']
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];

  handleEdit(event: Passenger): void {
    this.passengers = this.passengers.map((passenger: Passenger) => {
      if (passenger.id === event.id) {
        passenger = Object.assign({}, passenger, event);
      }
      return passenger;
    });
  }
  handleRemove(event: Passenger): void {
    this.passengers = this.passengers.filter((passenger: Passenger) => {
      return passenger.id !== event.id;
    });
  }

  constructor(private passengerDashboardService: PassengerDashboardService) { }

  ngOnInit(): void {
    this.passengers = this.passengerDashboardService.getPassengers();
  }

}
