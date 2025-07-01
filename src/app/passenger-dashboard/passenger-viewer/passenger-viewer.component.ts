import { Component, OnInit, inject } from '@angular/core';

import { PassengerDashboardService } from '../passenger-dashboard.service';
import { Passenger } from '../passenger';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { PassengerFormComponent } from '../passenger-form/passenger-form.component';

@Component({
    selector: 'passenger-viewer',
    templateUrl: './passenger-viewer.component.html',
    styleUrls: ['./passenger-viewer.component.scss'],
    standalone: true,
    imports: [PassengerFormComponent]
})
export class PassengerViewerComponent implements OnInit {
    private passengerDashboardService = inject(PassengerDashboardService);
    private router = inject(Router);
    private route = inject(ActivatedRoute);

    passenger: Passenger = {
        id: 0,
        fullName: '',
        checkedIn: false,
        baggage: ''
    };

    onUpdatePassenger(event: Passenger): void {
        console.log(event);
        this.passengerDashboardService.updatePassenger(event).subscribe((data: Passenger) => {
            this.passenger = Object.assign({}, this.passenger, event);
        });
    }

    goBack(): void {
        this.router.navigate(['/passengers']);
    }

    ngOnInit(): void {
        this.route.params.pipe(map((data: Params) => data as Passenger)).subscribe((data: Passenger) => {
            console.log(data);
        });
        this.route.params
            .pipe(
                map((data: Params) => data as Passenger),
                switchMap((data: Passenger) => this.passengerDashboardService.getPassenger(data.id))
            )
            .subscribe((data: Passenger) => (this.passenger = data));
    }
}
