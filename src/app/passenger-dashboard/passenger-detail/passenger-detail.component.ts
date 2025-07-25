import { Component, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

import { Passenger } from '../passenger';
import { UpperCasePipe, DatePipe } from '@angular/common';

@Component({
    selector: 'passenger-detail',
    templateUrl: './passenger-detail.component.html',
    styleUrls: ['./passenger-detail.component.scss'],
    imports: [UpperCasePipe, DatePipe]
})
export class PassengerDetailComponent implements OnChanges {
    @Input() detail: Passenger = {
        id: 0,
        fullName: '',
        checkedIn: false,
        baggage: ''
    };

    editing = false;

    @Output() edit: EventEmitter<Passenger> = new EventEmitter();
    @Output() remove: EventEmitter<Passenger> = new EventEmitter();
    @Output() view: EventEmitter<Passenger> = new EventEmitter();

    onNameChange(value: string): void {
        this.detail.fullName = value;
    }
    toggleEdit(): void {
        if (this.editing) {
            this.edit.emit(this.detail);
        }
        this.editing = !this.editing;
    }
    onRemove(): void {
        this.remove.emit(this.detail);
    }
    goToPassenger(): void {
        this.view.emit(this.detail);
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.detail) {
            this.detail = Object.assign({}, changes.detail.currentValue);
        }
    }
}
