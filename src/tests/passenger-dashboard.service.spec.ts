import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PassengerCountComponent } from 'src/app/passenger-dashboard/passenger-count/passenger-count.component';

import { PassengerDashboardService } from '../app/passenger-dashboard/passenger-dashboard.service';

describe('PassengerDashboardService', () => {
  let service: PassengerDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ PassengerCountComponent ]
    });
    service = TestBed.inject(PassengerDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
