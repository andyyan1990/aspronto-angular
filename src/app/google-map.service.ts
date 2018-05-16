import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GoogleMapService {

  // -37.877243299999996,145.044953
  requestUrl_pre = "https://maps.googleapis.com/maps/api/geocode/json?address="
  requestUrl_suf = "&key=AIzaSyBD-eQhzhZi0hh8NaHA_0g5CPgOVl9M82Q"

  constructor(private http : HttpClient) { }

  getCurrentLocation(lat, lng){
    return this.http.get(this.requestUrl_pre + lat + "," + lng + this.requestUrl_suf);
  }

}
