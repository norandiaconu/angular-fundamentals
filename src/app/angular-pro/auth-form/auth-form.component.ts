import {
    Component,
    EventEmitter,
    Output,
    AfterContentInit,
    ContentChild,
    ContentChildren,
    QueryList,
    ViewChild,
    ViewChildren,
    AfterViewInit,
    ChangeDetectorRef,
    ElementRef,
    Renderer2
} from '@angular/core';
import { AuthRememberComponent } from '../auth-remember/auth-remember.component';
import { AuthMessageComponent } from '../auth-message/auth-message.component';

interface User {
    email: string;
    password: string;
}

@Component({
    selector: 'auth-form',
    templateUrl: './auth-form.component.html',
    styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {
    @Output() submitted: EventEmitter<User> = new EventEmitter<User>();
    @ContentChild(AuthRememberComponent) remember: AuthRememberComponent = new AuthRememberComponent();
    @ContentChildren(AuthRememberComponent) remember2: QueryList<AuthRememberComponent> = new QueryList<AuthRememberComponent>();
    @ViewChild(AuthMessageComponent) message: AuthMessageComponent = new AuthMessageComponent();
    @ViewChildren(AuthMessageComponent) message2: QueryList<AuthMessageComponent> = new QueryList<AuthMessageComponent>();
    @ViewChild('email') email!: ElementRef;
    showMessage = false;
    title = '';
    showButton = false;

    constructor(private cd: ChangeDetectorRef, private renderer: Renderer2) {}

    ngAfterContentInit(): void {
        if (this.remember) {
            this.remember.checked.subscribe((checked: boolean) => {
                // for changing just one ContentChild
                // this.showMessage = checked;
            });
            this.remember2.forEach((item) => {
                item.checked.subscribe((checked: boolean) => {
                    if (this.message) {
                        // changing ViewChild(ren) should happen in ngAfterViewInit
                        // this.message.days = 30;
                    }
                    this.showMessage = checked;
                });
            });
        }
    }

    ngAfterViewInit(): void {
    // Renderer2 methods are preferred to these as they are platform independent
    /* this.email.nativeElement.setAttribute("placeholder", "Enter your email address");
    this.email.nativeElement.classList.add("email");*/
        this.email.nativeElement.focus();
        this.renderer.setAttribute(this.email.nativeElement, 'placeholder', 'Enter your email address');
        this.renderer.addClass(this.email.nativeElement, 'email');
        // this is the closest way to focus on an element with Renderer2, but the original method works better
        // this.renderer.selectRootElement(".email").focus();
        if (this.message2) {
            // can use setTimeout to allow for setting message.days to 30, but it is better to include detectChanges()
            // afterwards instead
            /* setTimeout(() => {
        this.message2.forEach((message) => {
          message.days = 30;
        });
      });*/
            this.message2.forEach((message) => {
                message.days = 30;
            });
            this.cd.detectChanges();
        }
    }

    onSubmit(value: User): void {
        this.submitted.emit(value);
    }
}
