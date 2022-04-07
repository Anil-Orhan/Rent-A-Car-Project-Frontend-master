import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { EntityResponseModel } from '../models/entityResponseModel';
import { TokenModel } from '../models/tokenModel';
import { RegisterModel } from '../models/registerModel';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  expirationTime!:Date;
  apiUrl = 'https://aoprojectslive.xyz/api/Auth/';
  constructor(private httpClient:HttpClient,private toastrService:ToastrService) { }

  login(loginModel:LoginModel){
    return this.httpClient.post<EntityResponseModel<TokenModel>>(this.apiUrl+"login",loginModel)
  }
  logout(){localStorage.clear(); this.toastrService.show("Çıkış Yapıldı") }

  register(registerModel:RegisterModel){
    return this.httpClient.post<EntityResponseModel<TokenModel>>(this.apiUrl+"register",registerModel)
  }

  getUser(){
    if(localStorage.getItem("user")){
      return localStorage.getItem("user");
     
    }
    else{
      return false;
     
    }


  }

  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
 
    }
    else{
      return false;
     
    }
  }



}