import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AuthFormComponent } from 'src/app/angular-pro/auth-form/auth-form.component';
import { AuthMessageComponent } from 'src/app/angular-pro/auth-message/auth-message.component';
import { AuthRememberComponent } from 'src/app/angular-pro/auth-remember/auth-remember.component';

import { AngularProComponent } from '../app/angular-pro/angular-pro.component';

describe('AngularProComponent', () => {
  let component: AngularProComponent;
  let fixture: ComponentFixture<AngularProComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ AngularProComponent, AuthRememberComponent, AuthFormComponent, AuthMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
