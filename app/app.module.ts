import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {MapComponent} from "./map.component";
import {PointsService} from "./points.service";
import {MarkersListComponent} from "./markers-list.component";
import {RangePipe} from "./range.pipe";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        MapComponent,
        MarkersListComponent,
        RangePipe
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
