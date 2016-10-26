import {Component, OnInit, ElementRef} from "@angular/core";
import {Point} from './point.class';
import {PointService} from './point.service';

declare var google:any;

@Component({
    moduleId: module.id,
    selector: 'map-component',
    styleUrls: ['map.component.css'],
    template: ''
})
export class MapComponent extends OnInit {
    private map;
    private mapContainer;
    private mapConfig = {
        zoom: 10,
        center: {lat: 53.900, lng: 27.567}
    };
    private points:Point[];
    private markers:Object[] = [];

    constructor(
        private element:ElementRef,
        private pointService:PointService,
    ) {
    }

    ngOnInit() {
        this.mapContainer = this.element.nativeElement;
        this.map = new google.maps.Map(this.mapContainer, this.mapConfig);

        this.getPoints();
    }

    getPoints() {
        this.pointService.getPoints()
            .then(points => {
                this.points = points;
                this.onPointsResolve();
            });
    }

    onPointsResolve() {
        this.addPointsOnMap();
    }

    addPointsOnMap() {
        this.points.forEach((point:Point) => this.addGoogleMapsMarker(point));
    }

    addGoogleMapsMarker(marker:Point) {
        let newMarker = new google.maps.Marker({
            position: {
                lat: marker.lat,
                lng: marker.lng,
            },
            title: marker.title,
            map: this.map
        });

        this.markers.push(newMarker);
    }
}