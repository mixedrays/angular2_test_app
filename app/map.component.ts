import {Component, OnInit, ElementRef, ApplicationRef} from "@angular/core";

import {Point} from './point.class';
import {PointsService} from './points.service';

declare var google:any;

@Component({
    moduleId: module.id,
    selector: 'map-component',
    styleUrls: ['map.component.css'],
    template: `
        <div id="googleMap"></div>
        <markers-list-component [markers]="markers"></markers-list-component>
        `
})
export class MapComponent extends OnInit {
    private map;
    private mapContainer;
    private mapConfig = {
        zoom: 10,
        center: {lat: 53.900, lng: 27.567}
    };
    private markers:Object[] = [];

    constructor(
        private element:ElementRef,
        private pointsService:PointsService,
        private appRef:ApplicationRef
    ) {
        super();
    }

    ngOnInit() {
        this.mapContainer = this.element.nativeElement.querySelector('#googleMap');
        this.map = new google.maps.Map(this.mapContainer, this.mapConfig);

        this.pointsService.getPoints()
            .then(points => {
                this.markers = points;
                this.addGoogleMapsMarker();
            });

        this.initGoogleMapsListeners();
    }

    initGoogleMapsListeners() {
        this.map.addListener('bounds_changed', () => {
            this.onMapBoundsChanged();
        });
    }

    onMapBoundsChanged() {
        this.showPointsInBounds();
    }

    showPointsInBounds() {
        let bounds = this.map.getBounds();

        this.markers.forEach((marker) => {
            marker.visible = bounds.contains(marker.getPosition());
        });

        // Force points list view update
        this.appRef.tick();
    }

    addGoogleMapsMarker() {
        this.markers.forEach((point, i) => {
            let newMarker = new google.maps.Marker({
                position: {lat: point.lat, lng: point.lng},
                map: this.map
            });

            // Mutate points into google maps markers
            this.markers[i] = Object.assign(newMarker, point);
        });
    }
}