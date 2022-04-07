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
  ngOnInit(): void {
    this.userFullName=<string>  localStorage.getItem("userfullname")
    
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
          // this.userService.getUsers().subscribe(response=>{
          //   let user=response.data.find(p=>p.email===localStorage.getItem("user"));
          //   console.log(user)
          //   this.userFullName =<string>user?.firstName;
           
            
          
          
          
          // })

    
              

}

}