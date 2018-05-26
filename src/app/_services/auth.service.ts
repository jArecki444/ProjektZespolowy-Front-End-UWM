import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {
    baseUrl = 'https://coderscompanyapi20180526043321aaa.azurewebsites.net/api';    // Link do API
    userToken: any;                                                                 // token użytkownika
    decodedToken: any;                                                           // rozszyfrowany token
    jwtHelper: JwtHelper = new JwtHelper();

constructor(private http: Http) { }

// logowanie
login(model: any) {
    const headers = new Headers({'Content-type': 'application/json'});
    const options = new RequestOptions({headers: headers});

    return this.http.post(this.baseUrl + 'Auth/loginUser', model, options).map((response: Response) => {
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

    // Wylogowanie
    loggedIn() {
        return tokenNotExpired('token');
    }

    // Rejestracja
    register(model: any) {
        return this.http.post(this.baseUrl + '/Auth/RegisterUser', model, this.requestOptions());
     }

     // Wysłanie hasła na e-mail w razie zapomnienia
     SendMessagePassword(model: any) {
        return this.http.post(this.baseUrl + '/Auth/ForgotPassword', model, this.requestOptions());
     }

   // Utworzenie nowego hasła po opcji zapomnij
     SendNewPassword(model: any) {
         console.log(model);
         return this.http.put(this.baseUrl + '/Auth/ChangeForgotPassword', model, this.requestOptions());
     }
     // Aktualizacja wspolrzednych sprawdzania lokalizacji obecnosci pracownikow - adminka
     updateGpsLocation(model: any) {
        console.log(model);
        return this.http.put(this.baseUrl + '/Position/SetPlacePosition', model, this.requestOptions());
    }

     private requestOptions() {
        const headers = new Headers({ 'Content-type': 'application/json'});
        return new RequestOptions({headers: headers});
     }
}
