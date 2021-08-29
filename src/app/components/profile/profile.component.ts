import { Component, OnInit } from '@angular/core';
import {ProfileDataService} from '../../services/profile-data.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
// profile:any[]=[];
user:any
username:any;
repos:any;
  constructor(private profiledataservice:ProfileDataService) { 
    
   
  }
  getUser(){
    this.profiledataservice.getProfile(this.username).subscribe(profile=>{
      console.log(profile);
      return this.user = profile;
      
    });
  }
  getRepository(){
    this.profiledataservice.getRepo(this.username).subscribe(data=>{
      console.log(data)
      return this.repos = data;
    });
  }

  ngOnInit(): void {
  }

}
