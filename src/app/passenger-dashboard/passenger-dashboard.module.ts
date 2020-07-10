import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { PassengerDashboardComponent } from './passenger-dashboard.component';
import { PassengerCountComponent } from './passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './passenger-detail/passenger-detail.component';
import { PassengerDashboardService } from './passenger-dashboard.service';

export interface Passenger {
  id: number;
  fullName: string;
  checkedIn: boolean;
  checkedInDate: number | null;
  children: Child[] | null;
}
interface Child {
  name: string;
  age: number;
}

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [
    PassengerDashboardComponent
  ],
  providers: [
    PassengerDashboardService
  ]
})
export class PassengerDashboardModule { }
