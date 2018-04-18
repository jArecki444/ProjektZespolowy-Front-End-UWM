import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { tokenNotExpired, JwtHelper} from 'angular2-jwt';

@Injectable()
export class AuthService {
    baseUrl = 'https://coderscompanyapiv3.azurewebsites.net/api';
    userToken: any;
    decodedToken: any;
    jwtHelper: JwtHelper = new JwtHelper();

constructor(private http: Http) { }

login(model: any) {
    const headers = new Headers({'Content-type': 'application/json'});
    const options = new RequestOptions({headers: headers});

    return this.http.post(this.baseUrl + '/AuthAdmin/loginUser', model, options).map((response: Response) => {
        const user = response.json();
        console.log(user);
        if (user) {
            localStorage.setItem('token', user.tokenString);
            this.decodedToken = this.jwtHelper.decodeToken(user.tokenString);
             console.log(this.decodedToken);
            this.userToken = user.tokenString;
        }
    });
    }
    loggedIn() {
        return tokenNotExpired('token');
    }
    register(model: any) {
        return this.http.post(this.baseUrl + '/AuthAdmin/registerUser', model, this.requestOptions());
     }

     SendMessagePassword(model: any) {
        return this.http.post(this.baseUrl + '/AuthAdmin/ForgotPassword', model, this.requestOptions());
     }

     private requestOptions() {
        const headers = new Headers({ 'Content-type': 'application/json'});
        return new RequestOptions({headers: headers});
     }
}
