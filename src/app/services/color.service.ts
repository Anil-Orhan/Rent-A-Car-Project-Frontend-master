import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';
import { Color } from '../models/color';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  apiUrl = 'https://localhost:44391/api/Colors/';

  constructor(private httpClient: HttpClient) {}

  getColors(): Observable<ListResponseModel<Color>> {
    let newPath=this.apiUrl+"getall";
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }
  addColor(color:Color): Observable<ListResponseModel<Color>> {
    let newPath=this.apiUrl+"add";
    return this.httpClient.post<ListResponseModel<Color>>(newPath,color);
  }

  updateColor(color:Color): Observable<ListResponseModel<Color>> {
    let newPath=this.apiUrl+"update";
    return this.httpClient.post<ListResponseModel<Color>>(newPath,color);
  }
}
