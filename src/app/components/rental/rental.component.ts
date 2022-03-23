import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/rental';
import { RentalDetails } from 'src/app/models/rentaldetail';

import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css'],
})
export class RentalComponent implements OnInit {
  rentals: Rental[] = [];
  rentalDetails: RentalDetails[] = [];

  dataLoaded: boolean = false;
  constructor(private RentalService: RentalService) {}

  ngOnInit(): void {
    this.getRentals();
    this.getRentalDetails();
  }

  getRentals() {
    this.RentalService.getRentals().subscribe((response) => {
      this.rentals = response.data;
      this.dataLoaded = true;
    });
  }
  getRentalDetails() {
    this.RentalService.getRentalDetails().subscribe((response) => {
      this.rentalDetails = response.data;
      this.dataLoaded = true;
    });
  }
}
