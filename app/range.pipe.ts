import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'range'
})
export class RangePipe implements PipeTransform {
    transform(value:any, args:any[]):any {
        if (!value) return false;

        // Pipe test
        return value.filter(item => item.title.length < +args);
    }
}