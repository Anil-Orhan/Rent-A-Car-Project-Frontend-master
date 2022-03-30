import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetails } from 'src/app/models/cardetails';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarImage } from 'src/app/models/carImage';

import { CarService } from 'src/app/services/car.service';

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

  dataLoaded: boolean = false;

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private carImageService: CarImageService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandID']) {
        this.getCarsByBrand(params['brandID']);
        this.getCars();

      } else if (params['colorID']) {
        this.getCarsByColor(params['colorID']);
        this.getCars();
      } else {
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
