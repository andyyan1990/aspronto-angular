import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Response } from '@angular/http';
import { AuthService } from './auth.service';
@Injectable()
export class ServerService {

  constructor(private http: HttpClient, private authService: AuthService) { }
  a = ".json";
  name = "test" + this.a;
  link = "https://aspronto-pal-baa14.firebaseio.com/"+ this.name;
  
  storeServers(servers: any[]){
    console.log(this.name);
    return this.http.put(this.link,servers);
  }
  getServers(){
    // const token = this.authService.getToken();
      
    // return this.http.get('https://aspronto-pal-baa14.firebaseio.com/data.json?auth=' + token)
    return this.http.get('https://aspronto-pal-baa14.firebaseio.com/test.json');
  }
  
}
