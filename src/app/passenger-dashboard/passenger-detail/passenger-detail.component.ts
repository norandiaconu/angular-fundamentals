import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

import { Passenger } from '../passenger-dashboard.module';

@Component({
  selector: 'passenger-detail',
  templateUrl: './passenger-detail.component.html',
  styleUrls: ['./passenger-detail.component.css']
})
export class PassengerDetailComponent implements OnInit, OnChanges {
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

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
  }

  ngOnInit(): void {

  }

}
