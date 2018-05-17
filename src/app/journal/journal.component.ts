import { ShareDataService } from './../share-data.service';
import { Component, OnInit, Input } from '@angular/core';
import { ServerService } from '../server.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { getDate } from 'ngx-bootstrap/chronos/utils/date-getters';
import { HerokuDataModelService } from './../heroku-data-model.service';
import { WeatherService } from './../weather.service';
import * as nodemailer from 'nodemailer';
import { OAuth2 } from 'oauth-sign';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GoogleMapService } from '../google-map.service';
declare function require(path: string): any;
@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {
  showJournal = false;
  hiddenMessage = false;
    dataToBeShared: Object;
    initialized = false;
    dnt;
    num = 1;
    weatherData;
    locationData;
    currentData;
    minTemp;
    maxTemp;
    herokuData;
    riskLevel: number;
    riskLevelText: string;
    link=[];
    test;
    position;
    currentLocation;
    @Input('loginedUser') loginedUser;
  getJournal = false;
  servers = [];
  showAddButton = false;

  constructor(private serverService: ServerService, private shareData: ShareDataService,
    private weatherService: WeatherService,
    private heroku: HerokuDataModelService,
    private route : ActivatedRoute,
    private http : HttpClient,
    private googleAPI: GoogleMapService) { }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(position => {
      this.displayLocationInfo(position),
        console.log("get the object position:" + position);
    })


    this.shareData.loginedUserMessage.subscribe(message => this.loginedUser = message)
    //console.log(this.loginedUser)
    this.test = this.serverService.getUser(this.loginedUser);
    this.serverService.getServers()
    .subscribe(
      (servers: any[]) => this.servers = servers,
      (error) => console.log(error)
    )
    this.weatherService.getDefaultWeatherData().subscribe(
      wd => {
        this.weatherData = wd;
        this.locationData = this.weatherData.location;
        this.currentData = this.weatherData.current;
        this.minTemp = this.weatherData.forecast.forecastday[0].day.mintemp_c;
        this.maxTemp = this.weatherData.forecast.forecastday[0].day.maxtemp_c;
        var rainfall = this.currentData.precip_mm;
          this.heroku.getEstimatedRisk(this.minTemp, this.maxTemp, rainfall).subscribe(
            riskMessage => {
              this.riskLevelText = riskMessage['risk_level']
              //console.log(this.riskLevelText)
            }
          )
      }
    );

    this.route.paramMap.subscribe(params => {
      console.log(params)
    })
   
  }


  displayLocationInfo(position) {
    this.currentLocation = position
    const lng = position.coords.longitude;
    const lat = position.coords.latitude;
    //console.log(`longitude: ${lng} | latitude: ${lat}`);
    var requestUrl_pre = "https://maps.googleapis.com/maps/api/geocode/json?address=";
    var requestUrl_suf = "&key=key=AIzaSyBD-eQhzhZi0hh8NaHA_0g5CPgOVl9M82Q";
    this.http.get(requestUrl_pre + lat + "," + lng + requestUrl_suf).subscribe(locationInfo => {
      if (locationInfo['status'] == 'OK') {
        this.currentLocation = locationInfo['results'][0]['address_components'][1]['long_name']
        console.log(this.currentLocation)
      } else {
        this.currentLocation = 'Melbourne'
      }
      this.shareData.changeCurrentLocation(this.currentLocation);
    });
  }

  onAddJournal(){
    this.test = this.serverService.getUser(this.loginedUser);
    this.shareData.currentMessage.subscribe(message => {
      this.dataToBeShared = message;
    });
    this.dnt = Date();
    this.dnt = this.dnt.slice(0,25);
    // console.log(this.dnt);
    // console.log(this.dataToBeShared);
    this.servers.push({date: this.dnt, risk: this.riskLevelText,condition: this.dataToBeShared['condition']['text'], humidity: this.dataToBeShared['humidity'], pressure: this.dataToBeShared['pressure_mb'], temperature: this.dataToBeShared['temp_c'], windDirection: this.dataToBeShared['wind_dir'], windSpeed:this.dataToBeShared['wind_kph'],location: this.currentLocation});
    this.serverService.storeServers(this.servers)
    .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }
  
  onGetJournal(){
    this.showAddButton = true;
    this.getJournal = true;
    this.test = this.serverService.getUser(this.loginedUser);
    this.serverService.getServers()
    .subscribe(
      (servers: any[]) => this.servers = servers,
      (error) => console.log(error)
    )
  }



}
