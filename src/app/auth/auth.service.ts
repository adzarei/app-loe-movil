import { Injectable } from '@angular/core';
import {HttpRequest} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  cachedRequests: Array<HttpRequest<any>> = [];

  constructor() { }

  public getToken(): string {
    return localStorage.getItem('authtoken');
  }

  public isAuthenticated(): boolean {
    return !this.getToken();
  }

}
