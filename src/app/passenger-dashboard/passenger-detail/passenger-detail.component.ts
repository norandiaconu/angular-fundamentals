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
    public readonly detail = input<Passenger>({
        id: 0,
        fullName: '',
        checkedIn: false,
        baggage: ''
    });

    protected editing = false;

    protected readonly edit = output<Passenger>();
    protected readonly remove = output<Passenger>();
    protected readonly view = output<Passenger>();

    protected onNameChange(value: string): void {
        this.detail().fullName = value;
    }

    protected toggleEdit(): void {
        if (this.editing) {
            this.edit.emit(this.detail());
        }
        this.editing = !this.editing;
    }

    protected onRemove(): void {
        this.remove.emit(this.detail());
    }

    protected goToPassenger(): void {
        this.view.emit(this.detail());
    }
}
