import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,
     private authService:AuthService, private toastrService:ToastrService,private router:Router,private userService:UserService) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email: ["",Validators.required],
      password:["",Validators.required]
    })
  }

  login(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      let loginModel = Object.assign({},this.loginForm.value)
    
      this.authService.login(loginModel).subscribe(response=>{
        let time= new Date(response.data.expiration);
        this.authService.expirationTime=time;
        
        localStorage.setItem("token",response.data.token)
        localStorage.setItem("user",loginModel.email)
        localStorage.setItem("expiration",response.data.expiration)
        this.userService.getUsers().subscribe(response=>{
          let user=response.data.find(p=>p.email===loginModel.email);
          console.log(user)
          localStorage.setItem("userfullname",user?.firstName+" "+user?.lastName)
          localStorage.setItem("userId",user?.userID+"");
        
        })
       
          this.router.navigate([""])
          this.toastrService.success("Giriş Yapıldı","Başarılı")
       
       
      },responseError=>{
        //console.log(responseError)
        this.toastrService.error(responseError.error)
      })
    }
  }

  logout(){this.authService.logout();}
}
