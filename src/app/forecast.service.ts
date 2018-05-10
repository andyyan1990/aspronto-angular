import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';

@Injectable()
export class ForecastService {

  forecastUrl = "https://dataservic.accuweather.com/forecasts/v1/daily/5day/26216?apikey=IkbSjMGrrfvIfR8kbvLAJfaoaJwureAa&language=en&details=false&metric=true";

  constructor(private http:HttpClient) { }

  getForecastData(){
    return this.http.get(this.forecastUrl);
  }

}
