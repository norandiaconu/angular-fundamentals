import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PassengerDashboardComponent } from './passenger-dashboard.component';
import { PassengerCountComponent } from './passenger-count/passenger-count.component';
import { provideHttpClient } from '@angular/common/http';

describe('PassengerDashboardComponent', () => {
    let component: PassengerDashboardComponent;
    let fixture: ComponentFixture<PassengerDashboardComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, PassengerDashboardComponent, PassengerCountComponent],
            providers: [provideHttpClient()]
        }).compileComponents();
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
