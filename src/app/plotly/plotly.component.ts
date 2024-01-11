import { Component } from '@angular/core';
import * as Plotly from 'plotly.js';
// import * as Plotly from 'plotly.js';
import { PlotData, Config, Data, Layout } from "plotly.js"; // or whatever you need
import { TraceData } from 'src/assets/data';
// import { Config, Data, Layout } from 'plotly.js-dist-min';
// plotly.com/javascript/axes/#multi-category-axes
// import { TraceData";

@Component({
    selector: 'app-plotly',
    templateUrl: './plotly.component.html',
    styleUrls: ['./plotly.component.scss']
})
export class PlotlyComponent {
    trace1 = {
        x: [
            ['SF Zoo', 'SF Zoo', 'SF Zoo'],
            ['giraffes', 'orangutans', 'monkeys']
        ],
        y: [20, 14, 23],
        name: 'SF Zoo',
        // type: 'bar'
        type: 'bar' as Plotly.PlotType,
    };
    trace2 = {
        x: [
            ['LA Zoo', 'LA Zoo', 'LA Zoo'],
            ['giraffes', 'orangutans', 'monkeys']
        ],
        y: [12, 18, 29],
        name: 'LA Zoo',
        type: 'bar' as Plotly.PlotType,
    };
    //multicategory
    // data: Partial<PlotData>[] = [this.trace1, this.trace2];
    data: Partial<PlotData | any>[] = TraceData;

    layout: Partial<Layout> = {
        showlegend: false,
        yaxis: {
            fixedrange: true,
            autorange: true,
            automargin: true,

        },
        xaxis: {
            // tickson: "boundaries", // does not exist in plotly type!
            ticklen: 15,
            showdividers: true,
            dividercolor: 'grey',
            dividerwidth: 2,
            type: 'multicategory',
            // fixedrange: true,
            // rangeselector: {},
            rangeslider: {},
            
        },
        title: 'awesome axis title here',
        dragmode: 'pan'
    };
    // Plotly.newPlot('myDiv', data, layout);
    config: Partial<Config> = {
        scrollZoom: true,
        displayModeBar: true,
        editable: false,
        showLink: false,
        displaylogo: false,
    }
    // public graph2:
    constructor() {
        // Plotly.newPlot('myDiv', this.data, this.layout);

    }
}
