import { Injectable, isDevMode } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Passenger } from "./passenger";

var path = "";

@Injectable({
  providedIn: "root",
})
export class PassengerDashboardService {
  constructor(private httpClient: HttpClient) {
    if (isDevMode()) {
      path = "http://localhost:3000/passengers";
    } else {
      path =
        "https://my-json-server.typicode.com/norandiaconu/angular-fundamentals/passengers";
    }
  }

  getPassengers(): Observable<Passenger[]> {
    return this.httpClient.get<Passenger[]>(path);
  }

  getPassenger(id: number): Observable<Passenger> {
    return this.httpClient.get<Passenger>(path + "/" + id);
  }

  getPassengerPromise(): Promise<Passenger> {
    return this.httpClient.get<Passenger>(path + "/1").toPromise();
  }

  updatePassenger(passenger: Passenger): Observable<Passenger> {
    return this.httpClient.put<Passenger>(path + "/" + passenger.id, passenger);
  }

  deletePassenger(passenger: Passenger): Observable<Passenger> {
    return this.httpClient.delete<Passenger>(path + "/" + passenger.id);
  }
}
