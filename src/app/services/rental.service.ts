import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';
import { Rental } from '../models/rental';
import { RentalDetails } from '../models/rentaldetail';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl = 'https://localhost:44391/api/Rentals/getall';
  apiRentalDetailsUrl = 'https://localhost:44391/api/Rentals/getrentaldetails';
  constructor(private httpClient: HttpClient) {}

  getRentals(): Observable<ListResponseModel<Rental>> {
    return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl);
  }
  getRentalDetails(): Observable<ListResponseModel<RentalDetails>> {
    return this.httpClient.get<ListResponseModel<RentalDetails>>(
      this.apiRentalDetailsUrl
    );
  }
  addRental() {}
}
