import { Component, Input } from '@angular/core';

import { Passenger } from '../passenger';

@Component({
    selector: 'passenger-count',
    templateUrl: './passenger-count.component.html',
    styleUrls: ['./passenger-count.component.scss'],
    standalone: true
})
export class PassengerCountComponent {
    @Input() items: Passenger[] = [];

    checkedInCount(): number {
        if (!this.items) {
            return 0;
        } else {
            return this.items.filter((passenger: Passenger) => passenger.checkedIn).length;
        }
    }
}
