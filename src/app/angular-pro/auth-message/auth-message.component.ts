import { Component } from '@angular/core';

@Component({
    selector: 'auth-message',
    templateUrl: './auth-message.component.html',
    styleUrls: ['./auth-message.component.scss'],
    standalone: true
})
export class AuthMessageComponent {
    days: number;

    constructor() {
        this.days = 7;
    }
}
