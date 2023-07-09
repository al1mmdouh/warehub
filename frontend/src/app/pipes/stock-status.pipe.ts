import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stockStatus',
})
export class StockStatusPipe implements PipeTransform {
  transform(value: number): string {
    if (value > 0) {
      return 'In Stock';
    } else {
      return 'Out of Stock';
    }
  }
}
