import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class DashboardService {

  constructor(private http: HttpClient) {   }

  loginprocess(params: object) {
    return this.http.post(``, params);
  }
}
