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
        <markers-list-component [markers]="markers" (markerClick)="onMarkerClick($event)"></markers-list-component>
        `
})
export class MapComponent extends OnInit {
    private map;
    private mapContainer;
    private mapConfig = {
        zoom: 11,
        center: {lat: 53.900, lng: 27.567}
    };
    private markers:Object[] = [];
    private skipInitialBoundsChange:boolean = true;
    private activeMarker:Object = null;

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
                this.addGoogleMapsMarkers();
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
        if (this.skipInitialBoundsChange) {
            this.skipInitialBoundsChange = false;
            return false;
        }

        let bounds = this.map.getBounds();

        this.markers.forEach((marker) => {
            marker.visible = bounds.contains(marker.getPosition());
        });

        // Force points list view update
        this.appRef.tick();
    }

    onMarkerClick(marker:Object) {
        this.map.setZoom(12);
        this.map.setCenter(marker.getPosition());

        marker.infowindow.open(this.map, marker);

        // Remember previous active marker in order to close its infowindow
        if (this.activeMarker) this.activeMarker.infowindow.close();
        this.activeMarker = marker;
    }

    addGoogleMapsMarkers() {
        this.markers.forEach((point:Point, i:number) => {

            let iwContent =
                `
                <div><strong>Address: </strong>${point.address}</div>
                <div><strong>Average Price: </strong>${point.avg_price}</div>
                <div><strong>Color: </strong><span style="background-color: ${point.color};"> ${point.color} </span></div>
                <div><strong>Rating: </strong>${point.rating}</div>
                <div><strong>Delivery Availability: </strong>${point.delivery_availability ? 'Yes' : 'No'}</div>
                <div><strong>Working Hours: </strong>
                    Open: ${point.working_hours.map(item => item.open)},
                    Close ${point.working_hours.map(item => item.close)}
                </div>
                <div><strong>Products List: </strong>${point.products_list.map(item => ' ' + item.item)}</div>
                <div><strong>Personnel Languages: </strong>${point.personnel_languages.item}</div>
                `,
                infoWindow = new google.maps.InfoWindow({
                    content: iwContent,
                    maxWidth: 230
                }),
                newMarker = new google.maps.Marker({
                    position: {lat: point.lat, lng: point.lng},
                    map: this.map,
                    infowindow: infoWindow
                });

            // Mutate points into google maps markers
            this.markers[i] = Object.assign(newMarker, point);

            this.markers[i].addListener('click', () => {
                this.onMarkerClick(this.markers[i]);
            });
        });
    }
}