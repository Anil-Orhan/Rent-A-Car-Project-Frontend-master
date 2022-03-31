import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';


@Pipe({
  name: 'filterPrice',
})
export class FilterPricePipe implements PipeTransform {
  transform(value:Car[], filterText:number[]): Car[] {
   

    return filterText
      ? value.filter(
          (c: Car) =>
            c.dailyPrice<=filterText[1]&&c.dailyPrice>=filterText[0]
        )
      : value;

   
  }
}