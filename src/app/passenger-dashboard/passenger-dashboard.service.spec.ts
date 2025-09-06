import { TestBed } from '@angular/core/testing';
import { PassengerDashboardService } from './passenger-dashboard.service';
import { PassengerCountComponent } from './passenger-count/passenger-count.component';
import { provideHttpClient } from '@angular/common/http';

describe('PassengerDashboardService', () => {
    let service: PassengerDashboardService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [PassengerCountComponent],
            providers: [provideHttpClient()]
        });
        service = TestBed.inject(PassengerDashboardService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
