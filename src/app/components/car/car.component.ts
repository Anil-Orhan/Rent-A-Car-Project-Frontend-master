import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetails } from 'src/app/models/cardetails';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarImage } from 'src/app/models/carImage';

import { CarService } from 'src/app/services/car.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  carList: Car[] = [];
  carDetails: CarDetails[] = [];
  carImages: CarImage[] = [];
  currentImage: CarImage = {
    imageId: 0,
    carId: 0,
    imagePath: '',
    date: new Date(2017, 4, 4, 17, 23, 42, 11),
  };
  filter!:{min:number,max:number};
  min:number=0;
  max:number=32000;

  dataLoaded: boolean = false;

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private carImageService: CarImageService,
    private toastrService:ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      
      
      this.min=this.carService.minPrice;
      this.max=this.carService.maxPrice;
      if (params['brandID']) {
        this.getCarsByBrand(params['brandID']);
        this.getCars();

      } else if (params['colorID']) {
        this.getCarsByColor(params['colorID']);
        this.getCars();
      }
     else if(this.min>0||this.max>0){

     
      this.getCars()
      this.getCarsFilter();
      

     }
      
      
      else {
        this.getCarsDetails();
        this.getCars();
        
       
      }
    });
    this.getCarImageAll();
  }
  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.carList = response.data;
      this.dataLoaded = true;
    });
  }
  getCarsFilter() {
    this.carService.getCarsFilteredDetails().subscribe((response)=>{

      this.carDetails=response.data;
      
      if(response.data.length>0){
      this.toastrService.success("Filtrenize uygun "+response.data.length+" araç getirildi!","Başarılı");
      this.carService.minPrice=0;
      this.carService.maxPrice=0;
    }
    else{this.toastrService.error("Filtrenize uygun araç bulunamadı.","Başarısız")}
    
    })
  

    
  

  }
  getCarDetailsFilter(){  this.carService.getCarsDetails().subscribe((response)=>{
    this.carDetails=response.data.filter(p=>p.dailyPrice>=this.min&&p.dailyPrice<=this.max);
    this.dataLoaded = true;
  });}
  getCarsDetails() {
    this.carService.getCarsDetails().subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByBrand(brandID: number) {
    this.carService.getCarsByBrand(brandID).subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }
  getCarsByColor(colorID: number) {
    this.carService.getCarsByColor(colorID).subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }

  getCarImageAll() {
    this.carImageService.getCarImageAll().subscribe((response) => {
      this.carImages = response.data;
    });
  }
  getCarImageByCarId(carId: number) {
    this.carImageService.getCarImageByCarId(carId).subscribe((response) => {
      this.carImages = response.data;
      let result = response.data.find((p) => p.carId == carId);
      console.log(result);
    });
  }
  getCarImageByCarId2(carId: number) {
    this.carImageService.getCarImageByCarId(carId).subscribe((response) => {
      this.carImages = response.data;
      let result = response.data.find((p) => p.carId == carId);
      this.currentImage = result!;
    });
  }

  getImageSource(carId: number) {
    let url: string =
      'https://localhost:44391/Uploads/Images/' +
      this.carImages.find((p) => p.carId == carId)!.imagePath;

    return url;
  }

  carGetter(cars:CarDetails):Car{
    return this.carList.find(p=>p.carID==cars.carID)!;
  }
}
