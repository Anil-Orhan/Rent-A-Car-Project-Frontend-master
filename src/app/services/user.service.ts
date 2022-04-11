import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EntityResponseModel } from '../models/entityResponseModel';
import { ListResponseModel } from '../models/listResponseModel';
import{UserModel} from '../models/userModel';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://aoprojectslive.xyz/api/Users/';
 private activeUser!:UserModel;

  constructor(private httpClient: HttpClient) {}

  getUsers(){

    let newPath=this.apiUrl+"getall"
    return this.httpClient.get<ListResponseModel<UserModel>>(newPath);
  }
  getUserByMail(userMail:string){

    let newPath=this.apiUrl+"getbymail"

    
    // this.getUsers().subscribe(response=>{this.activeUser=<UserModel>response.data.find(P=>P.email===userMail); });

    
    return this.httpClient.post<string>(newPath,userMail);
  }
  getById(userID:number)
  
  {
    console.log("USER ID"+userID)

    let newPath=this.apiUrl+"getbyid?id="+userID;

    return this.httpClient.get<EntityResponseModel<UserModel>>(newPath);
  }
}
