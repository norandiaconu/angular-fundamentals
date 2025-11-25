import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AuthFormComponent } from './auth-form.component';
import { AuthMessageComponent } from '../auth-message/auth-message.component';

describe('AuthFormComponent', () => {
    let component: AuthFormComponent;
    let fixture: ComponentFixture<AuthFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FormsModule, AuthFormComponent, AuthMessageComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AuthFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
