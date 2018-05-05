import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ShareDataService {

  defaultObject : Object;

  private messageSource = new BehaviorSubject(this.defaultObject);

  currentMessage = this.messageSource.asObservable();


  constructor() { }

  changeMessage(newObject:Object){
    this.messageSource.next(newObject);
  }

}
