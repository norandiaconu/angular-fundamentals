import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  numberOne: number = 1;
  numberTwo: number = 2;
  isHappy: boolean = true;
  logo: string = 'assets/logo.svg';
  name: string = '';

  handleInput(event: any) {
    this.title = event.target.value;
  }
  handleBlur(event: any) {
    this.title = event.target.value;
    console.log(event);
  }
  handleClick() {
    this.title = 'Angular';
  }
  handleChange(value: string) {
    this.title = value;
    console.log(value);
  }
  handleNameChange(value: string) {
    this.name = value;
  }
  constructor() {
    this.title = 'Ultimate Angular';
  }
}
