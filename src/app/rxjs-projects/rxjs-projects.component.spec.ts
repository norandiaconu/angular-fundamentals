import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RxjsProjectsComponent } from './rxjs-projects.component';

describe('RxjsProjectsComponent', () => {
    let component: RxjsProjectsComponent;
    let fixture: ComponentFixture<RxjsProjectsComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [RxjsProjectsComponent]
        }).compileComponents();
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
