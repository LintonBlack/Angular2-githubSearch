import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class GithubService{
	private username:string;
	private client_id = '4712c1cf66318eb9d216';
	private client_secret = 'a3bca188abeb26bcbc1fd8154a59e146e3d4226a';

	constructor(private _Http: Http) {
		console.log('Github Service Ready...');
		this.username = false
	}

	getUser() {
		return this._Http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
		.map(res => res.json());
	}

	getRepos() {
		return this._Http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
		.map(res => res.json());
	}

	updateUser(username:string) {
		this.username = username;
	}
}