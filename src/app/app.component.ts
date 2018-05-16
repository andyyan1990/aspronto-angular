import { HttpClient } from '@angular/common/http';
import { GoogleMapService } from './google-map.service';
import { ShareDataService } from './share-data.service';
import { debounceTime } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { log } from 'util';
import { ServerService } from './server.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  currentLocation;
  loginedUser: string;
  currentUser: string;
  databaseUserNode;
  welcomeUser;

  //Firebase use this user to record the current login user
  user;

  signupError;
  signinError;
  emailStore;
  servers = [];
  emailServers = [];
  userLogin = true;//hide login button after login
  showLogoutButton = false;//show logout button after login

  constructor(private authService: AuthService,
    private serverService: ServerService,
    private shareData: ShareDataService,
    private googleAPI: GoogleMapService,
    private http: HttpClient,
    private router:Router) { }

  // ngOnInit;
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDMuQLLa4mnZMhhaOVkb-2UA_gNZZtnqjk",
      authDomain: "aspronto-pal-baa14.firebaseapp.com",
      databaseURL: "https://aspronto-pal-baa14.firebaseio.com",
      projectId: "aspronto-pal-baa14",
      storageBucket: "aspronto-pal-baa14.appspot.com",
      messagingSenderId: "189065569345"
    });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.displayLocationInfo(position),
          console.log("get the object position:" + position);
      })

    }
  }

  displayLocationInfo(position) {
    this.currentLocation = position
    const lng = position.coords.longitude;
    const lat = position.coords.latitude;
    //console.log(`longitude: ${lng} | latitude: ${lat}`);
    var requestUrl_pre = "https://maps.googleapis.com/maps/api/geocode/json?address="
    var requestUrl_suf = "&key=key=AIzaSyBD-eQhzhZi0hh8NaHA_0g5CPgOVl9M82Q"
    this.http.get(requestUrl_pre + lat + "," + lng + requestUrl_suf).subscribe(locationInfo => {
      if (locationInfo['status'] == 'OK') {
        this.currentLocation = locationInfo['results'][0]['address_components'][1]['long_name']
        console.log(this.currentLocation)
      } else {
        this.currentLocation = 'Melbourne'
      }
      this.shareData.changeCurrentLocation(this.currentLocation);
    })
    //  await this.googleAPI.getCurrentLocation(lat, lng).subscribe(locationInfo =>{
    //     if(locationInfo['status']=='OK'){
    //       this.currentLocation = locationInfo['results'][0]['address_components'][1]['long_name']
    //     console.log(this.currentLocation)
    //     }else{
    //       this.currentLocation = 'Melbourne'
    //     }
    //     this.shareData.changeCurrentLocation(this.currentLocation);
    //   })
  }

  async onLogin(form: NgForm) {
    this.authService.setAuthError();
    const email = form.value.email;
    const password = form.value.password;
    console.log(email + '   **********');
    await this.authService.signinUser(email, password);
    this.signinError = this.authService.getAuthError();
    if (this.signinError == null) {
      console.log("loginSuccess");
      form.reset();
      this.userLogin = false;
      this.showLogoutButton = true;
      this.loginedUser = email;
      // this.emailStore = email;
      // this.onUploadTheEmail();
      this.databaseUserNode = this.loginedUser.split('.');
      this.welcomeUser = this.loginedUser.split('@');
      this.currentUser = this.welcomeUser[0];
      this.loginedUser = this.databaseUserNode[0];
      this.shareData.changeUser(this.loginedUser);
    } else {
      console.log("login error")
      alert(this.signinError.message)
      form.reset();
    }
  }

  async onRegister(form: NgForm) {
    this.serverService.getEmailServers()
      .subscribe(
        (servers: any[]) => this.emailServers = servers,
        (error) => console.log(error)
      )
    this.authService.setAuthError();
    const email = form.value.email;
    const password = form.value.password;
    console.log(email + " *******")
    await this.authService.signupUser(email, password);
    this.signupError = this.authService.getAuthError();
    if (this.signupError == null) {
      this.emailStore = email;
      this.onUploadTheEmail();
      console.log("submiteedddappcomponent");
    } else {
      console.log("sign up error!")
      alert(this.signupError.message)
    }
    this.user = firebase.auth().currentUser;

    this.user.sendEmailVerification().then(function () {
      alert("Email sent");
    }).catch(function (error) {
      alert("Errors");// An error happened.
    });
    this.welcomeUser = email.split('.');
    this.databaseUserNode = this.welcomeUser[0];
    this.serverService.getUser(this.databaseUserNode);
    this.servers.push({ date: '', risk: '', condition: '', humidity: '', pressure: '', temperature: '', windDirection: '', windSpeed: '', location: '' });
    this.serverService.storeServers(this.servers)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

  ondatabaseUserNodeOutSuccess(currentWeatherData) {
    console.log("triggered by dashboard button click." + currentWeatherData.condition.text);
  }

  onUploadTheEmail() {
    console.log(this.emailServers);
    console.log(this.emailStore);
    this.emailServers.push(this.emailStore);
    this.serverService.storeEmailServers(this.emailServers)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );


  }

  async onLogout() {
    this.userLogin = true;
    this.showLogoutButton = false;
    await this.authService.logout();
    console.log("LogoutSuccessful");
    this.loginedUser = "";
    this.currentUser = "";
    this.databaseUserNode = [];
    this.welcomeUser = [];
    this.emailStore = [];
    this.emailServers = [];
    this.router.navigate(['/']);
  }
}
