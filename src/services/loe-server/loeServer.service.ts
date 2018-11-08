import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoeServerService {

  LOGIN_URL = 'http://localhost:8080/auth/users/login';

  // TODO: change for token test entry point.
  LIBROS_URL = 'http://localhost:8080/api/v1/libros';

  libros;

  constructor(private http: HttpClient) {}

  getLibros = function() {

    let promise = new Promise( (resolve, reject) => {

      this.http.get(this.LIBROS_URL)
        .toPromise()
        .then( response => {
          this.libros = response;
          resolve();
        })
    });

    return promise;
  };


  loginRequest = function(user, pass) {

    let body = new URLSearchParams();
    body.set('username', user);
    body.set('password', pass);

    let promise = new Promise( (resolve, reject) =>
    {
      this.http.post(this.LOGIN_URL, body.toString())
        .toPromise()
        .then(response => {
            if (response) {
              localStorage.setItem('authtoken', response.uuid);
              resolve();
            }
          }
        );
    });
    return promise;
  }

}
