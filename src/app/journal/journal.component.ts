import { ShareDataService } from './../share-data.service';
import { Component, OnInit, Input } from '@angular/core';
import { ServerService } from '../server.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { getDate } from 'ngx-bootstrap/chronos/utils/date-getters';
import { HerokuDataModelService } from './../heroku-data-model.service';
import { WeatherService } from './../weather.service';
import * as nodemailer from 'nodemailer';
import { OAuth2 } from 'oauth-sign';
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
    @Input('loginedUser') loginedUser;
  getJournal = false;
  servers = [];
  showAddButton = false;

  constructor(private serverService: ServerService, private shareData: ShareDataService,
    private weatherService: WeatherService,
    private heroku: HerokuDataModelService) { }

  ngOnInit() {
    this.shareData.loginedUserMessage.subscribe(message => this.loginedUser = message)
    console.log(this.loginedUser)
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
              console.log(this.riskLevelText)
            }
          )
      }
    );
   
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
    this.servers.push({date: this.dnt, risk: this.riskLevelText,condition: this.dataToBeShared['condition']['text'], humidity: this.dataToBeShared['humidity'], pressure: this.dataToBeShared['pressure_mb'], temperature: this.dataToBeShared['temp_c'], windDirection: this.dataToBeShared['wind_dir'], windSpeed:this.dataToBeShared['wind_kph'],location: this.locationData['name']});
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
