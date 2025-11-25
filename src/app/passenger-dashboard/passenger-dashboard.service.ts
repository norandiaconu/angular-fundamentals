import { Injectable, isDevMode, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Passenger } from './passenger';

let path = '';

@Injectable({
    providedIn: 'root'
})
export class PassengerDashboardService {
    private readonly httpClient = inject(HttpClient);

    constructor() {
        if (isDevMode()) {
            path = 'http://localhost:3000/passengers';
        } else {
            path = 'https://my-json-server.typicode.com/norandiaconu/angular-fundamentals/passengers';
        }
    }

    public getPassengers(): Observable<Passenger[]> {
        return this.httpClient.get<Passenger[]>(path);
    }

    public getPassenger(id: number): Observable<Passenger> {
        return this.httpClient.get<Passenger>(path + '/' + id);
    }

    public getPassengerPromise(): Promise<Passenger> {
        return this.httpClient.get<Passenger>(path + '/1').toPromise();
    }

    public updatePassenger(passenger: Passenger): Observable<Passenger> {
        return this.httpClient.put<Passenger>(path + '/' + passenger.id, passenger);
    }

    public deletePassenger(passenger: Passenger): Observable<Passenger> {
        return this.httpClient.delete<Passenger>(path + '/' + passenger.id);
    }
}
