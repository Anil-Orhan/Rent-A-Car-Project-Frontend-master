import { Component, Input, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css']
})

export class UpdateCarComponent implements OnInit {

  carUpdateForm!:FormGroup;
  carSelectionForm!:FormGroup;
  cars: Car[] = [];
  selectedCar!:Car;
  carIsSelected:boolean=false;
  
  constructor(private  formBuilder:FormBuilder,private carService:CarService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    
    
    this.getCarList();
    
    this.createCarSelectionForm();
    

    
  }

  createUpdateCarForm()
  {

    this.carUpdateForm = this.formBuilder.group({
      CarID:new FormControl(this.selectedCar.carID,[Validators.required]),
      BrandID: new FormControl(this.selectedCar.brandID, [Validators.required]),
      ColorID: new FormControl(this.selectedCar.colorID, [Validators.required]),
      ModelYear: new FormControl(this.selectedCar.modelYear, [Validators.required]),
      DailyPrice: new FormControl(this.selectedCar.dailyPrice, [Validators.required]),
      Description: new FormControl(this.selectedCar.description, [Validators.required]),
      FuelType: new FormControl(this.selectedCar.fuelType, [Validators.required]),
      Kilometer: new FormControl(this.selectedCar.kilometer, [Validators.required]),
      Transmission: new FormControl(this.selectedCar.transmission, [Validators.required]),
      AirConditioning: new FormControl(this.selectedCar.airConditioning, [Validators.required]),
      EngineCapacity: new FormControl(this.selectedCar.engineCapacity, [Validators.required]),
      BodyStyle: new FormControl(this.selectedCar.bodyStyles, [Validators.required]),
      Navigation: new FormControl(this.selectedCar.navigation, [Validators.required]),
      MinDriverAge: new FormControl(this.selectedCar.minDriverAge, [Validators.required]),
      MinDrivingLicence: new FormControl(this.selectedCar.minDrivingLicence, [Validators.required]),
      DepositFee: new FormControl(this.selectedCar.depositFee, [Validators.required]),
      CarModel: new FormControl(this.selectedCar.carModel, [Validators.required]),
      CarRate: new FormControl(this.selectedCar.carRate, [Validators.required]),
    });
    

  }
   createCarSelectionForm()
  {
    this.carSelectionForm=this.formBuilder.group({
       CarID:new FormControl(null,[Validators.required]),
    });
    
  }
  getCarList()
  {

    this.carService.getCars().subscribe((response=>{
      this.cars=response.data
    }));
  }
  Submit()
  {
    this.carService.UpdateCar(Object.assign({},this.carUpdateForm.value)).subscribe((response)=>{

      this.toastrService.success(response.message,"Başarılı");
      this.toastrService.info("Değişikliklerin yansıması için sayfayı yenilemeniz gerekmektedir.","Uyarı")

    },(errorResponse)=>{

      this.toastrService.error(errorResponse.message,"Hata")
    })
    

  }

  carId!:number;
  carSelect()
  {
    console.log(this.cars)
   
    this.carId=this.carSelectionForm.get('CarID')!.value;
     this.selectedCar=Object.assign({},this.cars.find(p=>p.carID==this.carId))
     console.log(this.selectedCar)
     
     this.toastrService.info(""+this.selectedCar.carModel)
      this.carIsSelected=true;

     
    this.test();

     
  }
  test(){this.createUpdateCarForm();}


  Cancel(){ this.carIsSelected=false}
}
