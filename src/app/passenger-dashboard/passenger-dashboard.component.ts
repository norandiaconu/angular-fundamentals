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
  passenger0: Passenger;

  handleEdit(event: Passenger): void {
    this.passengerDashboardService.updatePassenger(event).subscribe((data: Passenger) => {
      if (data.id === event.id) {
        data = Object.assign({}, data, event);
        this.getAllPassengers();
      }
      return data;
    });
  }

  handleRemove(event: Passenger): void {
    this.passengerDashboardService.deletePassenger(event).subscribe((data: Passenger) => {
      this.passengers = this.passengers.filter((passenger: Passenger) => {
        return passenger.id !== event.id;
      });
    });
  }

  getAllPassengers(): void {
    this.passengerDashboardService.getPassengers().subscribe((data: Passenger[]) => {
      console.log(data);
      this.passengers = data;
      console.log(this.passengers);
    });
  }

  getThePassenger(): Passenger {
    this.passengerDashboardService.getPassenger().subscribe((data: Passenger) => {
      this.passenger0 = data;
      console.log(this.passenger0);
    });
    return this.passenger0;
  }

  getThePassengerPromise(): Passenger {
    this.passengerDashboardService.getPassengerPromise().then((data: Passenger) => {
      this.passenger0 = data;
      console.log(this.passenger0);
    });
    return this.passenger0;
  }

  constructor(private passengerDashboardService: PassengerDashboardService) { }

  ngOnInit(): void {
    this.getThePassenger();
    // this.getThePassengerPromise();

    this.getAllPassengers();
  }

}
