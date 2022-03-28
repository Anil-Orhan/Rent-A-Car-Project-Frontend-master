import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-list-brands',
  templateUrl: './list-brands.component.html',
  styleUrls: ['./list-brands.component.css']
})
export class ListBrandsComponent implements OnInit {

  constructor(private brandService:BrandService) { }

  ngOnInit(): void {this.getBrands()
  }

  brands:Brand[]=[]
  getBrands(){

    this.brandService.getBrands().subscribe((response)=>{

      this.brands=response.data;

    })
  }


}
