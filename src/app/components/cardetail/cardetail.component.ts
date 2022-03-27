import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarDetails } from 'src/app/models/cardetails';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarImage } from 'src/app/models/carImage';
import { CarService } from 'src/app/services/car.service';
import { InsuranceService } from 'src/app/services/insurance.service';
import { ActivatedRoute } from '@angular/router';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { NgbCarouselConfig, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Insurance } from 'src/app/models/insurance';
import { Rental } from 'src/app/models/rental';
import { PayService } from 'src/app/services/pay.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css'],
  animations: [
    trigger('fade', [
      transition('void=>*', [
        style({ width: '80%' }),
        animate(500, style({ width: '100%' })),
      ]),
    ]),
    trigger('fadeLeft', [
      transition('void=>*', [
        style({ width: '20%' }),
        animate(100, style({ width: '100%' })),
      ]),
    ]),
  ],
})
export class CardetailComponent implements OnInit {
  car: Car = {
    carID: 0,
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
    navigation: 'default',
    minDriverAge: 0,
    minDrivingLicence: 0,
    depositFee: 0,
    carRate: 0,
  };
  carDetail: CarDetails = {
    carID: 0,
    brandName: 'DEFAULT',
    colorName: 'DEFAULT',
    modelYear: 'DEFAULT',
    dailyPrice: 0,
    description: 'DEFAULT',
  };
  carImages: CarImage[] = [];
  insurances: Insurance[] = [];
  rentDay: number = 0;
  rental!: Rental;

  CarOK!: Boolean;

  insurancePrice: number = 0;
  currentCarDailyPrice: number = 0;
  totalPrice: number = 0;
  showNavigationArrows = true;
  showNavigationIndicators = false;
  images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private carImageService: CarImageService,
    config: NgbCarouselConfig,
    configRate: NgbRatingConfig,
    private insuranceService: InsuranceService,
    private payService: PayService,
    private rentalService: RentalService
  ) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;

    configRate.max = 5;
    configRate.readonly = true;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getCarByID(params['carID']);
      this.getCarDetails(params['carID']);

      this.activatedRoute.params.subscribe((params) => {
        this.getCarById(this.car.carID);
        this.getCarImageByCarId(params['carID']);
      });
    });
    this.getInsurance(); //Sigortaları Getir
    this.setInsurancePrice(0, 1003); //Default Sigorta Bilgileri
   
  
  }

  getCarByID(carID: number) {
    this.carService.getCarByID(carID).subscribe((response) => {
      this.car = response.data;
    });
  }
  getCarDetails(carID: number) {
    this.carService.getCarDetails(carID).subscribe((response) => {
      this.carDetail = response.data;
    });
  }
  getRentDay() {
    this.setRental();
    this.rentDay = this.carService.getRentDays();
    this.insurancePrice = this.carService.insurancePrice;
    
    this.totalPrice =(this.currentCarDailyPrice + this.insurancePrice) * this.rentDay;
  

    this.checkRental();
  }
  getCarById(carId: number) {
    this.carImageService.getCarImageByCarId(carId).subscribe((response) => {
      this.carImages = response.data;
    });
  }

  // ARAÇ RESİM METOTLARI
  getCarImageByCarId(carId: number) {
    this.carImageService.getCarImageByCarId(carId).subscribe((response) => {
      this.carImages = response.data;
    });
  }

  getImageSource(carImage: CarImage): string {
    let url: string =
      'https://localhost:44391/Uploads/Images/' + carImage.imagePath;

    return url;
  }

  getInsurance() {
    this.insuranceService.getInsurance().subscribe((response) => {
      this.insurances = response.data;
    });
  }
  setInsurancePrice(price: number, Id: number) {
    this.carService.setInsurancePrice(price, Id);
  }

  setCurrentCarDailyPrice(price: number) {
    this.currentCarDailyPrice = price;
  }

  setRental() {
    this.rental = {
      RentalID: 0,
      CarID: this.car.carID,
      CustomerID: 0,
      BillingPrice: this.totalPrice * 1.18,
      InsurancesID: this.carService.insuranceId,
      RentDate: this.carService.rentDate,
      ReturnDate: this.carService.returnDate,
    };
    this.payService.setActiveRental(this.rental);

    console.log("this.rental:"+this.rental.BillingPrice)
    console.log("this.currentCarDailyPrice:"+this.currentCarDailyPrice)
   
  }

  message: string = '';
  returnDate: string = '';
  payOK:boolean=false;

  checkRental() {
    let rental1 = this.rental;
    rental1.CarID = this.car.carID;

    rental1.RentDate = this.carService.rentDate;

    this.rentalService.checkRentalDate(rental1).subscribe((response) => {
      this.message = response.message;

      if (response.success) {
        this.CarOK = true;
        this.payOK=false

      } else {
        this.CarOK = false;
        this.payOK=true;
      }

    });
    
  }

 
}
