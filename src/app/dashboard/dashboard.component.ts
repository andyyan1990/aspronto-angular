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
import { Subject } from 'rxjs';
import {debounceTime} from 'rxjs/operators';

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
  tip: string;
  suburbs: Suburb[];
  suburbCtrl: FormControl;
  filteredSuburbs: Observable<any[]>;
  nameFrame;

  @Input('loginedUser') loginedUser: string = "default";
  @Output() test = new EventEmitter();

  messageToBeShared: Object;
  private _error = new Subject<string>();
  errorMessage: string;



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
    var typed = $event.target.value;
    if (!this.suburbService.hasSuburb(typed)) {
      this._error.next('Please type in valid suburb')
      this._error.subscribe((message) => this.errorMessage = message);
    this._error.pipe(
      debounceTime(5000)
    ).subscribe(() => this.errorMessage = null);
    } else {
      this.weatherService.getWeatherData(typed).subscribe(
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

  }

  calculateAsthmeRiskLevel(min: number, max: number) {
    this.heroku.getPredictionModel().subscribe(
      pd => {
        this.herokuData = pd;
        this.riskLevel = (this.herokuData['0'] * min) + (this.herokuData['1'] * max) + (max - min) * this.herokuData['2'];
        if (this.riskLevel < 6) {
          this.riskLevelText = "Low";
          this.tip = "The risk is low. Take care and enjoy your day.";
        } else {
          if (this.riskLevel >6 && this.riskLevel <=15) {
            this.riskLevelText = "High";
            this.tip = "The risk is High. Bring your inhaler.";
          } else {
            if(this.riskLevel > 15){
              this.riskLevelText = "Critical";
            this.tip = "The risk is critical. Bring your inhaler and be careful.";
            }
            
          }
        }
      }
    );
  }

  filterSuburbs(suburbName: string) {
    return this.suburbs.filter(suburb => suburb.vicSuburb.toLowerCase().indexOf(suburbName.toLowerCase()) === 0);
  }

  testBtnClicked() {
    this.test.emit(this.currentData);
    console.log("button clicked");
  }

}
