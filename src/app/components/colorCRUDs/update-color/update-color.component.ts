import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-update-color',
  templateUrl: './update-color.component.html',
  styleUrls: ['./update-color.component.css']
})
export class UpdateColorComponent implements OnInit {

  colors: Color[] = [];

  colorUpdateForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,private toastrService:ToastrService,private colorService:ColorService) { }

  ngOnInit(): void {
    
    this.getColors()
    this.createColorSelectionForm();
  
  }

  getColors(){ this.colorService.getColors().subscribe((response)=>{

    this.colors=response.data;
  })}
  
  createColorAddForm()
  {

    this.colorUpdateForm=this.formBuilder.group({
      colorId:[this.selectedColor.colorID],
      colorName:[this.selectedColor.colorName,Validators.required]
    });

  }

  colorSelectionForm!:FormGroup;
  createColorSelectionForm()
  {
    this.colorSelectionForm=this.formBuilder.group({
       ColorID:new FormControl(null,[Validators.required]),
    });
   
    
  }
 
  selectedColor!:Color;
  colorIsSelected:boolean=false;

  colorId!:number;
  colorSelect()
  {
    
    
    this.colorId=this.colorSelectionForm.get('ColorID')!.value;
     this.selectedColor=Object.assign({},this.colors.find(p=>p.colorID==this.colorId))
     console.log(this.selectedColor)
     
     this.toastrService.show(""+this.selectedColor.colorName)
      this.colorIsSelected=true;     
      this.createColorAddForm()
  }

  updateColor()
  {
    if(this.colorUpdateForm.valid){
    this.selectedColor=Object.assign({},this.colorUpdateForm.value)

    this.colorService.updateColor(this.selectedColor).subscribe((response)=>{

      this.getColors()
      this.toastrService.success("Marka '"+this.selectedColor.colorName+"' olarak güncellendi!","Başarılı")
    });
    
    this.colorIsSelected=false;
   
    }
    else{this.toastrService.error("Marka adı boş bırakılamaz!","Uyarı")}
    

  }
  cancel(){this.colorIsSelected=false;}
}
