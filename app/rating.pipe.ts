import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'rating'
})
export class RatingPipe implements PipeTransform {
    transform(value:any, args:any[]):any {
        if (!value) return false;

        return value.filter(item => {
            let filtered = item.rating < +args;

            item.setVisible(filtered);
            return filtered;
        });
    }
}