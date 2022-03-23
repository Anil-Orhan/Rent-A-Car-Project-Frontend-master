import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';
import { Insurance } from '../models/insurance';

@Injectable({
  providedIn: 'root',
})
export class InsuranceService {
  apiUrl = 'https://localhost:44391/api/Insurances/getall';
  constructor(private httpClient: HttpClient) {}

  getInsurance(): Observable<ListResponseModel<Insurance>> {
    return this.httpClient.get<ListResponseModel<Insurance>>(this.apiUrl);
  }
}
