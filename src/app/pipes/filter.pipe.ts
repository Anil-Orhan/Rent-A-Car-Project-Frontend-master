import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';
import { CarDetails } from '../models/cardetails';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: CarDetails[], filterText: string): CarDetails[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : '';

    return filterText
      ? value.filter(
          (c: CarDetails) =>
            c.brandName.toLocaleLowerCase().indexOf(filterText) !== -1
        )
      : value;

    console.log('Pipe içi log :' + filterText);
  }
}
