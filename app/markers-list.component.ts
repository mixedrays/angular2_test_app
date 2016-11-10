import {Component, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'markers-list-component',
    templateUrl: 'markers-list.component.html',
    styleUrls: ['markers-list.component.css']
})
export class MarkersListComponent {
    @Input()
    private markers:Object[];
    private range:number = 100;
    private rating:number = 5;
    private search:string;

    constructor() {
    }

    onPointClick(marker: Object) {
    }
}