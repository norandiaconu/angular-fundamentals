import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { provideRouter } from '@angular/router';
import { describe, it, expect, beforeEach } from 'vitest';
import { AuthFormComponent } from '../../angular-pro/auth-form/auth-form.component';
import { PassengerFormComponent } from '../passenger-form/passenger-form.component';
import { PassengerViewerComponent } from './passenger-viewer.component';

describe('PassengerViewerComponent', () => {
    let component: PassengerViewerComponent;
    let fixture: ComponentFixture<PassengerViewerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FormsModule, AuthFormComponent, PassengerFormComponent, PassengerViewerComponent],
            providers: [provideHttpClient(), provideRouter([]), provideHttpClientTesting()]
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
