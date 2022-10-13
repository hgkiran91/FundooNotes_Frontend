import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  isAuthenticated(){
    throw new Error('Method not implemented');
  }

  constructor() { }

  getToken(){
    return !!localStorage.getItem('Token')
  }
}
