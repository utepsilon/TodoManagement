import { CompileShallowModuleMetadata, SelectorContext } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthService } from '../service/hardcoded-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";

  login_fun() {

    // console.log(this.username)
    // console.log(this.password)
    // if (this.username=="utkarsh" && this.password=="123456")
    if (this.Auth.Authenticate(this.username, this.password)) {
      this.router.navigate(['welcome', this.username]);
    }
    else {
      alert("invalid user id or password");
    }
  }

  constructor(private router: Router, private Auth: HardcodedAuthService) { }

  ngOnInit() {
  }

}
