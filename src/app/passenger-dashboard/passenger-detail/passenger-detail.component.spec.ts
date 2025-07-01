import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PassengerDetailComponent } from './passenger-detail.component';
import { Passenger } from '../passenger';

describe('PassengerDetailComponent', () => {
    let component: PassengerDetailComponent;
    let fixture: ComponentFixture<PassengerDetailComponent>;
    const passenger: Passenger = {
        fullName: 'Stephen',
        id: 1,
        checkedIn: true,
        baggage: 'none',
        checkedInDate: 1595271717001
    };

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [PassengerDetailComponent]
        }).compileComponents();
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
