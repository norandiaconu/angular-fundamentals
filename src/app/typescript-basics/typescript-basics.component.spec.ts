import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TypescriptBasicsComponent } from './typescript-basics.component';

describe('TypescriptBasicsComponent', () => {
    let component: TypescriptBasicsComponent;
    let fixture: ComponentFixture<TypescriptBasicsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TypescriptBasicsComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TypescriptBasicsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should multiplier', () => {
        jest.spyOn(window.console, 'log');
        component['multiplier']();
        expect(window.console.log).toHaveBeenCalledWith(50);
        expect(window.console.log).toHaveBeenCalledWith(25);
    });

    it('should functionTypes', () => {
        jest.spyOn(window.console, 'log');
        component['functionTypes']();
        expect(window.console.log).toHaveBeenCalledWith(50);
    });
});
