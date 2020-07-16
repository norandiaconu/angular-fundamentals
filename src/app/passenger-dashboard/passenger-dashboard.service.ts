import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Passenger } from './passenger-dashboard.module';

const path  = 'http://localhost:3000/passengers';

@Injectable({
  providedIn: 'root'
})
export class PassengerDashboardService {

  getPassengers(): Observable<Passenger[]> {
    return this.httpClient.get<Passenger[]>(path);
  }

  getPassenger(): Observable<Passenger> {
    return this.httpClient.get<Passenger>(path + '/1');
  }

  getPassengerPromise(): Promise<Passenger> {
    return this.httpClient.get<Passenger>(path + '/1').toPromise();
  }

  updatePassenger(passenger: Passenger): Observable<Passenger> {
    return this.httpClient.put<Passenger>(path + '/' + passenger.id, passenger);
  }

  deletePassenger(passenger: Passenger): Observable<Passenger> {
    return this.httpClient.delete<Passenger>(path + '/' + passenger.id);
  }

  constructor(private httpClient: HttpClient) { }
}
