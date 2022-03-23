import { getLocaleDayPeriods } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from 'src/app/models/carImage';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarImageService {
  ApiUrl: string = 'https://localhost:44391/api/CarImages/';
  constructor(private httpClient: HttpClient) {}

  getCarImageByCarId(carId: number): Observable<ListResponseModel<CarImage>> {
    let newApiUrl = this.ApiUrl + 'getbycarid?carId=' + carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newApiUrl);
  }
  getCarImageAll(): Observable<ListResponseModel<CarImage>> {
    let newApiUrl = this.ApiUrl + 'getall';
    return this.httpClient.get<ListResponseModel<CarImage>>(newApiUrl);
  }

}
