import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router }  from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost:3000/api/register"
  private _loginUrl = "http://localhost:3000/api/login"

  constructor(private http: HttpClient, private router:Router) { }

  registerUser(user){
    return this.http.post<any>(this._registerUrl, user);
  }
  loginUser(user){
    return this.http.post<any>(this._loginUrl, user);
  }
  loggedIn(){
    return !!localStorage.getItem('token')
  }

  logoutUser(){
    localStorage.removeItem('token');
    this.router.navigate(['/events']);
  }

  getToken(){
    return localStorage.getItem('token')
  }
}
