import { enableProdMode, importProvidersFrom } from '@angular/core';
import { environment } from './environments/environment';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { provideRouter, Routes } from '@angular/router';
import { PassengerDashboardModule } from './app/passenger-dashboard/passenger-dashboard.module';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';

const routes: Routes = [
    { path: '', redirectTo: 'passengers', pathMatch: 'full' },
    { path: 'rxjs-basics', loadComponent: () => import('./app/rxjs-basics/rxjs-basics.component').then((m) => m.RxjsBasicsComponent) },
    {
        path: 'rxjs-projects',
        loadComponent: () => import('./app/rxjs-projects/rxjs-projects.component').then((m) => m.RxjsProjectsComponent)
    },
    {
        path: 'typescript-basics',
        loadComponent: () => import('./app/typescript-basics/typescript-basics.component').then((m) => m.TypescriptBasicsComponent)
    },
    { path: 'angular-pro', loadComponent: () => import('./app/angular-pro/angular-pro.component').then((m) => m.AngularProComponent) },
    { path: '**', loadComponent: () => import('./app/not-found/not-found.component').then((m) => m.NotFoundComponent) }
];

if (environment.production) {
    enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(
            // Angular modules
            CommonModule,
            FormsModule,
            // Custom modules
            PassengerDashboardModule
        ),
        provideRouter(routes)
    ]
}).catch((err) => console.error(err));
