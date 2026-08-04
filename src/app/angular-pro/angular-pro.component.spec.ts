import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { describe, it, expect, beforeEach } from 'vitest';
import { AngularProComponent } from './angular-pro.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { AuthMessageComponent } from './auth-message/auth-message.component';
import { AuthRememberComponent } from './auth-remember/auth-remember.component';

describe('AngularProComponent', () => {
    let component: AngularProComponent;
    let fixture: ComponentFixture<AngularProComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FormsModule, AngularProComponent, AuthRememberComponent, AuthFormComponent, AuthMessageComponent],
            teardown: { destroyAfterEach: false }
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AngularProComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
