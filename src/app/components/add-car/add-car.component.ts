import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CarImage } from 'src/app/models/carImage';
import { imageUpload } from 'src/app/models/imageUpload';
import { FileuploadService } from 'src/app/services/fileupload.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  cars: Car[] = [];
  car!:Car;
  
  myForm = new FormGroup({
    
    CarID: new FormControl('', [Validators.required]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });

  carForm = new FormGroup({
    
    BrandID: new FormControl('', [Validators.required]),
    ColorID: new FormControl('', [Validators.required]),
    ModelYear: new FormControl('', [Validators.required]),
    DailyPrice: new FormControl(null, [Validators.required]),
    Description: new FormControl('', [Validators.required]),
    FuelType: new FormControl('', [Validators.required]),
    Kilometer: new FormControl(null, [Validators.required]),
    Transmission: new FormControl('', [Validators.required]),
    AirConditioning: new FormControl(false, [Validators.required]),
    EngineCapacity: new FormControl('', [Validators.required]),
    BodyStyle: new FormControl('', [Validators.required]),
    Navigation: new FormControl(false, [Validators.required]),
    MinDriverAge: new FormControl(21, [Validators.required]),
    MinDrivingLicence: new FormControl(3, [Validators.required]),
    DepositFee: new FormControl(null, [Validators.required]),
    CarModel: new FormControl('', [Validators.required]),
    CarRate: new FormControl(null, [Validators.required])
  });
  imageSrc: string = '';

  CarID=0;

  carImage:CarImage={ 
    imageId: 0,
    carId: this.CarID,
    imagePath: '',
    date: new Date(Date.now())
  }
  file!:FormData;
  
  
  constructor(private httpClient:HttpClient,private fileUploadService:FileuploadService, private carService: CarService,) { }

  ngOnInit(): void {this.getCars();

  
  }
  get f(){
    return this.myForm.controls;
  }
  
  /**
   * Write code on Method
   *
   * @return response()
   */
  onFileChange(event:any) {
  
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({
        fileSource: file
      });
    }
  } 
  
  /**
   * Write code on Method
   *
   * @return response()
   */
  submit(){
    const formData = new FormData();
    formData.append('file', this.myForm.get('fileSource')?.value);
    formData.append('CarID', this.myForm.get('CarID')?.value);
     
   let result= this.httpClient.post('https://localhost:44391/api/CarImages/add', formData)
      .subscribe(res => {
       
        console.log(res);
        alert('Uploaded Successfully.');
      })
      

  }
  submitCar(){ 
    // const formData = new FormData();
    // formData.append('BrandID', this.carForm.get('BrandID')?.value);
    // formData.append('ColorID', this.carForm.get('ColorID')?.value);
    // formData.append('ModelYear', this.carForm.get('ModelYear')?.value);
    // formData.append('DailyPrice', this.carForm.get('DailyPrice')?.value);
    // formData.append('Description', this.carForm.get('Description')?.value);
    // formData.append('FuelType', this.carForm.get('FuelType')?.value);
    // formData.append('Kilometer', this.carForm.get('Kilometer')?.value);
    // formData.append('Transmission', this.carForm.get('Transmission')?.value);
    // formData.append('AirConditioning', this.carForm.get('AirConditioning')?.value);
    // formData.append('EngineCapacity', this.carForm.get('EngineCapacity')?.value);
    // formData.append('BodyStyles', this.carForm.get('BodyStyles')?.value);
    // formData.append('Navigation', this.carForm.get('Navigation')?.value);
    // formData.append('MinDriverAge', this.carForm.get('MinDriverAge')?.value);
    // formData.append('MinDrivingLicence', this.carForm.get('MinDrivingLicence')?.value);
    // formData.append('DepositFee', this.carForm.get('DepositFee')?.value);
    // formData.append('CarModel', this.carForm.get('CarModel')?.value);
    // formData.append('CarRate', this.carForm.get('CarRate')?.value);

    this.car={
      carID:0,
      brandID:this.carForm.get('BrandID')?.value,
      colorID:this.carForm.get('ColorID')?.value,
      modelYear:this.carForm.get('ModelYear')?.value,
      dailyPrice:this.carForm.get('DailyPrice')?.value,
      description:this.carForm.get('Description')?.value,
      fuelType:this.carForm.get('FuelType')?.value,
      kilometer:this.carForm.get('Kilometer')?.value,
      transmission:this.carForm.get('Transmission')?.value,
      airConditioning:this.carForm.get('AirConditioning')?.value,
      engineCapacity:this.carForm.get('EngineCapacity')?.value,
      bodyStyles:this.carForm.get('BodyStyles')?.value,
      navigation:this.carForm.get('Navigation')?.value,
      minDriverAge:this.carForm.get('MinDriverAge')?.value,
      minDrivingLicence:this.carForm.get('MinDrivingLicence')?.value,
      depositFee:this.carForm.get('DepositFee')?.value,
      carModel:this.carForm.get('CarModel')?.value,
      carRate:this.carForm.get('CarRate')?.value
    
    }
    this.carService.AddCar(this.car).subscribe((response)=> {

      console.log(response.message+ " " + response.success)
    });
  
  }
 
  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
  
    });
  }
  

}
