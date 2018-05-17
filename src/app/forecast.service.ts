import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';

@Injectable()
export class ForecastService {

  forecastUrl = "https://dataservice.accuweather.com/forecasts/v1/daily/5day/26216?apikey=IkbSjMGrrfvIfR8kbvLAJfaoaJwureAa&language=en&details=false&metric=true";
  updatedForecastUrl = "https://api.openweathermap.org/data/2.5/forecast?q="
  appid = "&appid=eca450ce4759df0ac1b0fa9604daeb34"
  constructor(private http:HttpClient) { }

  getForecastData(){
    return this.http.get(this.forecastUrl);
  }

  getOpenWeatherForecastData(currentLocation){
    return this.http.get(this.updatedForecastUrl + currentLocation + ",AU" + this.appid);
  }

}
