import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';
import { CarDetails } from '../models/cardetails';

@Pipe({
  name: 'filterWithPrice'
})
export class FilterWithPricePipe implements PipeTransform {

  transform(value:CarDetails[], filterText:number[]): CarDetails[] {
   

    return filterText
      ? value.filter(
          (c: CarDetails) =>
            c.dailyPrice<=filterText[1]&&c.dailyPrice>=filterText[0]
        )
      : value;

   
  }

}
