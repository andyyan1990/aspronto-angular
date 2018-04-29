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

  constructor(private weatherService : WeatherService) { }

  ngOnInit() {
    this.getDefaultWeatherData();
    //this.passDataToDashboard();
  }

  getDefaultWeatherData(){
    this.weatherService.getDefaultWeatherData().subscribe(
      wd => {
        this.weatherData = wd;
        this.locationData = this.weatherData.location;
        this.currentData = this.weatherData.current;
      }
    );
  }

  getWeatherData($event){
    this.weatherService.getWeatherData($event.target.value).subscribe(
      wd => {
        this.weatherData = wd;
        this.locationData = this.weatherData.location;
        this.currentData = this.weatherData.current;
      }
    );
  }

}
