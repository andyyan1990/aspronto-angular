import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ShareDataService {

  defaultObject : Object;
  loginedUserObject : Object;
  currentLocationObject: Object;

  private messageSource = new BehaviorSubject(this.defaultObject);
  private loginedUserSource = new BehaviorSubject(this.loginedUserObject);
  private currentLocationSource = new BehaviorSubject(this.currentLocationObject);

  currentMessage = this.messageSource.asObservable();
  loginedUserMessage = this.loginedUserSource.asObservable();
  currentLocationMessage = this.currentLocationSource.asObservable();


  constructor() { }

  changeMessage(newObject:Object){
    this.messageSource.next(newObject);
  }

  changeUser(newUser:Object){
    this.loginedUserSource.next(newUser);
  }

  changeCurrentLocation(newLocation: Object){
    this.currentLocationSource.next(newLocation);
  }

}
