import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PassengerDashboardComponent } from './passenger-dashboard.component';
import { PassengerCountComponent } from './passenger-count/passenger-count.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

describe('PassengerDashboardComponent', () => {
    let component: PassengerDashboardComponent;
    let fixture: ComponentFixture<PassengerDashboardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PassengerDashboardComponent, PassengerCountComponent],
            providers: [provideHttpClient(), provideRouter([])]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PassengerDashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
