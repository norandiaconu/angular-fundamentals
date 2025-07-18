import { Component, OnInit, inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { Passenger } from './passenger';
import { PassengerDashboardService } from './passenger-dashboard.service';
import { PassengerCountComponent } from './passenger-count/passenger-count.component';

import { PassengerDetailComponent } from './passenger-detail/passenger-detail.component';

@Component({
    selector: 'passenger-dashboard',
    templateUrl: './passenger-dashboard.component.html',
    styleUrls: ['./passenger-dashboard.component.scss'],
    imports: [PassengerCountComponent, PassengerDetailComponent]
})
export class PassengerDashboardComponent implements OnInit {
    private passengerDashboardService = inject(PassengerDashboardService);
    private router = inject(Router);

    passengers: Passenger[] = [];
    passenger0: Passenger = {
        id: 0,
        fullName: '',
        checkedIn: false,
        baggage: ''
    };

    handleEdit(event: Passenger): void {
        this.passengerDashboardService.updatePassenger(event).subscribe(
            (data: Passenger) => {
                if (data.id === event.id) {
                    data = Object.assign({}, data, event);
                    this.getAllPassengers();
                }
                return data;
            },
            (error: HttpErrorResponse) => {
                console.error(error);
            }
        );
    }

    handleRemove(event: Passenger): void {
        this.passengerDashboardService.deletePassenger(event).subscribe(
            (data: Passenger) => {
                this.passengers = this.passengers.filter((passenger: Passenger) => passenger.id !== event.id);
            },
            (error: HttpErrorResponse) => {
                console.error(error);
            }
        );
    }

    getAllPassengers(): void {
        this.passengerDashboardService.getPassengers().subscribe(
            (data: Passenger[]) => {
                // console.log(data);
                this.passengers = data;
                // console.log(this.passengers);
            },
            (error: HttpErrorResponse) => {
                console.error(error);
            }
        );
    }

    getThePassenger(): Passenger {
        this.passengerDashboardService.getPassenger(1).subscribe(
            (data: Passenger) => {
                this.passenger0 = data;
                // console.log(this.passenger0);
            },
            (error: HttpErrorResponse) => {
                console.error(error);
            }
        );
        return this.passenger0;
    }

    getThePassengerPromise(): Passenger {
        this.passengerDashboardService.getPassengerPromise().then((data: Passenger) => {
            this.passenger0 = data;
            console.log(this.passenger0);
        });
        return this.passenger0;
    }

    handleView(event: Passenger): void {
        this.router.navigate(['/passengers', event.id]);
    }

    ngOnInit(): void {
    // this.getThePassenger();
    // this.getThePassengerPromise();

        this.getAllPassengers();
    }
}
