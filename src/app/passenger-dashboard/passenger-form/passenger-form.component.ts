import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Passenger, Baggage } from '../passenger';

@Component({
    selector: 'passenger-form',
    templateUrl: './passenger-form.component.html',
    styleUrls: ['./passenger-form.component.scss']
})
export class PassengerFormComponent {
    @Input()
        detail: Passenger = {
            id: 0,
            fullName: '',
            checkedIn: false,
            baggage: ''
        };

    @Output()
        update: EventEmitter<Passenger> = new EventEmitter<Passenger>();

    baggage: Baggage[] = [
        {
            key: 'none',
            value: 'No baggage'
        },
        {
            key: 'hand-only',
            value: 'Hand baggage'
        },
        {
            key: 'hold-only',
            value: 'Hold baggage'
        },
        {
            key: 'hand-hold',
            value: 'Hand and hold baggage'
        }
    ];

    toggleCheckedIn(checkedIn: boolean): void {
        if (checkedIn) {
            this.detail.checkedInDate = Date.now();
        }
    }

    handleSubmit(passenger: Passenger, isValid: boolean): void {
        if (isValid) {
            this.update.emit(passenger);
        }
    }
}
