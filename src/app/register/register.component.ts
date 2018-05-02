import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as firebase from 'firebase';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() {}

  ngOnInit() {console.log("jiaing its herer2");
  }
  nRegister(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.signupUser(email,password);
    console.log("submiteSuccessJialin");
  }
   signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(
        error => console.log(error)
    )
}

}
