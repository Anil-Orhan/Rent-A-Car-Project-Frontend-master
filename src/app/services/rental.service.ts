import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';
import { Rental } from '../models/rental';
import { RentalDetails } from '../models/rentaldetail';
import { EntityResponseModel } from '../models/entityResponseModel';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl = 'https://localhost:44391/api/Rentals/';
 
  constructor(private httpClient: HttpClient) {}

  getRentals(): Observable<ListResponseModel<Rental>> {
    let newPath=this.apiUrl+"getall"
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }
  getRentalDetails(): Observable<ListResponseModel<RentalDetails>> {
    let newPath=this.apiUrl+"getrentaldetails"
    return this.httpClient.get<ListResponseModel<RentalDetails>>(
      
      newPath
    );
  }
  addRental(rental:Rental): Observable<ListResponseModel<Rental>>
  {
  
    let newPath=this.apiUrl+"add"
    return this.httpClient.post<ListResponseModel<Rental>>(newPath,rental);

  }
  checkRentalDate(rental:Rental): Observable<EntityResponseModel<Rental>>
  {
    let newPath=this.apiUrl+"checkrentaldate"
  
   
    return this.httpClient.post<EntityResponseModel<Rental>>(newPath,rental);
  }
}
