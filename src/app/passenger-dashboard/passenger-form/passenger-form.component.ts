import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Passenger, Baggage } from '../passenger';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
    selector: 'passenger-form',
    templateUrl: './passenger-form.component.html',
    styleUrls: ['./passenger-form.component.scss'],
    standalone: true,
    imports: [FormsModule, JsonPipe]
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

    handleSubmit(passenger: Passenger, isValid: boolean | null): void {
        if (isValid) {
            this.update.emit(passenger);
        }
    }
}
