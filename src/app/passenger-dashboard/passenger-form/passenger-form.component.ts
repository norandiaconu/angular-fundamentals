import { Component, input, output } from '@angular/core';
import { Passenger, Baggage } from '../passenger';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
    selector: 'passenger-form',
    templateUrl: './passenger-form.component.html',
    styleUrls: ['./passenger-form.component.scss'],
    imports: [FormsModule, JsonPipe]
})
export class PassengerFormComponent {
    public readonly detail = input<Passenger>({
        id: 0,
        fullName: '',
        checkedIn: false,
        baggage: ''
    });

    protected readonly update = output<Passenger>();

    protected baggage: Baggage[] = [
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

    protected toggleCheckedIn(checkedIn: boolean): void {
        if (checkedIn) {
            this.detail().checkedInDate = Date.now();
        }
    }

    protected handleSubmit(passenger: Passenger, isValid: boolean | null): void {
        if (isValid) {
            this.update.emit(passenger);
        }
    }
}
