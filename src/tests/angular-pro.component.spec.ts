import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AuthRememberComponent } from 'src/app/angular-pro/auth-remember/auth-remember.component';

import { AngularProComponent } from '../app/angular-pro/angular-pro.component';

describe('AngularProComponent', () => {
  let component: AngularProComponent;
  let fixture: ComponentFixture<AngularProComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularProComponent, AuthRememberComponent ]
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
