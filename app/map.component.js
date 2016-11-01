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
var point_service_1 = require('./point.service');
var MapComponent = (function (_super) {
    __extends(MapComponent, _super);
    function MapComponent(element, pointService, appRef) {
        _super.call(this);
        this.element = element;
        this.pointService = pointService;
        this.appRef = appRef;
        this.mapConfig = {
            zoom: 10,
            center: { lat: 53.900, lng: 27.567 }
        };
        this.markers = [];
    }
    MapComponent.prototype.ngOnInit = function () {
        this.mapContainer = this.element.nativeElement;
        this.map = new google.maps.Map(this.mapContainer, this.mapConfig);
        this.getPoints();
        this.initGoogleMapsListeners();
    };
    MapComponent.prototype.getPoints = function () {
        var _this = this;
        this.pointService.getPoints()
            .then(function (points) {
            _this.points = points;
            _this.onPointsResolve();
        });
    };
    MapComponent.prototype.onPointsResolve = function () {
        this.addPointsOnMap();
    };
    MapComponent.prototype.initGoogleMapsListeners = function () {
        var _this = this;
        this.map.addListener('bounds_changed', function () {
            _this.onMapBoundsChanged();
        });
    };
    MapComponent.prototype.onMapBoundsChanged = function () {
        this.showMarkersInBounds();
    };
    MapComponent.prototype.showMarkersInBounds = function () {
        var _this = this;
        var bounds = this.map.getBounds();
        this.markers.forEach(function (marker, i) {
            _this.points[i].visible = !!bounds.contains(marker.getPosition());
        });
        // Force points list view update
        this.appRef.tick();
    };
    MapComponent.prototype.addPointsOnMap = function () {
        var _this = this;
        this.points.forEach(function (point) { return _this.addGoogleMapsMarker(point); });
    };
    MapComponent.prototype.addGoogleMapsMarker = function (marker) {
        var newMarker = new google.maps.Marker({
            position: {
                lat: marker.lat,
                lng: marker.lng,
            },
            title: marker.title,
            map: this.map
        });
        this.markers.push(newMarker);
    };
    MapComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'map-component',
            styleUrls: ['map.component.css'],
            template: ''
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, point_service_1.PointService, core_1.ApplicationRef])
    ], MapComponent);
    return MapComponent;
}(core_1.OnInit));
exports.MapComponent = MapComponent;
//# sourceMappingURL=map.component.js.map