import { Component, output } from '@angular/core';

@Component({
    selector: 'auth-remember',
    templateUrl: './auth-remember.component.html',
    styleUrls: ['./auth-remember.component.scss'],
    standalone: true
})
export class AuthRememberComponent {
    readonly checked = output<boolean>();

    onChecked(value: boolean): void {
        this.checked.emit(value);
    }

}
