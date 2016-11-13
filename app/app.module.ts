import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {MapComponent} from "./map.component";
import {PointsService} from "./points.service";
import {MarkersListComponent} from "./markers-list.component";
import {QtyPipe} from "./qty.pipe";
import {SearchPipe} from "./search.pipe";
import {RatingPipe} from "./rating.pipe";
import {PricePipe} from "./price.pipe";
import {DeliveryPipe} from "./delivery.pipe";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        MapComponent,
        MarkersListComponent,
        QtyPipe,
        RatingPipe,
        PricePipe,
        DeliveryPipe,
        SearchPipe,
    ],
    providers: [
        PointsService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
