"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var points_service_1 = require("./points.service");
var MapComponent = (function (_super) {
    __extends(MapComponent, _super);
    function MapComponent(element, pointsService, appRef) {
        var _this = _super.call(this) || this;
        _this.element = element;
        _this.pointsService = pointsService;
        _this.appRef = appRef;
        _this.mapConfig = {
            zoom: 11,
            center: { lat: 53.900, lng: 27.567 }
        };
        _this.markers = [];
        _this.skipInitialBoundsChange = true;
        _this.activeMarker = null;
        return _this;
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mapContainer = this.element.nativeElement.querySelector('#googleMap');
        this.map = new google.maps.Map(this.mapContainer, this.mapConfig);
        this.pointsService.getPoints()
            .then(function (points) {
            _this.markers = points;
            _this.addGoogleMapsMarkers();
        });
        this.initGoogleMapsListeners();
    };
    MapComponent.prototype.initGoogleMapsListeners = function () {
        var _this = this;
        this.map.addListener('bounds_changed', function () {
            _this.onMapBoundsChanged();
        });
    };
    MapComponent.prototype.onMapBoundsChanged = function () {
        this.showPointsInBounds();
    };
    MapComponent.prototype.showPointsInBounds = function () {
        if (this.skipInitialBoundsChange) {
            this.skipInitialBoundsChange = false;
            return false;
        }
        var bounds = this.map.getBounds();
        this.markers.forEach(function (marker) {
            marker.visible = bounds.contains(marker.getPosition());
        });
        // Force points list view update
        this.appRef.tick();
    };
    MapComponent.prototype.onMarkerClick = function (marker) {
        this.map.setZoom(12);
        this.map.setCenter(marker.getPosition());
        marker.infowindow.open(this.map, marker);
        // Remember previous active marker in order to close its infowindow
        if (this.activeMarker)
            this.activeMarker.infowindow.close();
        this.activeMarker = marker;
    };
    MapComponent.prototype.addGoogleMapsMarkers = function () {
        var _this = this;
        this.markers.forEach(function (point, i) {
            var iwContent = "\n                <div><strong>Address: </strong>" + point.address + "</div>\n                <div><strong>Average Price: </strong>" + point.avg_price + "</div>\n                <div><strong>Color: </strong><span style=\"background-color: " + point.color + ";\"> " + point.color + " </span></div>\n                <div><strong>Rating: </strong>" + point.rating + "</div>\n                <div><strong>Delivery Availability: </strong>" + (point.delivery_availability ? 'Yes' : 'No') + "</div>\n                <div><strong>Working Hours: </strong>\n                    Open: " + point.working_hours.map(function (item) { return item.open; }) + ",\n                    Close " + point.working_hours.map(function (item) { return item.close; }) + "\n                </div>\n                <div><strong>Products List: </strong>" + point.products_list.map(function (item) { return ' ' + item.item; }) + "</div>\n                <div><strong>Personnel Languages: </strong>" + point.personnel_languages.item + "</div>\n                ", infoWindow = new google.maps.InfoWindow({
                content: iwContent,
                maxWidth: 230
            }), newMarker = new google.maps.Marker({
                position: { lat: point.lat, lng: point.lng },
                map: _this.map,
                infowindow: infoWindow
            });
            // Mutate points into google maps markers
            _this.markers[i] = Object.assign(newMarker, point);
            _this.markers[i].addListener('click', function () {
                _this.onMarkerClick(_this.markers[i]);
            });
        });
    };
    return MapComponent;
}(core_1.OnInit));
MapComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'map-component',
        styleUrls: ['map.component.css'],
        template: "\n        <div id=\"googleMap\"></div>\n        <markers-list-component [markers]=\"markers\" (markerClick)=\"onMarkerClick($event)\"></markers-list-component>\n        "
    }),
    __metadata("design:paramtypes", [core_1.ElementRef,
        points_service_1.PointsService,
        core_1.ApplicationRef])
], MapComponent);
exports.MapComponent = MapComponent;
//# sourceMappingURL=map.component.js.map