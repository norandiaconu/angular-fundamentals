import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { PassengerDashboardModule } from "./passenger-dashboard/passenger-dashboard.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Angular modules
    CommonModule,
    FormsModule,
    // Custom modules
    PassengerDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
