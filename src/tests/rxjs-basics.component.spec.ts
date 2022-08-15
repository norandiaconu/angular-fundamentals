import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RxjsBasicsComponent } from '../app/rxjs-basics/rxjs-basics.component';

describe('RxjsBasicsComponent', () => {
  let component: RxjsBasicsComponent;
  let fixture: ComponentFixture<RxjsBasicsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsBasicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
