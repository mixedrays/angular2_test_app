import {Component, OnInit} from '@angular/core';
import {Point} from './point.class';
import {PointService} from './point.service';

@Component({
    moduleId: module.id,
    selector: 'points-component',
    templateUrl: 'points.component.html',
    styleUrls: ['points.component.css']
})
export class PointsComponent implements OnInit {
    private points:Point[];

    constructor(private pointService:PointService) {
    }

    ngOnInit() {
        this.getPoints();
    }

    getPoints() {
        this.pointService.getPoints()
            .then(points => this.points = points);
    }
}