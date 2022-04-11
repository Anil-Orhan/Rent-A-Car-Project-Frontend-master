import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CarImage } from 'src/app/models/carImage';
import { imageUpload } from 'src/app/models/imageUpload';
import { FileuploadService } from 'src/app/services/fileupload.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css'],
})
export class AddCarComponent implements OnInit {
  cars: Car[] = [];
  car!: Car;

  myForm = new FormGroup({
    CarID: new FormControl(null, [Validators.required]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required]),
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
    MinDriverAge: new FormControl('', [Validators.required]),
    MinDrivingLicence: new FormControl('', [Validators.required]),
    DepositFee: new FormControl(null, [Validators.required]),
    CarModel: new FormControl('', [Validators.required]),
    CarRate: new FormControl(null, [Validators.required]),
    CreditScore: new FormControl(null,[Validators.required])
  });
  imageSrc: string = '';

  CarID = 0;

  carImage: CarImage = {
    imageId: 0,
    carId: this.CarID,
    imagePath: '',
    date: new Date(Date.now()),
  };
  file!: FormData;

  constructor(
    private httpClient: HttpClient,
    private fileUploadService: FileuploadService,
    private carService: CarService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getCars();
  }
  get f() {
    return this.myForm.controls;
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({
        fileSource: file,
      });
    }
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  submit() {
    const formData = new FormData();
    formData.append('file', this.myForm.get('fileSource')?.value);
    formData.append('CarID', this.myForm.get('CarID')?.value);

    if (this.myForm.valid) {
      let result = this.httpClient
        .post('https://aoprojectslive.xyz/api/CarImages/add', formData)
        .subscribe((res) => {
          console.log(res);
          alert('Uploaded Successfully.');
        });
    }
  }
  submitCar() {
    if (this.carForm.valid) {
      let carModel=Object.assign({},this.carForm.value);
      this.carService.AddCar(carModel).subscribe(
        (response) => {
          this.toastrService.success(response.message,"Başarılı");
        },
        (responseError) => {
          if (responseError.error.message != null) {
            this.toastrService.error(
              responseError.error.message,
              'Doğrulama Hatası 1' 
            );
          }
          if (responseError.error.Errors.length > 0) 
          {
            for (let i = 0; i < responseError.error.Errors.length; i++) {
              if(responseError.error.Errors[i].ErrorMessage!=null){
              this.toastrService.error(
                responseError.error.Errors[i].ErrorMessage,
                'Doğrulama Hatası 2'
              );
            }
            }
            
          }
        }
      );
    }
    else{
      this.toastrService.error('Formunuz eksik veya hatalı', 'Dikkat');
    }
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
    });
  }
}
