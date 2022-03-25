import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/rental';
import { PayService } from 'src/app/services/pay.service';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterLink, RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { delay } from 'rxjs';
import { NgbNavLink } from '@ng-bootstrap/ng-bootstrap';
import { RentalService } from 'src/app/services/rental.service';
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
    private router: Router,
    private rentalService: RentalService
  ) {}

  ngOnInit(): void
   {this.rental=this.payService.activeRental
    console.log("Pay Component ngOnInıt:  rental -->"+ this.rental.RentDate)
  
    console.log(this.rental)
  }

   Pay() {
     try {
       let result =  this.payService.Pay().subscribe((response) => {
      this.currentRent = response.data;
       if(response.success){
       
        this.dataLoad=true;
        setTimeout(()=>
        {
        this.toastrService.success(response.message); 
         this.rentalService.addRental(this.rental).subscribe((responseRental)=>{

            alert("Rental Eklendi")

         });
         
            this.router.navigate(['/pay-result']);
          
         
          
        
        },2000)
      }
        

    });
       
     } 
     catch (error) {this.toastrService.error("Bir Hata Meydana Geldi"); 
       
     }
    
      
    
    
  }
 
  
  

}
