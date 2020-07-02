import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PassengerDashboardComponent } from './passenger-dashboard/passenger-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    PassengerDashboardComponent
  ],
  imports: [
    //Angular modules
    BrowserModule,
    CommonModule,
    FormsModule
    //Custom modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
