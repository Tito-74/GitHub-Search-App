import{Component, OnInit } from '@angular/core';
import {ProfileDataService} from '../../services/profile-data.service';
import { Repos } from '../../classes/repos';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
// repos:Repos []=[];

repositories:any [] = [];
username:any
userReository:any;

  constructor(private profiledataservice:ProfileDataService) { 
   
  }
  getReposito(username:any){
    this.profiledataservice.getRepositories(this.username).subscribe((data:any)=>{
      console.log(data.items)
      return this.repositories = data.items;
    });
  }

  ngOnInit(): void {
  }

}
