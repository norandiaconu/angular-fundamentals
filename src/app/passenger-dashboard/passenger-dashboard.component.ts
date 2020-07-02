import { Component, OnInit } from '@angular/core';

interface Passenger {
  id: number,
  fullName: string,
  checkedIn: boolean,
  checkedInDate: number | null,
  children: Child[] | null
}
interface Child {
  name: string,
  age: number
}

@Component({
  selector: 'passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.css']
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[] = [{
    id: 1,
    fullName: 'Stephen',
    checkedIn: true,
    checkedInDate: 149074200000,
    children: null
  }, {
    id: 2,
    fullName: 'Rose',
    checkedIn: false,
    checkedInDate: null,
    children: [{ name: 'Ted', age: 12 },{ name: 'Chloe', age: 7 }]
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
