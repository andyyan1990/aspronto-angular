import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class HerokuDataModelService implements OnInit {

  ngOnInit;
  requestUrl = "https://asthmamodel.herokuapp.com/get";
  constructor(private http : HttpClient) { }

  OnInit(){
  }

  getPredictionModel(){
    return this.http.get(this.requestUrl);
  }
}
