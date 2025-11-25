import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PassengerViewerComponent } from './passenger-viewer.component';
import { FormsModule } from '@angular/forms';
import { AuthFormComponent } from '../../angular-pro/auth-form/auth-form.component';
import { PassengerFormComponent } from '../passenger-form/passenger-form.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

describe('PassengerViewerComponent', () => {
    let component: PassengerViewerComponent;
    let fixture: ComponentFixture<PassengerViewerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FormsModule, AuthFormComponent, PassengerFormComponent, PassengerViewerComponent],
            providers: [provideHttpClient(), provideRouter([])]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PassengerViewerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
