import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Passenger } from '../passenger-dashboard.module';

@Component({
  selector: 'passenger-detail',
  templateUrl: './passenger-detail.component.html',
  styleUrls: ['./passenger-detail.component.css']
})
export class PassengerDetailComponent implements OnInit {
  @Input() detail: Passenger;

  editing = false;

  @Output() edit: EventEmitter<any> = new EventEmitter();
  @Output() remove: EventEmitter<any> = new EventEmitter();

  constructor() { }

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

  ngOnInit(): void {

  }

}
