import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'markers-list-component',
    templateUrl: 'markers-list.component.html',
    styleUrls: ['markers-list.component.css']
})
export class MarkersListComponent {
    @Input() private markers:Object[];
    @Output() markerClick = new EventEmitter();

    private filters:Filters = {
        initialQty: 10,
        rating: 5,
        avgPriceMin: 0,
        avgPriceMax: 300,
        delivery: false,
        search: null,
    };

    constructor() {
    }

    onMarkerClick(marker:Object) {
        this.markerClick.emit(marker);
    }

    onFiltersChange() {
        this.filters.initialQty = false;
    }
}

interface Filters {
    initialQty: any,
    rating: number,
    avgPriceMin: number,
    avgPriceMax: number,
    delivery: boolean,
    search: string
}