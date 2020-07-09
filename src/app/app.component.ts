import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  numberOne = 1;
  numberTwo = 2;
  isHappy = true;
  logo = 'assets/logo.svg';
  name = '';

  handleInput(event: any): void {
    this.title = event.target.value;
  }
  handleBlur(event: any): void {
    this.title = event.target.value;
    console.log(event);
  }
  handleClick(): void {
    this.title = 'Angular';
  }
  handleChange(value: string): void {
    this.title = value;
    console.log(value);
  }
  handleNameChange(value: string): void {
    this.name = value;
  }
  constructor() {
    this.title = 'Ultimate Angular';
  }
}
