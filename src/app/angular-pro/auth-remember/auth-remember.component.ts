import { Component, output } from '@angular/core';

@Component({
    selector: 'auth-remember',
    templateUrl: './auth-remember.component.html',
    styleUrls: ['./auth-remember.component.scss']
})
export class AuthRememberComponent {
    public readonly checked = output<boolean>();

    protected onChecked(event: Event): void {
        const value = (event.target as HTMLInputElement).checked;
        this.checked.emit(value);
    }
}
