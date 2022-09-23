import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpSevice/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpservice: HttpService) { }

  registration(data: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    }
    console.log("Data in User services : ", data);

    return this.httpservice.postService('users', data, false, header)
  }

  login(data: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    }
    console.log("Data in User services : ", data);

    return this.httpservice.postService('users/login', data, false, header);
  }

  forgot(data: any){
    let header ={
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    }
    console.log("Data in User services: ", data);

    return this.httpservice.postService('users/forgotpassword', data, false, header);
  }
}