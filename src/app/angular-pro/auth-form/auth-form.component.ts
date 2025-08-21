import {
    Component,
    AfterContentInit,
    AfterViewInit,
    ChangeDetectorRef,
    ElementRef,
    Renderer2,
    inject,
    output,
    contentChild,
    contentChildren,
    viewChild,
    viewChildren
} from '@angular/core';
import { AuthRememberComponent } from '../auth-remember/auth-remember.component';
import { AuthMessageComponent } from '../auth-message/auth-message.component';
import { FormsModule } from '@angular/forms';

interface User {
    email: string;
    password: string;
}

@Component({
    selector: 'auth-form',
    templateUrl: './auth-form.component.html',
    styleUrls: ['./auth-form.component.scss'],
    imports: [FormsModule, AuthMessageComponent]
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {
    private cd = inject(ChangeDetectorRef);
    private renderer = inject(Renderer2);

    readonly submitted = output<User>();
    readonly remember = contentChild(AuthRememberComponent);
    readonly remember2 = contentChildren(AuthRememberComponent);
    readonly message = viewChild(AuthMessageComponent);
    readonly message2 = viewChildren(AuthMessageComponent);
    readonly email = viewChild.required<ElementRef>('email');
    showMessage = false;
    title = '';
    showButton = false;

    ngAfterContentInit(): void {
        const remember = this.remember();
        if (remember) {
            remember.checked.subscribe((checked: boolean) => {
                // for changing just one ContentChild
                // this.showMessage = checked;
            });
            this.remember2().forEach((item) => {
                item.checked.subscribe((checked: boolean) => {
                    if (this.message()) {
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
        this.email().nativeElement.focus();
        const email = this.email();
        this.renderer.setAttribute(email.nativeElement, 'placeholder', 'Enter your email address');
        this.renderer.addClass(email.nativeElement, 'email');
        // this is the closest way to focus on an element with Renderer2, but the original method works better
        // this.renderer.selectRootElement(".email").focus();
        const message2 = this.message2();
        if (message2) {
            // can use setTimeout to allow for setting message.days to 30, but it is better to include detectChanges()
            // afterwards instead
            /* setTimeout(() => {
        this.message2.forEach((message) => {
          message.days = 30;
        });
      });*/
            message2.forEach((message) => {
                message.days = 30;
            });
            this.cd.detectChanges();
        }
    }

    onSubmit(value: User): void {
        this.submitted.emit(value);
    }
}
