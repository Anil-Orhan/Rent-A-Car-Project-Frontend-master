import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Pay } from '../models/pay';
import { Rental } from '../models/rental';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class PayService {
  activeRental: Rental={rentalID:0,carID:0,billingPrice:0,customerID:0,rentDate:new Date(Date.now()),returnDate:new Date(Date.now()),insuranceID:0 }
  constructor(private httpClient: HttpClient) {}
  apiUrl: string = 'https://aoprojectslive.xyz/api/Pays/pay';
  result: ResponseModel = { message: '', success: false };

  


  Pay(): Observable<ListResponseModel<Rental>> {
    return this.httpClient.post<ListResponseModel<Rental>>(
      this.apiUrl,
      this.activeRental
    );
    
  }
  setActiveRental(rental:Rental)
  {this.activeRental=rental}
}
