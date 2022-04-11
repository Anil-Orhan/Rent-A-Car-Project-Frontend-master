import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { Rental } from 'src/app/models/rental';
import { CarImageService } from 'src/app/services/car-image.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-carimage',
  templateUrl: './carimage.component.html',
  styleUrls: ['./carimage.component.css'],
})
export class CarimageComponent implements OnInit {
  carImages: CarImage[] = [];
  car: Car = {
    carID: 2,
    brandID: 0,
    colorID: 0,
    modelYear: '2020',
    dailyPrice: 200,
    description: 'default',
    carModel: 'Default Model',
    fuelType: 'default',
    kilometer: 0,
    transmission: 'default',
    airConditioning: false,
    engineCapacity: 0,
    bodyStyles: 'default',
    navigation: false,
    minDriverAge: 0,
    minDrivingLicence: 0,
    depositFee: 0,
    carRate: 0,
    creditScore:0
  };
  rentDate: Date = new Date();
  returnDate: Date | undefined;
  carId: number = 0;
  rememberCard: boolean | undefined;
  // creditCart: CreditCart = {
  //   id: 0,
  //   customerId: 1,
  //   fullName: '',
  //   cartNumber: '',
  //   expirationMounth: 0,
  //   expirationYear: 0,
  //   cvv: 0,
  // };
  rental: Rental | undefined;
  isAuthenticated: boolean | undefined;
  constructor(
    private carImageService: CarImageService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getCarImageByCarId(params['carId']);
      console.log('carImageComponent ngOnInit Çalıştı');
    });
  }
  getCarImageByCarId(carId: number) {
    this.carImageService.getCarImageByCarId(carId).subscribe((response) => {
      this.carImages = response.data;

      console.log('getCarImage Çalıştı');
    });
  }

  getImageSource(carImage: CarImage): string {
    let url: string =
      'https://aoprojectslive.xyz/Uploads/Images/' + carImage.imagePath;
    console.log(' ImageSource Çalıştı URL' + url);
    return url;
  }
}
