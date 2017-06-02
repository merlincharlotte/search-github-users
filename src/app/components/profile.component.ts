import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  moduleId: module.id,
  selector: 'profile',
  templateUrl: `profile.component.html`,
})
export class ProfileComponent  {
	user:any;
	repos:any;
	username:string;
	constructor(private githubService:GithubService) {
	
	}
	clicked() {
		console.log(this.username);
		this.githubService.getUserRepo(this.username).subscribe(res=>{
		       console.log('repos');
			   console.log(res);
			   if(res.length > 0) {
			   	   this.repos=res;
			   } else {
			   	   this.repos = false;
			   }
			});

			this.githubService.getUserInfo(this.username).subscribe(res => {
				// console.log(res);
				this.user = res;
			});
	}

}
