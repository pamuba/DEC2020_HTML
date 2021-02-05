import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = <any>{};
  constructor(private _auth:AuthService) { }

  ngOnInit(): void {
  }

  loginUser(){
    // console.log(this.loginUserData)
    this._auth.loginUser(this.loginUserData)
              .subscribe(
                res => console.log(res),
                err => console.log(err)
              )
  }

}
