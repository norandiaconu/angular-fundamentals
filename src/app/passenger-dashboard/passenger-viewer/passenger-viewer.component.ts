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
    imports: [PassengerFormComponent]
})
export class PassengerViewerComponent implements OnInit {
    protected passenger: Passenger = {
        id: 0,
        fullName: '',
        checkedIn: false,
        baggage: ''
    };

    private readonly passengerDashboardService = inject(PassengerDashboardService);
    private readonly router = inject(Router);
    private readonly route = inject(ActivatedRoute);

    protected onUpdatePassenger(event: Passenger): void {
        console.log(event);
        this.passengerDashboardService.updatePassenger(event).subscribe((data: Passenger) => {
            this.passenger = Object.assign({}, this.passenger, event);
        });
    }

    protected goBack(): void {
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
