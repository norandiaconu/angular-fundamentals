import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthFormComponent } from 'src/app/angular-pro/auth-form/auth-form.component';
import { PassengerFormComponent } from 'src/app/passenger-dashboard/passenger-form/passenger-form.component';

import { PassengerViewerComponent } from '../app/passenger-dashboard/passenger-viewer/passenger-viewer.component';

describe('PassengerViewerComponent', () => {
  let component: PassengerViewerComponent;
  let fixture: ComponentFixture<PassengerViewerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [ AuthFormComponent, PassengerFormComponent, PassengerViewerComponent ]
    })
    .compileComponents();
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
