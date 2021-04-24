import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class LoginHttpService {
  serverDomain: string;

  constructor(private http: HttpClient) {
    this.serverDomain = 'http://localhost:3000';
  }

  userLogin(credentials: object): any {
    return this.http.post(`${this.serverDomain}/user/login`, credentials);
  }
}
