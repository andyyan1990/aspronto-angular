import { HerokuDataModelService } from './heroku-data-model.service';
import { GoogleMapService } from './google-map.service';
import { WeatherService } from './weather.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EducationComponent } from './education/education.component';
import { PollenComponent } from './pollen/pollen.component';
import { JournalComponent } from './journal/journal.component';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForecastChartComponent } from './forecast-chart/forecast-chart.component';
import { ForecastService } from './forecast.service';
import { AmChartsModule } from "@amcharts/amcharts3-angular";
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EducationComponent,
    PollenComponent,
    JournalComponent,
    LoginComponent,
    RegisterComponent,
    ForecastChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    AmChartsModule,
    FormsModule
  ],
  providers: [
    WeatherService,
    GoogleMapService,
    ForecastService,
    HerokuDataModelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
