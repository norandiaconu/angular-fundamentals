import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AuthMessageComponent } from '../app/angular-pro/auth-message/auth-message.component';

describe('AuthMessageComponent', () => {
  let component: AuthMessageComponent;
  let fixture: ComponentFixture<AuthMessageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
