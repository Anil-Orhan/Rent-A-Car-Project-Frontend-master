import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EntityResponseModel } from '../models/entityResponseModel';
import { FindeksResultModel } from '../models/findeksResultModel';
import { ListResponseModel } from '../models/listResponseModel';
import { UserModel } from '../models/userModel';

@Injectable({
  providedIn: 'root'
})
export class FindeksService {

 
  apiUrl = 'https://aoprojectslive.xyz/api/Findeks/checkfindeks';
  constructor(private httpClient: HttpClient) {}

  getFindeksScore(UserModel:UserModel) {
    return this.httpClient.post<EntityResponseModel<number>>(this.apiUrl,UserModel);
  }
}
