import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GithubService {
	client_id:string;
	client_secret:string;

	constructor(private http:Http) {		
		this.client_id = "<<client_id>>";
		this.client_secret = "<<client_secret>>";
	}

	getUserInfo(username:string) {
		console.log("https://api.github.com/users/"+username+"?client_id="+this.client_id+"&client_secret="+this.client_secret);

		return this.http.get("https://api.github.com/users/"+username+"?client_id="+this.client_id+"&client_secret="+this.client_secret).map(res => res.json());
	}
	getUserRepo(username:string){
		console.log("https://api.github.com/users/"+username+"/repos?client_id="+this.client_id+"&client_secret="+this.client_secret);

		return this.http.get("https://api.github.com/users/"+username+"/repos?client_id="+this.client_id+"&client_secret="+this.client_secret).map(res=>res.json());
	}
} 