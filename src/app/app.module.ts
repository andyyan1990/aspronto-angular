import { GoogleMapService } from './google-map.service';
import { WeatherService } from './weather.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EducationComponent } from './education/education.component';
import { PollenComponent } from './pollen/pollen.component';
import { JournalComponent } from './journal/journal.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EducationComponent,
    PollenComponent,
    JournalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    WeatherService,
    GoogleMapService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
