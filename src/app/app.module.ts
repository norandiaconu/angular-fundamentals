import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { PassengerDashboardModule } from "./passenger-dashboard/passenger-dashboard.module";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { PassengerDashboardComponent } from './passenger-dashboard/passenger-dashboard.component';
import { PassengerViewerComponent } from './passenger-dashboard/passenger-viewer/passenger-viewer.component';

const routes: Routes = [
  { path: "passenger-dashboard", component: PassengerDashboardComponent },
  { path: "passenger-viewer", component: PassengerViewerComponent },
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    // Angular modules
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes),
    // Custom modules
    PassengerDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
