import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ShareDataService {

  defaultObject : Object;
  loginedUserObject : Object;

  private messageSource = new BehaviorSubject(this.defaultObject);
  private loginedUserSource = new BehaviorSubject(this.loginedUserObject);

  currentMessage = this.messageSource.asObservable();
  loginedUserMessage = this.loginedUserSource.asObservable();


  constructor() { }

  changeMessage(newObject:Object){
    this.messageSource.next(newObject);
  }

  changeUser(newUser:Object){
    this.loginedUserSource.next(newUser);
  }

}
