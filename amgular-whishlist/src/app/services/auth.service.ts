import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(user: string, password: string): boolean{
    if(user === 'user' && password === 'password'){
      // localStorage nos permite guardar valores en el navegador
      localStorage.setItem('username', user);
      return true;
    }
    return false;
  }
  logout():any{
    localStorage.removeItem('username');
  }
  getUser():any{
    return localStorage.getItem('username');
  }
  isLoggedIn():boolean{
    return this.getUser() !== null;
  }
}
