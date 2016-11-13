"use strict";
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
var MarkersListComponent = (function () {
    function MarkersListComponent() {
        this.markerClick = new core_1.EventEmitter();
        this.filters = {
            initialQty: 10,
            rating: 5,
            avgPriceMin: 0,
            avgPriceMax: 300,
            delivery: false,
            search: null,
        };
    }
    MarkersListComponent.prototype.onMarkerClick = function (marker) {
        this.markerClick.emit(marker);
    };
    MarkersListComponent.prototype.onFiltersChange = function () {
        this.filters.initialQty = false;
    };
    return MarkersListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], MarkersListComponent.prototype, "markers", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], MarkersListComponent.prototype, "markerClick", void 0);
MarkersListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'markers-list-component',
        templateUrl: 'markers-list.component.html',
        styleUrls: ['markers-list.component.css']
    }),
    __metadata("design:paramtypes", [])
], MarkersListComponent);
exports.MarkersListComponent = MarkersListComponent;
//# sourceMappingURL=markers-list.component.js.map