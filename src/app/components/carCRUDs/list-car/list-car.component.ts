import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarDetails } from 'src/app/models/cardetails';
import { CarImage } from 'src/app/models/carImage';
import { carListModel } from 'src/app/models/carListModel';
import { Rental } from 'src/app/models/rental';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { RentalService } from 'src/app/services/rental.service';



@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.css'],
})
export class ListCarComponent implements OnInit {
  cars: Car[] = [];
  carList: carListModel[] = [];
  carDetails: CarDetails[] = [];
  
  carImage!: CarImage;
  rentals: Rental[] = [];
  activeRentals: Rental[] = [];
  carListItem = {};

  constructor(
    private carService: CarService,
    private toastrService: ToastrService,
    private carImageService: CarImageService,
    private rentalService: RentalService,
    private httpClient:HttpClient
  ) {}

  ngOnInit(): void {

   
    this.getCars();
    this.getRentals();
    
   
  }
   

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.setListItem();
    });
      this.carService.getCarsDetails().subscribe((response) => {
      this.carDetails = response.data;
      
    });
   
  }

  getCarImages(carId: number) {
    this.carImageService.getCarImageByCarId(carId).subscribe((response) => {
      this.carImage = <CarImage>response.data.find((p) => p.carId == carId);
    });
  }
  getRentals() {
   this.rentalService.getRentals().subscribe((response) => { response.data
      this.rentals = response.data;
     
    });
  }
    checkActiveRentals(rental:Rental)
  {

      this.rentalService.checkRentalDate(rental).subscribe((response)=>
    {
       this.tempRentalCheck=response.success;
    });

  }
  public tempRentalCheck=true;
  tempImage!: CarImage;
  

  setListItem() {
   
    for (let i = 0; i < this.cars.length; i++) {
      let carOK:boolean;
     
      this.rentalService.checkRentalByCarId(this.cars[i].carID).subscribe((response)=>{

        carOK=response.success;
      })
        this.carImageService
        .getCarImageByCarId(this.cars[i].carID)
        .subscribe((response) => {
          
          this.tempImage = <CarImage>(
            response.data.find((p) => p.carId === this.cars[i].carID));
          let indexCar: carListModel = {
            CarID: this.cars[i].carID,
            CarImage: this.tempImage,
            BrandName: <string>(
              this.carDetails.find((p) => p.carID == this.cars[i].carID)
                ?.brandName
            ),
            CarModel: this.cars[i].carModel,
            ColorName: <string>(
              this.carDetails.find((p) => p.carID == this.cars[i].carID)
                ?.colorName
            ),
            
            IsRental:carOK,
            DailyPrice:this.cars[i].dailyPrice
          };

          this.carList.push(indexCar);
        });

     
     
      
        
    
    }
   
    
   
  
  }
  



  setPath(path: string) {
    return 'https://localhost:44391/Uploads/Images/' + path;
  }

 
  carGetter(cars:carListModel):Car{
    return this.cars.find(p=>p.carID==cars.CarID)!;
  }
  
    

 
}
