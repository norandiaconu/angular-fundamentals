import { Component, input, output } from '@angular/core';
import { Passenger } from '../passenger';
import { UpperCasePipe, DatePipe } from '@angular/common';

@Component({
    selector: 'passenger-detail',
    templateUrl: './passenger-detail.component.html',
    styleUrls: ['./passenger-detail.component.scss'],
    imports: [UpperCasePipe, DatePipe]
})
export class PassengerDetailComponent {
    readonly detail = input<Passenger>({
        id: 0,
        fullName: '',
        checkedIn: false,
        baggage: ''
    });

    editing = false;

    readonly edit = output<Passenger>();
    readonly remove = output<Passenger>();
    readonly view = output<Passenger>();

    onNameChange(value: string): void {
        this.detail().fullName = value;
    }
    toggleEdit(): void {
        if (this.editing) {
            this.edit.emit(this.detail());
        }
        this.editing = !this.editing;
    }
    onRemove(): void {
        this.remove.emit(this.detail());
    }
    goToPassenger(): void {
        this.view.emit(this.detail());
    }
}
