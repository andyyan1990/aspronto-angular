import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

  requestUrl = "https://api.apixu.com/v1/forecast.json?key=eed2be458db94d37bf3123840182604&q=";
  updatedRequestUrl = "https://api.openweathermap.org/data/2.5/weather?"
  geoLat="lat="
  geoLong = "&lon="
  appid = "&appid=eca450ce4759df0ac1b0fa9604daeb34"
  searchTermPrefix = "q="
  defaultSearchTerm = "Melbourne";

  constructor(private http : HttpClient) { }

  getDefaultWeatherData(){
    return this.http.get(this.requestUrl + this.defaultSearchTerm);
  }

  getDefaultGeoLocationWeatherData(lat, lng){
    //return this.http.get(this.updatedRequestUrl+this.geoLat+lat+this.geoLong+lng+this.appid)
    return this.http.get(this.requestUrl + lat + "," + lng)
  }

  getWeatherData(searchTerm){
    console.log("searched!" + searchTerm);
    if(searchTerm == null){
      return this.http.get(this.requestUrl + this.defaultSearchTerm + "%20Victoria%Australia");
    }
    return this.http.get(this.requestUrl + searchTerm + "%20Victoria%Australia");
  }

}
