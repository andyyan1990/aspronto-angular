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
  signupError;
  emailStore;
  emailServers = [];
  userLogin = true;//hide login button after login
  showLogoutButton = false;//show logout button after login

  constructor(private authService: AuthService, private serverService: ServerService) { }

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
    this.serverService.getEmailServers()
      .subscribe(
        (servers: any[]) => this.emailServers = servers,
        (error) => console.log(error)
      )

  }

  async onLogin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    await this.authService.signinUser(email, password);
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
  }

  async onRegister(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    await this.authService.signupUser(email, password);
    this.signupError = this.authService.getSignupError();
    if (this.signupError == null) {
      this.emailStore = email;
      this.onUploadTheEmail();
      console.log("submiteedddappcomponent");
    } else {
      console.log("sign up error!")
    }
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



}
