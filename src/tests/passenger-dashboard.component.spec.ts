import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PassengerCountComponent } from 'src/app/passenger-dashboard/passenger-count/passenger-count.component';

import { PassengerDashboardComponent } from '../app/passenger-dashboard/passenger-dashboard.component';

describe('PassengerDashboardComponent', () => {
  let component: PassengerDashboardComponent;
  let fixture: ComponentFixture<PassengerDashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [ PassengerDashboardComponent, PassengerCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
