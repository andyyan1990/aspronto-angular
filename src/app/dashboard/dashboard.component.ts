import { HerokuDataModelService } from './../heroku-data-model.service';
import { WeatherService } from './../weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  weatherData;
  locationData;
  currentData;
  minTemp;
  maxTemp;
  herokuData;
  riskLevel;

  constructor(private weatherService: WeatherService, private heroku: HerokuDataModelService) { }

  ngOnInit() {
    this.getDefaultWeatherData();
    //this.passDataToDashboard();
  }

  getDefaultWeatherData() {
    this.weatherService.getDefaultWeatherData().subscribe(
      wd => {
        this.weatherData = wd;
        this.locationData = this.weatherData.location;
        this.currentData = this.weatherData.current;
        this.minTemp = this.weatherData.forecast.forecastday[0].day.mintemp_c;
        this.maxTemp = this.weatherData.forecast.forecastday[0].day.maxtemp_c;
        this.calculateAsthmeRiskLevel(this.minTemp, this.maxTemp);
      }
    );
  }

  getWeatherData($event) {
    this.weatherService.getWeatherData($event.target.value).subscribe(
      wd => {
        this.weatherData = wd;
        this.locationData = this.weatherData.location;
        this.currentData = this.weatherData.current;
      }
    );
  }

  calculateAsthmeRiskLevel(min, max) {
    this.heroku.getPredictionModel().subscribe(
      pd => {
        this.herokuData = pd;
        var index = this.herokuData[0] * max
          + this.herokuData[1] * min
          + (max - min) * this.herokuData[3];
        this.riskLevel = index;
      }
    );

  }



}
