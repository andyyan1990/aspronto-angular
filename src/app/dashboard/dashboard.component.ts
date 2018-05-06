import { ShareDataService } from './../share-data.service';
import { map } from 'rxjs/operators/map';
import 'rxjs/add/operator/map';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { HerokuDataModelService } from './../heroku-data-model.service';
import { WeatherService } from './../weather.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SuburbsService } from '../suburbs.service';

export class Suburb {
  constructor(public postcode: number, public state: string, public vicSuburb: string) { }
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  weatherData;
  locationData;
  currentData;
  minTemp;
  maxTemp;
  herokuData;
  riskLevel: number;
  riskLevelText: string;
  tip : string;
  suburbs: Suburb[];
  suburbCtrl: FormControl;
  filteredSuburbs: Observable<any[]>;

  @Input('loginedUser') loginedUser:string = "default";
  @Output() test = new EventEmitter();

  messageToBeShared: Object;



  constructor(
    private weatherService: WeatherService,
    private heroku: HerokuDataModelService,
    private suburbService: SuburbsService,
    private shareData: ShareDataService) {
    this.suburbs = this.suburbService.createDb();
    this.suburbCtrl = new FormControl();
    this.filteredSuburbs = this.suburbCtrl.valueChanges
      .pipe(
        startWith(''),
        map(suburb => suburb ? this.filterSuburbs(suburb) : this.suburbs.slice())
      );
  }

  ngOnInit() {
    this.riskLevel = 0
    this.getDefaultWeatherData();
    this.shareData.currentMessage.subscribe(message => this.messageToBeShared = message);
  }

  getDefaultWeatherData() {
    this.weatherService.getDefaultWeatherData().subscribe(
      wd => {
        this.weatherData = wd;
        this.locationData = this.weatherData.location;
        this.currentData = this.weatherData.current;
        this.minTemp = this.weatherData.forecast.forecastday[0].day.mintemp_c;
        this.maxTemp = this.weatherData.forecast.forecastday[0].day.maxtemp_c;
        this.calculateAsthmeRiskLevel(this.minTemp as number, this.maxTemp as number);
        this.shareData.changeMessage(this.currentData);
      }
    );
  }

  getWeatherData($event) {
    this.weatherService.getWeatherData($event.target.value).subscribe(
      wd => {
        this.weatherData = wd;
        this.locationData = this.weatherData.location;
        this.currentData = this.weatherData.current;
        this.minTemp = this.weatherData.forecast.forecastday[0].day.mintemp_c;
        this.maxTemp = this.weatherData.forecast.forecastday[0].day.maxtemp_c;
        this.calculateAsthmeRiskLevel(this.minTemp as number, this.maxTemp as number);
        this.shareData.changeMessage(this.currentData);
      }
    );
  }

  calculateAsthmeRiskLevel(min: number, max: number) {
    this.heroku.getPredictionModel().subscribe(
      pd => {
        this.herokuData = pd;
        this.riskLevel = (this.herokuData['0'] * min) + (this.herokuData['1'] * max) + (max - min) * this.herokuData['2'];
        if(this.riskLevel < 14.925){
          this.riskLevelText = "Low";
          this.tip = "The risk is low. Take care and enjoy your day.";
        }else{
          if(this.riskLevel < 22.64){
            this.riskLevelText = "High";
            this.tip = "The risk is High. Bring your inhaler.";
          }else{
            this.riskLevelText = "Critical";
          this.tip = "The risk is critical. Bring your inhaler and be careful.";
          }
        }
      }
    );
  }

  filterSuburbs(suburbName: string) {
    return this.suburbs.filter(suburb =>suburb.vicSuburb.toLowerCase().indexOf(suburbName.toLowerCase()) === 0);
  }

  testBtnClicked(){
    this.test.emit(this.currentData);
    console.log("button clicked");
  }

}
