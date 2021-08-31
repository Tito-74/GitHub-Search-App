
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileDataService {
  username!:string;
 
  


  constructor(private http:HttpClient ) { 
    console.log("service is ready");
    // this.username = 'Tito-74';
  }
  getProfile(username:any){
    return this.http.get("https://api.github.com/users/"+ username +"?access_token=" + environment.tokenKey)
    .pipe(((response: any) => response));
  }
  getRepo(username:any){
    return this.http.get("https://api.github.com/users/"+ username + "/repos?access_token=" + environment.tokenKey)
    .pipe(((response: any) => response));
  }
  getRepositories(repoName:any){
    return this.http.get("https://api.github.com/search/repositories?q="+ repoName + "&?access_token=" + environment.tokenKey)
    .pipe(((response: any) => response));

    // https://api.github.com/search/repositories?q=<name>&?access_token=<token>
  }
 

}
