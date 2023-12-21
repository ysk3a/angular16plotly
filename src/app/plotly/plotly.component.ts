import { Component } from '@angular/core';
// import * as Plotly from 'plotly.js';
// import * as Plotly from 'plotly.js';
import { Config, Data, Layout, PlotData } from 'plotly.js-dist-min';
// plotly.com/javascript/axes/#multi-category-axes
@Component({
    selector: 'app-plotly',
    templateUrl: './plotly.component.html',
    styleUrls: ['./plotly.component.scss']
})
export class PlotlyComponent {
    public graph = {
        data: [{ x: [1, 2, 3], y: [2, 5, 3], type: 'bar' }],
        layout: { autosize: true, title: 'A Fancy Plot' },
    };


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
    data: Partial<PlotData>[] = [this.trace1, this.trace2];
    layout: Partial<Layout> = {
        showlegend: false,
        yaxis: {
            fixedrange: true,
        },
        xaxis: {
            // tickson: "boundaries",
            ticklen: 15,
            showdividers: true,
            dividercolor: 'grey',
            dividerwidth: 2,
            type: 'multicategory',
            fixedrange: true,
        },
        title: 'awesome axis title here'
    };
    // Plotly.newPlot('myDiv', data, layout);
    config: Partial<Config> = {
        scrollZoom: false,
        displayModeBar: false,
        editable: false,
        showLink: false,
        displaylogo: false,
    }
    // public graph2:
    constructor() {
        // Plotly.newPlot('myDiv', this.data, this.layout);

    }
}
