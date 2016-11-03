import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {MapComponent} from "./map.component";
import {PointService} from "./point.service";
import {PointsComponent} from "./points.component";
import {RangePipe} from "./range.pipe";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        MapComponent,
        PointsComponent,
        RangePipe
    ],
    providers: [
        PointService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
