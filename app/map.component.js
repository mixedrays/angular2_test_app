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
var points_service_1 = require('./points.service');
var MapComponent = (function (_super) {
    __extends(MapComponent, _super);
    function MapComponent(element, pointsService, appRef) {
        _super.call(this);
        this.element = element;
        this.pointsService = pointsService;
        this.appRef = appRef;
        this.mapConfig = {
            zoom: 10,
            center: { lat: 53.900, lng: 27.567 }
        };
        this.markers = [];
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mapContainer = this.element.nativeElement.querySelector('#googleMap');
        this.map = new google.maps.Map(this.mapContainer, this.mapConfig);
        this.pointsService.getPoints()
            .then(function (points) {
            _this.markers = points;
            _this.addGoogleMapsMarker();
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
        var bounds = this.map.getBounds();
        this.markers.forEach(function (marker) {
            marker.visible = bounds.contains(marker.getPosition());
        });
        // Force points list view update
        this.appRef.tick();
    };
    MapComponent.prototype.addGoogleMapsMarker = function () {
        var _this = this;
        this.markers.forEach(function (point, i) {
            var newMarker = new google.maps.Marker({
                position: { lat: point.lat, lng: point.lng },
                map: _this.map
            });
            // Mutate points into google maps markers
            _this.markers[i] = Object.assign(newMarker, point);
        });
    };
    MapComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'map-component',
            styleUrls: ['map.component.css'],
            template: "\n        <div id=\"googleMap\"></div>\n        <markers-list-component [markers]=\"markers\"></markers-list-component>\n        "
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, points_service_1.PointsService, core_1.ApplicationRef])
    ], MapComponent);
    return MapComponent;
}(core_1.OnInit));
exports.MapComponent = MapComponent;
//# sourceMappingURL=map.component.js.map