import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MapComponent} from "./map.component";
import {PointService} from "./point.service";
import {PointsComponent} from "./points.component";

@NgModule({
    imports: [
        BrowserModule,
    ],
    declarations: [
        AppComponent,
        MapComponent,
        PointsComponent
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
