import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  apiUrl = 'https://aoprojectslive.xyz/api/Brands/';

  constructor(private httpClient: HttpClient) {}

  getBrands(): Observable<ListResponseModel<Brand>> {
    let newPath=this.apiUrl+"getall";
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }



  updateBrand(brand:Brand): Observable<ListResponseModel<Brand>> {
    let newPath=this.apiUrl+"update";
    return this.httpClient.post<ListResponseModel<Brand>>(newPath,brand);
  }
  addBrand(brand:Brand): Observable<ListResponseModel<Brand>> {
    let newPath=this.apiUrl+"add";
    return this.httpClient.post<ListResponseModel<Brand>>(newPath,brand);
  }
}
