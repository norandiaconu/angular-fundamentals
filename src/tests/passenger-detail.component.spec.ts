import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Passenger } from 'src/app/passenger-dashboard/passenger';

import { PassengerDetailComponent } from '../app/passenger-dashboard/passenger-detail/passenger-detail.component';

describe('PassengerDetailComponent', () => {
  let component: PassengerDetailComponent;
  let fixture: ComponentFixture<PassengerDetailComponent>;
  let passenger: Passenger = {
    fullName: "Stephen",
    id: 1,
    checkedIn: true,
    baggage: "none",
    checkedInDate: 1595271717001
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerDetailComponent);
    component = fixture.componentInstance;
    component.detail = passenger;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
