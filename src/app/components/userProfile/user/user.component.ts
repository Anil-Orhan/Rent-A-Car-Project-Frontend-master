import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/userModel';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService:UserService
    , private httpClient: HttpClient,
   
   
    private toastrService: ToastrService) { }



  user!:UserModel;
  userForm!:FormGroup;



  ngOnInit(): void { this.getUser(); 

   
  }

  createUserForm(){this.userForm= new FormGroup({
    UserID: new FormControl(this.user.userID, [Validators.required]),
    FirstName: new FormControl(this.user.firstName, [Validators.required]),
    LastName: new FormControl(this.user.lastName, [Validators.required]),
    Email: new FormControl(this.user.email, [Validators.required]),
    IdentificationNumber: new FormControl(this.user.identificationNumber, [Validators.required]),

  });}
  getUser(){

    let user=localStorage.getItem('userId');

    this.userService.getById(parseInt(user!)).subscribe(response=>{


      this.user=response.data;
      this.createUserForm(); 
      

    })


  }

}
