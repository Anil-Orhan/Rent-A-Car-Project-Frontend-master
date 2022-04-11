import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/rental';
import { RentalDetails } from 'src/app/models/rentaldetail';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rent-history',
  templateUrl: './rent-history.component.html',
  styleUrls: ['./rent-history.component.css']
})
export class RentHistoryComponent implements OnInit {

  constructor(private httpClient:HttpClient,private rentalService:RentalService) { }
rentals:Rental[]=[];
  ngOnInit(): void { this.getRentalsById()
  }

  getRentalsById()
  {
    let userId=localStorage.getItem("userId");
    this.rentalService.getRentalsByUserId(userId!).subscribe(response=>{


      this.rentals=response.data;
      console.log(this.rentals)
    })

    

  }

}
