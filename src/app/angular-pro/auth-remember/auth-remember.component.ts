import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'auth-remember',
    templateUrl: './auth-remember.component.html',
    styleUrls: ['./auth-remember.component.scss'],
    standalone: true
})
export class AuthRememberComponent {
    @Output() checked: EventEmitter<boolean> = new EventEmitter<boolean>();

    onChecked(value: boolean): void {
        this.checked.emit(value);
    }

}
