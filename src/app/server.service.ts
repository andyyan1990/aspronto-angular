import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { Response } from '@angular/http';
import { AuthService } from './auth.service';
@Injectable()
export class ServerService implements OnInit{

  constructor(private http: HttpClient, private authService: AuthService) { }
  a = ".json";
  // name = this.test + this.a;
  name;
  test;
  // link = "https://aspronto-pal-baa14.firebaseio.com/"+ this.name;
  link;

  ngOnInit(){
    
  }
  getUser(userName:any){
    this.test = userName;
    // console.log(this.test);
    this.name = this.test + this.a;
    this.link = "https://aspronto-pal-baa14.firebaseio.com/"+ this.name;
    // console.log(this.link);
    return this.test;
  }

  storeServers(servers: any[]){
    return this.http.put(this.link,servers);
  }
  getServers(){
    // const token = this.authService.getToken();
      
    // return this.http.get('https://aspronto-pal-baa14.firebaseio.com/data.json?auth=' + token)
    return this.http.get(this.link);
  }
  
}
