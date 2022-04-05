import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css'],
})
export class NaviComponent implements OnInit {
  currentFilterText: string = '';
  constructor(private authService:AuthService) {}

  ngOnInit(): void {}

  checkLogin(){

    let user= this.authService.getUser();
    return user;
   
  }

  logout(){this.authService.logout()}

}
