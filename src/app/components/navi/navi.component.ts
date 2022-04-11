import { HtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css'],
})
export class NaviComponent implements OnInit {
  currentFilterText: string = '';
  constructor(
    private authService: AuthService,
    private toastrService: ToastrService,
    private userService: UserService,

  ) {}
  userFullName!: string;
  userGetCheck!: boolean;
  userId!:string;
  ngOnInit(): void {
    this.userFullName=<string>  localStorage.getItem("userfullname")
    this.userId=<string>localStorage.getItem("userId");

    
  }

  checkLogin() {
    let user = this.authService.getUser();
    return user;
  }

  logout() {
    this.authService.logout();
    this.userFullName = '';
  }

  tokencheck() {
    this.userGetCheck = true;
    let tokenTime = new Date(localStorage.getItem('expiration')!);
    let dateNow = new Date(Date.now());
    let tokenOffTime = Date.UTC(
      tokenTime.getFullYear(),
      tokenTime.getMonth(),
      tokenTime.getDay(),
      tokenTime.getHours(),
      tokenTime.getMinutes(),
      tokenTime.getSeconds()
    );

    let now = Date.UTC(
      dateNow.getFullYear(),
      dateNow.getMonth(),
      dateNow.getDay(),
      dateNow.getHours(),
      dateNow.getMinutes(),
      dateNow.getSeconds()
    );

    if (tokenTime.getFullYear() === 1970) {
    } 
    
    
    else if (tokenOffTime < now) {
      this.toastrService.info(
        'Oturumunuz Zaman Aşımına Uğradı. Lütfen tekrar giriş yapınız.'
      );
      localStorage.clear();
    }
    
    
    else {
    
        
      this.getUser()
      
     
     
    }
  }

  getUser(){ 

    
   this.userFullName=<string>  localStorage.getItem("userfullname")

   if (this.userFullName!=null||this.userFullName!=undefined||this.userFullName!='') {


    return true
     
   }
   else{return false}
    
}
getUserId(){ 

    
  this.userId=<string>  localStorage.getItem("userId")

  if (this.userId!=null||this.userId!=undefined||this.userId!='') {


   return true
    
  }
  else{return false}
   
}

}