import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent implements OnInit {

  brandAddForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,private toastrService:ToastrService,private brandService:BrandService) { }

  ngOnInit(): void { this.createBrandAddForm()
  }

  createBrandAddForm()
  {

    this.brandAddForm=this.formBuilder.group({
      brandName:["",Validators.required]
    });

  }


  add(){

    if(this.brandAddForm.valid){
    let BrandModel= Object.assign({},this.brandAddForm.value); 

    this.brandService.addBrand(BrandModel).subscribe((response)=>{

      this.toastrService.success(BrandModel.brandName+" Eklendi !","Başarılı")
    })
    
    }

  }

}
