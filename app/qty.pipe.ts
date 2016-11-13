import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'qty'
})
export class QtyPipe implements PipeTransform {
    transform(value:any, args:any[]):any {
        if (!value) return false;

        return value.filter((item, i) => {
            let filtered = args ? i <= +args : true;

            item.setVisible(filtered);
            return filtered;
        });
    }
}