import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PassengerDetailComponent } from '../app/passenger-dashboard/passenger-detail/passenger-detail.component';

describe('PassengerDetailComponent', () => {
  let component: PassengerDetailComponent;
  let fixture: ComponentFixture<PassengerDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
