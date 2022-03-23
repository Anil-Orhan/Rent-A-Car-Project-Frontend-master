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
  
  myForm = new FormGroup({
    
    CarID: new FormControl('', [Validators.required]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
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
 
  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
  
    });
  }
  

}
