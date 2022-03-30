import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-add-color',
  templateUrl: './add-color.component.html',
  styleUrls: ['./add-color.component.css']
})
export class AddColorComponent implements OnInit {

  colorAddForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,private toastrService:ToastrService,private colorService:ColorService) { }

  ngOnInit(): void { this.createColorAddForm()
  }

  createColorAddForm()
  {

    this.colorAddForm=this.formBuilder.group({
      colorName:["",Validators.required]
    });

  }


  add(){

    if(this.colorAddForm.valid){
    let ColorModel= Object.assign({},this.colorAddForm.value); 

    this.colorService.addColor(ColorModel).subscribe((response)=>{

      this.toastrService.success(ColorModel.colorName+" Eklendi !","Başarılı")
    })
    
    }

  }

}