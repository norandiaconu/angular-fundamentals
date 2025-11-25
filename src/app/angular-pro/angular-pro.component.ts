import {
    Component,
    OnInit,
    ViewContainerRef,
    ComponentFactoryResolver,
    AfterContentInit,
    ComponentRef,
    TemplateRef,
    inject,
    viewChild
} from '@angular/core';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { Subject, Observable } from 'rxjs';
import { tap, takeUntil } from 'rxjs/operators';
import { AuthRememberComponent } from './auth-remember/auth-remember.component';
import { NgTemplateOutlet } from '@angular/common';

interface User {
    email: string;
    password: string;
}

@Component({
    selector: 'angular-pro',
    templateUrl: './angular-pro.component.html',
    styleUrls: ['./angular-pro.component.scss'],
    imports: [AuthFormComponent, AuthRememberComponent, NgTemplateOutlet]
})
export class AngularProComponent implements OnInit, AfterContentInit {
    private readonly resolver = inject(ComponentFactoryResolver);

    private readonly entry = viewChild.required('entry', { read: ViewContainerRef });
    private readonly tmpl = viewChild.required<TemplateRef<any>>('tmpl');
    private rememberMe = false;
    private subjectOne: Subject<number> = new Subject<number>();
    private observableOne: Observable<number> = new Observable<number>();
    private unsubscribe$: Subject<void> = new Subject<void>();
    private component!: ComponentRef<AuthFormComponent>;

    ngOnInit(): void {
        this.rememberMe = false;
        this.subjectOne = new Subject<number>();
        this.observableOne = this.subjectOne.asObservable();
        this.unsubscribe$ = new Subject<void>();

        this.observableOne
            .pipe(
                tap((r) => console.log('Subject', r)),
                takeUntil(this.unsubscribe$)
            )
            .subscribe();
        this.subjectOne.next(1);
        // with takeUntil, unsubscribe$.next() can be called instead of calling subjectOne.complete()
        this.unsubscribe$.next();
        this.subjectOne.complete();
        this.subjectOne.next(2);
    }

    ngAfterContentInit(): void {
        setTimeout(() => {
            // dynamically create third component
            const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
            this.component = this.entry().createComponent(authFormFactory);
            this.component.instance.title = 'Dynamic';
            this.component.instance.showButton = true;
            this.component.instance.submitted.subscribe(this.createUser);
            this.entry().createComponent(authFormFactory, 0);

            this.entry().createEmbeddedView(this.tmpl(), {
                $implicit: 'Angular',
                angularVar: 'Template'
            });
        });
    }

    protected createUser(user: User): void {
        console.log('Create user', user);
    }

    protected rememberUser(remember: boolean): void {
        this.rememberMe = remember;
    }

    protected loginUser(user: User): void {
        console.log('Log in user', user, this.rememberMe);
    }

    protected destroyComponent(): void {
        this.component.destroy();
    }

    protected moveComponent(): void {
        this.entry().move(this.component.hostView, 0);
    }
}
