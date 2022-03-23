import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/rental';
import { PayService } from 'src/app/services/pay.service';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterLink, RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { delay } from 'rxjs';
import { NgbNavLink } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css'],
})
export class PayComponent implements OnInit {
  result: string = '';
  currentRent: Rental[] = [];
  rental!:Rental;
  dataLoad=false;

  constructor(
    private payService: PayService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {this.rental=this.payService.activeRental}

   Pay() {
     try {
       let result =  this.payService.Pay().subscribe((response) => {
      this.currentRent = response.data;
       
       console.log("if çalıştı PAY")
        this.dataLoad=true;
        setTimeout(()=>
        {
        this.toastrService.success(response.message); 
            this.router.navigate(['/pay-result']);
            console.log("if çalıştı set time out")
         
          
        
        },2000)
         
        

    });
       
     } 
     catch (error) {this.toastrService.error("Bir Hata Meydana Geldi"); 
       
     }
    
      
    
    
  }
  
  
  

}
