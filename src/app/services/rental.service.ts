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
  apiUrl = 'https://aoprojectslive.xyz/api/rentals/';
 
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
  getRentalsByUserId(userId:string): Observable<ListResponseModel<Rental>> {
    let newPath=this.apiUrl+"getrentalsbyuserid?id="+userId
    return this.httpClient.get<ListResponseModel<Rental>>(
      
      newPath
    );
  }
  addRental(rental:Rental): Observable<ListResponseModel<Rental>>
  {
  
    let newPath=this.apiUrl+"add"
  
   return  this.httpClient.post<ListResponseModel<Rental>>(newPath,rental);;

  }
  checkRentalDate(rental:Rental): Observable<EntityResponseModel<Rental>>
  {
    let newPath=this.apiUrl+"checkrentaldate"
  
   
    return this.httpClient.post<EntityResponseModel<Rental>>(newPath,rental);
  }
  
rental:Rental={
  rentalID: 0,
  carID: 0,
  customerID: 0,
  billingPrice: 0,
  insuranceID: 0,
  rentDate: new Date(),
  returnDate: new Date()
};
  checkRentalByCarId(carId:number): Observable<ListResponseModel<Rental>>
  {
    let newPath=this.apiUrl+"checkrentalbycarid"
    
      this.rental.carID=carId;

     return this.httpClient.post<ListResponseModel<Rental>>(newPath,this.rental);
   
  }
}
