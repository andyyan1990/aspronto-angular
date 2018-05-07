import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { log } from 'util';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  //for testing purpose
  loginedUser:string;
  test;
  
  constructor(private authService: AuthService){}
  
  // ngOnInit;
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyDMuQLLa4mnZMhhaOVkb-2UA_gNZZtnqjk",
      authDomain: "aspronto-pal-baa14.firebaseapp.com",
      databaseURL: "https://aspronto-pal-baa14.firebaseio.com",
      projectId: "aspronto-pal-baa14",
      storageBucket: "aspronto-pal-baa14.appspot.com",
      messagingSenderId: "189065569345"
    });
  }
  
  onLogin(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signinUser(email,password);
    console.log("loginSuccess");
    this.loginedUser = email;
    this.test = this.loginedUser.split('@');
    this.loginedUser = this.test[0];
    }

  onRegister(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signupUser(email,password);
    console.log("submiteedddappcomponent");
  }

  onTestOutSuccess(currentWeatherData){
    console.log("triggered by dashboard button click." + currentWeatherData.condition.text);
  }

}
