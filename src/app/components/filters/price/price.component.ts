import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,FormControl, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  priceFilterForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,private toastrService:ToastrService,private carService:CarService) { }

  ngOnInit(): void {this.createPriceForm();
    
  }

  createPriceForm(){

    this.priceFilterForm=this.formBuilder.group({

      minPrice:[0,Validators.required],
      maxPrice:[2500,Validators.required]

    });
  }

 min:number=0;
 max:number=2500;


 updatePrice()
 { this.min=this.priceFilterForm.get("minPrice")?.value;
 this.max=this.priceFilterForm.get("maxPrice")?.value; }
  Submit()
  {
  

    
     this.carService.PriceFilter(this.min,this.max);
   
   

  }

}
