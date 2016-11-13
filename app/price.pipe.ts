import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'price'
})
export class PricePipe implements PipeTransform {
    transform(value:any, min:any, max:any):any {
        if (!value) return false;

        return value.filter(item => {
            let price = +item.avg_price.substring(1), // remove currency sign and convert to number
                filtered = price >= min && price <= +max;

            item.setVisible(filtered);
            return filtered;
        });
    }
}