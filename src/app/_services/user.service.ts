import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, RequestOptions, Headers } from '@angular/http';
import { User } from '../_models/user';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  baseUrl = environment.apiUrl;
  constructor(private http: Http) {}

  // Pobranie listy użytkownikow
  getUsers(): Observable<User[]> {
    return this.http
      .get(this.baseUrl + '/User/UserList', this.jwt())
      .map(response => <User[]>response.json());
  }
  private jwt() {
    let token = localStorage.getItem('token');
    if (token) {
      let headers = new Headers({ Authorization: 'Bearer ' + token });
      headers.append('Content-type', 'application/json');
      return new RequestOptions({ headers: headers });
    }
  }
}
