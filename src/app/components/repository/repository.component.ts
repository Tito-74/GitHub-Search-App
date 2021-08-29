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
user:any
repos:any;
username:any;
repo:any;

  constructor(private profiledataservice:ProfileDataService) { 
    // this.repos= new Repos("")
    // this.profiledataservice.getRepo().subscribe(data=>{
    //   console.log(data)
      // let name = data.projectName;
      // this.repos = name;
    // });
  }
  getRepository(username:any){
    this.profiledataservice.getRepo(this.username).subscribe(data=>{
      console.log(data)
      return this.repos = data;
    });
  }

  ngOnInit(): void {
  }

}
