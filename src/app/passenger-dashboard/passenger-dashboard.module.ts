import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { PassengerDashboardComponent } from './passenger-dashboard.component';
import { PassengerCountComponent } from './passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './passenger-detail/passenger-detail.component';
import { PassengerDashboardService } from './passenger-dashboard.service';
import { PassengerViewerComponent } from './passenger-viewer/passenger-viewer.component';
import { PassengerFormComponent } from './passenger-form/passenger-form.component';

const routes: Routes = [
    {
        path: 'passengers',
        children: [
            { path: '', component: PassengerDashboardComponent },
            { path: ':id', component: PassengerViewerComponent }
        ]
    }
];

@NgModule({
    declarations: [],
    exports: [],
    imports: [CommonModule, BrowserModule, FormsModule, RouterModule.forChild(routes)],
    providers: [
        PassengerDashboardService,
        PassengerDashboardComponent,
        PassengerCountComponent,
        PassengerDetailComponent,
        PassengerViewerComponent,
        PassengerFormComponent,
        PassengerDashboardComponent,
        PassengerViewerComponent,
        provideHttpClient(withInterceptorsFromDi())
    ]
})
export class PassengerDashboardModule {}
