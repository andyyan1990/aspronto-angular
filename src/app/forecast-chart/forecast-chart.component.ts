import { Component, OnInit } from '@angular/core';
import { ForecastService } from './../forecast.service';

@Component({
  selector: 'app-forecast-chart',
  templateUrl: './forecast-chart.component.html',
  styleUrls: ['./forecast-chart.component.css']
})
export class ForecastChartComponent implements OnInit {

  forecastData;
  headline;
  dailyForecastList = [];

  constructor(private forecast : ForecastService ) { }

  ngOnInit() {
    // this.forecastData = this.forecast.getForecastData().subscribe(
    //   fd=>{
    //     this.forecastData = fd;
    //     this.headline = this.forecastData.headline;
    //     this.dailyForecastList = this.forecastData.DailyForecasts;
    //   }
    // );
  }

}
