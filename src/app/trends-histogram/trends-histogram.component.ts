import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import {  Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { Trend } from '../models/trend';

@Component({
  selector: 'app-trends-histogram',
  templateUrl: './trends-histogram.component.html',
  styleUrls: ['./trends-histogram.component.css']
})
export class TrendsHistogramComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },

  };
  
  public barChartLabels: Label[] = []; 
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [] 

  public barChartColors = [
    {
      backgroundColor: 'rgb(0, 0, 0, 0.7)',
      borderColor: 'rgb(103, 58, 183)',
      pointBackgroundColor: 'rgb(0, 0, 0)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(103, 58, 183, .8)'
    }
  ];

  Trends: Trend[];


  constructor(private route: ActivatedRoute, private router: Router, private data: DataService) { }

  ngOnInit(): void {
    this.data.getTrends("US").subscribe(
      list =>  {this.Trends = list
          this.extractData(this.Trends)} 
    );
  }

  extractData(Trends) {
    var keys = Object.keys(Trends[0]);                          // get the keys of the first object (assuming all objects have the same keys)
    var result = {};                                           // the result object (you can use the safe Object.create(null) instead of {})

    keys.forEach(key => result[key] = []);                     // initialize the result object (make an empty array entry for each key in keys)

    Trends.forEach(obj =>                                       // for each object in array
        keys.forEach(key => result[key].push(obj[key])));
    this.barChartLabels = result["trendName"];
    this.barChartData = [
      { data: result["frequency"], label: 'Trends' }
    ];
  }


}

