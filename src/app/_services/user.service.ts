import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, RequestOptions, Headers } from '@angular/http';
import { User } from '../_models/user';
import { Observable } from 'rxjs/Observable';
import { RemoteUser } from '../_models/remoteUser';

@Injectable()
export class UserService {
  baseUrl = environment.apiUrl;
  constructor(private http: Http) {}

  // Pobranie listy obecnośći użytkownikow
  getUsers(): Observable<User> {
    return this.http
      .get(this.baseUrl + '/User/UserList', this.jwt())
      .map(response => <User>response.json().userList);
  }

  // Pobranie listy użytkownikow pracujących zdalnie
  getRemoteUsers(): Observable<RemoteUser> {
    return this.http
      .get(this.baseUrl + '/User/UserGetListOfRemoteWork', this.jwt())
      .map(response => <RemoteUser>response.json().userList);
  }
    // Pobranie listy niebecnosci dla danego usera
    getAbsenceForUser(): Observable<RemoteUser> {
      return this.http
        .get(this.baseUrl + '/User/GetUserAbsenceForUser', this.jwt())
        .map(response => <RemoteUser>response.json().userList);
    }
     // Pobranie kompletnej listy niebecnosci dla administratora
      getAbsenceForAdmin(): Observable<RemoteUser> {
        return this.http
          .get(this.baseUrl + '/User/GetUserAbsenceForAdmin', this.jwt())
          .map(response => <RemoteUser>response.json().userList);
      }

  private jwt() {
    const token = localStorage.getItem('token');
    if (token) {
      const headers = new Headers({ Authorization: 'Bearer ' + token });
      headers.append('Content-type', 'application/json');
      return new RequestOptions({ headers: headers });
    }
  }
}
