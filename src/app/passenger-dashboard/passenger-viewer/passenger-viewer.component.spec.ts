import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PassengerViewerComponent } from './passenger-viewer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthFormComponent } from '../../angular-pro/auth-form/auth-form.component';
import { PassengerFormComponent } from '../passenger-form/passenger-form.component';

describe('PassengerViewerComponent', () => {
    let component: PassengerViewerComponent;
    let fixture: ComponentFixture<PassengerViewerComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                HttpClientTestingModule,
                RouterTestingModule,
                AuthFormComponent,
                PassengerFormComponent,
                PassengerViewerComponent
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PassengerViewerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
