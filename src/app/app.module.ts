import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { PlotlyComponent } from './plotly/plotly.component';

import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';
PlotlyModule.plotlyjs = PlotlyJS;
// import { PlotlyViaWindowModule } from 'angular-plotly.js';


@NgModule({
    declarations: [
        AppComponent,
        PlotlyComponent
    ],
    imports: [
        BrowserModule,
        PlotlyModule,
        CommonModule,
        // PlotlyViaWindowModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
