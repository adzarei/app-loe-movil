import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  getLoginUrl = 'http://localhost:8080/auth/users/login';

  // TODO: change for token test entry point.
  getLibros = 'http://localhost:8080/api/v1/libros/1';

  constructor(private http: HttpClient) {}


  trySavedTokenRequest = function() {

    this.http.post(this.getLibros, undefined, null).toPromise();
    return false;
  };


  loginRequest = function(user, pass) {

    let body = new URLSearchParams();
    body.set('username' , user );
    body.set('password' , pass );

    this.http.post(this.getLoginUrl, body.toString()).toPromise().then(function(response) {

      if (response) {
        localStorage.setItem('authtoken', response.uuid);
      }
    });
  };


}
