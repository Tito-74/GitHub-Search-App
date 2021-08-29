// import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileDataService {
  username!:string;
  // repos:string;
  // environ:environment;
  


  constructor(private http:HttpClient ) { 
    console.log("service is ready");
    this.username = 'Tito-74';
    // this.repos ='Gif-App'
  }
  getProfile(username:any){
    return this.http.get("https://api.github.com/users/"+ username +"?access_token=" + environment.tokenKey)
    .pipe(((response: any) => response));
  }
  getRepo(username:any){
    return this.http.get("https://api.github.com/users/"+ username + "/repos?access_token=" + environment.tokenKey)
    .pipe(((response: any) => response));
  }
 

}
