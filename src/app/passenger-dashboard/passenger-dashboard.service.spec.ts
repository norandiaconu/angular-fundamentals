import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PassengerDashboardService } from './passenger-dashboard.service';
import { PassengerCountComponent } from './passenger-count/passenger-count.component';

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
