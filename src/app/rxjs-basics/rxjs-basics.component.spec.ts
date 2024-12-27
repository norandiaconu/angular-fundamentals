import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RxjsBasicsComponent } from './rxjs-basics.component';

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

    it('should helloWorld', () => {
        jest.spyOn(console, 'log');
        component.helloWorld();
        expect(console.log).toHaveBeenCalledTimes(5);
        expect(component.consoleString).toBe('helloWorld');
    });

    it('should countOnce', () => {
        component.countOnce();
        expect(component.counter.closed).toBeFalsy();
        expect(component.consoleString).toBe('countOnce');
    });
});
