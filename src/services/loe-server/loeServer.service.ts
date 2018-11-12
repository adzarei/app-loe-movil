import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoeServerService {

  LOGIN_URL = 'http://localhost:8080/auth/users/login';
  LIBROS_URL = 'http://localhost:8080/api/v1/libros';
  AGENTES_URL = 'http://localhost:8080/api/v1/agentes';
  ACTAS_URL = "http://localhost:8080/api/v1/actas";
  ORDENES_URL = "http://localhost:8080/api/v1/ordenes";

  libros;
  agentes;
  actas;
  nextNumHoja;

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

  getAgentesByLibroId = function(id){

    let promise = new Promise( (resolve, reject) => {

      this.http.get(this.AGENTES_URL+'?libroid='+id)
        .toPromise()
        .then( response => {
          this.agentes = response;
          resolve();
        })
    });

    return promise;
  }

  getActasByLibroId = function( id ) {

    let promise = new Promise( (resolve, reject) =>
    {
      this.http.get(this.ACTAS_URL+'?libroid='+id)
        .toPromise()
        .then(response => {
            if (response) {
              this.actas = response;
              resolve();
            }
          }
        );
    });
    return promise;

  }

  getOrdenesByOrdenId = function( id ) {

    let promise = new Promise( (resolve, reject) =>
    {
      this.http.get(this.ORDENES_URL+'?actaid='+id)
        .toPromise()
        .then(response => {
            if (response) {
              this.ordenes = response;
              resolve();
            }
          }
        );
    });
    return promise;
  }

  getNextNumHoja(libroId){
    let promise = new Promise( (resolve, reject) =>
    {
      this.http.get(this.ACTAS_URL+'/next-numHoja?libroid='+libroId)
        .toPromise()
        .then(response => {
            if (response) {
              this.nextNumHoja = response;
              resolve();
            }
          }
        );
    });
    return promise;
  }

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
