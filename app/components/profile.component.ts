import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  moduleId: module.id,
  selector: 'profile',
  templateUrl: 'profile.component.html',
})
export class ProfileComponent  {
	user:any;
	repos:any[];
	username: string;

	constructor(private _githubservice: GithubService) {
		this.user = false;
		}
		searchUser() {
			this._githubservice.updateUser(this.username);

			this._githubservice.getUser().subscribe(user => {
			this.user= user;
		});

		this._githubservice.getRepos().subscribe(repos => {
			console.log(repos)
			this.repos= repos;
		})
		}
	
}