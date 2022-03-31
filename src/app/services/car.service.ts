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
  rentDate=new Date();
  returnDate=new Date();
  insurancePrice = 0;
  insuranceId = 0;
  filterText = '';
  minPrice=0;
  maxPrice=0;
  constructor(private httpClient: HttpClient) {}



  getCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'Cars/getall';
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsDetails(): Observable<ListResponseModel<CarDetails>> {
    let newPath = this.apiUrl + 'Cars/getdetails';
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }
  getCarsFilteredDetails(): Observable<ListResponseModel<CarDetails>> {
    let newPath = this.apiUrl + 'Cars/getfiltereddetails?minPrice='+this.minPrice+"&maxPrice="+this.maxPrice;
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
  setRentDays(dayCount: number,rentDate:Date,returnDate:Date) {
    this.rentDays = dayCount;
    this.rentDate=rentDate;
    this.returnDate=returnDate;
  }
  setInsurancePrice(price: number,id:number) {

    
    if(id===null|| id===undefined || id===0){id=1003;}
    
    this.insurancePrice = price;
    this.insuranceId=id;

  }
  getRentDays() {
    return this.rentDays;
  }

    AddCar(Car:Car):Observable<ListResponseModel<Car>> {
      let newPath = this.apiUrl + 'cars/add';
      return this.httpClient.post<ListResponseModel<Car>>(newPath,Car);
    }
    UpdateCar(Car:Car):Observable<ListResponseModel<Car>>{

      let newPath=this.apiUrl+"cars/update";
      return this.httpClient.post<ListResponseModel<Car>>(newPath,Car);
    }
  

    PriceFilter(minPrice:number,maxPrice:number)
    {
      
      this.minPrice=minPrice;
      this.maxPrice=maxPrice;
    

    }
}
