import { ShareDataService } from './share-data.service';
import { HerokuDataModelService } from './heroku-data-model.service';
import { GoogleMapService } from './google-map.service';
import { WeatherService } from './weather.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { MatAutocompleteModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule, Routes } from '@angular/router';

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
import {NgxPageScrollModule} from 'ngx-page-scroll';

import { ServerService } from './server.service';
import { HttpModule } from '@angular/http';
import { AuthService } from './auth.service';
import { SuburbsService } from './suburbs.service';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'forecast', component: ForecastChartComponent },
  { path: 'education', component: EducationComponent },
  ]

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
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    AmChartsModule,
    FormsModule,
    NgbModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    NgxPageScrollModule
  ],
  
  schemas: [ NO_ERRORS_SCHEMA ],

  providers: [
    WeatherService,
    GoogleMapService,
    ForecastService,
    HerokuDataModelService,
    ServerService,
    AuthService,
    SuburbsService,
    ShareDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
