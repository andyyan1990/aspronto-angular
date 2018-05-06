import { ShareDataService } from './../share-data.service';
import { Component, OnInit, Input } from '@angular/core';
import { ServerService } from '../server.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { getDate } from 'ngx-bootstrap/chronos/utils/date-getters';
import { HerokuDataModelService } from './../heroku-data-model.service';
import { WeatherService } from './../weather.service';

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
    @Input('loginedUser') loginedUser:string = "default";
  getJournal = false;
  servers = [];

  constructor(private serverService: ServerService, private shareData: ShareDataService,
    private weatherService: WeatherService,
    private heroku: HerokuDataModelService) { }

  ngOnInit() {
    this.weatherService.getDefaultWeatherData().subscribe(
      wd => {
        this.weatherData = wd;
        this.locationData = this.weatherData.location;
        this.currentData = this.weatherData.current;
        this.minTemp = this.weatherData.forecast.forecastday[0].day.mintemp_c;
        this.maxTemp = this.weatherData.forecast.forecastday[0].day.maxtemp_c;
        this.calculateAsthmeRiskLevel(this.minTemp as number, this.maxTemp as number);
      }
    );
   
  }


  onAddJournal(){
    this.shareData.currentMessage.subscribe(message => {
      this.dataToBeShared = message;
    });
    this.dnt = Date();
    this.dnt = this.dnt.slice(0,25);
    console.log(this.dnt);
    this.showJournal = true;
    console.log(this.dataToBeShared);
    
    
    this.servers.push({date: this.dnt, risk: this.riskLevelText,condition: this.dataToBeShared['condition']['text'], humidity: this.dataToBeShared['humidity'], pressure: this.dataToBeShared['pressure_mb'], temperature: this.dataToBeShared['temp_c'], windDirection: this.dataToBeShared['wind_dir'], windSpeed:this.dataToBeShared['wind_kph']});
    this.serverService.storeServers(this.servers)
    .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }
  
  onGetJournal(){
    this.getJournal = true;
    this.serverService.getServers()
    .subscribe(
      (servers: any[]) => this.servers = servers,
      (error) => console.log(error)
    )
  }
  // getDefaultWeatherData() {
  //   this.weatherService.getDefaultWeatherData().subscribe(
  //     wd => {
  //       this.weatherData = wd;
  //       this.locationData = this.weatherData.location;
  //       this.currentData = this.weatherData.current;
  //       this.minTemp = this.weatherData.forecast.forecastday[0].day.mintemp_c;
  //       this.maxTemp = this.weatherData.forecast.forecastday[0].day.maxtemp_c;
  //       this.calculateAsthmeRiskLevel(this.minTemp as number, this.maxTemp as number);
  //     }
  //   );
  // }

  calculateAsthmeRiskLevel(min: number, max: number) {
    this.heroku.getPredictionModel().subscribe(
      pd => {
        this.herokuData = pd;
        this.riskLevel = (this.herokuData['0'] * max) + (this.herokuData['1'] * min) + (max - min) * this.herokuData['2'];
        if(this.riskLevel < 14.925){
          this.riskLevelText = "Low";
        }else{
          if(this.riskLevel < 22.64){
            this.riskLevelText = "High";
          }else{
            this.riskLevelText = "Critical";
          }
        }
      }
    );
  }



}
