import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css'],
})
export class DatepickerComponent implements OnInit {
  model: NgbDateStruct = {
    year: Date.now(),
    month: Date.now(),
    day: Date.now(),
  };
  model2: NgbDateStruct = {
    year: Date.now(),
    month: Date.now(),
    day: Date.now(),
  };
  modelBetween: number = 0;
  constructor(private carService: CarService) {}

  ngOnInit(): void {}

  DateBetween() {
    let birgun = 24 * 60 * 60 * 1000;
    let date1 = Date.UTC(this.model.year, this.model.month, this.model.day);
    let date2 = Date.UTC(this.model2.year, this.model2.month, this.model2.day);

    let result = Math.floor(Math.abs(date2 - date1) / birgun);
    this.modelBetween = result;
    console.log(result);
    this.carService.setRentDays(result);
    return result;
  }
}
