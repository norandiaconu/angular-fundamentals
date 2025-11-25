import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

interface Nav {
    link: string;
    name: string;
    exact: boolean;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [FormsModule, RouterLink, RouterLinkActive, RouterOutlet]
})
export class AppComponent {
    protected title: string;
    protected numberOne = 1;
    protected numberTwo = 2;
    protected isHappy = true;
    protected logo = 'assets/logo.svg';
    protected name = '';
    protected display = false;
    protected nav: Nav[] = [
        {
            link: '/',
            name: 'Home',
            exact: true
        },
        {
            link: '/oops',
            name: '404',
            exact: false
        },
        {
            link: '/passengers',
            name: 'Passengers',
            exact: false
        },
        {
            link: '/rxjs-basics',
            name: 'RxJS Basics',
            exact: false
        },
        {
            link: '/rxjs-projects',
            name: 'RxJS Projects',
            exact: false
        },
        {
            link: '/typescript-basics',
            name: 'TypeScript Basics',
            exact: false
        },
        {
            link: '/angular-pro',
            name: 'Angular Pro',
            exact: false
        }
    ];

    constructor() {
        this.title = 'Ultimate Angular';
    }

    protected handleInput(event: any): void {
        this.title = event.target.value;
    }

    protected handleBlur(event: any): void {
        this.title = event.target.value;
        console.log(event);
    }

    protected handleClick(): void {
        this.title = 'Angular';
    }

    protected handleChange(value: string): void {
        this.title = value;
        console.log(value);
    }

    protected handleNameChange(event: Event): void {
        const value = (event.target as HTMLInputElement).value;
        this.name = value;
    }

    protected toggle(): void {
        this.display = !this.display;
    }
}
