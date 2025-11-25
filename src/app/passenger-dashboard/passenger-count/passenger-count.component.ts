import { Component, input } from '@angular/core';
import { Passenger } from '../passenger';

@Component({
    selector: 'passenger-count',
    templateUrl: './passenger-count.component.html',
    styleUrls: ['./passenger-count.component.scss']
})
export class PassengerCountComponent {
    public readonly items = input<Passenger[]>([]);

    protected checkedInCount(): number {
        const items = this.items();
        if (!items) {
            return 0;
        } else {
            return items.filter((passenger: Passenger) => passenger.checkedIn).length;
        }
    }
}
