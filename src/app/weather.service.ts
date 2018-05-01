import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

  requestUrl = "https://api.apixu.com/v1/forecast.json?key=eed2be458db94d37bf3123840182604&q=";
  defaultSearchTerm = "Melbourne";

  constructor(private http : HttpClient) { }

  getDefaultWeatherData(){
    return this.http.get(this.requestUrl + this.defaultSearchTerm);
  }

  getWeatherData(searchTerm){
    return this.http.get(this.requestUrl + searchTerm + "%20Victoria%Australia");
  }

}
