import { ShareDataService } from './share-data.service';
import { debounceTime } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { log } from 'util';
import { ServerService } from './server.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  //for testing purpose
  loginedUser: string;
  currentUser: string;
  test;
  test2;
  user;
  signupError;
  signinError;
  emailStore;
  servers = [];
  emailServers = [];
  userLogin = true;//hide login button after login
  showLogoutButton = false;//show logout button after login

  isHomeActive:boolean = true;
  isForecastActive:boolean = false;
  isEducationActive: boolean = false;
  isPollenActive: boolean = false;
  isJournalActive: boolean = false;


  constructor(private authService: AuthService, private serverService: ServerService, private shareData : ShareDataService) { }

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
      this.test = this.loginedUser.split('.');
      this.test2 = this.loginedUser.split('@');
      this.currentUser = this.test2[0];
      this.loginedUser = this.test[0];
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

    this.user.sendEmailVerification().then(function() {
      alert("Email sent");
    }).catch(function(error) {
      alert("Errors");// An error happened.
    });
    this.test2 = email.split('.');
    this.test = this.test2[0];
    this.serverService.getUser(this.test);
    this.servers.push({date: '', risk: '',condition:'', humidity: '', pressure: '', temperature: '', windDirection: '', windSpeed:'',location: ''});
    this.serverService.storeServers(this.servers)
    .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  onTestOutSuccess(currentWeatherData) {
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
    this.test = [];
    this.test2 = [];
    this.emailStore = [];
    this.emailServers = [];
  }

  changeHomeState(){
    this.isHomeActive = true;
    this.isEducationActive = false;
    this.isForecastActive = false;
    this.isJournalActive = false;
    this.isPollenActive = false;
  }

  changeForecastState(){
    this.isHomeActive = false;
    this.isEducationActive = false;
    this.isForecastActive = true;
    this.isJournalActive = false;
    this.isPollenActive = false;
  }

  changeEducationState(){
    this.isHomeActive = false;
    this.isEducationActive = true;
    this.isForecastActive = false;
    this.isJournalActive = false;
    this.isPollenActive = false;
  }

  changePollenState(){
    this.isHomeActive = false;
    this.isEducationActive = false;
    this.isForecastActive = false;
    this.isJournalActive = false;
    this.isPollenActive = true;
  }

  changeJournalState(){
    this.isHomeActive = false;
    this.isEducationActive = false;
    this.isForecastActive = false;
    this.isJournalActive = true;
    this.isPollenActive = false;
  }


}
