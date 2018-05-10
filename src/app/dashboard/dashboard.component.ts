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
import { HttpClient,HttpHeaders } from '@angular/common/http';

export class Suburb {
  constructor(public postcode: number, public state: string, public vicSuburb: string) { }
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  emails;
  weatherData;
  locationData;
  currentData;
  minTemp;
  maxTemp;
  herokuData;
  riskLevel: number;
  riskLevelText: string;
  tip: string = "why...";
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
    private http : HttpClient,
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
        var rainfall = this.currentData.precip_mm;
        console.log(this.minTemp + " " + this.maxTemp + " " + rainfall)
        //this.calculateAsthmeRiskLevel(this.minTemp as number, this.maxTemp as number);
        this.heroku.getEstimatedRisk(this.minTemp, this.maxTemp, rainfall).subscribe(
          riskMessage => {
            this.riskLevelText = riskMessage['risk_level']
            console.log(this.riskLevelText)
            this.getTip(this.riskLevelText)
              console.log(this.tip)
          }
        )
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
          var rainfall = this.currentData.precip_mm;
          this.heroku.getEstimatedRisk(this.minTemp, this.maxTemp, rainfall).subscribe(
            riskMessage => {
              this.riskLevelText = riskMessage['risk_level']
              console.log(this.riskLevelText)
              this.getTip(this.riskLevelText)
              console.log(this.tip)
            }
          )
          this.shareData.changeMessage(this.currentData);
        }
      );
    }

  }

  getTip(level){
    switch (level) {
      case "low":
        this.tip = "The risk is low. Take care and enjoy your day.";
        break;
      case "medium":
        this.tip = "The risk is medium. Bring your inhaler.";
        break;
      case "high":
        this.tip = "The risk is high. Bring your inhaler and be careful.";
        break;
      default:
        this.tip = "default";
        break;
    }
  }

  // calculateAsthmeRiskLevel(min: number, max: number) {
  //   this.heroku.getPredictionModel().subscribe(
  //     pd => {
  //       this.herokuData = pd;
  //       this.riskLevel = (this.herokuData['0'] * min) + (this.herokuData['1'] * max) + (max - min) * this.herokuData['2'];
  //       if (this.riskLevel < 6) {
  //         this.riskLevelText = "Low";
  //         this.tip = "The risk is low. Take care and enjoy your day.";
  //       } else {
  //         if (this.riskLevel >6 && this.riskLevel <=15) {
  //           this.riskLevelText = "High";
  //           this.tip = "The risk is High. Bring your inhaler.";
  //         } else {
  //           if(this.riskLevel > 15){
  //             this.riskLevelText = "Critical";
  //           this.tip = "The risk is critical. Bring your inhaler and be careful.";
  //           }   
  //         }
  //       }
  //     }
  //   );
  // }

  filterSuburbs(suburbName: string) {
    return this.suburbs.filter(suburb => suburb.vicSuburb.toLowerCase().indexOf(suburbName.toLowerCase()) === 0);
  }

  testBtnClicked() {
    this.test.emit(this.currentData);
    console.log("button clicked");
  }
  sendEmail(){
    this.getEmail().subscribe(
      (emails: any[]) => this.emails = emails,
      (error) => console.log(error)
    )
    
  }
  getEmail(){
    const headers = new Headers({ 'Content-Type':'Access-Control-Allow-Origin'})
    return this.http.get("https://pure-chamber-24098.herokuapp.com/emails");
    
  }
}
