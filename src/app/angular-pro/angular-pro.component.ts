import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterContentInit, ComponentRef, TemplateRef, inject } from '@angular/core';
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
    private resolver = inject(ComponentFactoryResolver);

    @ViewChild('entry', { read: ViewContainerRef }) entry!: ViewContainerRef;
    @ViewChild('tmpl') tmpl!: TemplateRef<any>;
    rememberMe = false;
    subjectOne: Subject<number> = new Subject<number>();
    observableOne: Observable<number> = new Observable<number>();
    unsubscribe$: Subject<void> = new Subject<void>();
    component!: ComponentRef<AuthFormComponent>;

    ngOnInit(): void {
        this.rememberMe = false;
        this.subjectOne = new Subject<number>();
        this.observableOne = this.subjectOne.asObservable();
        this.unsubscribe$ = new Subject<void>();

        this.observableOne.pipe(
            tap(r => console.log('Subject', r)),
            takeUntil(this.unsubscribe$)
        ).subscribe();
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
            this.component = this.entry.createComponent(authFormFactory);
            this.component.instance.title = 'Dynamic';
            this.component.instance.showButton = true;
            this.component.instance.submitted.subscribe(this.createUser);
            this.entry.createComponent(authFormFactory, 0);

            this.entry.createEmbeddedView(this.tmpl, {
                $implicit: 'Angular',
                angularVar: 'Template'
            });
        });
    }

    createUser(user: User): void {
        console.log('Create user', user);
    }

    rememberUser(remember: boolean): void {
        this.rememberMe = remember;
    }

    loginUser(user: User): void {
        console.log('Log in user', user, this.rememberMe);
    }

    destroyComponent(): void {
        this.component.destroy();
    }

    moveComponent(): void {
        this.entry.move(this.component.hostView, 0);
    }

}
