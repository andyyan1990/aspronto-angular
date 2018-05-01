import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class HerokuDataModelService implements OnInit {

  ngOnInit;
  requestUrl = "https://secure-atoll-34396.herokuapp.com/get";
  constructor(private http : HttpClient) { }

  OnInit(){
  }

  getPredictionModel(){
    return this.http.get(this.requestUrl);
  }
}
