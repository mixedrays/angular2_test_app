import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform {
    transform(value:any, args:string):any {
        if (!value) return false;

        // Need to make search independent from letter case
        // or assign empty string if args is undefined
        args = args ? args.toLowerCase() : '';

        return value.filter(item => {
            let filtered = item.address.toLowerCase().indexOf(args) !== -1;

            item.setVisible(filtered);
            return filtered;
        });
    }
}