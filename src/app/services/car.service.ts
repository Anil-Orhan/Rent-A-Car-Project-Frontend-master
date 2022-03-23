import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetails } from '../models/cardetails';
import { SingleEntityResponseModel } from '../models/SingleEntityResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44391/api/';
  rentDays = 0;
  insurancePrice = 0;
  filterText = '';

  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'Cars/getall';
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsDetails(): Observable<ListResponseModel<CarDetails>> {
    let newPath = this.apiUrl + 'Cars/getdetails';
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }
  getCarDetails(
    carID: number
  ): Observable<SingleEntityResponseModel<CarDetails>> {
    let newPath = this.apiUrl + 'Cars/getdetail?carID=' + carID;
    return this.httpClient.get<SingleEntityResponseModel<CarDetails>>(newPath);
  }

  getCarsByBrand(brandID: number): Observable<ListResponseModel<CarDetails>> {
    let newPath = this.apiUrl + 'cars/getbybrand?brandID=' + brandID;
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }
  getCarsByColor(colorID: number): Observable<ListResponseModel<CarDetails>> {
    let newPath = this.apiUrl + 'cars/getbycolor?colorID=' + colorID;
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }

  getCarByID(carID: number): Observable<SingleEntityResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getbyid?id=' + carID;
    return this.httpClient.get<SingleEntityResponseModel<Car>>(newPath);
  }
  setRentDays(dayCount: number) {
    this.rentDays = dayCount;
  }
  setInsurancePrice(price: number) {
    console.log('ÖNCE' + this.insurancePrice);
    this.insurancePrice = price;
    console.log('SONRA' + this.insurancePrice);
  }
  getRentDays() {
    return this.rentDays;
  }
}
