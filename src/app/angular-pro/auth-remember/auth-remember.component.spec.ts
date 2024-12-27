import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AuthRememberComponent } from './auth-remember.component';

describe('AuthRememberComponent', () => {
    let component: AuthRememberComponent;
    let fixture: ComponentFixture<AuthRememberComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ AuthRememberComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AuthRememberComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
