import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RxjsProjectsComponent } from '../app/rxjs-projects/rxjs-projects.component';

describe('RxjsProjectsComponent', () => {
  let component: RxjsProjectsComponent;
  let fixture: ComponentFixture<RxjsProjectsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
