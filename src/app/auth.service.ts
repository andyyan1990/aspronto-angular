import { async } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  token: string;
  authError;

  constructor() { }

  async signupUser(email: string, password: string) {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => {
          console.log(error)
          this.authError = error
          console.log(this.authError)
        }
      )
      var user = firebase.auth().currentUser;

      user.sendEmailVerification().then(function() {
        // Email sent.
      }).catch(function(error) {
        // An error happened.
      });
  }


  async signinUser(email: string, password: string) {
    await firebase.auth().signInWithEmailAndPassword(email, password)
      // .then(
      //   response => {
      //     firebase.auth().currentUser.getToken()
      //     .then(
      //       (token: string) => this.token = token
      //     )
      //   }
      // )
      .catch(
        error => {
          console.log(error)
          this.authError = error
          console.log(this.authError)
        }
        
      )
  }

  // getToken(){
  //   firebase.auth().currentUser.getToken()
  //   .then(
  //     (token: string) => this.token = token
  //   );
  //   return this.token;
  // }
  async logout() {
    await firebase.auth().signOut().catch(
      error => {
        console.log(error)
      }
    );
  }

  getAuthError() {
    return this.authError;
  }

  setAuthError(){
    this.authError = null;
  }

  isLoggedIn() { 
    if(firebase.auth().currentUser == null){
      return false;
    }
    return true;
  }

}
