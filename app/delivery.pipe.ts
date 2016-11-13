import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'delivery'
})
export class DeliveryPipe implements PipeTransform {
    transform(value:any, args:boolean):any {
        if (!value) return false;

        return value.filter(item => {
            let filtered = args ? item.delivery_availability === args : true;

            item.setVisible(filtered);
            return filtered;
        });
    }
}