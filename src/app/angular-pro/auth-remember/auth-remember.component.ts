import { Component, output } from '@angular/core';

@Component({
    selector: 'auth-remember',
    templateUrl: './auth-remember.component.html',
    styleUrls: ['./auth-remember.component.scss'],
    standalone: true
})
export class AuthRememberComponent {
    readonly checked = output<boolean>();

    onChecked(event: Event): void {
        const value = (event.target as HTMLInputElement).checked;
        this.checked.emit(value);
    }
}
