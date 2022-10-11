import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl = environment.baseurl;

  constructor(private httpClient: HttpClient) { }

  postService(url: string, data: any, token: boolean = false, httpOptions: any = {}) {
    return this.httpClient.post(this.baseUrl + url, data, token && httpOptions)
  }

  getService(url: string, token: boolean = false, httpOptions: any = {}) {
    return this.httpClient.get(this.baseUrl + url, token && httpOptions)
  }

  putService(url: string, data: any, token: boolean = false, httpOptions: any = {}) {
    return this.httpClient.put(this.baseUrl + url, data, token && httpOptions)
  }

  deleteService(url: string, token: boolean = false, httpOptions: any = {}) {
    return this.httpClient.delete(this.baseUrl + url, token && httpOptions)
  }
}
