import { Component, OnInit } from '@angular/core';
import {ProfileDataService} from '../../services/profile-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
user:any
username:any;
repos:any;
  constructor(private profiledataservice:ProfileDataService, private router:Router) { 
    
   
  }
  getUser(){
    this.profiledataservice.getProfile(this.username).subscribe(profile=>{
      console.log(profile);
      return this.user = profile;
      
    }
    // ,
    // (error)=>{
    //   alert("please write the correct username")
    // }
    );
  }
  getRepository(){
    this.profiledataservice.getRepo(this.username).subscribe(data=>{
      console.log(data)
      return this.repos = data;
    });
  }
  // goToUrl(username:any){
  //   this.router.navigate(['/profile',username])
  // }

  ngOnInit(): void {
    this.username = "Tito-74"
    this. getUser()
  }

}
