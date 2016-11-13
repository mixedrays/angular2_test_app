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
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var map_component_1 = require("./map.component");
var points_service_1 = require("./points.service");
var markers_list_component_1 = require("./markers-list.component");
var qty_pipe_1 = require("./qty.pipe");
var search_pipe_1 = require("./search.pipe");
var rating_pipe_1 = require("./rating.pipe");
var price_pipe_1 = require("./price.pipe");
var delivery_pipe_1 = require("./delivery.pipe");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule
        ],
        declarations: [
            app_component_1.AppComponent,
            map_component_1.MapComponent,
            markers_list_component_1.MarkersListComponent,
            qty_pipe_1.QtyPipe,
            rating_pipe_1.RatingPipe,
            price_pipe_1.PricePipe,
            delivery_pipe_1.DeliveryPipe,
            search_pipe_1.SearchPipe,
        ],
        providers: [
            points_service_1.PointsService
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map