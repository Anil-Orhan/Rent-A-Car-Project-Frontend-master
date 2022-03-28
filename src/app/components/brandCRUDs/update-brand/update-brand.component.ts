import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-update-brand',
  templateUrl: './update-brand.component.html',
  styleUrls: ['./update-brand.component.css']
})
export class UpdateBrandComponent implements OnInit {
  brands: Brand[] = [];

  brandUpdateForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,private toastrService:ToastrService,private brandService:BrandService) { }

  ngOnInit(): void {
    
    this.getBrands()
    this.createBrandSelectionForm();
  
  }

  getBrands(){ this.brandService.getBrands().subscribe((response)=>{

    this.brands=response.data;
  })}
  
  createBrandAddForm()
  {

    this.brandUpdateForm=this.formBuilder.group({
      brandId:[this.selectedBrand.brandID],
      brandName:[this.selectedBrand.brandName,Validators.required]
    });

  }

  brandSelectionForm!:FormGroup;
  createBrandSelectionForm()
  {
    this.brandSelectionForm=this.formBuilder.group({
       BrandID:new FormControl(null,[Validators.required]),
    });
   
    
  }
 
  selectedBrand!:Brand;
  brandIsSelected:boolean=false;

  brandId!:number;
  brandSelect()
  {
    
    
    this.brandId=this.brandSelectionForm.get('BrandID')!.value;
     this.selectedBrand=Object.assign({},this.brands.find(p=>p.brandID==this.brandId))
     console.log(this.selectedBrand)
     
     this.toastrService.info(""+this.selectedBrand.brandName)
      this.brandIsSelected=true;     
      this.createBrandAddForm()
  }

  updateBrand()
  {
    if(this.brandUpdateForm.valid){
    this.selectedBrand=Object.assign({},this.brandUpdateForm.value)

    this.brandService.updateBrand(this.selectedBrand).subscribe((response)=>{

      this.getBrands()
      this.toastrService.success("Marka '"+this.selectedBrand.brandName+"' olarak güncellendi!","Başarılı")
    });
    
    this.brandIsSelected=false;
   
    }
    else{this.toastrService.error("Marka adı boş bırakılamaz!","Uyarı")}
    

  }
  cancel(){this.brandIsSelected=false;}
}
