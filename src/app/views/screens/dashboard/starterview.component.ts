import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlertModel } from 'app/model/alert.model';

import 'chart.js';

@Component({
  selector: 'starter',
  templateUrl: 'starter.template.html'
})
export class StarterViewComponent implements OnDestroy, OnInit {

  public nav: any;
  public alerts: Array<AlertModel> = new Array();

  public constructor() {
    this.nav = document.querySelector('nav.navbar');
  }

  public ngOnInit(): any {
    this.alerts = [
      new AlertModel("Arroz", new Date(), 5, "987146541AB13", "high"),
      new AlertModel("Feijão", new Date(), 8, "354DASD542321", "medium"),
      new AlertModel("Macarrão", new Date(), 16, "35451", "normal")
    ];
    this.nav.className += " white-bg";
  }

  public ngOnDestroy(): any {
    this.nav.classList.remove("white-bg");
  }

  // Flot chart data and options

  private gd(year, month, day) {
    return new Date(year, month - 1, day).getTime();
  }

  private data1 = [
    [this.gd(2012, 1, 1), 7], [this.gd(2012, 1, 2), 6], [this.gd(2012, 1, 3), 4], [this.gd(2012, 1, 4), 8],
    [this.gd(2012, 1, 5), 9], [this.gd(2012, 1, 6), 7], [this.gd(2012, 1, 7), 5], [this.gd(2012, 1, 8), 4],
    [this.gd(2012, 1, 9), 7], [this.gd(2012, 1, 10), 8], [this.gd(2012, 1, 11), 9], [this.gd(2012, 1, 12), 6],
    [this.gd(2012, 1, 13), 4], [this.gd(2012, 1, 14), 5], [this.gd(2012, 1, 15), 11], [this.gd(2012, 1, 16), 8],
    [this.gd(2012, 1, 17), 8], [this.gd(2012, 1, 18), 11], [this.gd(2012, 1, 19), 11], [this.gd(2012, 1, 20), 6],
    [this.gd(2012, 1, 21), 6], [this.gd(2012, 1, 22), 8], [this.gd(2012, 1, 23), 11], [this.gd(2012, 1, 24), 13],
    [this.gd(2012, 1, 25), 7], [this.gd(2012, 1, 26), 9], [this.gd(2012, 1, 27), 9], [this.gd(2012, 1, 28), 8],
    [this.gd(2012, 1, 29), 5], [this.gd(2012, 1, 30), 8], [this.gd(2012, 1, 31), 25]
  ];

  private data2 = [
    [this.gd(2012, 1, 1), 800], [this.gd(2012, 1, 2), 500], [this.gd(2012, 1, 3), 600], [this.gd(2012, 1, 4), 700],
    [this.gd(2012, 1, 5), 500], [this.gd(2012, 1, 6), 456], [this.gd(2012, 1, 7), 800], [this.gd(2012, 1, 8), 589],
    [this.gd(2012, 1, 9), 467], [this.gd(2012, 1, 10), 876], [this.gd(2012, 1, 11), 689], [this.gd(2012, 1, 12), 700],
    [this.gd(2012, 1, 13), 500], [this.gd(2012, 1, 14), 600], [this.gd(2012, 1, 15), 700], [this.gd(2012, 1, 16), 786],
    [this.gd(2012, 1, 17), 345], [this.gd(2012, 1, 18), 888], [this.gd(2012, 1, 19), 888], [this.gd(2012, 1, 20), 888],
    [this.gd(2012, 1, 21), 987], [this.gd(2012, 1, 22), 444], [this.gd(2012, 1, 23), 999], [this.gd(2012, 1, 24), 567],
    [this.gd(2012, 1, 25), 786], [this.gd(2012, 1, 26), 666], [this.gd(2012, 1, 27), 888], [this.gd(2012, 1, 28), 900],
    [this.gd(2012, 1, 29), 178], [this.gd(2012, 1, 30), 555], [this.gd(2012, 1, 31), 993]
  ];


  public flotDataset: any = [
    {
      label: "Produtos",
      data: this.data2,
      color: "#1ab394",
      bars: {
        show: true,
        align: "center",
        barWidth: 24 * 60 * 60 * 600,
        lineWidth: 0
      }

    }, {
      label: "Produtos à vencer",
      data: this.data1,
      yaxis: 2,
      color: "#1C84C6",
      lines: {
        lineWidth: 1,
        show: true,
        fill: true,
        fillColor: {
          colors: [{
            opacity: 0.2
          }, {
            opacity: 0.4
          }]
        }
      },
      splines: {
        show: false,
        tension: 0.6,
        lineWidth: 1,
        fill: 0.1
      },
    }
  ];

  public flotOptions: any =
    {
      xaxis: {
        mode: "time",
        tickSize: [3, "day"],
        tickLength: 0,
        axisLabel: "Date",
        axisLabelUseCanvas: true,
        axisLabelFontSizePixels: 12,
        axisLabelFontFamily: 'Arial',
        axisLabelPadding: 10,
        color: "#d5d5d5"
      },
      yaxes: [{
        position: "left",
        max: 1070,
        color: "#d5d5d5",
        axisLabelUseCanvas: true,
        axisLabelFontSizePixels: 12,
        axisLabelFontFamily: 'Arial',
        axisLabelPadding: 3
      }, {
        position: "right",
        clolor: "#d5d5d5",
        axisLabelUseCanvas: true,
        axisLabelFontSizePixels: 12,
        axisLabelFontFamily: ' Arial',
        axisLabelPadding: 67
      }
      ],
      legend: {
        noColumns: 1,
        labelBoxBorderColor: "#000000",
        position: "nw"
      },
      grid: {
        hoverable: false,
        borderWidth: 0
      }
    };

  //half chart
  public lineChartData: Array<any> = [
    { data: [200, 250, 321, 314, 621, 561, 451, 654, 574, 631], label: 'Estoque' },
    { data: [50, 71, 40, 254, 36, 124, 100, 254, 25, 324,254], label: 'À vencer' },
  ];
  public lineChartLabels: Array<any> = ['Jan 03', 'Jan 06', 'Jan 09', 'Jan 12', 'Jan 15', 'Jan 18', 'Jan 21', 'Jan 24', 'Jan 27', 'Jan 30'];
  public lineChartType: string = 'line';

  public lineChartColors: Array<any> = [
    {
      backgroundColor: "rgba(26,179,148,0.5)",
      borderColor: "rgba(26,179,148,0.7)",
      pointBackgroundColor: "rgba(26,179,148,1)",
      pointBorderColor: "#fff",
    },
    {
      backgroundColor: "rgba(220,220,220,0.5)",
      borderColor: "rgba(220,220,220,1)",
      pointBackgroundColor: "rgba(220,220,220,1)",
      pointBorderColor: "#fff",
    }
  ];
}