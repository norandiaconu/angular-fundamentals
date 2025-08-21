import { Component, input } from '@angular/core';
import { Passenger } from '../passenger';

@Component({
    selector: 'passenger-count',
    templateUrl: './passenger-count.component.html',
    styleUrls: ['./passenger-count.component.scss'],
    standalone: true
})
export class PassengerCountComponent {
    readonly items = input<Passenger[]>([]);

    checkedInCount(): number {
        const items = this.items();
        if (!items) {
            return 0;
        } else {
            return items.filter((passenger: Passenger) => passenger.checkedIn).length;
        }
    }
}
