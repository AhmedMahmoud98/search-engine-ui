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

  public selectedCountryCode: string;
  countryCodes = ['eg', 'us', 'lu', 'de', 'bs', 'br', 'pt'];

  changeSelectedCountryCode(value: string): void {
    this.selectedCountryCode = value;
    let url = '/trends';
    this.router.navigate([url], {queryParams: {'country': this.selectedCountryCode} });
  }

  constructor(private route: ActivatedRoute, 
    private router: Router, 
    private data: DataService) {
      route.queryParams.subscribe(country => this.trendsRequest());
    }

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
  };
  
  public barChartLabels: Label[] = [];
  public barChartData: ChartDataSets[] = []  
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

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

  trendsRequest() {
    this.route.queryParams.subscribe(
    params => this.selectedCountryCode = params['country']);
    this.selectedCountryCode = this.route.snapshot.queryParamMap.get('country');

      this.data.getTrends(this.selectedCountryCode).subscribe(
        list =>  {this.Trends = list
            this.extractData(this.Trends)} 
      );
  }

  ngOnInit(): void {
    this.trendsRequest();
  }

  extractData(Trends) {
    if(Trends!= null) 
    {
      var keys = Object.keys(Trends[0]);                          
      var result = {};                                           

      keys.forEach(key => result[key] = []);                    

      Trends.forEach(obj =>                                      
          keys.forEach(key => result[key].push(obj[key])));
      this.barChartLabels = result["trendName"];
      this.barChartData = [
        { data: result["frequency"], label: 'Trends' }
      ];
    } 
    else {
      this.barChartLabels = [];
      this.barChartData = [];
      this.Trends = [];
    }
  }


}

