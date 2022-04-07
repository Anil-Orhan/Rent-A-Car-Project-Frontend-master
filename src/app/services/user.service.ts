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
  getUserByMail(email:string){

    let newPath=this.apiUrl+"getbymail"
    console.log("GET USER BY MAIL")
    
    this.getUsers().subscribe(response=>{this.activeUser!=response.data.find(P=>P.email===email); console.log(this.activeUser)});
    return this.activeUser
  }
}
