import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { PassengerDashboardModule } from "./passenger-dashboard/passenger-dashboard.module";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { RxjsBasicsComponent } from './rxjs-basics/rxjs-basics.component';

const routes: Routes = [
  { path: "", redirectTo: "passengers", pathMatch: "full" },
  { path: "rxjs-basics", component: RxjsBasicsComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    RxjsBasicsComponent
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
