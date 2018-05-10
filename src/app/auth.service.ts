import { async } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  token: string;
  signupError;

  constructor() { }

  async signupUser(email: string, password: string) {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => {
          console.log(error)
          this.signupError = error
          console.log(this.signupError)
        }
      )
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
        error => console.log(error)
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
    await firebase.auth().signOut();
  }

  getSignupError() {
    return this.signupError;
  }

}
