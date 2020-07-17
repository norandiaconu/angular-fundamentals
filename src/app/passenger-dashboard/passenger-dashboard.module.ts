import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { PassengerDashboardComponent } from "./passenger-dashboard.component";
import { PassengerCountComponent } from "./passenger-count/passenger-count.component";
import { PassengerDetailComponent } from "./passenger-detail/passenger-detail.component";
import { PassengerDashboardService } from "./passenger-dashboard.service";
import { PassengerViewerComponent } from "./passenger-viewer/passenger-viewer.component";
import { PassengerFormComponent } from "./passenger-form/passenger-form.component";


@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent,
    PassengerViewerComponent,
    PassengerFormComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    PassengerDashboardComponent,
    PassengerViewerComponent
  ],
  providers: [
    PassengerDashboardService
  ]
})
export class PassengerDashboardModule { }
